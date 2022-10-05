import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetail.css"

const ItemDetail = ({ name, price, category, img, description }) => {

    const HandleOnAdd = (cantidad) => {
      console.log("AGREGASTE " + cantidad + " AL CARRITO");
    }

    return (
        <div className="card mb-3" style={{maxWidth: 540}}>
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
                <ItemCount inicial={1} stock={10} onAdd={HandleOnAdd}/>
              </div>
            </div>
          </div>
        </div>
    )
}

export default ItemDetail