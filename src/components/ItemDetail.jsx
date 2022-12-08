import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) =>{
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
                <ItemCount stock={item.stock}/>
            </div>
        </div>

    )

}

export default ItemDetail;