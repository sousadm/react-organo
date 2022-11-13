import { Fragment } from 'react'
import './Banner.css'

const Banner = () => {
    return (
        <>
            <header className="banner">
                <img src="/imagens/banner.png" alt="O banner principal da página do Organo" />
            </header>
            <h5>Teste com tag Fragment</h5>
        </>
    )
}

export default Banner