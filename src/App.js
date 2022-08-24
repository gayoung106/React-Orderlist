import React from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import SidebarLeft from "./components/Sidebar/SidebarLeft";
import SidebarRight from "./components/Sidebar/SidebarRight";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <SidebarLeft />
      <SidebarRight />
      <Footer />
    </>
  );
}

export default App;
