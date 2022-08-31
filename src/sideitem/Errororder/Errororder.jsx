import React from 'react'
import './Errororder.css'
import Title from '../../components/Title/Title';
import ErrorLineOne from "../../sideitem/Errororder/ErrorOrderLine/ErrorLineOne";
import ErrorLineTwo from "../../sideitem/Errororder/ErrorOrderLine/ErrorLineTwo";
import OrderLineButton from '../Totalorder/OrderLine/OrderLineButton';

const Errororder = () => {

 

  return (
    <div>
      <div className="table-wrap">
       <Title content="결제오류조회" sub="검색"/>
       <div className="total-orderlist-wrap">
        <ErrorLineOne />
        <ErrorLineTwo />
        <OrderLineButton />
       </div>
      </div>
    </div>
  )
}

export default Errororder