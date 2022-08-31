import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './CodeList.css';
import Button from '../../../components/Button/Button';
import {useRef} from "react";
import { useDownloadExcel } from 'react-export-table-to-excel';

const CodeList = () => {
    const tableRef = useRef(null);

    const { onDownload } = useDownloadExcel({
      currentTableRef: tableRef.current,
      filename: 'Users table',
      sheet: 'Users'
    })
    
    const columns = [
        { field: 'order_no', headerName: '주문번호', width: 120 },
        { field: 'date', headerName: '요청일', width: 120 },
        { field: 'brand', headerName: '판매자명', width: 120 },
        { field: 'shop', headerName: '매장명', width: 120 },
        { field: 'delivery_part', headerName: '배송구분', width: 120 },
        { field: 'delivery_shop', headerName: '택배사명', width: 120 },
        { field: 'delivery_code', headerName: '운송장번호', width: 120 },
        { field: 'order_state', headerName: '주문상태', width: 120 },
        { field: 'error', headerName: '오류내역', width: 300 },
       
      ];
      
      const rows = [

       
      ];
  return (
    <div style={{ height: 400, width: '1300px', marginTop: '100px'}}>
    <DataGrid inputRef={tableRef}
      rows={rows}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      
    />
          <div className="list-button-wrapper">

        <div>
          <Button onClick={onDownload}> 엑셀다운로드 </Button>
        </div>
      </div>
  </div>
  )
}

export default CodeList