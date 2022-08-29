import React from 'react'
import Button from '../../../components/Button/Button';
import './OrderLineButton.css'

const OrderLineButton = () => {
  return (
    <div className="button-wrapper">
      <div>
        <Button className="button-initialization" >검색조건 초기화</Button>
      </div>
      <div>
        <Button className="button-search">검색</Button>
      </div>
    </div>
  )
}

export default OrderLineButton