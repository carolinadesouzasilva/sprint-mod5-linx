import React from 'react';
import './texto.css';

const Texto = (props) => {
    return ( 
        <p className={props.className}>{props.texto}</p>
     );
}
 
export default Texto