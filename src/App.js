import React from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import SidebarLeft from "./components/Sidebar/SidebarLeft";
import SidebarRight from "./components/Sidebar/SidebarRight";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Dashboard from "./navitem/Dashboard";


function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Dashboard />
      <div className="container">
      <SidebarLeft />
      <Content />
      <SidebarRight />
      </div>
      <Footer />
    </>
  );
}

export default App;
