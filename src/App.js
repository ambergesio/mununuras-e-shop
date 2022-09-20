import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/bloques/Header";
import Logo from "./components/bloques/Logo";
import Banner from "./components/bloques/Banner";
import ItemListContainerAll from "./components/list/ItemListContainerAll";
import ItemListContainer from "./components/list/ItemListContainer";
import ItemDetailContainer from "./components/detail/ItemDetailContainer";
import Contacto from "./components/bloques/Contacto"
import MisOrdenes from "./components/MisOrdenes";
import Carrito from "./components/Carrito";
import TicketExito from "./components/TicketExito";
import TicketRechazado from "./components/TicketRechazado";
import TicketPendiente from "./components/TicketPendiente";
import Error from "./components/bloques/Error"
import CompraSegura from "./components/bloques/CompraSegura";

import Chat from './components/chat/Chat';

import Footer from "./components/bloques/Footer";
import "./estilo/style.css";


const App = () => {
    
    return (
        <BrowserRouter>
            <Header />
            <Logo />
            <Banner />
            <Switch>
                <Route exact path="/" component={ItemListContainerAll} />
                <Route exact path="/categoria/:category" component={ItemListContainer} />
                <Route exact path="/busqueda/:busqueda" component={ItemListContainer} />
                <Route exact path="/producto/:id" component={ItemDetailContainer} />
                <Route exact path="/contacto" component={Contacto} />
                <Route exact path="/misordenes" component={MisOrdenes} />
                <Route exact path="/carrito" component={Carrito} />
                <Route exact path="/exito" component={TicketExito} />
                <Route exact path="/rechazado" component={TicketRechazado} />
                <Route exact path="/pendiente" component={TicketPendiente} />
                <Route component={Error} />
            </Switch>
            <Chat />
            <CompraSegura />
            <Footer />
        </BrowserRouter>
    );
};

export default App;
