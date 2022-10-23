import { useState } from "react"

export default function Register() {

    const [childNumber, setChildNumber] = useState(0);

    return (
        <form className="form">
            <div className="d-flex flex-column align-items-center justify-content-center">
                <label htmlFor="nickname" className="form-label">Family Nickname</label>
                <input type="text-sm" className="form-control form-control-sm w-25 mb-3" />
                <label htmlFor="password" className="form-label">Family Password</label>
                <input type="password" className="form-control form-control-sm w-25 mb-3" />
            </div>
            <div className="row">
                <div className="col">
                    <label htmlFor="mother" className="form-label">Mother Name</label>
                    <input type="text" className="form-control form-control-sm mb-3" />
                </div>
                <div className="col">
                    <label htmlFor="father" className="form-label">Father Name</label>
                    <input type="text" className="form-control form-control-sm mb-3" />
                </div>
                <div className="d-flex align-items-center justify-content-center">
                    <input type="number" className="w-25" />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <label htmlFor="children" className="form-label">Children Name</label>
                    <input type="text" className="form-control " />
                </div>
                <div className="col">
                    <label htmlFor="children" className="form-label">Children Name</label>
                    <input type="text" className="form-control" />
                </div>
            </div>
            <div className="container d-flex align-items-center justify-content-center w-25 ">
                <button className="btn btn-primary mt-5" type="button">Regiser</button>
            </div>
        </form>
    )
}