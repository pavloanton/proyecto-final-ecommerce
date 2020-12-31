import { createContext, useState } from "react";
import { firebase } from "../firebase";

export const OrderContext = createContext();

const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const [buyers, setBuyers] = useState([]);

  const saveOrder = async (name, telefono, email, items, date, totalPrice) => {
    const db = firebase.firestore();
    const newOrder = {
      nombre: name,
      telefono: telefono,
      email: email,
      items: items,
      date: date,
      total: totalPrice,
    };
    db.collection("buyer")
      .add(newOrder)
      .then(function (docRef) {
        const messageOrder = document.querySelector(".messageOrder");
        messageOrder.innerHTML =
          "Compra exitosa, su N° de orden es: <strong>" +
          docRef.id +
          "</strong>";
        messageOrder.style.display = "block";
        const form = document.querySelector(".formOrder");
        form.reset();
        const countItems = document.querySelector(".countItems");
        countItems.innerHTML = "0";
        localStorage.removeItem("itemsCart");
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  };

  const getAllOrders = async (email) => {
    try {
      const db = firebase.firestore();
      const data = await db
        .collection("buyer")
        .where("email", "==", email)
        .get();
      const arrayOrder = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setOrders(arrayOrder);
    } catch (error) {
      console.log(error);
    }
  };

  const getOrderId = async (id) => {
    try {
      const db = firebase.firestore();
      const data = await db
        .collection("buyer")
        .where(firebase.firestore.FieldPath.documentId(), "==", id)
        .get();
      const arrayOrder = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setOrders(arrayOrder);
    } catch (error) {
      console.log(error);
    }
  };


  const getBuyers = async () => {
    try {
      const db = firebase.firestore();
      const data = await db.collection("buyers").get();
      const arrayItems = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBuyers(arrayItems);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <OrderContext.Provider
      value={{ saveOrder, getAllOrders, orders, getOrderId, buyers }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;