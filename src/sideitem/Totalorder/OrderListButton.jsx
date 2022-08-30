import React from 'react'
import Button from '../../components/Button/Button'
import './OrderListButton.css'


const OrderListButton = () => {
  return (
    <div className="list-button-wrapper">
      <div>
        <Button className="delivery-total-upload" >송장일괄등록</Button>
      </div>
      <div>
        <Button className="excel-download">엑셀다운로드</Button>
      </div>
    </div>
  )
}

export default OrderListButton