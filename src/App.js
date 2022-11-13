import { useState } from 'react';
import Banner from './componentes/Banner';
import { Formulario } from './componentes/Formulario';
import { Time } from './componentes/Time';

function App() {

  const times = [
    {
      nome: 'Administrador',
      corPrimaria: '#0080ff',
      corSecundaria: '#e6f2ff'
    },
    {
      nome: 'Gerente',
      corPrimaria: '#4dff4d',
      corSecundaria: '#e6ffe6'
    },
    {
      nome: 'Operador',
      corPrimaria: '#ffff33',
      corSecundaria: '#ffffe6'
    }
  ]

  const [itens, setItens] = useState([])

  const aoCadastrarItem = (value) => {
    // debugger
    setItens([...itens, value])
  }

  return (
    <div>

      <Banner />

      <Formulario lista={times.map(time => time.nome)} aoEnviar={item => aoCadastrarItem(item)} />

      {times.map(time => <Time
        key={time.nome}
        time={time}
        colaboradores={itens.filter(c => c.time === time.nome)} />)}

    </div>
  );
}

export default App;
