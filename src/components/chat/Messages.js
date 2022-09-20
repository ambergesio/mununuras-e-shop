import React, { useEffect, useContext, useRef } from 'react';
import CartContext from '../../context/CartContext';
import Conversation from './Conversation';

import styles from './messages.module.scss';


const Messages = ({socket}) => {

    const {chats, setChats, setOpenCloseChat, openCloseChat,setChatAlarm, setChatCounter} = useContext(CartContext);
    const messagesRef = useRef(null);

 

    useEffect(() => {
        const addNewMessage = (message) => {
            setChats((prevState) => {
                const newMessages = [...prevState];
                newMessages.push(message);
                // setOpenCloseChat(false);
                if(openCloseChat===false){
                    setChatAlarm(true);
                    setChatCounter(prev => prev + 1);
                }
                return newMessages;
            });
        }
        socket.on('nuevoMensaje', addNewMessage);

        return () => {
            socket.off('nuevoMensaje')
        }
    }, [socket, setChats, setOpenCloseChat, openCloseChat, setChatAlarm, setChatCounter]);


    useEffect(() => {
        if(messagesRef) {
            messagesRef.current.scrollTop = messagesRef.current.scrollHeight
        }
    }, [chats])


    return (
        <div ref={messagesRef} className={styles.chat_content}>
            {
                chats.map( chat => ( <Conversation key={chat._id} chat={chat} /> ))
            }
        </div>
    )
}

export default Messages;
