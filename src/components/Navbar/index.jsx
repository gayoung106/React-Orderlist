import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
  <>
  <div className="navbar-wrap">
    <div className="nav-items">
      <Link to="/dashboard" className="nav-item">대시보드</Link>
      <Link to="/memberlist" className="nav-item">회원관리</Link>
      <Link to="/productlist" className="nav-item">상품관리</Link>
      <Link to="/totalorder" className="nav-item">주문관리</Link>
      <Link to="/displaylist" className="nav-item">전시관리</Link>
      <Link to="/promotionlist" className="nav-item">프로모션관리</Link>
      <Link to="/vendorlist" className="nav-item">입점사관리</Link>
      <Link to="/customerlist" className="nav-item">고객센터</Link>
      <Link to="/systemlist" className="nav-item">시스템관리</Link>
      <Link to="/datalist" className="nav-item">정산/통계</Link>
      <Link to="/manageredit" className="nav-item">관리자정보수정</Link>
    </div>
  </div>
  </>
  );
};

export default Navbar;
