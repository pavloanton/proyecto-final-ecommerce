import "./listorder.components.styles.css";

const ListOrder = ({ orders }) => {
  return (
    <table className="table tableOrders">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Order N°</th>
          <th scope="col">Items</th>
          <th scope="col">Total</th>
          <th scope="col">Date</th>
        </tr>
      </thead>
      <tbody>
        {orders.length === 1 ? (
          <tr key={orders[0].id}>
            <th scope="row">{orders[0].id}</th>
            <th scope="row">
              <ul>
                {orders[0].items.length === 1 ? (
                  <li>{orders[0].items[0].name}</li>
                ) : (
                  orders[0].items.map((item, index) => (
                    <li key={index}>{item.name}</li>
                  ))
                )}
              </ul>
            </th>
            <th scope="row">{orders[0].total}</th>
            <th scope="row">{orders[0].date}</th>
          </tr>
        ) : (
          orders.map((order) => (
            <tr key={order.id}>
              <th scope="row">{order.id}</th>
              <th scope="row">
                <ul>
                  {order.items.length === 1 ? (
                    <li>{order.items[0].name}</li>
                  ) : (
                    order.items.map((item, index) => (
                      <li key={index}>{item.name}</li>
                    ))
                  )}
                </ul>
              </th>
              <th scope="row">{order.total}</th>
              <th scope="row">{order.date}</th>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default ListOrder;