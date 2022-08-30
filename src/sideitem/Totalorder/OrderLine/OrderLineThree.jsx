import React from 'react';
import Text from "../../../components/Text/Text";
import Input from "../../../components/Input/Input";
import './OrderLineThree.css'

const OrderLineThree = () => {
    return (
        <>
            {/* 주문자, 수령인명, 아이디 */}
            <div className="order-wrapper-four">
                <div style={{width: '150px', borderRight: '2px solid #dddddd', }}>
                    <Text content="주문자" customStyle={{fontSize:'13px', fontWeight:700, width: '200px', height: '70px', margin: '25px'}} />
                </div>
                <div >
                    <Input customStyle={{width: '220px', height:'20px', margin: '25px', border: '1px solid #dddddd', borderRadius: '5px'}} />
                </div>


                <div style={{width: '130px', borderLeft: '2px solid #dddddd', }}>
                    <Text content="수령인명" customStyle={{fontSize:'13px', fontWeight:700, width: '200px', height: '70px', margin: '25px'}} />
                </div>

                <div >
                    <Input customStyle={{width: '220px', height:'20px', margin: '25px', border: '1px solid #dddddd', borderRadius: '5px'}} />
                </div>

                <div style={{width: '130px', borderLeft: '2px solid #dddddd', }}>
                    <Text content="아이디" customStyle={{fontSize:'13px', fontWeight:700, width: '200px', height: '70px', margin: '25px'}} />
                </div>

                <div >
                    <Input customStyle={{width: '220px', height:'20px', margin: '25px', border: '1px solid #dddddd', borderRadius: '5px'}} />
                </div>

            </div>
        </>
    )
}

export default OrderLineThree;