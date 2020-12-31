import { useContext, useEffect } from "react";
import ListOrder from "./ListOrder/ListOrder";
import SearchOrder from "./SearchOrder/SearchOrder";
import { OrderContext } from "../../context/OrderProvider";

const LayoutListOrder = () => {
  const { getAllOrders, orders } = useContext(OrderContext);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    getAllOrders(user[0].email);
  }, []);
  return (
    <section className="orders pt-25vh">
      <div className="container-fluid">
        <div className="row no-gutters">
          <div className="col-12 animate__animated animate__slideInDown animate__fast">
            <SearchOrder />
          </div>
        </div>
        <div className="row no-gutters">
          <div className="col-12 animate__animated animate__slideInUp animate__fast">
            <ListOrder orders={orders} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LayoutListOrder;