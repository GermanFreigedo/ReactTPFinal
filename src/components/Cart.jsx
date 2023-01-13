import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const {cart, cartTotal, clear, removeItem, sumTotal} = useContext(CartContext);

    if (cartTotal() === 0) {
        return (
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-12 text-center">
                        <div className="alert alert-danger" role="alert">No se encontraron productos en el carrito!</div>
                        <Link to={"/"} className="btn btn-warning">Volver a la página principal</Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-md-12">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col" colSpan={5} className="text-end"><Link onClick={clear} className="btn btn-danger" title={"Vaciar Carrito"}>Vaciar Carrito</Link></th>
                            </tr>
                            <tr>
                                <th scope="col">&nbsp;</th>
                                <th scope="col">Producto</th>
                                <th scope="col" className="text-center">Cantidad</th>
                                <th scope="col" className="text-center">Precio</th>
                                <th scope="col">&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.imagen} alt={item.nombre} width={80} /></td>
                                    <td className="align-middle">{item.nombre}</td>
                                    <td className="align-middle text-center">{item.quantity}</td>
                                    <td className="align-middle text-center">${item.quantity * item.precio}</td>
                                    <td className="align-middle text-end"><Link onClick={() => {removeItem(item.id)}} title={"Eliminar Producto"}><img src={"/images/trash3.svg"} alt={"Eliminar Producto"} width={32} /></Link></td>
                                </tr>
                                ))
                            }
                            <tr>
                                <td className="text-end"colSpan={3}><b>Total a Pagar</b></td>
                                <td className="text-center"><b>${sumTotal()}</b></td>
                                <td className="text-end"><Link to={"/checkout"} className="btn btn-warning">Finalizar Compra</Link></td>
                            </tr>
                        </tbody>
                    </table>    
                </div>
            </div>
        </div>
    )
}

export default Cart;