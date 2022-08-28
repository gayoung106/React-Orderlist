import React from 'react';
import Text from "../../components/Text/Text";
import Input from "../../components/Input/Input";
import './OrderLineEight.css'

const OrderLineEight = () => {
    return (
        <>
            {/* 결제수단, 주문경로 */}
            <div className="order-wrapper-eight">
                <div style={{width: '200px', borderRight: '1px solid #000', }}>
                    <Text content="결제수단" customStyle={{width: '200px', height: '70px', margin: '25px'}} />
                </div>
                <div >
                    <Input customStyle={{width: '700px', margin: '25px'}} />
                </div>



                <div style={{width: '200px', borderLeft: '1px solid #000', }}>
                    <Text content="주문경로" customStyle={{width: '200px', height: '70px', margin: '25px'}} />
                </div>

                <div >
                    <Input customStyle={{width: '300px', margin: '25px'}} />
                </div>

            </div>
        </>
    )
}

export default OrderLineEight;