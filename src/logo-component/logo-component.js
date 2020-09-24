import React from 'react';
import  './logo-component.css';
import LogoImage from '../medias/images/Datamatics.svg';
const Logo = (props)=>{
    return(
        <div className="logoImage"><img src={LogoImage} alt=''/></div>

    )
}

export default Logo;