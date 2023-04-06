import './style.css';

import {Card} from '../../Components/Card';

export function Home() {
  function handleNameChange(name) {
    console.log(name);
  }
  return (
    <div className='container'>
      <h1>Lista de presença</h1>

      <input
       type="text" 
       placeholder='Digite o nome...'
       onChange={e => handleNameChange(e.target.value)}
       />

      <button type="button">
        Adicionar
      </button>

      <Card name="Rodrigo" time="10:55:25"/>
      <Card name="João" time="11:00:10"/>
      <Card name="Ana" time="12:10:32"/>
    </div>
  )
}

