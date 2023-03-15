import { useState } from "react";
import "./index.css";

const Navbar = ({ setValue }) => {
  const [inputValue, setInputValue] = useState("");

  const onHandleInput = (e) => setInputValue(() => e.target.value);

  const onHandleSubmit = (e) => {
    e.preventDefault();

    setValue(e.target[0].value)
  };

  return (
    <div className="Navbar">
      <div className="Navbar__wrapper">
        <ul>
          <li>Home</li>
          <li>Contacts</li>
          <li>About us</li>
        </ul>
        <img className="carrello" src="https://img.icons8.com/3d-fluency/256/shopping-cart-loaded.png" alt="carrello" />
      </div>
      <form onSubmit={onHandleSubmit}>
        <input
          value={inputValue}
          onChange={onHandleInput}
          type="text"
          placeholder="Cerca prodotto ..."
        />
      </form>
    </div >
  );
};

export default Navbar;
