import React from 'react'
import Dashboard from './navitem/Dashboard/Dashboard'
import { Routes } from 'react-router-dom'
import Customerlist from './navitem/Customerlist/Customerlist'
import Productlist from './navitem/Productlist/Productlist'
import Orderlist from './navitem/Orderlist/Orderlist'
import Displaylist from './navitem/Displaylist/Displaylist'
import Promotionlist from './navitem/Promotionlist/Promotionlist'
import Vendorlist from './navitem/Vendorlist/Vendorlist'
import Memberlist from './navitem/Memberlist/Memberlist'
import Systemlist from './navitem/Systemlist/Systemlist'
import Datalist from './navitem/Datalist/Datalist'
import Manageredit from './navitem/Manageredit/Manageredit'
import SidebarRight from './components/Sidebar/SidebarRight'
import SidebarLeft from './components/Sidebar/SidebarLeft'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Header from './components/Header'
import { BrowserRouter,Route } from "react-router-dom";
import Totalorder from './sideitem/Totalorder/Totalorder'
import Cancelorder from './sideitem/Cancelorder/Cancelorder'
import Exchangeorder from './sideitem/Exchangeorder/Exchangeorder'
import Returnorder from './sideitem/Returnorder/Returnorder'
import Refundorder from './sideitem/Refundorder/Refundorder'
import Errororder from './sideitem/Errororder/Errororder'
import Errordeliverycode from './sideitem/Errordeliverycode/Errordeliverycode'
import Completedelivery from './sideitem/Completedelivery/Completedelivery'


const Router = () => {
  return (
    <>
    <BrowserRouter>
    <Header />
        <Navbar />
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <SidebarLeft />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/memberlist" element={<Memberlist />} />
                <Route path="/productlist" element={<Productlist />} />
                <Route path="/orderlist" element={<Orderlist />} />
                <Route path="/displaylist" element={<Displaylist />} />
                <Route path="/promotionlist" element={<Promotionlist />} />
                <Route path="/vendorlist" element={<Vendorlist />} />
                <Route path="/customerlist" element={<Customerlist />} />
                <Route path="/systemlist" element={<Systemlist />} />
                <Route path="/datalist" element={<Datalist />} />
                <Route path="/manageredit" element={<Manageredit />} />

                <Route path="/totalorder" element={<Totalorder />} />
                <Route path="/cancelorder" element={<Cancelorder />} />
                <Route path="/exchangeorder" element={<Exchangeorder />} />
                <Route path="/returnorder" element={<Returnorder />} />
                <Route path="/refundorder" element={<Refundorder />} />
                <Route path="/errororder" element={<Errororder />} />
                <Route path="/errordeliverycode" element={<Errordeliverycode />} />
                <Route path="/completedelivery" element={<Completedelivery />} />
            </Routes>
            <SidebarRight />

        </div>
    <Footer />


    </BrowserRouter>
    </>
  )
}

export default Router