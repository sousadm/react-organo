import { useState } from 'react'
import { Botao } from '../Botao'
import CampoTexto from '../CampoTexto'
import { ListaSuspensa } from '../ListaSuspensa'

import './Formulario.css'

export const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoEnviar({nome, imagem, time})

        setNome('')
        setImagem('')
        setTime('')

    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Cadastro de Pessoa</h2>
                <CampoTexto
                    label='Nome'
                    placeholder='digite seu nome'
                    value={nome}
                    change={value => setNome(value)}
                    autofocus
                />
                <CampoTexto
                    label='Imagem'
                    value={imagem}
                    change={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    required={true}
                    label="Time" 
                    lista={props.lista}
                    value={time}
                    change={valor => setTime(valor)}
                />                
                <Botao>Cadastrar</Botao>
            </form>
        </section>
    )
}