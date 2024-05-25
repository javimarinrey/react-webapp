export default function UserTabCentro() {
    return (
        <div>
            <div className="mb-3 row">
                <div className="col-sm-6">
                    <label htmlFor="name_center" className="form-label">Nomre del centro</label>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"><i className="bi bi-building"></i></span>
                        <input type="text" className="form-control" id="name_center"/>
                    </div>
                </div>
                <div className="col-sm-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"><i className="bi bi-envelope-at-fill"></i></span>
                        <input type="email" className="form-control" id="email"/>
                    </div>
                </div>
                <div className="col-sm-3">
                    <label htmlFor="phone" className="form-label">Teléfono</label>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"><i className="bi bi-telephone-fill"></i></span>
                        <input type="text" className="form-control" id="phone"/>
                    </div>
                </div>
            </div>
            <div className="mb-3 row">
                <div className="col-sm-4">
                    <label htmlFor="address" className="form-label">Dirección</label>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"><i className="bi bi-cursor-fill"></i></span>
                        <input type="text" className="form-control" id="address"/>
                    </div>
                </div>
                <div className="col-sm-2">
                    <label htmlFor="cp" className="form-label">Código Postal</label>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"><i className="bi bi-tag-fill"></i></span>
                        <input type="text" className="form-control" id="cp"/>
                    </div>
                </div>
                <div className="col-sm-3">
                    <label htmlFor="city" className="form-label">Ciudad</label>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"><i className="bi bi-geo-alt-fill"></i></span>
                        <input type="text" className="form-control" id="city"/>
                    </div>
                </div>
                <div className="col-sm-3">
                    <label htmlFor="country" className="form-label">Pais</label>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"><i className="bi bi-globe-americas"></i></span>
                        <input type="text" className="form-control" id="country"/>
                    </div>
                </div>
            </div>
            <div className="mb-3 row">
                <div className="col-sm-12 text-end">
                    <button className="btn btn-primary">Guardar</button>
                </div>
            </div>
        </div>
    )
}