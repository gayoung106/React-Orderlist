import React from 'react';
import Text from "../../components/Text/Text";
import Input from "../../components/Input/Input";
import './OrderLineSeven.css' ;

const OrderLineSeven = () => {
    return (
        <>
            {/* 상품명, 자사/타사 */}
            <div className="order-wrapper-seven">
                <div style={{width: '200px', borderRight: '1px solid #000', }}>
                    <Text content="상품명" customStyle={{width: '200px', height: '70px', margin: '25px'}} />
                </div>
                <div >
                    <Input customStyle={{width: '700px', margin: '25px'}} />
                </div>



                <div style={{width: '200px', borderLeft: '1px solid #000', }}>
                    <Text content="자사/타사" customStyle={{width: '200px', height: '70px', margin: '25px'}} />
                </div>

                <div >
                    <Input customStyle={{width: '300px', margin: '25px'}} />
                </div>

            </div>
        </>
    )
}

export default OrderLineSeven;