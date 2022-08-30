import React from 'react'
import './Returnorder.css'
import Order from "../../components/Order/Order";

const Returnorder = () => {
  return (
    <div>
      <Order content="반품관리"
             notice1="* 반품접수, 반품대기중, 반품승인, 반품완료, 반품불가, 반품취소 상태의 주문을 확인할 수 있습니다."
            notice2="* 신용카드, 계좌이체 /가상계좌 일부는 반품완료 시 즉시 결제취소 됩니다."
            notice3="* 즉시 결제취소(환불)가 불가능한 주문은 반품완료 시 환불접수 처리되며, 환불관리 목록에서도 확인 가능합니다."/>
    </div>
  )
}

export default Returnorder