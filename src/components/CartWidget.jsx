import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";

const BotonCarrito = ({total}) => {

    return (
        <Link to={"/cart"} className="position-relative">
            <img src="/images/shopping_cart_FILL0_wght400_GRAD0_opsz48.png" alt="Carrito" width="32" />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{total}</span>
        </Link>
    )
}



const CartWidget = () => {
    const {cartTotal} = useContext(CartContext);

    return cartTotal() > 0 ? <BotonCarrito total={cartTotal()} />  : "";
}

export default CartWidget;