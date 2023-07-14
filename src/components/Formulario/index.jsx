
const Formulario = ({ verificaNumero, changePeso, changeAltura, inputValueAltura, inputValuePeso }) => {
    return (
        <form action="" onSubmit={verificaNumero} className="mt-5">
            <div className="row">
                <div className='col-4 col-md-2'>
                    <label htmlFor="altura">
                        Altura<small> (ex: 1.88)</small>:
                    </label>
                </div>
                <div className='col-4 col-md-2'>
                    <label htmlFor="peso">
                        Peso<small> (ex: 70)</small>:
                    </label>
                </div>
            </div>
            <div className="row">
                <div className="col-4 col-md-2">
                    <input type="text" value={inputValueAltura} id='altura' className='form-control' required onChange={changeAltura} placeholder="Metros" />
                </div>
                <div className="col-4 col-md-2">
                    <input type="text" value={inputValuePeso} id='peso' className='form-control' required onChange={changePeso} placeholder="Quilos" />
                </div>
                <div className="col-4">
                    <button type='submit' className='btn btn-info'>Calcular <i className="bi bi-arrow-down-circle text-dark"></i></button>
                </div>
            </div>
        </form>
    )
}

export default Formulario 
