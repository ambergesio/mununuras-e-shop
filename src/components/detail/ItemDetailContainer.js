import React , { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router";
import loader from "../../imagenes/bear_loader.svg";
import { getProductDetail } from "../../services/apiResources";

const ItemDetailContainer = () => {
    const [productosTiendaDetail, setProductosTiendaDetail] = useState([]);
    const params = useParams();
    const [loading, setLoading] = useState();        
    
    useEffect ( () => {
        setLoading(true);
        
        getProductDetail(params.id)
        .then((res) => res.json())
        .then((res) => {
            setProductosTiendaDetail(res.data);
        })
        .catch((e) => {
            console.log(e)
        })
        .finally(() => {
            setLoading(false);
        })
    }, [params.id]);

    return (
        <section>
            { loading ?
                <section><img src={loader} alt="" /></section>
                :
                <ItemDetail key={productosTiendaDetail.id} producto={productosTiendaDetail} />
            }
        </section>
    )
};

export default ItemDetailContainer;