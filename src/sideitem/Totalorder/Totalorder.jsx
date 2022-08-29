import React from 'react'
import './Totalorder.css'
import './OrderLine/OrderLineOne.css';
import OrderLineOne from "./OrderLine/OrderLineOne";
import OrderLineTwo from "./OrderLine/OrderLineTwo";
import Text from "../../components/Text/Text";
import OrderLineThree from "./OrderLine/OrderLineThree";
import OrderLineFour from "./OrderLine/OrderLineFour";
import OrderLineFive from "./OrderLine/OrderLineFive";
import OrderLineSix from "./OrderLine/OrderLineSix";
import OrderLineSeven from "./OrderLine/OrderLineSeven";
import OrderLineEight from "./OrderLine/OrderLineEight";
import OrderLineButton from './OrderLine/OrderLineButton';
import OrderList from './OrderList';



const Totalorder = () => {



    return (
        <>
            <div className="table-wrap">
                <div className="title">
                    <Text content="전체주문" fontSize="25px" />
                </div>
                <div className="sub-title">
                    <img className="check" alt="check-logo" src="img/check.png" />
                    <Text content="전체주문" fontSize="20px" margin="10px">전체주문</Text>
                </div>

                <div className="total-orderlist-wrap">
                    <OrderLineOne />
                    <OrderLineTwo />
                    <OrderLineThree />
                    <OrderLineFour />
                    <OrderLineFive />
                    <OrderLineSix />
                    <OrderLineSeven />
                    <OrderLineEight />
                    <OrderLineButton />
                    <OrderList />


                </div>
            </div>


        </>
    )
}

export default Totalorder