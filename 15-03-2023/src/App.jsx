import CardList from "./components/cardList";
import Hero from "./components/hero";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar";
import MiniCardList from "./components/miniCardList/MiniCardList";
import "./App.css";
import { useState } from "react";

function App() {

  const [value, setValue] = useState("");

  return (
    <div className="App">
      <Navbar setValue={setValue}/>
      <Hero />
      <MiniCardList value={value}/>
      <CardList title="Technology" endpoint="/products?limit=10" />
      <CardList title="Skincare" endpoint="/products?limit=10&skip=10" />
      <Footer />
    </div>
  );
}

export default App;
