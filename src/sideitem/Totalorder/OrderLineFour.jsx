import React from 'react';
import Text from "../../components/Text/Text";
import Input from "../../components/Input/Input";
import './OrderLineFour.css'

const OrderLineFour = () => {
    return (
        <>
            {/* 상품코드, 연락처, 주문번호 */}
            <div className="order-wrapper-four">
                <div style={{width: '200px', borderRight: '1px solid #000', }}>
                    <Text content="상품코드" customStyle={{width: '200px', height: '70px', margin: '25px'}} />
                </div>
                <div >
                    <Input customStyle={{width: '250px', margin: '25px'}} />
                </div>


                <div style={{width: '140px', borderLeft: '1px solid #000', }}>
                    <Text content="연락처" customStyle={{width: '100px', height: '70px', margin: '25px'}} />
                </div>

                <div >
                    <Input customStyle={{width: '250px', margin: '25px'}} />
                </div>

                <div style={{width: '200px', borderLeft: '1px solid #000', }}>
                    <Text content="주문번호" customStyle={{width: '200px', height: '70px', margin: '25px'}} />
                </div>

                <div >
                    <Input customStyle={{width: '300px', margin: '25px'}} />
                </div>

            </div>
        </>
    )
}

export default OrderLineFour;