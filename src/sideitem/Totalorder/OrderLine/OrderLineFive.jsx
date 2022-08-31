import React from 'react';
import Text from "../../../components/Text/Text";
import Input from "../../../components/Input/Input";
import './OrderLineFive.css';
import SelectBox from "../../../components/SelectBox/SelectBox";

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
        { id: 1, value: "state", name: "전체" },
        { id: 2, value: "1", name: "1" },
        { id: 3, value: "2", name: "2" },
        { id: 4, value: "3", name: "3" },
        { id: 5, value: "4", name: "4" },
    ];

    return (
        <>
            {/* 입점업체, 브랜드, 회원구분 */}
            <div className="order-wrapper-five">
                <div style={{width: '150px', borderRight: '2px solid #dddddd', }}>
                    <Text content="입점업체" customStyle={{fontSize:'13px', fontWeight:700, width: '200px', height: '70px', margin: '25px'}} />
                </div>
                <div style={{marginLeft: '28px', marginRight: '25px'}}>
                    <SelectBox options={OPTIONS1} customStyle={{fontFamily: 'Welcome',width: '225px', height: '25px', border: '1px solid #dddddd', borderRadius: '5px'}} defaultValue="state"></SelectBox>
                </div>


                <div style={{width: '130px', borderLeft: '2px solid #dddddd', }}>
                    <Text content="브랜드" customStyle={{fontSize:'13px', fontWeight:700, width: '200px', height: '70px', margin: '25px'}} />
                </div>

                <div style={{marginLeft: '26px', marginRight: '25px'}}>
                    <SelectBox options={OPTIONS2} customStyle={{fontFamily: 'Welcome',width: '225px', height: '25px', border: '1px solid #dddddd', borderRadius: '5px'}} defaultValue="state"></SelectBox>
                </div>

                <div style={{width: '130px', borderLeft: '2px solid #dddddd', }}>
                    <Text content="회원구분" customStyle={{fontSize:'13px', fontWeight:700, width: '200px', height: '70px', margin: '25px'}} />
                </div>

                <div style={{marginLeft: '25px'}}>
                    <SelectBox options={OPTIONS3} customStyle={{fontFamily: 'Welcome',width: '80px', height: '25px', border: '1px solid #dddddd', borderRadius: '5px'}} defaultValue="state"></SelectBox>
                </div>
                <div >
                    <Input customStyle={{width: '140px', margin: '5px',  height: '20px', border: '1px solid #dddddd', borderRadius: '5px'}} />
                </div>

            </div>
        </>
    )
}

export default OrderLineFive;