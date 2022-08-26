import React from "react";
import "./styles.css";
import { Link } from 'react-router-dom'


const SidebarLeft = () => {
  return (
  <>
    <div className="sidebarLeft-wrap">         
     <div className="side-left-items">
          <div className="side-left-item"><Link to="/totalorder" id="item">전체주문관리</Link></div>
          <div className="side-left-item"><Link to="/cancelorder" id="item">취소관리</Link></div>
          <div className="side-left-item"><Link to="/exchangeorder" id="item">교환관리</Link></div>
          <div className="side-left-item"><Link to="/returnorder" id="item">반품관리</Link></div>
          <div className="side-left-item"><Link to="/refundorder" id="item">환불관리</Link></div>
          <div className="side-left-item"><Link to="/errororder" id="item">결제오류조회</Link></div>
          <div className="side-left-item"><Link to="/errordeliverycode" id="item">운송장요청오류조회</Link></div>
          <div className="side-left-item"><Link to="/completedelivery" id="item">배송완료일괄처리</Link></div>
     </div>
    </div>
   
  </>

  );
};

export default SidebarLeft;
