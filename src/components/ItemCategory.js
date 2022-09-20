import React from 'react';
import { Link } from 'react-router-dom';

const ItemCategory = ({item}) => {
    return (
    <Link to={`/categoria/${item}`}> {item} - </Link>
    )
}
export default ItemCategory;