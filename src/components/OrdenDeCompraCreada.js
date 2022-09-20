import CartContext from "../context/CartContext";
import React, { useState, useContext, useEffect } from 'react';
import loader from "../imagenes/bear_loader.svg";
import Ticket from "./Ticket";
import { checkOrderById } from "../services/apiResources";

const CompraTerminada = () => {
    const {idCompra, preferencia, payer, nombre, apellido, email, area, telefono, calle, numero, cp, documento} = useContext(CartContext);
    const [idDeLaCompra, setIdDeLaCompra] = useState();
    const [itemsComprados, setItemsComprados] = useState([]);
    const [datosComprador, setDatosComprador] = useState({});
    const [precioTotal, setPrecioTotal] = useState();
    const [loading, setLoading] = useState();
    const [consulta, setConsulta] = useState(false);

        useEffect( () => {
            setLoading(true);
            checkOrderById(idCompra)
            .then((compra) => compra.json())
            .then( (compra) => { 
                const datosDeLaCompra = compra;
                const precioDeLaCompra = datosDeLaCompra.total;
                setItemsComprados([...datosDeLaCompra.items]);
                setDatosComprador({...datosDeLaCompra.comprador});
                setPrecioTotal(precioDeLaCompra);
                setIdDeLaCompra(compra._id);
                setConsulta(false);
            })
                .catch((error) => {return error ;})
                .finally( ()=>{
                    setLoading(false);
                })
        },[idCompra]);

        return (
            <>
            { loading
            ? <section><img src={loader} alt="" /></section>
            : <Ticket
            consulta={consulta}
            idCompra={idCompra}
            idDeLaCompra={idDeLaCompra}
            itemsComprados={itemsComprados}
            precioTotal={precioTotal}
            datosComprador={datosComprador}
            preferencia={preferencia}
            nombre={nombre} apellido={apellido}
            email={email} area={area}
            telefono={telefono} calle={calle}
            numero={numero} cp={cp}
            documento={documento} 
            payer={payer} /> }
            </>
        );
}

export default CompraTerminada;