import React from 'react'
import Dashboard from './navitem/Dashboard/Dashboard'
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
        <SidebarLeft />
        <SidebarRight />
        <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/memberlist" element={<Memberlist />} />
            <Route path="/productlist" element={<Productlist />} />
            <Route path="/" element={<Orderlist />} />
            <Route path="/displaylist" element={<Displaylist />} />
            <Route path="/promotionlist" element={<Promotionlist />} />
            <Route path="/vendorlist" element={<Vendorlist />} />
            <Route path="/customerlist" element={<Customerlist />} />
            <Route path="/systemlist" element={<Systemlist />} />
            <Route path="/datalist" element={<Datalist />} />
            <Route path="/manageredit" element={<Manageredit />} />
        </Routes>
    <Footer />


    </BrowserRouter>
    </>
  )
}

export default Router