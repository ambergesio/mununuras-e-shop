import React from 'react';
import { Link } from "react-router-dom";
import ItemsCompradosList from "./ItemsCompradosList";
import DatosComprador from "./DatosComprador";
import { deleteOrder } from "../services/apiResources";
import config from '../congif';

const Ticket = ({consulta, modal, setModal, idCompra, idDeLaCompra, itemsComprados, precioTotal, preferencia, payer, nombre, apellido, email, area, telefono, calle, numero, cp, documento}) => {
        
    const data = {};
    data.preferencia = preferencia;
    data.payer = payer;

    const borrarOrdenCreada = () => {
        deleteOrder(idDeLaCompra)
        .then(()=>{
            sessionStorage.removeItem("idDeLaCompraRealizada");
        })
        .catch((e) => console.log(e))
    }

    // const checkout = () => {
    //     fetch(`${config.bepath}/checkout`, {
    //         method: 'POST',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify(data),
    //         redirect: 'follow',
    //         mode: 'cors',
    //     })
    //     .then((res) => {
    //         console.log(res);
    //     })
    // }

    return (<>
        { idDeLaCompra === undefined
        ?
        <>
            <div className="fondo_check">
                <div className="formulario_container">
                    <h3>No se encontró la órden.</h3>
                    <div className="padmin">
                        <button className="volver_a" onClick={ () => setModal(!modal)}>volver</button>
                    </div>
                </div>
            </div>
        </>
        :
        <div className="fondo_check fadeIn">
            <div className="formulario_container">
                { consulta
                ? <h3 className="resumen_compra">Datos de la orden de compra</h3>
                : <h3 className="resumen_compra">Orden de compra generada exitosamente.</h3> }
                <div className="terminada">
                    <div className="grupo">
                        <div className="terminada">
                            { consulta ? 
                            <p>Pago acreditado.</p>
                            : null }
                        </div>
                        <div className="terminada">
                            Código ID de la compra: <span>{idDeLaCompra}</span>
                        </div>
                    </div>
                    <div className="grupo">
                        <div className="desglose">
                            { consulta ?
                            <p>Compraste:</p>
                            : <p>Estás comprando:</p> }
                            { itemsComprados.map( (item) => <ItemsCompradosList key={item.nombre} item={item} /> )}
                        </div>
                    </div>
                    <div className="grupo">
                        <div className="terminada">
                            { consulta ?
                            <p>Pagaste:</p>
                            : <p>Pagás:</p> }
                            <span>${precioTotal}</span>
                        </div>
                    </div>
                    { consulta
                    ? null
                    : <div className="grupo">
                        <div className="terminada">
                            <p>Tus datos:</p>{ <DatosComprador nombre={nombre} apellido={apellido} email={email} area={area} telefono={telefono} calle={calle} numero={numero} cp={cp} documento={documento} />}
                        </div>
                        <form action={`${config.bepath}/mp/checkout`} method="post">
                            <input type="hidden" name="preferencia" value={JSON.stringify(preferencia)} />
                            <input type="hidden" name="payer" value={JSON.stringify(payer)} />
                            <button type="submit" className="checkout" >Terminar la compra</button>
                        </form>
                    </div> }
                </div>
                { consulta
                ? <div><button className="volver_a" onClick={modal }>volver a consultar</button></div>
                : <div><button className="volver_a" onClick={borrarOrdenCreada}><Link to={`/`}>volver a la tienda</Link></button></div> }
            </div>
        </div>
        }
        </>)
    }

export default Ticket;