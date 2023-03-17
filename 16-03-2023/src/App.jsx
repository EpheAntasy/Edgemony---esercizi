import { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import MiniCardList from "./components/miniCardList/MiniCardList";
import CardList from "./components/cardList";
import Footer from "./components/footer/Footer";
import ModalCart from "./components/modalCart/ModalCart";
import "./App.css";

function App() {

  const localCartData =
    window !== "undefined" && JSON.parse(localStorage.getItem('cartlist'))

  const [value, setValue] = useState("");
  const [modalCartVisible, setModalCartVisibility] = useState(false)
  const [cart, setCart] = useState(localCartData || [])



  return (
    <div className="App">
      <Navbar cart={cart} setValue={setValue} setModalCartVisibility={setModalCartVisibility} />
      <Hero />
      <MiniCardList value={value} />
      <CardList cart={cart} setCart={setCart} title="Technology" endpoint="/products?limit=10" />
      <CardList cart={cart} setCart={setCart} title="Skincare" endpoint="/products?limit=10&skip=10" />
      <Footer />
      <ModalCart cart={cart} setCart={setCart} modalCartVisible={modalCartVisible} setModalCartVisibility={setModalCartVisibility} />
    </div>
  );
}

export default App;
