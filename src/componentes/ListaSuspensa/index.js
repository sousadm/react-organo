import './ListaSuspensa.css'

export const ListaSuspensa = (props) => {
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={evento => props.change(evento.target.value)} required={props.required} value={props.value}>
                <option value=""></option>
                {props.lista.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}