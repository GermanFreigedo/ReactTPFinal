import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "./CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) =>{

    const {addItem} = useContext(CartContext);
    const [itemStock, setItemStock] = useState(0);

    const onAdd = (quantity) => {
        setItemStock(itemStock - quantity);
        addItem(item, quantity);
    }

    useEffect(() => {
        setItemStock(item.stock);
    }, [item]);

    return(
        <div className="row text-center">
            <div className="col-md-2 offset-md-2 ">
                <img src={item.imagen} alt={item.nombre} className="img-fluid"/>
            </div>
            <div className="col-md-4 ">
                <h1>{item.nombre}</h1>
                <p>{item.descripcion}</p>
                <p><b>${item.precio}</b></p>
                
            </div>
            <div className="col-md-s">
                <ItemCount stock={item.stock} onAdd={onAdd}/>
            </div>
        </div>

    )

}

export default ItemDetail;