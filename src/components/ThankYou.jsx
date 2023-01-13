import React from "react";
import { useParams, Link } from "react-router-dom";


const ThankYou = () => {
    const {id} = useParams();

    return (
        <div className="container">
            <div className="row my-5">
                <div className="col text-center">
                    <div class="alert alert-success" role="alert">
                        <h1>Gracias por su Compra!</h1>
                        <p>El número de orden es: <b>{id}</b></p>
                    </div>
                    <Link to={"/"} className="btn btn-warning">Volver a la página principal</Link>
                </div>
            </div>
        </div>
    )
}

export default ThankYou;