import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemList from "./ItemList";
import loader from "../../imagenes/bear_loader.svg";
import VentanaModal from "../VentanaModal";
import MenuCategorias from '../MenuCategorias';
import Busqueda from '../Busqueda';
import { getAllProducts, getByCategory, getBySearchParam } from "../../services/apiResources";

const ItemListContainer = () => {

    useEffect(() => {
        window.scrollTo(0, 100)
    }, [])

    const [productosTienda, setProductosTienda] = useState([]);
    const params = useParams();
    const [loading, setLoading] = useState();
    const [modal, setModal] = useState(false);
    const [mensajeModal, setMensajeModal] = useState("");
    const [categoriasListadas, setCategoriasListadas] = useState([]);


    useEffect ( () => {
        setLoading(true);
        getAllProducts()
        .then((res) => res.json())
        .then( (res) => {
            const items = res.data;
            const listaCategorias = [];
            const arrayDeArrays = [];
            const listaDeProductos = [];
            items.forEach(doc => {
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



    useEffect( () => {
        setLoading(true);
        if (params.category) {
            getByCategory(params.category)
            .then((res) => res.json())
            .then((res) => {
                if (res.data.length === 0) {
                    setMensajeModal("La categoría seleccionada no existe o no contiene items");
                    setModal(true);
                }
                setProductosTienda(res.data);
            })
            .catch((e) => {setMensajeModal(e); setModal(true)})
            .finally( () => {
                setLoading(false);
            })
        };
        if (params.busqueda) {
            getBySearchParam(params.busqueda)
            .then((res) => res.json())
            .then((res) => {
                if (res.data.length === 0) {
                    setMensajeModal("No se encontraron resultados");
                    setModal(true);
                }
                setProductosTienda(res.data);
            })
            .catch(e => e)
            .finally(() => {
                setLoading(false);
            })
        }
    }, [params]);

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