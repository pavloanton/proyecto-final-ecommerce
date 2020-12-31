import React, { createContext, useState } from "react";
import { firebase } from "../firebase";
export const ItemsContext = createContext();

const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [itemId, setItemId] = useState([]);
  const [itemSale, setItemSale] = useState([]);
  const [itemNoSale, setItemNoSale] = useState([]);
  const [categories, setCategories] = useState([]);

  const getItems = async () => {
    try {
      const db = firebase.firestore();
      const data = await db.collection("items").get();
      const arrayItems = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setItems(arrayItems);
    } catch (error) {
      console.log(error);
    }
  };

  const getItemsId = (idProducto) => {
    try {
      const db = firebase.firestore();
      const data = db.collection("items").doc(idProducto);
      data
        .get()
        .then(function (doc) {
          if (doc.exists) {
            setItemId(doc.data());
            let productCard = document.querySelector(".product-card");
            productCard.style.display = "block";
          } else {
            let productCard = document.querySelector(".product-card");
            productCard.style.display = "none";
          }
        })
        .catch(function (error) {
          console.log("Error getting document:", error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const getItemsCategory = async (categories) => {
    try {
      const db = firebase.firestore();
      const data = await db
        .collection("items")
        .where("category", "in", categories)
        .get();
      const arrayItems = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setItems(arrayItems);
    } catch (error) {
      console.log(error);
    }
  };

  const getItemSale = async () => {
    try {
      const db = firebase.firestore();
      const data = await db.collection("items").where("sale", "==", true).get();
      const arrayItems = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setItemSale(arrayItems);
    } catch (error) {
      console.log(error);
    }
  };

  const getItemNoSale = async () => {
    try {
      const db = firebase.firestore();
      const data = await db.collection("items").where("sale", "==", false).get();
      const arrayItems = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setItemNoSale(arrayItems);
    } catch (error) {
      console.log(error);
    }
  };

  const getCategories = async () => {
    try {
      const db = firebase.firestore();
      const data = await db.collection("categories").get();
      const arrayCategories = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCategories(arrayCategories);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ItemsContext.Provider
      value={{
        getItems,
        items,
        itemId,
        getItemsCategory,
        getItemsId,
        getItemSale,
        itemSale,
        getItemNoSale,
        itemNoSale,
        getCategories,
        categories
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};

export default ItemsProvider;