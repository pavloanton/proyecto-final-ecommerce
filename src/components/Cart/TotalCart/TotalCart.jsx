import { useContext, useEffect } from "react";
import { CartContext } from "../../../context/CartProvider";
import ButtonProcesar from "../ButtonProcesar/ButtonProcesar";
import "./totalcart.components.styles.css";

const TotalCart = () => {
  const { calculateTotal, totalPrice } = useContext(CartContext);
  useEffect(() => {
    calculateTotal();
  }, []);

  return (
    <>
      {totalPrice === 0 ? null : (
        <p className="txtTotal">
          <strong>Total: </strong> ${totalPrice}{" "} USD
        </p>
      )}

      {totalPrice === 0 ? null : (
        <ButtonProcesar/>
      )}
    </>
  );
};

export default TotalCart;