import { useState } from "react";
import "./buttonprocesar.components.styles.css";

const ButtonProcesar = () => {
  const [edicion, setEdicion] = useState(false);
  const activeForm = () => {
    const form = document.querySelector(".formOrder");
    form.style.display = "block";
    setEdicion(true);
  };

  const desactiveForm = () => {
    const form = document.querySelector(".formOrder");
    form.style.display = "none";
    setEdicion(false);
  };
  return (
    <button
      type="submit"
      className="btn btn-primary btnProcesar"
      onClick={edicion ? () => desactiveForm() : () => activeForm()}
    >
      {edicion ? "Cancel" : "Process"}
    </button>
  );
};

export default ButtonProcesar;