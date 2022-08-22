import React from 'react';
import Texto from '../texto/texto';
import './section1.css';
import Form from '../form/form';

const Section1 = () => {
    return (
        <div className='section1Container'>
            <div className='textoParagrafo'>
        <Texto className='tituloParagrafo' texto="Ajude o algorítimo a ser mais certeiro" />
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore harum optio veritatis maxime provident, reiciendis qui ut sequi molestiae ipsum, illo magnam deleniti esse distinctio ducimus modi soluta voluptatum ipsa!
        </p>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, earum quod voluptas ipsum eaque velit, deleniti nemo provident ad deserunt vel nobis cum sint doloremque, hic itaque excepturi. Accusamus, quibusdam.
        </p>
            </div>
            
                <Form />

            
        </div>
    )
}

export default Section1