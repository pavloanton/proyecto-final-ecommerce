import { useState, useEffect, useContext } from "react";
import "./cart.components.styles.css";
import { NavLink } from "react-router-dom";
import Order from "./Order/Order";
import ItemsCart from "./ItemsCart/ItemsCart";
import { OrderContext } from "../../context/OrderProvider";

const Cart = () => {
  const [listItems, setListItems] = useState([]);
  const { orders } = useContext(OrderContext);

  console.log(orders);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("itemsCart"));
    setListItems(items);
  }, []);
  return (
    <div className="container">
      <div className="row no-gutters pt-25vh mb-5 animate__animated animate__fadeInDown animate__delay-1s">
        {listItems.length === 0 ? (
          <div className="col-12 mb-3">
            <h5 className="text-center">THERE'S NO ITEMS IN YOUR CART.</h5>
            <NavLink to="/bands" className="btn-default">
              Return to Home
            </NavLink>
          </div>
        ) : (
          <ItemsCart listItems={listItems} />
        )}
        {listItems === null ? (
          null
        ) : (
          <Order/>
        )}
      </div>
    </div>
  );
};

export default Cart;