import { useContext } from "react";
import TotalCart from "../TotalCart/TotalCart";
import { CartContext } from "../../../context/CartProvider";

const ItemsCart = ({ listItems }) => {

  const { deleteProduct } = useContext(CartContext);
  function removeProduct(index) {
    deleteProduct(index)
  }

  return (
    <div className="col-12 col-lg-6">
      {listItems.map((item, index) => (
        <div className="card mb-3 animate__animated animate__fadeInDown animate__faster" key={index}>
          <div className={"row product"+index}>
            <div className="col-6">
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Quantity: {item.quantity}</p>
                <p className="card-text">Price: ${item.price}USD</p>
                <p className="btnDelete" onClick={() => removeProduct(index)}><i className="far fa-trash-alt"></i></p>
              </div>
            </div>
            <div className="col-6">
              <img src={item.image} className="img-fluid" alt="Imagen de la Zapatilla" />
            </div>
          </div>
        </div>
      ))}
      <TotalCart/>
    </div>
  );
};

export default ItemsCart;