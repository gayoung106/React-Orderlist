import React from 'react';
import Text from "../../../components/Text/Text";
import Input from "../../../components/Input/Input";
import './OrderLineEight.css'
import SelectBox from "../../../components/SelectBox/SelectBox";

const OrderLineEight = () => {
    const OPTIONS1 = [
        { id: 1, value: "state", name: "선택" },
        { id: 2, value: "1", name: "1" },
        { id: 3, value: "2", name: "2" },
        { id: 4, value: "3", name: "3" },
        { id: 5, value: "4", name: "4" },
    ];

    const OPTIONS2 = [
        { id: 1, value: "state", name: "선택" },
        { id: 2, value: "1", name: "1" },
        { id: 3, value: "2", name: "2" },
        { id: 4, value: "3", name: "3" },
        { id: 5, value: "4", name: "4" },
    ];
    return (
        <>
            {/* 결제수단, 주문경로 */}
            <div className="order-wrapper-eight">
                <div style={{width: '150px', borderRight: '2px solid #6f79a8', }}>
                    <Text content="결제수단" customStyle={{width: '200px', height: '70px', margin: '25px'}} />
                </div>
                <div style={{marginLeft: '28px'}}>
                    <SelectBox options={OPTIONS1} customStyle={{width: '225px', height: '25px'}} defaultValue="state"></SelectBox>
                </div>
                <div style={{marginLeft: '28px', marginRight: '180px'}}>
                    <SelectBox options={OPTIONS2} customStyle={{width: '225px', height: '25px'}} defaultValue="state"></SelectBox>
                </div>



                <div style={{width: '150px', borderLeft: '2px solid #6f79a8', }}>
                    <Text content="주문경로" customStyle={{width: '200px', height: '70px', margin: '25px'}} />
                </div>

                <div >
                    <Input customStyle={{width: '220px', margin: '10px'}} />
                </div>

            </div>
        </>
    )
}

export default OrderLineEight;