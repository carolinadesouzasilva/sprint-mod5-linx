import React from 'react';
import './form.css'
import Input from '../input/input';
import InputRadio from '../input/inputRadio';
import Botao from '../botao/botao';

const Form = () => {
    return (
        <form>
            <Input labelTxt="Seu nome" labelFor="nome" inputType="text"/>
            <Input labelTxt="Email:" labelFor="email" inputType="text" />
            <Input labelTxt="CPF:" labelFor="cpf" inputType="text" />

            <div className='radioButton'>
                <InputRadio labelTxt="Masculino" labelFor="masculino" inputType="radio" />
                <InputRadio labelTxt="Feminino" labelFor="feminino" inputType="radio" />
            </div>  
            <Botao textoBotao="Enviar" />
             
        </form>

        
    )
}

export default Form