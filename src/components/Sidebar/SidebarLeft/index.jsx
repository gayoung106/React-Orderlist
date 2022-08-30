import React from "react";
import "./styles.css";
import { Link } from 'react-router-dom'
import SidebarItem from "./SidebarItem";


const SidebarLeft = () => {

  const menus = [
    { name: "전체주문관리", path: "/totalorder"},
    { name: "취소관리", path: "/cancelorder"},
    { name: "교환관리", path: "/exchangeorder"},
    { name: "반품관리", path: "/returnorder"},
    { name: "환불관리", path: "/refundorder"},
    { name: "결제오류조회", path: "/errororder"},
    { name: "운송장요청오류조회", path: "/errordeliverycode"},
    { name: "배송완료일괄처리", path: "/completedelivery"},

  ]
  return (

    <div className="sidebarLeft">
       {menus.map((menu, index) => {
        return (
          <Link to={menu.path} key={index} style={{ textDecoration: 'none', fontSize: '15px'}}>
            <SidebarItem
              menu={menu}
            />
          </Link>
        );
      })}
    </div>
  // <>
  //   <div className="sidebarLeft-wrap">         
  //    <div className="side-left-items">
  //         <div className="side-left-item"><Link to="/totalorder" id="item">전체주문관리</Link></div>
  //         <div className="side-left-item"><Link to="/cancelorder" id="item">취소관리</Link></div>
  //         <div className="side-left-item"><Link to="/exchangeorder" id="item">교환관리</Link></div>
  //         <div className="side-left-item"><Link to="/returnorder" id="item">반품관리</Link></div>
  //         <div className="side-left-item"><Link to="/refundorder" id="item">환불관리</Link></div>
  //         <div className="side-left-item"><Link to="/errororder" id="item">결제오류조회</Link></div>
  //         <div className="side-left-item"><Link to="/errordeliverycode" id="item">운송장요청오류조회</Link></div>
  //         <div className="side-left-item"><Link to="/completedelivery" id="item">배송완료일괄처리</Link></div>
  //    </div>
  //   </div>
   
  // </>

  );
};

export default SidebarLeft;
