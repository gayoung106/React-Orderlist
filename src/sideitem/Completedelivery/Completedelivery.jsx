import React from 'react'
import './Completedelivery.css'
import Title from '../../components/Title/Title'
import CompletedLineOne from './CompletedLine/CompletedLineOne'
import OrderLineButton from '../Totalorder/OrderLine/OrderLineButton'
import CompletedList from './CompletedLine/CompletedList'



const Completedelivery = () => {
  return (
    <div>
      <div className="table-wrap">
        <Title content="배송완료일괄처리" sub="검색"/>
       <div className="completed-wrap">
        <CompletedLineOne />
        <OrderLineButton />
        <CompletedList />
      </div>
      </div>
    </div>
  )
}


export default Completedelivery