import React, { useState, useContext } from 'react';
import CartContext from '../../context/CartContext';
import styles from './messages.module.scss';

const NewMessage = ({ socket }) => {

    const { user } = useContext(CartContext);

    const [ message, setMessage] = useState('');

    const sendNewChat = (e) => {
        e.preventDefault();
        if (message !== "" && message !== 'null' && message !== 'undefined') {
            let date = new Date();
            let fecha = date.toISOString().replace('-', '/').split('T')[0].replace('-', '/') + ' - ' + date.toLocaleTimeString('en-US');
            const author = {
                id: user.email,
                nombre: user.firstName,
                avatar: user.avatar
            }
            const nuevoMensaje = {
                author,
                mensaje: {
                    texto: message,
                    fecha: fecha
                }
            };
            socket.emit('nuevoMensaje', nuevoMensaje);
            socket.emit('mensajesEmitidos');
            setMessage('')
        }
    }

    return (
        <div className={styles.sendMessage}>
            <form className={styles.sendMessage} onSubmit={sendNewChat}>
                <input className={styles.inp_field_chat} placeholder='escribe un mensaje' value={message} type='text' name='message' onChange={(e) => setMessage(e.target.value)}/>
                <button className={styles.enviar} type='submit'>enviar</button>
            </form>
        </div>
    );
}

export default NewMessage;
