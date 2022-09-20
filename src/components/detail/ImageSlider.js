import React, { useState } from 'react';
import Slide from './Slide';
import flechaDer from '../../imagenes/flecha_der.svg'
import flechaIzq from '../../imagenes/flecha_izq.svg'

const ImageSlider = ({slides}) => {

    const [actual, setActual] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setActual( actual === length - 1 ? 0 : actual + 1 )
    }
    const prevSlide = () => {
        setActual( actual === 0 ? length - 1 : actual - 1 )
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <div className="slider">
            <img src={flechaIzq} alt="" className={slides.length > 1 ? 'flecha_izq' : 'off'} onClick={prevSlide} />
            <img src={flechaDer} alt="" className={slides.length > 1 ? 'flecha_der' : 'off'} onClick={nextSlide} />
            {slides.map((imagen, index) => <Slide key={index} imagen={imagen} index={index} actual={actual} />)}
        </div>
    )
}

export default ImageSlider;