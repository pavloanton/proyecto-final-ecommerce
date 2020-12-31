import { useContext, useEffect, useState } from "react";
import "./loginnavbar.components.styles.css";
import { RegisterLoginContext } from "../../../../context/RegisterLogin";
import { NavLink } from "react-router-dom";

const LoginIcon = () => {
  const { logout, logoutAuthGmail } = useContext(RegisterLoginContext);
  const [nameUser, setNameUser] = useState("Guest");
  const [origin, setOrigin] = useState("");
  const procesar = () => {
    switch (origin) {
      case "AuthNormal":
        logout();
        break;
      case "google.com":
        logoutAuthGmail();
        break;
      default:
        logout();
        break;
    }
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setNameUser(user[0].name);
      setOrigin(user[0].origin);
      const logIn = document.querySelector(".logIn");
      logIn.style.display = "none";
      const logOut = document.querySelector(".logOut");
      logOut.style.display = "block";
    } else {
      const logIn = document.querySelector(".logIn");
      logIn.style.display = "block";
      const logOut = document.querySelector(".logOut");
      logOut.style.display = "none";
    }
  }, [nameUser, origin]);
  return (
    <div className="loginMessage">
      <NavLink to="/login" className="logIn">
        <i className="fas fa-user"></i>
      </NavLink>
      <span className="logOut" onClick={procesar}>
        <i className="fas fa-sign-out-alt"></i>
      </span>
      <span className="txtLogin txtWelcome">Welcome</span>
      <span className="txtLogin txtUser">{nameUser}</span>
    </div>
  );
};

export default LoginIcon;