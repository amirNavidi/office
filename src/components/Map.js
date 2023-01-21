import React from 'react';
import map from '../images/map.png'

const Map = () => {
    return (
        <div style={{weight:"50%" ,height:"100vh" ,overflow:"hidden"}}>
            <img style={{weight:"100%" ,height:"100%" ,paddingLeft:"180px"}} src={map} alt="map"/>
        </div>
    );
};

export default Map;