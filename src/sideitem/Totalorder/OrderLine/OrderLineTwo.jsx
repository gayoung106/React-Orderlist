import React from 'react';
import Text from "../../../components/Text/Text";
import Input from "../../../components/Input/Input";
import './OrderLineTwo.css';

const OrderLineTwo = () => {
    return (
        <>
            {/* 주문일자*/}
            <div className="order-wrapper-two">
                <div style={{width: '150px', borderRight: '2px solid #dddddd', }}>
                    <Text content="주문일자" customStyle={{fontSize:'13px', fontWeight:700, width: '200px', height: '70px', margin: '25px'}} />
                </div>

                <div>
                    <Input customStyle={{width: '220px', height:'20px', margin: '25px', border: '1px solid #dddddd', borderRadius: '5px'}} />
                </div>

            </div>
        </>

    )
}

export default OrderLineTwo;