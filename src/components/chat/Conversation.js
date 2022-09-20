import React , { useContext }from 'react';
import CartContext from '../../context/CartContext';

import styles from './messages.module.scss';

const Conversation = ({chat}) => {

    const {user} = useContext(CartContext);

    return (
        <div key={chat._id}>
            <div className={user.email === chat.author.id ? styles.userActive : styles.user}>
                <div className={user.email === chat.author.id ? styles.avatarautorfechaActive: styles.avatarautorfecha}>
                    <div className={styles.avatar}>
                        <img className={styles.avatarimg} src={chat.author.avatar} alt='' />
                    </div>
                    <div className={user.email === chat.author.id ? styles.autorfechaActive : styles.autorfecha}>
                        <div className={styles.autor}>
                            <p>{chat.author.id}</p>
                        </div> 
                        <div className={styles.fecha}>
                            <p>{chat.mensaje.fecha} dijo:</p>
                        </div>
                    </div>
                </div>
                <div className={user.email === chat.author.id ? styles.cont_msjActive : styles.cont_msj}>
                    <p className={styles.globotxt}>{chat.mensaje.texto}</p>
                </div>
            </div>
        </div>
    );
}

export default Conversation;
