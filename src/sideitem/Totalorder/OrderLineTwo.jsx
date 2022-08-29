import React from 'react';
import Text from "../../components/Text/Text";
import Input from "../../components/Input/Input";
import './OrderLineTwo.css';

const OrderLineTwo = () => {
    return (
        <>
            {/* 주문일자*/}
            <div className="order-wrapper-two">
                <div style={{width: '150px', borderRight: '2px solid #6f79a8', }}>
                    <Text content="주문일자" customStyle={{fontSize:'15px', width: '200px', height: '70px', margin: '25px'}} />
                </div>

                <div>
                    <Input customStyle={{width: '220px', margin: '25px'}} />
                </div>

            </div>
        </>

    )
}

export default OrderLineTwo;