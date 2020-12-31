import { useContext, useState } from "react";
import { RegisterLoginContext } from "../../../context/RegisterLogin";

const Register = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [passConfirm, setPassConfirm] = useState("");

  const { register } = useContext(RegisterLoginContext);

  const procesarDatos = (e) => {
    e.preventDefault();
    if (pass !== passConfirm) {
      let inputpass = document.querySelector("#inputPassword");
      let inputpassconfirm = document.querySelector("#inputPasswordConfirm");

      inputpass.classList.add("errorInput");
      inputpassconfirm.classList.add("errorInput");
      return;
    }
    register(email, pass);
  };

  return (
    <div className="card card-signin my-5">
      <div className="card-body">
        <h5 className="card-title text-center">REGISTER</h5>
        <form className="form-signin" onSubmit={procesarDatos}>
          <div className="form-label-group">
            <input
              type="email"
              id="inputEmail"
              className="form-control"
              placeholder="E-mail"
              required
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-label-group">
            <input
              type="password"
              id="inputPassword"
              className="form-control"
              placeholder="Password"
              required
              onChange={(e) => setPass(e.target.value)}
            />
          </div>

          <div className="form-label-group">
            <input
              type="password"
              id="inputPasswordConfirm"
              className="form-control"
              placeholder="Confirm Password"
              required
              onChange={(e) => setPassConfirm(e.target.value)}
            />
          </div>

          <button
            className="btn btn-lg btn-primary btn-block text-uppercase"
            type="submit"
          >
            Register
          </button>

          <div className="alert alert-success succesMessage" role="alert">
            Registered Successfull.
          </div>
          <div className="alert alert-danger errorMessage" role="alert">
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;