import React from 'react';
import Text from "../../../components/Text/Text";
import './OrderLineEight.css'
import SelectBox from "../../../components/SelectBox/SelectBox";
import RadioButton from '../../../components/RadioButton/RadioButton';
import CheckBox from '../../../components/CheckBox/CheckBox';

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
                <div style={{width: '150px', borderRight: '2px solid #dddddd', }}>
                    <Text content="결제수단" customStyle={{fontSize:'13px', fontWeight:700, width: '200px', height: '70px', margin: '25px'}} />
                </div>
                <div style={{marginLeft: '26px'}}>
                    <SelectBox options={OPTIONS1} customStyle={{fontFamily: 'Welcome',width: '225px', height: '25px', border: '1px solid #dddddd', borderRadius: '5px'}} defaultValue="state"></SelectBox>
                </div>
                <div style={{marginLeft: '28px'}}>
                    <SelectBox options={OPTIONS2} customStyle={{fontFamily: 'Welcome',width: '225px', height: '25px', border: '1px solid #dddddd', borderRadius: '5px'}} defaultValue="state" disabled ></SelectBox>
                </div>
                <div>
                    <label style={{marginRight: '94px'}}>
                    <CheckBox /> 포인트사용
                    </label>
                </div>



                <div style={{width: '150px', borderLeft: '2px solid #dddddd', }}>
                    <Text content="주문경로" customStyle={{fontSize:'13px', fontWeight:700, width: '200px', height: '70px', margin: '25px'}} />
                </div>

                <div>
                <label>
                <RadioButton name="Radio" value="all" customStyle={{backgroundColor: 'red'}} defaultChecked/> All
                </label>
                <label>
                <RadioButton name="Radio" value="pc" marginRight="5px"/> PC
                </label>
                <label>
                <RadioButton name="Radio" value="mobile" marginRight="5px"/> MOBILE
                </label>
                <label>
                <RadioButton name="Radio" value="app"/> APP
                </label>
                
              
                </div>

            </div>
        </>
    )
}

export default OrderLineEight;