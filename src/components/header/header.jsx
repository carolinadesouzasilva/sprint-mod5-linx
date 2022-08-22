import React from 'react';
import './header.css';
import Texto from '../texto/texto';
import Botao from '../botao/botao';

const Header = () => {
    return (
        <div className='headerContainer'>
            <div className='backGroundColor'>
                <div className='backGroundColorCut'></div>
            </div>
        <Texto className='texto1' texto='uma seleção de produtos' />
        <Texto className='texto2' texto='Especial para você' />
        <Texto className='texto3' texto='Todos os produtos dessa lista foram selecionados a partir da sua navegação. Aproveite!' />

        <div className='botaoHeader'>
            <Botao textoBotao="Conheça a Linx" />
            <Botao textoBotao="Ajude o algorítimo" />
            <Botao textoBotao="Seus produtos" />
            <Botao textoBotao="Compartilhe" />
            

        </div>
        </div>
    )
}

export default Header

