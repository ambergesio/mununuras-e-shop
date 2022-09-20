import React from 'react';
import Item from "./Item";

const ItemList = ({productos}) => {
    return (
        <>
        <section>
            {
            productos.map( ( {_id, id, prod_id, category, title, name, description, unit_price, quantity, picture_url, altimg, stock} ) => 
            <Item key={_id} _id={_id} id={id} prod_id={prod_id} category={category} title={title} name={name} description={description} unit_price={unit_price} quantity={quantity} picture_url={picture_url} altimg={altimg} stock={stock} />)
            }
        </section>
    </>
    );
};

export default ItemList;
