import React from 'react'
import './Exchangeorder.css'
import Order from "../../components/Order/Order";

const Exchangeorder = () => {
  return (
    <div>
      <Order content="교환관리"
             notice1="* 교환접수, 교환대기중, 교환승인, 교환배송중, 교환완료, 교환불가, 교환취소 상태의 주문을 확인할 수 있습니다." />
    </div>
  )
}

export default Exchangeorder