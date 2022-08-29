import React from 'react';
import Text from "../../components/Text/Text";
import Input from "../../components/Input/Input";
import './OrderLineFour.css'

const OrderLineFour = () => {
    return (
        <>
            {/* 상품코드, 연락처, 주문번호 */}
            <div className="order-wrapper-four">
                <div style={{width: '150px', borderRight: '2px solid #6f79a8', }}>
                    <Text content="상품코드" customStyle={{fontSize:'15px', width: '200px', height: '70px', margin: '25px'}} />
                </div>
                <div >
                    <Input customStyle={{width: '220px', margin: '25px'}} />
                </div>


                <div style={{width: '130px', borderLeft: '2px solid #6f79a8', }}>
                    <Text content="연락처" customStyle={{fontSize:'15px', width: '100px', height: '70px', margin: '25px'}} />
                </div>

                <div >
                    <Input customStyle={{width: '220px', margin: '25px'}} />
                </div>

                <div style={{width: '130px', borderLeft: '2px solid #6f79a8', }}>
                    <Text content="주문번호" customStyle={{fontSize:'15px', width: '200px', height: '70px', margin: '25px'}} />
                </div>

                <div >
                    <Input customStyle={{width: '220px', margin: '25px'}} />
                </div>

            </div>
        </>
    )
}

export default OrderLineFour;