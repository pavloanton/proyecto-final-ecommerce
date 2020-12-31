import { useState, useContext } from "react";
import "./footer.components.styles.css";
import { SuscriptorsContext } from "../../../context/SuscriptorsProvider";

const Footer = () => {
  const pattern = new RegExp(
    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
  );
  const { addSuscribe } = useContext(SuscriptorsContext);
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);

  const validateSuscribe = (e) => {
    e.preventDefault();
    if (!pattern.test(email)) {
      setErrorEmail(true);
      return;
    }
    setErrorEmail(false);
    addSuscribe(email);
  };

  return (
    <footer className="page-footer font-small pt-4">
      <div className="row no-gutters d-flex align-items-center mt-7 pt-5 pb-5">
        <div className="col-12">
          <h2 className="suscribe_title">SING UP</h2>
        </div>
        <div className="col-12">
          <p className="suscribe_description">
            FOR OUR NEWSLETTER
          </p>
        </div>
        <div className="col-12">
          <form className="formSuscribe" onSubmit={validateSuscribe}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="inputEmail"
                placeholder="your@email.com"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <button type="submit" className="btn btn-primary btnSuscribe">
                subscribe
              </button>
              {errorEmail ? (
                <div
                  className="alertSuscribe alert alert-danger alert-dismissible mt-4"
                  role="alert"
                >
                  Enter email correctly.
                </div>
              ) : null}
              <div className="alert alert-success alertNewsletter" role="alert">
                Thank you for subscribing, you will receive new offers soon.
              </div>
            </div>
          </form>
          <div className="col-12">
          <p className="suscribe_description">
            Abyssal Merch © 2021
          </p>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;