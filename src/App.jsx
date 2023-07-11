import { useState } from 'react'

function App() {
  const [displayClass, setDisplayClass] = useState('none');
  const [displayClassButton, setDisplayClassButton] = useState('none');
  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);
  const [resultado, setResultado] = useState('');
  const [classificacao, setClassificacao] = useState('');
  const [grau, setGrau] = useState('');
  const [mudarCorMagreza, setMudarCorMagreza] = useState('');
  const [mudarCorNormal, setMudarCorNormal] = useState('');
  const [mudarCorSobrepeso, setMudarCorSobrepeso] = useState('');
  const [mudarCorObesidade, setMudarCorObesidade] = useState('');
  const [mudarCorObGrave, setMudarCorObGrave] = useState('');


  // Função para verificar se é número 
  const verificaNumero = (evento) => {
    evento.preventDefault();
    if (isNaN(altura) || isNaN(peso)) {
      alert('Escreva um número válido')

    } else {
      calculaIMC()
      setDisplayClassButton('block')
      setDisplayClass('block')
    }
  }

  // Função para calcular IMC e Retornar sua devida classificação
  const calculaIMC = () => {
    const imc = peso / (altura * altura)

    if (imc > 40.0) {
      return setResultado(imc.toFixed(2)), setClassificacao('OBESIDADE GRAVE'), setGrau('III'), setMudarCorObGrave('table-danger')
    } else if (imc <= 39.9 && imc > 30.0) {
      return setResultado(imc.toFixed(2)), setClassificacao('OBESIDADE'), setGrau('II'), setMudarCorObesidade('table-warning')
    } else if (imc <= 29.9 && imc > 25.0) {
      return setResultado(imc.toFixed(2)), setClassificacao('SOBREPESO'), setGrau('I'), setMudarCorSobrepeso('table-warning')
    } else if (imc <= 24.9 && imc > 18.5) {
      return setResultado(imc.toFixed(2)), setClassificacao('NORMAL'), setGrau('0'), setMudarCorNormal('table-success')
    } else {
      return setResultado(imc.toFixed(2)), setClassificacao('MAGREZA'), setGrau('0'), setMudarCorMagreza('table-danger')
    }

  }

  // Função para limpar os dados de pesquisa
  function limparDadosDaPesquisa() {
    if (displayClass === 'block' || displayClassButton === 'block') {
      setDisplayClassButton('none');
      setDisplayClass('none');
      setMudarCorMagreza('');
      setMudarCorNormal('');
      setMudarCorSobrepeso('');
      setMudarCorObesidade('');
      setMudarCorObGrave('');

    } else {
      setDisplayClassButton('block')
      setDisplayClass('block')
    }

  }

  return (
    <>
      <div className='container pt-5'>
        <h1 className='display-2 '>Calculadora de IMC</h1>
        <form action="" onSubmit={verificaNumero}>
          <div className="row align-items-center">
            <div className='col-4 col-md-2 m-3'>
              <label htmlFor="altura">
                Altura<small class="text-muted">(Ex:1.88)</small>:
              </label>
              <input type="text" id='altura' class='form-control' required onChange={evento => setAltura(parseFloat(evento.target.value))} />
            </div>
            <div className='col-4 col-md-2 m-3'>
              <label htmlFor="peso">
                Peso<small class="text-muted">(Ex:70)</small>:
              </label>
              <input type="text" id='peso' class='form-control' required onChange={evento => setPeso(Number(evento.target.value))} />
            </div>
          </div>
          <div className="row">
            <div className="col-4 col-md-2 m-3 mt-0">
              <button type='submit' className='btn btn-info'>Calcular <i class="bi bi-caret-right-fill"></i></button>
            </div>
            <div className="col-4 col-md-2" style={{ display: displayClass }}>
              <table className='table table-bordered ml-5' >
                <thead className='table-primary'>
                  <tr>
                    <th className='text-center' colSpan="3" >Seu IMC</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td> {resultado} </td>
                    <td>{classificacao}</td>
                    <td>{grau}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-4 col-md-2 m-3 mt-0">
              <button type='button' className='btn btn-info' style={{ display: displayClassButton }} onClick={limparDadosDaPesquisa}>Limpar<i class="bi bi-arrow-clockwise"></i></button>
            </div>
          </div>


        </form>
        <div className="table-responsive">

          <table className='table table-bordered table-striped'>
            <thead className='table-primary'>
              <tr>
                <th className='text-center' colSpan="3" >Informações sobre os dados do IMC</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>IMC</td>
                <td>CLASSIFICAÇÃO</td>
                <td>OBESIDADE(GRAU)</td>
              </tr>
              <tr className={`${mudarCorMagreza}`}>
                <td>MENOR QUE 18,5</td>
                <td>MAGREZA</td>
                <td>0</td>
              </tr>
              <tr className={`${mudarCorNormal}`}>
                <td>ENTRE 18,5 E 24,9</td>
                <td>NORMAL</td>
                <td>0</td>
              </tr>
              <tr className={`${mudarCorSobrepeso}`}>
                <td>ENTRE 25,0 E 29,9</td>
                <td>SOBREPESO</td>
                <td>I</td>
              </tr>
              <tr className={`${mudarCorObesidade}`}>
                <td>ENTRE 30,0 E 39,9</td>
                <td>OBESIDADE</td>
                <td>II</td>
              </tr>
              <tr className={`${mudarCorObGrave}`}>
                <td>MAIOR QUE 40,0</td>
                <td>OBESIDADE GRAVE</td>
                <td>III</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default App
