import './Pessoa.css'

const Pessoa = (props) => {

    const {
        nome,
        time,
        imagem
    } = props.dados.pessoa

    const corPrimaria = props.dados.corPrimaria

    return (<div className='colaborador'  >
        <div className='cabecalho' style={{ backgroundColor: corPrimaria }} >
            <img src={imagem} alt={nome} />
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{time}</h5>
        </div>
    </div>)

}

export default Pessoa