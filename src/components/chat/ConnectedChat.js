import React, { useContext } from 'react';

import CartContext from '../../context/CartContext';
import Messages from './Messages';
import NewMessage from './NewMessage';

import styles from './styles.module.scss';


const ConnectedChat = () => {
    
    const {user, socket } = useContext(CartContext);
    console.log(socket);
    return (
        <>
            <div className={styles.title}>Conectado como <span>{user.email}</span></div>
            <Messages socket={socket} />
            <NewMessage socket={socket} />
        </>
    );
}

export default ConnectedChat;
