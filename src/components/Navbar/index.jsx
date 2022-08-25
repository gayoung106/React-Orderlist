import React from "react";
import "./styles.css";
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
  <>
  <div className="navbar-wrap">
    <div className="nav-items">
    <a href="/">대시보드</a>
    <a href="/" className="nav-item">회원관리</a>
    <a href="/" className="nav-item">상품관리</a>
    <a href="/" className="nav-item">주문관리</a>
    <a href="/" className="nav-item">전시관리</a>
    <a href="/" className="nav-item">프로모션관리</a>
    <a href="/" className="nav-item">입점사관리</a>
    <a href="/" className="nav-item">고객센터</a>
    <a href="/" className="nav-item">시스템관리</a>
    <a href="/" className="nav-item">정산/통계</a>
    <a href="/" className="nav-item">관리자정보수정</a>
    </div>
  </div>
  </>
  );
};

export default Navbar;
