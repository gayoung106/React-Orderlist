import React from 'react';
import Text from "../../components/Text/Text";
import Input from "../../components/Input/Input";
import './OrderLineThree.css'

const OrderLineThree = () => {
    return (
        <>
            {/* 주문자, 수령인명, 아이디 */}
            <div className="order-wrapper-four">
                <div style={{width: '150px', borderRight: '2px solid #6f79a8', }}>
                    <Text content="주문자" customStyle={{fontSize:'15px', width: '200px', height: '70px', margin: '25px'}} />
                </div>
                <div >
                    <Input customStyle={{width: '220px', margin: '25px'}} />
                </div>


                <div style={{width: '130px', borderLeft: '2px solid #6f79a8', }}>
                    <Text content="수령인명" customStyle={{fontSize:'15px', width: '100px', height: '70px', margin: '25px'}} />
                </div>

                <div >
                    <Input customStyle={{width: '220px', margin: '25px'}} />
                </div>

                <div style={{width: '130px', borderLeft: '2px solid #6f79a8', }}>
                    <Text content="아이디" customStyle={{fontSize:'15px', width: '200px', height: '70px', margin: '25px'}} />
                </div>

                <div >
                    <Input customStyle={{width: '220px', margin: '25px'}} />
                </div>

            </div>
        </>
    )
}

export default OrderLineThree;