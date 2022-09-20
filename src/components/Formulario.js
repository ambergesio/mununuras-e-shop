import CartContext from "../context/CartContext";
import React, { useContext, useEffect, useState } from 'react';
import ItemsCompradosList from "./ItemsCompradosList";
import { regexNombre, regexApellido, regexMail, regexArea, regexTelefono, regexCalle, regexPito, regexCodigoP, regexDNI } from './RegExps';
import { activateOrder } from "../services/apiResources";

const Formulario = ({checkout, resumen}) => {
    
    const { carrito, precioTotal, setIdCompra, cerrarCartel, setPreferencia,
        nombre, setNombre, apellido, setApellido, email, setEmail,
        area, setArea, telefono, setTelefono, calle, setCalle, pito, setPito,
        cp, setCp, documento, setDocumento, setPayer
    } = useContext(CartContext);
    
    const datosComprador = {
        name : nombre,
        surname : apellido,
        email : email,
        phone : {
            area_code : area,
            number : parseInt(telefono)
        },
        address : {
            street_name : calle,
            street_number : parseInt(pito),
            zip_code : cp
        },
        identification : {
            number : documento,
            type : 'DNI'
        }
    }

    const [creandoOrden, setCreandoOrden] = useState(false);
    const [emailValidado, setEmailValidado] = useState();

    const activarOrden = () =>{
        setCreandoOrden(!creandoOrden);
    }

    const [nombreOk, setNombreOk] = useState(true);
    const [apellidoOk, setApellidoOk] = useState(true);
    const [emailOk, setEmailOk] = useState(true);
    const [checkEmailOk, setCheckEmailOk] = useState(true);
    const [calleOk, setCalleOk] = useState(true);
    const [pitoOk, setPitoOk] = useState(true);
    const [areaOk, setAreaOk] = useState(true);
    const [telefonoOk, setTelefonoOk] = useState(true);
    const [codigopOk, setCodigopOk] = useState(true);
    const [dniOk, setDniOk] = useState(true);


    const setearNombre = (e) => {
    setNombre(e.target.value);}

    const setearApellido = (e) => {
    setApellido(e.target.value);}

    const setearEmail = (e) => {
    setEmail(e.target.value);}

    const validadorDeMail = (e) => {
    setEmailValidado(e.target.value);}

    const setearCalle = (e) => {
    setCalle(e.target.value);}

    const setearPito = (e) => {
    setPito(e.target.value);}

    const setearArea = (e) => {
    setArea(e.target.value);}

    const setearTelefono = (e) => {
    setTelefono(e.target.value);}


    const setearCp = (e) => {
    setCp(e.target.value);}

    const setearDocumento = (e) => {
    setDocumento(e.target.value);
    };

    useEffect( () => {
        regexNombre.test(nombre) ? setNombreOk(true) : setNombreOk(false);
        regexApellido.test(apellido) ? setApellidoOk(true) : setApellidoOk(false);
        regexMail.test(email) ?setEmailOk(true) :setEmailOk(false);
        emailValidado === email ? setCheckEmailOk(true) : setCheckEmailOk(false) ;
        regexArea.test(area) ? setAreaOk(true) : setAreaOk(false);
        regexTelefono.test(telefono) ? setTelefonoOk(true) : setTelefonoOk(false);
        regexCalle.test(calle) ? setCalleOk(true) : setCalleOk(false);
        regexPito.test(pito) ? setPitoOk(true) : setPitoOk(false);
        regexCodigoP.test(cp) ? setCodigopOk(true) : setCodigopOk(false);
        regexDNI.test(documento) ? setDniOk(true) : setDniOk(false);
    }, [nombre, apellido, email, emailValidado, area, telefono, calle, cp, pito, documento]);


    const validarForm = () => {
        if ( nombreOk && apellidoOk && emailOk && checkEmailOk && calleOk && areaOk && telefonoOk && codigopOk && pitoOk && dniOk ) {
            return true;
        } else {
            return false;
        }
    }

    let newOrdenDeCompra = {};

    const mandar = (e) => {
        e.preventDefault();
        if (validarForm()){
            setPayer(datosComprador);
            newOrdenDeCompra = {
                comprador : datosComprador,
                items: carrito,
                total: precioTotal,
                pago : "pendiente",
            }
        }
        activarOrden();
        
        activateOrder(newOrdenDeCompra)
        .then((res) => res.json())
        .then( (res) => {
            const order = res.data;
            setIdCompra(order._id);
            sessionStorage.setItem("idDeLaCompraRealizada", JSON.stringify(order._id))
        })
        .catch ( error => {
            return error;
        })
        .finally( () => {
        checkout();
        resumen();
        setPreferencia([...carrito]);
        cerrarCartel();
        });
    }

    return (
        <>
            <div className="fondo_check fadeIn">
                <div className="formulario_container">
                    { creandoOrden
                    ? <div className="procesando_pago fadeIn">Creando la orden de comrpa...</div>
                    : null }
                    <h3 className="resumen_compra">Resúmen de tu compra</h3>
                    <div className="desglose">{carrito.map( (prod) => <ItemsCompradosList key={prod.id} item={prod}/>)}</div>
                    <div className="total_form_check">Total: ${precioTotal}</div>
                    <div className="ingresa"><p>Ingresá tus datos para finalizar la compra.</p></div>
                    <form className="compra_form" onSubmit={mandar}>
                        <div className="input_cont">
                            <div>
                                <input className={nombreOk ? 'valid' : 'invalid'} type="text" placeholder={nombre.length ? nombre : 'Nombre'} onChange={setearNombre} value={nombre.length ? nombre : ''}></input>
                                <div className="validacion">{nombreOk ? '' : 'el nombre ingresado debe contener al menos tres letras'}</div>
                            </div>
                            <div>
                                <input type="text" placeholder={apellido.length ? apellido : 'Apellido'} onChange={setearApellido} value={apellido.length ? apellido : ''}></input>
                                <div className="validacion">{apellidoOk ? '' : 'el appelido ingresado debe contener al menos tres letras'}</div>
                            </div>
                        </div>
                        <div className="input_cont">
                            <div>
                                <input type="email" placeholder={email.length ? email : 'e-mail'} onChange={setearEmail} value={email.length ? email : ''}></input>
                                <div className="validacion">{emailOk ? '' : 'el email ingresado debe tener el formato correcto'}</div>
                            </div>
                            <div>
                                <input type="email" placeholder="validar e-mail" onChange={validadorDeMail}></input>
                                <div className="validacion">{checkEmailOk ? '' : 'el mail validado debe ser correcto'}</div>
                            </div>
                        </div>
                        <div className="input_cont">
                            <div>
                                <input type="text" placeholder={ calle.length ? calle : 'calle'} onChange={setearCalle} value={ calle.length ? calle : ''}></input>
                                <div className="validacion">{calleOk ? '' : "la calle ingresada debe contener al menos tres letras"}</div>
                            </div>
                            <div>
                                <input type="number" placeholder={ pito > 0 ? pito : "número"} onChange={setearPito} value={ pito > 0 ? pito : ''}></input>
                                <div className="validacion">{pitoOk ? '' : 'El numero debe contener solo entre 1 y 5 digitos'}</div>
                            </div>
                            <div>
                                <input type="number" placeholder={ cp > 0 ? cp : "código postal"} onChange={setearCp} value={ cp > 0 ? cp : ''}></input>
                                <div className="validacion">{codigopOk ? '' : 'el código postal debe ser entre tres y cuatro caracteres'}</div>
                            </div>
                        </div>
                        <div className="input_cont">
                            <div>
                                <input type="number" placeholder={ area > 0 ? area : 'cod. area teléfono'} onChange={setearArea} value={ area > 0 ? area :''}></input>
                                <div className="validacion">{areaOk ? '' : 'el nûmero de area debe ser entre dos y cuatro caracteres'}</div>
                            </div>
                            <div>
                                <input type="number" placeholder={ telefono > 0 ? telefono : 'teléfono'} onChange={setearTelefono} value={ telefono > 0 ? telefono : ''}></input>
                                <div className="validacion">{telefonoOk ? '' : 'el teléfono debe ser entre seis y ocho caracteres'}</div>
                            </div>
                            <div>
                                <input type="number" placeholder={ documento > 0 ? documento : 'nº documento'}  onChange={setearDocumento} value={ documento > 0 ? documento : ''}></input>
                                <div className="validacion">{dniOk ? '' : 'el dni debe ser entre siete y ocho caracteres'}</div>
                            </div>
                        </div>
                        { validarForm()
                        ? <div className="submit">
                            <button type="submit" className="comprar">Continuar con el pago</button>
                        </div> 
                        : null }
                    </form>
                    <div>
                        <button className="volver_a" onClick={checkout}>Volver al carrito</button>
                    </div>
                    { validarForm() 
                    ? null
                    : <div className="validacion">* Todos los campos son obligatorios y deben estar correctos.</div> }
                </div>
            </div>
        </>
    );
}

export default Formulario;