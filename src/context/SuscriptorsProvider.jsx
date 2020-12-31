import { createContext } from "react";
import { firebase } from "../firebase";
export const SuscriptorsContext = createContext();

const SuscriptorsProvider = ({ children }) => {
  const addSuscribe = async (email) => {
    try {
      const db = firebase.firestore();
      const newEmail = {
        email: email,
      };
      await db.collection("newsletter").add(newEmail);
      const alertSuscribe = document.querySelector(".alertSuscribe");
      alertSuscribe.style.display = "none";
      const success = document.querySelector(".alertNewsletter");
      success.style.display = "block";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SuscriptorsContext.Provider value={{ addSuscribe }}>
      {children}
    </SuscriptorsContext.Provider>
  );
};

export default SuscriptorsProvider;