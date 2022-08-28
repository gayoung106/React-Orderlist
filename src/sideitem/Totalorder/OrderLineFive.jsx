import React from 'react';
import Text from "../../components/Text/Text";
import Input from "../../components/Input/Input";
import './OrderLineFive.css';
import SelectBox from "../../components/SelectBox/SelectBox";

const OrderLineFive = () => {
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
        { id: 1, value: "state", name: "배송구분 선택" },
        { id: 2, value: "1", name: "1" },
        { id: 3, value: "2", name: "2" },
        { id: 4, value: "3", name: "3" },
        { id: 5, value: "4", name: "4" },
    ];

    return (
        <>
            {/* 입점업체, 브랜드, 회원구분 */}
            <div className="order-wrapper-five">
                <div style={{width: '200px', borderRight: '1px solid #000', }}>
                    <Text content="입점업체" customStyle={{width: '200px', height: '70px', margin: '25px'}} />
                </div>
                <div style={{marginLeft: '28px', marginRight: '20px'}}>
                    <SelectBox options={OPTIONS1} defaultValue="state"></SelectBox>
                </div>


                <div style={{width: '140px', borderLeft: '1px solid #000', }}>
                    <Text content="브랜드" customStyle={{width: '100px', height: '70px', margin: '25px'}} />
                </div>

                <div style={{marginLeft: '28px', marginRight: '20px'}}>
                    <SelectBox options={OPTIONS2} defaultValue="state"></SelectBox>
                </div>

                <div style={{width: '200px', borderLeft: '1px solid #000', }}>
                    <Text content="회원구분" customStyle={{width: '200px', height: '70px', margin: '25px'}} />
                </div>

                <div style={{marginLeft: '28px'}}>
                    <SelectBox options={OPTIONS3} defaultValue="state"></SelectBox>
                </div>

            </div>
        </>
    )
}

export default OrderLineFive;