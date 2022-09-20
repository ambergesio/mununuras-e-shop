import React from 'react';

const Slide = ({imagen, index, actual}) => {
    return (
        <div className={index === actual ? 'slide active' : 'slide'}>
        {index === actual && (<img src={imagen} alt="" className="image_slider"/> )}
        </div>)
}

export default Slide;