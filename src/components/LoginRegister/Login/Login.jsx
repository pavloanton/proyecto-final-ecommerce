import { useContext, useState } from "react";
import { RegisterLoginContext } from "../../../context/RegisterLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const { login, loginAuthGmail } = useContext(RegisterLoginContext);

  const logInAuth = (e) => {
    e.preventDefault();
    login(email, pass);
  };

  const logInGmail = () => {
    loginAuthGmail();
  };

  return (
    <div className="card card-signin my-5">
      <div className="card-body">
        <h5 className="card-title text-center">LOGIN</h5>
        <form className="form-signin" onSubmit={logInAuth}>
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

          <button
            className="btn btn-lg btn-primary btn-block text-uppercase"
            type="submit"
          >
            LOG IN
          </button>
          <div className="alert alert-success succesMessage" role="alert">
            LOG IN SUCCESSFULL
          </div>
          <div className="alert alert-danger errorMessage" role="alert"></div>

          <hr className="my-4" />
        </form>
        <button
          className="btn btn-lg btn-google btn-block text-uppercase"
          type="submit"
          onClick={logInGmail}
        >
          <i className="fab fa-google mr-2"></i>
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;