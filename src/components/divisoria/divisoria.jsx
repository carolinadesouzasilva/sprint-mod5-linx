import React from 'react';
import './divisoria.css'

const Divisoria = (props) => {
  return ( 
    <section className="productsSection">
    <p className='productsSectionTitle'>
    <hr size='2' width={props.width} />{props.texto}<hr size='2' width={props.width} />
    </p></section> );
}
 
export default Divisoria;