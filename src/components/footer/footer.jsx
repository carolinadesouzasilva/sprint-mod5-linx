import React from 'react';
import Texto from '../texto/texto';
import './footer.css'

const Footer = () => {
    return (
        <div className='footerContainer'>
            <div className='bgColorFooter'>
                <div className='bgColorCutFooter'></div>
            </div>
            <Texto className='txtFooter1' texto='Testando as habilidades em HTML, CSS e JS' />
            <Texto className='txtFooter2' texto='Linx Impulse' />
            <Texto className='txtFooter3' texto='2022'/>
        </div>
    )
}

export default Footer