import React from 'react';
import './section3.css'

import Texto from '../texto/texto';
import Input from '../input/input';
import Botao from '../botao/botao';
import Divisoria from '../divisoria/divisoria';

const Section3 = () => {
    return (
        <div className='section-3'>
            <Divisoria texto='Compartilhe a novidade' width='30%'/>
            <Texto className='txtSection3' classe='textoSection3' texto='Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!' />
            <div className='inputsSection3'>
                <Input labelFor='nome-do-amigo' labelTxt='Nome do seu amigo:' inputType="text" />
                <Input labelFor='email-do-amigo' labelTxt='E-mail:' inputType="text" />
            </div>
            <div className='botaoSection3'>
            <Botao textoBotao="Enviar agora" />
            </div>
        </div>
    )
}

export default Section3