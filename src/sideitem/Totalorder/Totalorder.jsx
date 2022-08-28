import React from 'react'
import './Totalorder.css'
import './OrderLineOne.css';
import OrderLineOne from "./OrderLineOne";
import OrderLineTwo from "./OrderLineTwo";
import Text from "../../components/Text/Text";
import OrderLineThree from "./OrderLineThree";
import OrderLineFour from "./OrderLineFour";
import OrderLineFive from "./OrderLineFive";
import OrderLineSix from "./OrderLineSix";
import OrderLineSeven from "./OrderLineSeven";
import OrderLineEight from "./OrderLineEight";

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
                </div>
            </div>


        </>
    )
}

export default Totalorder