import React from 'react';
import Text from "../../../components/Text/Text";
import './OrderLineSix.css';
import SelectBox from "../../../components/SelectBox/SelectBox";

const OrderLineSix = () => {
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

    const OPTIONS3 = [
        { id: 1, value: "state", name: "전체" },
        { id: 2, value: "1", name: "1" },
        { id: 3, value: "2", name: "2" },
        { id: 4, value: "3", name: "3" },
        { id: 5, value: "4", name: "4" },
    ];

    return (
        <>
            {/* 카테고리, 상품유형 */}
            <div className="order-wrapper-six">
                <div style={{width: '150px', borderRight: '2px solid #dddddd', }}>
                    <Text content="카테고리" customStyle={{fontSize:'13px', fontWeight:700, width: '200px', height: '70px', margin: '25px'}} />
                </div>
                <div style={{marginLeft: '28px'}}>
                    <SelectBox options={OPTIONS1} customStyle={{width: '225px', height: '25px', border: '1px solid #dddddd', borderRadius: '5px'}} defaultValue="state"></SelectBox>
                </div>
                <div style={{marginLeft: '28px', marginRight: '180px'}}>
                    <SelectBox options={OPTIONS2} customStyle={{width: '225px', height: '25px', border: '1px solid #dddddd', borderRadius: '5px'}} defaultValue="state"></SelectBox>
                </div>



                <div style={{width: '150px', borderLeft: '2px solid #dddddd', }}>
                    <Text content="상품유형" customStyle={{fontSize:'13px', fontWeight:700, width: '200px', height: '70px', margin: '25px'}} />
                </div>

                <div style={{marginLeft: '5px'}}>
                    <SelectBox options={OPTIONS3} customStyle={{width: '80px', height: '25px', border: '1px solid #dddddd', borderRadius: '5px'}} defaultValue="state"></SelectBox>
                </div>

            </div>
        </>
    )
}

export default OrderLineSix;