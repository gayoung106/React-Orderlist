import React from 'react';
import Title from "../Title/Title";
import OrderLineOne from "../../sideitem/Totalorder/OrderLine/OrderLineOne";
import OrderLineTwo from "../../sideitem/Totalorder/OrderLine/OrderLineTwo";
import OrderLineThree from "../../sideitem/Totalorder/OrderLine/OrderLineThree";
import OrderLineFour from "../../sideitem/Totalorder/OrderLine/OrderLineFour";
import OrderLineFive from "../../sideitem/Totalorder/OrderLine/OrderLineFive";
import OrderLineSix from "../../sideitem/Totalorder/OrderLine/OrderLineSix";
import OrderLineSeven from "../../sideitem/Totalorder/OrderLine/OrderLineSeven";
import OrderLineEight from "../../sideitem/Totalorder/OrderLine/OrderLineEight";
import OrderLineButton from "../../sideitem/Totalorder/OrderLine/OrderLineButton";
import OrderList from "../../sideitem/Totalorder/OrderList";

import Text from "../Text/Text";

const Order = (props) => {
    const { content,  sub, notice1, notice2, notice3 } = props;

    return (
        <div>
            <div className="table-wrap">
                <Title content={content} sub={sub}/>
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

                    <div style={{marginTop: '100px'}}>
                        <Text content={notice1} fontSize={'12px'} />
                    <br/>
                        <Text content={notice2} fontSize={'12px'} />
                    <br/>
                        <Text content={notice3} fontSize={'12px'} />
                    </div>

                    <OrderList />

                </div>
            </div>
        </div>
    )
}

export default Order;