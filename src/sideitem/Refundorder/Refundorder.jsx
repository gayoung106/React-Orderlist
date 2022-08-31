import React from 'react'
import './Refundorder.css'
import Order from "../../components/Order/Order";

const Refundorder = () => {
  return (
    <div>
      <Order content="환불관리"
              sub="환불관리"
             notice1="* 환불접수, 환불완료 상태의 주문을 확인할 수 있으며, 환불처리 상태만 변경됩니다." />
    </div>
  )
}

export default Refundorder