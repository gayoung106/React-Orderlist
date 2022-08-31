import React from 'react'
import './ErrorLineTwo.css'
import Text from '../../../components/Text/Text'
import SelectBox from '../../../components/SelectBox/SelectBox'
import Input from '../../../components/Input/Input'

const ErrorLineTwo = () => {

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
    {/* 주문번호, 오류구분, 카드종류 */}
    <div className="order-wrapper-five">
        <div style={{width: '150px', borderRight: '2px solid #dddddd', }}>
            <Text content="주문번호" customStyle={{fontSize:'13px', fontWeight:700, width: '200px', height: '70px', margin: '25px'}} />
        </div>
        <div >
            <Input customStyle={{width: '220px', height:'20px', margin: '25px', border: '1px solid #dddddd', borderRadius: '5px'}} />
        </div>


        <div style={{width: '130px', borderLeft: '2px solid #dddddd', }}>
            <Text content="오류구분" customStyle={{fontSize:'13px', fontWeight:700, width: '200px', height: '70px', margin: '25px'}} />
        </div>

        <div style={{marginLeft: '26px', marginRight: '25px'}}>
            <SelectBox options={OPTIONS2} customStyle={{fontFamily: 'Welcome',width: '225px', height: '25px', border: '1px solid #dddddd', borderRadius: '5px'}} defaultValue="state"></SelectBox>
        </div>

        <div style={{width: '130px', borderLeft: '2px solid #dddddd', }}>
            <Text content="카드종류" customStyle={{fontSize:'13px', fontWeight:700, width: '200px', height: '70px', margin: '25px'}} />
        </div>

        <div style={{marginLeft: '25px'}}>
            <SelectBox options={OPTIONS3} customStyle={{fontFamily: 'Welcome',width: '225px', height: '25px', border: '1px solid #dddddd', borderRadius: '5px'}} defaultValue="state"></SelectBox>
        </div>
        

    </div>
</>
  )
}

export default ErrorLineTwo