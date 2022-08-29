import React from 'react';
import './OrderList.css';
import { DataGrid } from '@mui/x-data-grid';

const OrderList = () => {
    const columns = [
        {field: 'id', headerName: 'ID', width: 70},
        {field: 'firstName', headerName: 'First Name', width: 70},
        {field: 'lastName', headerName: 'Last Name', width: 70},
        {
            field: 'age',
            headerName: 'number',
            type: 'number',
            width:70,
        },
        {
            field: 'fullName',
            headerName: 'Full Name',
            description: 'bbbbbbbbbbbbbb',
            sortable: false,
            width:160,
        },
    ]
  return <div className="orderList"></div>
}

export default OrderList