import { useContext, useState } from "react";
import { OrderContext } from "../../../context/OrderProvider";

const SearchOrder = () => {
  const { getOrderId, getAllOrders } = useContext(OrderContext);
  const [order, setOrder] = useState("");
  const searchOrderId = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    !order ? getAllOrders(user[0].email) : getOrderId(order);
  };
  return (
    <form className="formSearchOrder w-25" onSubmit={searchOrderId}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          id="searchOrder"
          placeholder="Order N°"
          onChange={(e) => setOrder(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary btn-default">
        Search
      </button>
    </form>
  );
};

export default SearchOrder;