import React, { useState } from "react"

const ItemCount = ({stock}) =>{
    
    const [counter, setCounter] = useState (1)

    const decrementarCount = () => {
        if (counter > 1){
            setCounter (counter - 1)
        }
    }

    const incrementarCount = () => {
        if (counter < stock){
            setCounter (counter + 1)
        }
    }

    const onAdd = ()=>{
        if (stock > 0){
             console.log("Agregaste " + counter + " productos al carrito")
        }
    }
        return(
        <div className="row">
             <div className="col-md 2 text-center">
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn bg-white text-dark border-primary" onClick={decrementarCount}>-</button>
                    <button type="button" className="btn bg-white text-dark border-primary">{counter}</button>
                    <button type="button" className="btn bg-white text-dark border-primary" onClick={incrementarCount}>+</button>
                </div>
            </div>
            <div className="row">
                <div className="col-md 2 text-center">
                    <button type="button" className="btn btn-primary" onClick={onAdd}>Agregar al carrito</button>
                </div>
            </div>
        </div>

    )

}

export default ItemCount;