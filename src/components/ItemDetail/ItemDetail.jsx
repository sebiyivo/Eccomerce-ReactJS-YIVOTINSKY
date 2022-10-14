import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetail.css"
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ id, name, price, category, img, stock, description }) => {
    const [goToCart, setgoToCart] = useState(false)

    const { addItem } = useContext(CartContext)

    const HandleOnAdd = (quantity) => {

      setgoToCart(true)

      const productToAdd = {
        id, img, name, price, quantity
      }
      
      addItem(productToAdd);
    }


    return (
        <div className="card detail-card mb-3">
          <div className="row g-0">
            <div className="col-md-5 detail-img">
              <img src={img} className="img-fluid rounded-start" alt={name}/>
            </div>
            <div className="col-md-7 detail">
              <div className="card-body detail-body">
                <h5 className="detail-title">{name}</h5>
                <p className="detail-description">{description}</p>
                <p className="detail-category">{category}</p>
                <h6 className="detail-price">${price}</h6>
                {goToCart ? <Link to={"/cart"} className="botonTerminarCompra btn btn-outline-success">TERMINAR MI COMPRA</Link> : <ItemCount inicial={1} stock={stock} onAdd={HandleOnAdd}/>}
              </div>
            </div>
          </div>
        </div>
    )
}

export default ItemDetail