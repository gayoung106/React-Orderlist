import React from 'react'
import './CompletedLineOne.css'
import SelectBox from '../../../components/SelectBox/SelectBox';
import Input from '../../../components/Input/Input';

const CompletedLineOne = () => {
  const OPTIONS2 = [
    { id: 1, value: "state", name: "검색조건 선택" },
    { id: 2, value: "1", name: "송장번호" },
    { id: 3, value: "2", name: "주문번호" },
];
  return (
    <>
    {/* 주문통합검색*/}
    <div className="completed-wrapper">
      <div style={{ borderRight: '2px solid #dddddd', height: '80px', display: 'grid', alignItems: 'center'  }}>
        <SelectBox options={OPTIONS2} customStyle={{width: '200px', height: '25px', border: '1px solid #dddddd', borderRadius: '5px', marginLeft:'15px', marginRight: '30px'}} defaultValue="state" ></SelectBox>
      </div>
      <div style={{marginLeft: '28px'}}>
        <Input customStyle={{width: '900px', height:'80px', margin: '25px', border: '1px solid #dddddd', borderRadius: '5px'}} />
      </div>
      </div>
   
</>
  )
}

export default CompletedLineOne