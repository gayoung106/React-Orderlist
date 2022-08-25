import React from 'react'
import './dashboard.css';
import Text from "../../components/Text/Text";

const Dashboard = () => {
  return (
      <div className="dashboard-wrap">
        <Text content="입금 대기" fontSize="20px" />
        <Text content="대기" fontSize="20px" />
        <Text content="전체주문" fontSize="20px" />
      </div>
  )
}

export default Dashboard