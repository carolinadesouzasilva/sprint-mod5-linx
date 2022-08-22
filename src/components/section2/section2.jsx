import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Texto from '../texto/texto';
import Divisoria from '../divisoria/divisoria';

import Botao from '../botao/botao';
import Card from '../card/card';

import './section2.css'

const Section2 = () => {
    const [req, setReq] = useState([])
    const [page, setPage] = useState([])

    useEffect(() => {
        const url = `https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1`
        axios
        axios.get(url)
        .then((response) => {
            setPage(response.data.nextPage)
            setReq(response.data.products)
        })
        .catch((error) =>(error.message))
    }, [])

    function getProducts(url) {
        axios.get(`http://${url}`)
        .then((response) => {
            setPage(response.data.nextPage)
            setReq(
                [...req, ...response.data.products]
            )
        })
        .catch((error) =>('Não encontrado'))
    }

    return (
        <div className='section-2'>
            
            <Divisoria texto='Sua seleção especial' width='38%'/>
            
            <div className='grid-cards'>
                { req.map((produto) => {
          return <Card src={produto.image} id={produto.id} nome={produto.name} descricao={produto.description} oldPrice={`De R$ ${produto.oldPrice}`} promo={`Por: R$ ${produto.price}`} parcelas={`ou ${produto.installments.count}x de ${produto.installments.value}`} />
        })}
      </div>
      <div className='div-botao'>
      <Botao onClick={()=> {getProducts(page)}} textoBotao='Ainda mais produtos aqui!'/>
            </div>
        </div>
    )
}

export default Section2