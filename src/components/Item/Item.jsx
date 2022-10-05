import "./Item.css"

const Item = ({ name, price, category, img }) => {
    return (
        <div className="card item" style={{width: 200}}>
          <img src={img} className="card-img-top" alt={name} style={{height: 200}}/>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{category}</p>
            <h6 className="card-price">${price}</h6>
          </div>
        </div>
    )
}

export default Item