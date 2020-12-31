import { useState, useContext, useEffect } from "react";
import { OrderContext } from "../../../context/OrderProvider";
import { CartContext } from "../../../context/CartProvider";
import "./order.components.styles.css";

const Order = () => {
  const { saveOrder } = useContext(OrderContext);
  const { orders } = useContext(OrderContext);
  const { totalPrice } = useContext(CartContext);

  console.log(orders);
  const [name, setName] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailconfirm, setEmailConfirm] = useState("");
  const [user, setUser] = useState([]);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("user"));
    setUser(userInfo);
    if (userInfo !== null) {
      setEmail(userInfo[0].email);
      setEmailConfirm(userInfo[0].email);
    }
  }, [name, email, emailconfirm]);

  const addOrder = (e) => {
    e.preventDefault();
    if (email !== emailconfirm) {
      let emailError = document.querySelector("#inputEmail");
      let emailConfirmError = document.querySelector("#inputEmailConfirm");
      emailError.classList.add("errorInput");
      emailConfirmError.classList.add("errorInput");
      return;
    }
    prepareOrder();
  };

  const prepareOrder = () => {
    const items = JSON.parse(localStorage.getItem("itemsCart"));
    const today = new Date();
    const date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    saveOrder(name, telefono, email, items, date, totalPrice);
  };

  return (
    <>
      <div className="col-12 col-lg-6">
        <form onSubmit={addOrder} className="formOrder animate__animated animate__slideInRight animate__faster">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="inputNombre"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              className="form-control"
              id="inputFono"
              placeholder="Phone"
              onChange={(e) => setTelefono(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              disabled={user === null ? "" : "disabled"}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="inputEmailConfirm"
              placeholder="Confirm E-mail"
              onChange={(e) => setEmailConfirm(e.target.value)}
              value={emailconfirm}
              disabled={user === null ? "" : "disabled"}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary btn-default">
            BUY
          </button>
          <div
            className="alert alert-success mt-3 messageOrder"
            role="alert"
          ></div>
        </form>
      </div>
    </>
  );
};

export default Order;