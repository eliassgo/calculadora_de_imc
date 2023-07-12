import { useState } from 'react'

import Formulario from "./components/Formulario";
import Tabela from "./components/Tabela";
import Resultado from './components/Resultado';

function App() {
  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);
  const [displayClass, setDisplayClass] = useState('none');
  const [displayClassButton, setDisplayClassButton] = useState('none');
  const [resultado, setResultado] = useState('');
  const [classificacao, setClassificacao] = useState('');
  const [grau, setGrau] = useState('');
  const [mudarCorMagreza, setMudarCorMagreza] = useState('');
  const [mudarCorNormal, setMudarCorNormal] = useState('');
  const [mudarCorSobrepeso, setMudarCorSobrepeso] = useState('');
  const [mudarCorObesidade, setMudarCorObesidade] = useState('');
  const [mudarCorObGrave, setMudarCorObGrave] = useState('');


  // Função para captar dados do usuário
  const obtendoDadosDoImcPeso = (e) => {
    setPeso(Number(e.target.value))

  }
  const obtendoDadosDoImcAltura = (e) => {
    setAltura(parseFloat(e.target.value))
  }

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
      <div className="header">
        <h1 className='display-2 container'>Calculadora De IMC</h1>
      </div>
      <div className='container'>
        <Formulario verificaNumero={verificaNumero} inputValueAltura={altura} inputValuePeso={peso} changeAltura={obtendoDadosDoImcAltura} changePeso={obtendoDadosDoImcPeso} />
        <Resultado displayClass={displayClass} resultado={resultado} classificacao={classificacao} grau={grau} displayClassButton={displayClassButton} limparDadosDaPesquisa={limparDadosDaPesquisa} />
        <Tabela mudarCorMagreza={mudarCorMagreza} mudarCorObGrave={mudarCorObGrave} mudarCorObesidade={mudarCorObesidade} mudarCorNormal={mudarCorNormal} mudarCorSobrepeso={mudarCorSobrepeso} />
      </div>
    </>
  )
}

export default App
