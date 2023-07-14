const Tabela = ({ mudarCorMagreza, mudarCorNormal, mudarCorObGrave, mudarCorObesidade, mudarCorSobrepeso }) => {
    return (
        <div className="table-responsive caption-top">
            <table className='table table-bordered table-striped table-rounded'>
                <caption className="text-light">* Parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</caption>
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
    )
}

export default Tabela