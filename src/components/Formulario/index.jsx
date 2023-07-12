
const Formulario = ({ verificaNumero, changePeso, changeAltura, altura, peso }) => {
    return (
        <form action="" onSubmit={verificaNumero} className="mt-5">
            <div className="row">
                <div className='col-4 col-md-2'>
                    <label htmlFor="altura">
                        Altura<small> (Ex:1.88)</small>:
                    </label>
                </div>
                <div className='col-4 col-md-2'>
                    <label htmlFor="peso">
                        Peso<small> (Ex:70)</small>:
                    </label>
                </div>
            </div>
            <div className="row">
                <div className="col-4 col-md-2">
                    <input type="text" value={altura} id='altura' class='form-control' required onChange={changeAltura} />
                </div>
                <div className="col-4 col-md-2">
                    <input type="text" value={peso} id='peso' class='form-control' required onChange={changePeso} />
                </div>
                <div className="col-4">
                    <button type='submit' className='btn btn-info'>Calcular <i class="bi bi-arrow-down-circle text-dark"></i></button>
                </div>
            </div>
        </form>
    )
}

export default Formulario 
