import React, { useState, useEffect } from "react";
import { Provider } from "../context/CartContext";


const SiteProvider = ({ defaultState = [], children}) => {
    
    const [ socket, setSocket ] = useState(null);
    const [ user, setUser ] = useState({});
    const [ token, setToken ] = useState('');
    const [ logedIn, setLogedIn ] = useState(false);
    const [ openCloseChat, setOpenCloseChat ] = useState(false);
    const [ chatAlarm, setChatAlarm ] = useState(false);

    const [chatCounter, setChatCounter] = useState(0);

    const [precioTotal, setPrecioTotal] = useState(0);
    const [cartelAviso, setCartelAviso] = useState("");
    const [deshacerBoton, setDeshacerboton] = useState(false);
    const [historial, setHistorial] = useState([]);
    const [preferencia, setPreferencia] = useState();
    const [idCompra, setIdCompra] = useState();

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [calle, setCalle] = useState('');

    const [chats, setChats ] = useState(() => {
        const chats = JSON.parse(sessionStorage.getItem("chats"));
        return chats || [];
    });

    useEffect( () => {
        sessionStorage.setItem("chats", JSON.stringify(chats))
    }, [chats]);

    const [pito, setPito] = useState(0);
    const [cp, setCp] = useState(0);
    const [area, setArea] = useState(0);
    const [telefono, setTelefono] = useState(0);
    const [documento, setDocumento] = useState(0);
    const [payer, setPayer] = useState({});

    
    const [carrito, setCarrito] = useState( () => {
        const carritoEnStorage = JSON.parse(localStorage.getItem("itemsDelCarrito"));
        return carritoEnStorage || [];
    });


    let frases = ["ya se encuentra en el carrito!", "sigue todo como antes", "nada que agregar", "todo listo!", "vamos a eso!"];


    useEffect( () => {
        localStorage.setItem("itemsDelCarrito", JSON.stringify(carrito))
    }, [carrito]);


    useEffect( () => {
        const total = carrito.reduce( (acc, cur) => acc + (cur.quantity * cur.unit_price), 0);
        setPrecioTotal(total);
    }, [carrito, precioTotal]);


    function agregarAlCarrito (producto, nuevaCantidad) {
        let yaExiste = carrito.find( (item) => item.id === producto.id);
        if (yaExiste) {
            if (yaExiste.quantity === nuevaCantidad) {
                let frase = frases[Math.floor(Math.random()*frases.length)];
                setCartelAviso(frase);
                setTimeout( () => {setCartelAviso("")}, 900);
                return null;
            } else {
                const newProductos = carrito.map( (item) => {
                    if (item.id === producto.id) {
                        return {...item, quantity: nuevaCantidad};
                    } return item;
                }
            )
            setCarrito([...newProductos]);
            setCartelAviso(`${producto.name} cambió su cantidad a ${nuevaCantidad} en el carrito`);
            setTimeout( () => {setCartelAviso("")}, 2000);
            }
        } else {
            setCarrito([...carrito, {...producto, quantity: nuevaCantidad}]);
            setCartelAviso( `${producto.name} se agregó al carrito`);
            setTimeout( () => {setCartelAviso("")}, 2000);
        }
    }

    function borrarDelCarrito (name, id) {
        setHistorial(carrito);
        const borrar = carrito.filter( (item) => item.id !== id);
        setDeshacerboton(true);
        setTimeout(()=>{
            setCarrito(borrar);
        }, 300);
        setCartelAviso( `${name} se borró del carrito`);
    }
    function borrarCarroExito () {
        setCarrito(defaultState);
    }
    function vaciarCarrito () {
        setDeshacerboton(true);
        setHistorial(carrito);
        setCarrito(defaultState);
        setCartelAviso( `se vació el carrito`);
    }
    function unDo () {
        setCarrito(historial);
        setTimeout(setCartelAviso(""), 200);
    }
    function cerrarCartel () {
        setCartelAviso("");
    }

    return (
    <Provider value={{
        carrito, 
        setCarrito, 
        agregarAlCarrito, 
        borrarDelCarrito, 
        vaciarCarrito, 
        precioTotal, 
        cartelAviso, 
        cerrarCartel,
        idCompra,
        setIdCompra,
        deshacerBoton,
        setDeshacerboton,
        unDo,
        preferencia,
        setPreferencia,
        nombre, setNombre,
        apellido, setApellido,
        email, setEmail,
        area, setArea,
        telefono, setTelefono,
        calle, setCalle,
        pito, setPito,
        cp, setCp,
        documento, setDocumento,
        payer, setPayer,
        borrarCarroExito,
        socket, setSocket,
        user, setUser,
        logedIn, setLogedIn,
        token, setToken,
        chats, setChats,
        openCloseChat, setOpenCloseChat,
        chatAlarm, setChatAlarm,
        chatCounter, setChatCounter
        }}>
        {children}
    </Provider>
    );
}

export default SiteProvider;
