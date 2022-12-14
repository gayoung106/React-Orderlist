import React from 'react';
import Text from "../../../components/Text/Text";
import Input from "../../../components/Input/Input";
import './OrderLineSeven.css' ;

const OrderLineSeven = () => {
    return (
        <>
            {/* 상품명, 자사/타사 */}
            <div className="order-wrapper-seven">
                <div style={{width: '150px', borderRight: '2px solid #dddddd', }}>
                    <Text content="상품명" customStyle={{fontSize:'13px', fontWeight:700, width: '200px', height: '70px', margin: '25px'}} />
                </div>
                <div >
                    <Input customStyle={{width: '472px', height: '20px', marginLeft: '25px', marginRight: '182px', border: '1px solid #dddddd', borderRadius: '5px'}} />
                </div>



                <div style={{width: '150px', borderLeft: '2px solid #dddddd', }}>
                    <Text content="자사/타사" customStyle={{fontSize:'13px', fontWeight:700, width: '200px', height: '70px', margin: '25px'}} />
                </div>

                <div >
                    <Input customStyle={{width: '220px', height: '20px', margin: '10px', border: '1px solid #dddddd', borderRadius: '5px'}} />
                </div>

            </div>
        </>
    )
}

export default OrderLineSeven;