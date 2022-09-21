import React, { useState, useEffect, useContext } from 'react';
import io from 'socket.io-client';
import config from '../../config';
import ConnectedChat from './ConnectedChat';
import CartContext from '../../context/CartContext';
import { LogInUser } from '../../services/apiResources';


import chat from '../../imagenes/chat.svg';
import styles from './styles.module.scss';


const Chat = () => {

    const { openCloseChat, setOpenCloseChat, logedIn, setLogedIn, setUser, setToken, socket, setSocket, chatAlarm, setChatAlarm, chatCounter, setChatCounter } = useContext(CartContext);
    const [ error, setError ] = useState('');


    useEffect(() => {
        const newSocket = io(config.beppath, {
            transports: ['websocket'],
            upgrade: false,
        });
        setSocket(newSocket);
        return () => newSocket.close();
    }, [setSocket]);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        LogInUser({ email, password })
        .then(res => res.json())
        .then(res => {
            if (!res.error) {
                setUser(res.data.user);
                setToken(res.data.token);
                setLogedIn(true);
            }
            setError(res.message);
        })
        .catch((err) => {
            setError(`${err}`);
        })
    }


    return (<>
        <div className={chatAlarm ? styles.chat_icon_alarm : styles.chat_icon} onClick={ () => {setOpenCloseChat(!openCloseChat);if(chatAlarm){setChatAlarm(false)};if(chatAlarm){setChatCounter(0)}}}>
            <div className={chatCounter > 0 ? styles.chatCounter : ''}>
                {chatCounter > 0 ? chatCounter : ''}
            </div>
            <img src={chat} alt="chat with us" />
        </div>

        <div className={!openCloseChat ? styles.chat : styles.open_chat}>
        { logedIn ?
            <>
                {
                    socket ?
                    <ConnectedChat socket={socket} setOpenCloseChat={setOpenCloseChat} />
                    :
                    <div>No se pudo establecer conexión con el chat</div>
                }
            </>
            :
            <>
                <div  className={styles.chat_title}>
                    Ingresa al chat con tu cuenta de mununuras
                </div>
                <form className={styles.login} onSubmit={handleSubmit}>
                    <input className={styles.inp_field_login} name="email" type="text" placeholder="email"/>
                    <input className={styles.inp_field_login} name="password" type="password" placeholder="contraseña"/>
                    <button className={styles.submit_login} type="submit">
                        iniciar sesión
                    </button>
                </form>
                <div className={styles.feedback}>
                    {error}
                </div>
            </>
        }
        </div>
    </>);
}

export default Chat;
