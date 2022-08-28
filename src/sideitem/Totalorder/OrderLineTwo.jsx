import React from 'react';
import Text from "../../components/Text/Text";
import Input from "../../components/Input/Input";
import './OrderLineTwo.css';

const OrderLineTwo = () => {
    return (
        <>
            {/* 주문일자*/}
            <div className="order-wrapper-two">
                <div style={{width: '200px', borderRight: '1px solid #000', }}>
                    <Text content="주문일자" customStyle={{width: '200px', height: '70px', margin: '25px'}} />
                </div>

                <div>
                    <Input customStyle={{width: '250px', margin: '25px'}} />
                </div>

            </div>
        </>

    )
}

export default OrderLineTwo;