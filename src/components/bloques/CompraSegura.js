import React from 'react';
import candado from "../../imagenes/metodos/candado.svg";
import camion from "../../imagenes/metodos/camion.svg";
import tarjeta from "../../imagenes/metodos/tarjeta.svg";

const Metodos = () => {
    return (
    <>
        <section className="productos especificaciones_de_compra_cont">
        <div className="especificaciones_de_compra borde_top_tienda">
            <div className="item_esp">        
                <img src={camion} alt="Envíos a todo el país"/>
            </div>
            <div className="item_esp">        
                <p><strong>ENVÍOS A TODO EL PAÍS.</strong></p><p>Gratis en compras desde $6000.</p>
            </div>
        </div>
        <div className="especificaciones_de_compra">
            <div className="item_esp">        
                <img src={tarjeta} alt="Muchas formas de pago con mercado pago."/>
            </div>
            <div className="item_esp">        
                <p><strong>MERCADO PAGOS.</strong></p><p>Aprovechá las promos que te ofrece. *</p>
            </div>
        </div>
        <div className="especificaciones_de_compra">
            <div className="item_esp">        
                <img src={candado} alt="Comprá tranquilo, protegemos tus datos."/>
            </div>
            <div className="item_esp">        
                <p><strong>SITIO SEGURO.</strong></p><p>Comprá tranquilo, protegemos tus datos.</p>
            </div>
        </div>
    </section>
    <section>        
        <p className="aclara_t">* Las promociones y financiación asi como la cantidad de cuotas y los intereses de las mismas, dependen exclusivamente de Mercado Libre - Mercado Pago S.A.</p>
    </section>
    </>
    )
}

export default Metodos