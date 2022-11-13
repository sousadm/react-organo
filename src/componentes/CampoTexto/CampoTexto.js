import './CampoTexto.css'

export const CampoTexto = (props) => {

    const placeholderModificada = props.placeholder ? `${props.placeholder}...` : ''

    const change = (evento) => {
        props.change(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.value} onChange={change} required={props.required} placeholder={placeholderModificada} />
        </div>
    )

} 