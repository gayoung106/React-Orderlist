import React from 'react'
import './Errordeliverycode'
import Title from '../../components/Title/Title'
import CodeLineOne from './DeliveryCode/CodeLineOne'
import CodeLineTwo from './DeliveryCode/CodeLineTwo'
import OrderLineButton from '../Totalorder/OrderLine/OrderLineButton'

const Errordeliverycode = () => {
  return (
    <div>
      <div className="table-wrap">
       <Title content="운송장요청오류조회" sub="검색"/>
       <CodeLineOne />
       <CodeLineTwo />
       <OrderLineButton />
      </div>
    </div>
  )
}

export default Errordeliverycode