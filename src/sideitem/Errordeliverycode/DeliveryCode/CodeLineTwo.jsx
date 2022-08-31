import React from 'react'
import './CodeLineTwo.css'
import Text from '../../../components/Text/Text'
import SelectBox from '../../../components/SelectBox/SelectBox';

const CodeLineTwo = () => {
    const OPTIONS1 = [
        { id: 1, value: "state", name: "선택" },
        { id: 2, value: "1", name: "1" },
        { id: 3, value: "2", name: "2" },
        { id: 4, value: "3", name: "3" },
        { id: 5, value: "4", name: "4" },
    ];

  return (
    <>
            {/* 배송구분*/}
            <div className="order-wrapper-two">
                <div style={{width: '150px', borderRight: '2px solid #dddddd', }}>
                    <Text content="배송구분" customStyle={{fontSize:'13px', fontWeight:700, width: '200px', height: '70px', margin: '25px'}} />
                </div>

                <div style={{marginLeft: '28px', marginRight: '25px'}}>
                    <SelectBox options={OPTIONS1} customStyle={{width: '225px', height: '25px', border: '1px solid #dddddd', borderRadius: '5px'}} defaultValue="state"></SelectBox>
                </div>

            </div>
        </>
  )
}

export default CodeLineTwo