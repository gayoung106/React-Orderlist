import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const OrderList = () => {
  const columns = [
    { field: 'date', headerName: '주문일시', width: 77},
    { field: 'user1', headerName: '주문자', width: 77 },
    { field: 'user2', headerName: '수령인', width: 77 },
    { field: 'vendor', headerName: '입점업체', width: 77 },
    { field: 'brand', headerName: '브랜드', width: 77 },
    { field: 'type', headerName: '상품유형', width: 77 },
    { field: 'image', headerName: '이미지', width: 77 },
    { field: 'product', headerName: '상품명', width: 77 },
    { field: 'price', headerName: '상품가격', width: 77 },
    { field: 'ea', headerName: '수량', width: 77 },
    { field: 'discount', headerName: '할인금액', width: 77 },
    { field: 'delivery_fee', headerName: '배송비', width: 77 },
    { field: 'total_price', headerName: '결제금액', width: 77 },
    { field: 'delivery_path', headerName: '주문경로', width: 77 },
    { field: 'delivery_part', headerName: '배송구분', width: 77 },
    { field: 'delivery_state', headerName: '배송상태', width: 77 },
  ];

  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

  return (
    <div style={{ height: 400, width: '1300px', marginTop: '100px'}}>
    <DataGrid aline="center"
      rows={rows}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      checkboxSelection
    />
  </div>
  )
}

export default OrderList