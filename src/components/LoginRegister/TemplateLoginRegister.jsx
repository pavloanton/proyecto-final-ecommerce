import { useState } from "react";
import Login from "./Login/Login";
import Register from "./Register/Register";
import "./templateloginregister.components.styles.css";

const TemplateLoginRegister = () => {
  const [stateForm, setStateForm] = useState();
  const handleChange = (event) => {
    const target = event.target;
    target.type === "checkbox"
      ? setStateForm(target.checked)
      : setStateForm(target.value);
  };

  return (
    <section className="sectionLogin pt-25vh">
      <div className="container">
        <div className="row animate__animated animate__fadeInDown animate__fast">
          <div className="col-12 mx-auto">
            <div className="toggle-btn" id="_2nd-toggle-btn">
              <input type="checkbox" onChange={handleChange} />
              <span></span>
            </div>
          </div>
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            {stateForm ? <Register /> : <Login />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TemplateLoginRegister;