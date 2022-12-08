import React from "react";

const CartWidget = () => {
    return (
        <button type="button" className="btn btn-light btn-outline-dark position-relative">
            <img src="/images/shopping_cart_FILL0_wght400_GRAD0_opsz48.png" alt="Carrito" width="32" />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">14</span>
        </button>
    )
}

export default CartWidget;
