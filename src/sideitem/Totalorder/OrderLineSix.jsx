import React from 'react';
import Text from "../../components/Text/Text";
import Input from "../../components/Input/Input";
import './OrderLineSix.css';

const OrderLineSix = () => {
    return (
        <>
            {/* 카테고리, 상품유형 */}
            <div className="order-wrapper-six">
                <div style={{width: '200px', borderRight: '1px solid #000', }}>
                    <Text content="카테고리" customStyle={{width: '200px', height: '70px', margin: '25px'}} />
                </div>
                <div >
                    <Input customStyle={{width: '700px', margin: '25px'}} />
                </div>



                <div style={{width: '200px', borderLeft: '1px solid #000', }}>
                    <Text content="상품유형" customStyle={{width: '200px', height: '70px', margin: '25px'}} />
                </div>

                <div >
                    <Input customStyle={{width: '300px', margin: '25px'}} />
                </div>

            </div>
        </>
    )
}

export default OrderLineSix;