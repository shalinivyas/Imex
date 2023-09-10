import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/pages/Header";
import Services from "./components/pages/Services"
import Contacts from "./components/pages/Contacts";
import Tracking from "./components/pages/Tracking";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Services />
      <Tracking />
      <Contacts />
      <Footer />
    </>


  );
}

export default App;
