import React from 'react'
import './Totalorder.css'
import './OrderLine/OrderLineOne.css';
import Order from "../../components/Order/Order";




const Totalorder = () => {
    return (
        <>
            <Order content="전체 주문"  notice="*Emergency" />

        </>
    )
}

export default Totalorder;