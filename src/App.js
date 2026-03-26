
import React from "react";
import './App.css';
import Header from './components/Header';
import Hero from "./components/Hero";
import Specials from "./components/Specials";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Specials />
      </main>
    </>

  );
}

export default App;
