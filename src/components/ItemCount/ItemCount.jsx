import { useState } from "react";
import "./ItemCount.css"

const ItemCount = ({ inicial, stock, onAdd }) => {
    const [value, setValue] = useState(inicial)

    const restar = () => {
        if (value > 0) {
            setValue(value - 1)       
        }
    }

    const sumar = () => {
        if (value < stock) {
            setValue(value + 1)
        }
    }

    return (
        <div className="itemCount">
            <div className="input-group">
                <button className="botonItemCount btn btn-outline-primary" type="button" onClick={restar}>-</button>
                <input className="inputItemCount from-control" value={value}/>
                <button className="botonItemCount btn btn-outline-primary" type="button" onClick={sumar}>+</button>
            </div>
            <button className="botonAgregarAlCarrito btn btn-outline-success" disabled={stock <= 0} type="button" onClick={() => onAdd(value)}>AGREGAR AL CARRITO</button>
        </div>

        
    )
}

export default ItemCount