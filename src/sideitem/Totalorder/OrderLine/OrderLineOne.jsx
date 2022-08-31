import React from 'react';
import Text from "../../../components/Text/Text";
import './OrderLineOne.css'
import SelectBox from "../../../components/SelectBox/SelectBox";

const OrderLineOne = () => {
    const OPTIONS1 = [
        { id: 1, value: "state", name: "주문상태 선택" },
        { id: 2, value: "1", name: "1" },
        { id: 3, value: "2", name: "2" },
        { id: 4, value: "3", name: "3" },
        { id: 5, value: "4", name: "4" },
    ];

    const OPTIONS2 = [
        { id: 1, value: "state", name: "배송구분 선택" },
        { id: 2, value: "1", name: "1" },
        { id: 3, value: "2", name: "2" },
        { id: 4, value: "3", name: "3" },
        { id: 5, value: "4", name: "4" },
    ];

    return (
        <>
                {/* 주문통합검색*/}
            <div className="order-wrapper-one">
                <div style={{width: '150px', borderRight: '2px solid #dddddd', }}>
                    <Text content="주문통합검색" customStyle={{fontSize:'13px', fontWeight:700, width: '200px', height: '70px', margin: '25px'}} />
                </div>

                <div style={{marginLeft: '28px'}}>
                    <SelectBox options={OPTIONS1} customStyle={{fontFamily: 'Welcome',width: '225px', height: '25px', border: '1px solid #dddddd', borderRadius: '5px'}} defaultValue="state"></SelectBox>
                </div>

                <div style={{marginLeft: '28px'}}>
                    <SelectBox options={OPTIONS2} customStyle={{fontFamily: 'Welcome',width: '225px', height: '25px', border: '1px solid #dddddd', borderRadius: '5px'}} defaultValue="state" ></SelectBox>
                </div>

            </div>
        </>

    )
}

export default OrderLineOne;