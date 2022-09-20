import React from 'react';

const itemList = ({item}) => {
    const subtotal = item.quantity * item.unit_price;
    return (
        <div className="desglose">
            <div className="resumen"><div><img className="img_detalle_desglose" src={item.picture_url} alt="" /></div><div><span>{item.title}</span>. Cantidad: <span>{item.quantity}</span>. Precio unitario: <span>${item.unit_price}</span>. Subtotal: <span>{subtotal}</span>.</div></div>
        </div>
    )
}

export default itemList;