import React from 'react'
import './Cancelorder.css'
import Order from "../../components/Order/Order";

const Cancelorder = () => {
  return (
    <div>
      <Order content="취소관리"
             notice1="* 승인 즉시 취소(환불)가 불가능한 주문에 대한 입금 완료 후, 취소완료 처리를 위한 관리 목록입니다."
             notice2="* 주문취소, 취소접수, 취소완료 상태의 주문을 확인할 수 있습니다."/>
    </div>
  )
}

export default Cancelorder