import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import Header from "./Components/Header";
import ImageCarousel from "./Components/ImageCarousel";
import Info from "./Components/Info";
import Servies from "./Components/Servies";
import Technology from "./Components/Technology";
import WhyChoose from "./Components/WhyChoose";
import Empty from "./Components/Empty";
import Commitment from "./Components/Commitment";
import Questions from "./Components/Questions";

function App() {
  

  return (
    <div className="App">
      {/* <Header /> */}
      <ImageCarousel />
      <Technology />
      <Info />
      <Servies />
      <WhyChoose />
      <Commitment />
      <Questions />

      <Empty />
    </div>
  );
}

export default App;
