import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import loader from "../../imagenes/bear_loader.svg";
import VentanaModal from "../VentanaModal";
import MenuCategorias from '../MenuCategorias';
import Busqueda from '../Busqueda';
import { getAllProducts } from "../../services/apiResources";

const ItemListContainer = () => {

    useEffect(() => {
        window.scrollTo(0, 100)
    }, [])

    const [productosTienda, setProductosTienda] = useState([]);
    const [loading, setLoading] = useState();
    const [modal, setModal] = useState(false);
    const [mensajeModal] = useState("");
    const [categoriasListadas, setCategoriasListadas] = useState([]);

    useEffect(() => {
        setLoading(true);
        getAllProducts()
        .then((res) => res.json())
        .then((res) => setProductosTienda(res.data))
        .catch(e => console.log(e))
        .finally( () => {
            setLoading(false);
        })
    }, []);


    useEffect ( () => {
        setLoading(true);
        getAllProducts()
        .then((items) => items.json())
        .then( (items) => {
            const listaCategorias = [];
            const arrayDeArrays = [];
            const listaDeProductos = [];
            items.data.forEach(doc => {
                listaDeProductos.push(doc);
            });
            for(let obj in listaDeProductos){
                arrayDeArrays.push(listaDeProductos[obj].category);
            }
            for (let arr of arrayDeArrays){
                listaCategorias.push(...arr);
            }
            const dataArr = new Set(listaCategorias);
            let listaCat = [...dataArr];
            setCategoriasListadas(listaCat);
        })
        .catch ( (e) => {
            return e;
        })
        .finally(() => {setLoading(false);
        });
    }, []);

    const cerrarModal = (estado) => {
        setModal(estado);
    }

    return (
        <>
        { modal
        ? <VentanaModal mensajeModal={mensajeModal} cerrarModal={cerrarModal} />
        : null }
        <h2>Nuestra Tienda</h2>

        <div className="ordenador">
            <div className="ordenador">
                { categoriasListadas.map( category => <MenuCategorias key={category} cat={category}/> ) }
            </div>
            <Busqueda />
        </div>

        { loading
        ? <section><img src={loader} alt="" /></section>
        : <ItemList productos={productosTienda} /> }
        </>
    );
};

export default ItemListContainer;