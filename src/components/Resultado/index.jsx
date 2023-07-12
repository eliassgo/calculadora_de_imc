const Resultado = ({ displayClass, resultado, classificacao, grau, displayClassButton, limparDadosDaPesquisa }) => {
    return (
        <div className="row mt-3 align-items-center">
            <div className="col-8 col-md-4" style={{ display: displayClass }}>
                <table className='table table-bordered ml-5'>
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
            <div className="col-4 col-md-2 mt-md-4">
                <button type='button' className='btn btn-info' style={{ display: displayClassButton }} onClick={limparDadosDaPesquisa}><i class="bi bi-arrow-repeat text-dark"></i> Limpar</button>
            </div>
        </div>
    )
}

export default Resultado