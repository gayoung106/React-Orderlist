import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {useRef} from "react";
import { useDownloadExcel } from 'react-export-table-to-excel';
import './CompletedList.css'
import Button from '../../../components/Button/Button';

const CompletedList = () => {
    
  const tableRef = useRef(null);

  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: 'Users table',
    sheet: 'Users'
  })

  const columns = [
    { field: 'date', headerName: '주문일자', width: 120},
    { field: 'order_no', headerName: '주문번호', width: 120 },
    { field: 'completed_date', headerName: '배송처리일시', width: 150 },
    { field: 'vendor', headerName: '업체명', width: 200 },
    { field: 'delivery_shop', headerName: '택배사', width: 120 },
    { field: 'delivery_code', headerName: '송장번호', width: 150 },
    { field: 'product_name', headerName: '대표상품명', width: 300 },

  ];

  const rows = [
   

  ];

  return (
   

    <div style={{ height: 400, width: '1300px', marginTop: '100px'}}>

    <DataGrid inputRef={tableRef} aline="center"
      rows={rows}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      checkboxSelection
    />
    <div className="list-button-wrapper">
        <div>
          <Button className="delivery-total-upload" >배송완료처리</Button>
        </div>
        <div>
          <Button onClick={onDownload}> 엑셀다운로드 </Button>
        </div>
      </div>
      
  </div>
  )
}
export default CompletedList