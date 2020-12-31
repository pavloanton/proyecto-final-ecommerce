import { useEffect } from "react";
import "./listicon.components.styles.css";
import { NavLink } from "react-router-dom";

const ListIcon = () => {
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      const orderIcon = document.querySelector(".orderIcon");
      orderIcon.style.display = "block";
    } else {
      const orderIcon = document.querySelector(".orderIcon");
      orderIcon.style.display = "none";
    }
  }, []);

  return (
    <NavLink to="/orders" className="orderIcon">
      <i className="fas fa-clipboard-list"></i>
    </NavLink>
  );
};

export default ListIcon;