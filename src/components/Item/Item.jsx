import "./Item.css"
import { Link } from "react-router-dom"

const Item = ({ id, name, price, category, img }) => {
    return (
        <Link to={`detail/${id}` || `category/${category}/detail/${id}`} className="card item col-md-3">
          <img src={img} className="card-img-top" alt={name}/>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{category}</p>
            <h6 className="card-price">${price}</h6>
          </div>
        </Link>
    )
}

export default Item