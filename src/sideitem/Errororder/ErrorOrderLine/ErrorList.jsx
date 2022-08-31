import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const ErrorList = () => {
    const columns = [
        { field: 'no', headerName: '번호', width: 70 },
        { field: 'part', headerName: '구분', width: 70 },
        { field: 'order_no', headerName: '주문번호', width: 90 },
        { field: 'card', headerName: '카드명', width: 70 },
        { field: 'id', headerName: '회원아이디', width: 90 },
        { field: 'error_date', headerName: '오류일시', width: 90 },
        { field: 'error_msg', headerName: '오류메세지', width: 800 },
       
      ];
      
      const rows = [

       
      ];

  return (
    <div style={{ height: 400, width: '1300px', marginTop: '100px'}}>
    <DataGrid 
      rows={rows}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      
    />
    
  </div>
  )
}

export default ErrorList