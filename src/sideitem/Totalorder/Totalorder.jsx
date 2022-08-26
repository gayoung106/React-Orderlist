import React from 'react'
import './Totalorder.css'
import Text from "../../components/Text/Text";

const Totalorder = () => {
  return (
    <>
  <div className="table-wrap">
	  <div className="title">
		  <Text content="전체주문" fontSize="25px" />
	  </div>
    <div className="sub-title">
      <img className="check" alt="check-logo" src="img/check.png" />
		  <Text content="전체주문" fontSize="20px" margin="10px">전체주문</Text>
	  </div>

    
      <div className="div-table-body">
        <div className="div-table-row">
          <div className="div-table-cell" id="table-subject_two">주문통합검색</div>
          <div className="div-table-cell" id="table-content_two">
          <input type="text" className="text" name="searchOrderNm" value=""/>
          </div>
        </div>
        <div className="div-table-row">
          <div className="div-table-cell" id="table-subject_two">주문일자</div>
          <div className="div-table-cell" id="table-content_two">&nbsp;</div>
        </div>
        <div className="div-table-row">
          <div className="div-table-cell" id="table-subject_two">주문자</div>
          <div className="div-table-cell" id="table-content_six">&nbsp;</div>
          <div className="div-table-cell" id="table-subject_two">수령인명</div>
          <div className="div-table-cell" id="table-content_six">&nbsp;</div>
          <div className="div-table-cell" id="table-subject_two">아이디</div>
          <div className="div-table-cell" id="table-content_six">&nbsp;</div>
        </div>
        <div className="div-table-row">
          <div className="div-table-cell" id="table-subject_two">상품코드</div>
          <div className="div-table-cell" id="table-content_six">&nbsp;</div>
          <div className="div-table-cell" id="table-subject_two">연락처</div>
          <div className="div-table-cell" id="table-content_six">&nbsp;</div>
          <div className="div-table-cell" id="table-subject_two">주문번호</div>
          <div className="div-table-cell" id="table-content_six">&nbsp;</div>
        </div>
        <div className="div-table-row">
          <div className="div-table-cell" id="table-subject_two">입점업체</div>
          <div className="div-table-cell" id="table-content_six">&nbsp;</div>
          <div className="div-table-cell" id="table-subject_two">브랜드</div>
          <div className="div-table-cell" id="table-content_six">&nbsp;</div>
          <div className="div-table-cell" id="table-subject_two">회원구분</div>
          <div className="div-table-cell" id="table-content_six">&nbsp;</div>
        </div>
        <div className="div-table-row">
          <div className="div-table-cell" id="table-subject_two">카테고리</div>
          <div className="div-table-cell" id="table-content_four">&nbsp;</div>
          <div className="div-table-cell" id="table-subject_two">상품유형</div>
          <div className="div-table-cell" id="table-content_four">&nbsp;</div>
        </div>
        <div className="div-table-row">
          <div className="div-table-cell" id="table-subject_two">상품명</div>
          <div className="div-table-cell" id="table-content_four">&nbsp;</div>
          <div className="div-table-cell" id="table-subject_two">자사/타사</div>
          <div className="div-table-cell" id="table-content_four">&nbsp;</div>
        </div>
        <div className="div-table-row">
          <div className="div-table-cell" id="table-subject_two">결제수단</div>
          <div className="div-table-cell" id="table-content_four">&nbsp;</div>
          <div className="div-table-cell" id="table-subject_two">주문경로</div>
          <div className="div-table-cell" id="table-content_four">&nbsp;</div>
        </div>
      </div>
    

  </div>
</>
  )
}

export default Totalorder