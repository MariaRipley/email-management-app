import React from "react";
import "../stylesheets/HeaderForm.css";

function HeaderForm() {
  const handleClick = (ev) => {
    ev.preventDefault();
    console.log("Click", ev);
  };

  return (
    <form className="text-align-right">
      <button className="form__btn" onClick={handleClick}>
        <span className="fas fa-inbox"></span>
        Recibidos
      </button>
      <button className="form__btn">
        <span className="fas fa-trash"></span>
        Papelera
      </button>
      <input
        className="form__input-text"
        type="text"
        placeholder="Buscar un correo"
      />
    </form>
  );
}

export default HeaderForm;
