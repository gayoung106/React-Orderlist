import React from 'react'
import Dashboard from './navitem/Dashboard'
import { Routes } from 'react-router-dom'
import Customerlist from './navitem/Customerlist'
import Productlist from './navitem/Productlist'
import Orderlist from './navitem/Orderlist'
import Displaylist from './navitem/Displaylist'
import Promotionlist from './navitem/Promotionlist'
import Vendorlist from './navitem/Vendorlist'
import Memberlist from './navitem/Memberlist'
import Systemlist from './navitem/Systemlist'
import Datalist from './navitem/Datalist'
import Manageredit from './navitem/Manageredit'
import SidebarRight from './components/Sidebar/SidebarRight'
import SidebarLeft from './components/Sidebar/SidebarLeft'
import Content from './components/Content'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Header from './components/Header'
import { BrowserRouter,Route } from "react-router-dom";


const Router = () => {
  return (
    <>
    <BrowserRouter>
    <Header />
    <Navbar />
    <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/" element={<Memberlist />} />
        <Route path="/" element={<Productlist />} />
        <Route path="/" element={<Orderlist />} />
        <Route path="/" element={<Displaylist />} />
        <Route path="/" element={<Promotionlist />} />
        <Route path="/" element={<Vendorlist />} />
        <Route path="/" element={<Customerlist />} />
        <Route path="/" element={<Systemlist />} />
        <Route path="/" element={<Datalist />} />
        <Route path="/" element={<Manageredit />} />
    </Routes>
    <SidebarLeft />
    <Content />
    <SidebarRight />
    <Footer />

    </BrowserRouter>
    </>
  )
}

export default Router