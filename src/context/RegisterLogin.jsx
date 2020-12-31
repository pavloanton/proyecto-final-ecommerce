import React, { createContext } from "react";
import { firebase } from "../firebase";
require("firebase/auth");

export const RegisterLoginContext = createContext();

const RegisterLogin = ({ children }) => {
  const register = async (email, pass) => {
    try {
      firebase.auth().createUserWithEmailAndPassword(email, pass);
      document.querySelector(".errorMessage").style.display = "none";
      const succesMessage = document.querySelector(".succesMessage");
      succesMessage.style.display = "block";
      const formsignin = document.querySelector(".form-signin");
      formsignin.reset();
    } catch (error) {
      console.log(error);
      document.querySelector(".succesMessage").style.display = "none";
      const errorMessage = document.querySelector(".errorMessage");
      if (error.code === "auth/invalid-email") {
        errorMessage.style.display = "block";
        errorMessage.innerHTML = "Email no válido";
      }
      if (error.code === "auth/email-already-in-use") {
        errorMessage.style.display = "block";
        errorMessage.innerHTML = "Email ya utilizado";
      }
      if (error.code === "auth/weak-password") {
        errorMessage.style.display = "block";
        errorMessage.innerHTML =
          "La contraseña debe contener mínimo 6 caracteres";
      }
    }
  };

  const login = async (email, pass) => {
    try {
      const res = await firebase.auth().signInWithEmailAndPassword(email, pass);
      //Set Info navbar
      const txtUser = document.querySelector(".txtUser");
      txtUser.innerHTML = res.user.email;
      const logIn = document.querySelector(".logIn");
      logIn.style.display = "none";
      const logOut = document.querySelector(".logOut");
      logOut.style.display = "block";
      const formsignin = document.querySelector(".form-signin");
      formsignin.reset();
      document.querySelector(".errorMessage").style.display = "none";
      const succesMessage = document.querySelector(".succesMessage");
      succesMessage.style.display = "block";

      //Push localstorage info current user
      localStorage.clear("user");
      const currentUser = [];
      const user = {
        origin: "AuthNormal",
        name: res.user.email,
        email: res.user.email,
        uid: res.user.uid,
      };
      currentUser.push(user);
      localStorage.setItem("user", JSON.stringify(currentUser));

      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    } catch (error) {
      console.log(error);
      document.querySelector(".succesMessage").style.display = "none";
      const errorMessage = document.querySelector(".errorMessage");
      if (error.code === "auth/invalid-email") {
        errorMessage.style.display = "block";
        errorMessage.innerHTML = "Email no válido";
      }
      if (error.code === "auth/user-not-found") {
        errorMessage.style.display = "block";
        errorMessage.innerHTML = "Email no registrado";
      }
      if (error.code === "auth/wrong-password") {
        errorMessage.style.display = "block";
        errorMessage.innerHTML = "Contraseña incorrecta";
      }
    }
  };

  const logout = async () => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        const logIn = document.querySelector(".logIn");
        logIn.style.display = "block";
        const logOut = document.querySelector(".logOut");
        logOut.style.display = "none";
        const txtUser = document.querySelector(".txtUser");
        txtUser.innerHTML = "Invitad@";
        const orderIcon = document.querySelector(".orderIcon");
        orderIcon.style.display = "none";
        localStorage.clear("user");
        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const loginAuthGmail = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        //Set info navbar
        const txtUser = document.querySelector(".txtUser");
        txtUser.innerHTML = result.user.displayName;
        const logIn = document.querySelector(".logIn");
        logIn.style.display = "none";
        const logOut = document.querySelector(".logOut");
        logOut.style.display = "block";

        //Push localstorage info current user
        const token = result.credential.accessToken;
        localStorage.clear("user");
        const currentUser = [];
        const user = {
          origin: result.additionalUserInfo.providerId,
          name: result.user.displayName,
          email: result.user.email,
          token: token,
        };
        currentUser.push(user);
        localStorage.setItem("user", JSON.stringify(currentUser));

        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const logoutAuthGmail = async () => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        const logIn = document.querySelector(".logIn");
        logIn.style.display = "block";
        const logOut = document.querySelector(".logOut");
        logOut.style.display = "none";
        const txtUser = document.querySelector(".txtUser");
        txtUser.innerHTML = "Invitad@";
        localStorage.clear("user");
        const orderIcon = document.querySelector(".orderIcon");
        orderIcon.style.display = "none";
        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <RegisterLoginContext.Provider
      value={{ register, login, logout, loginAuthGmail, logoutAuthGmail }}
    >
      {children}
    </RegisterLoginContext.Provider>
  );
};

export default RegisterLogin;