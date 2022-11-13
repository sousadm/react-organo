import Pessoa from '../Pessoa'
import './Time.css'

export const Time = (props) => {

    const {
        corPrimaria,
        corSecundaria,
        nome
    } = props.time

    const css = { backgroundColor: corSecundaria }

    return (
        (props.colaboradores.length > 0) && <section className='time' style={css} >
            <h3 style={{ borderColor: corPrimaria }}> {nome} </h3>
            <div className='colaboradores'>
                {props.colaboradores.map((pessoa, key) => <Pessoa key={key} dados={{pessoa, corPrimaria}} />)}
            </div>
        </section>
    )

}