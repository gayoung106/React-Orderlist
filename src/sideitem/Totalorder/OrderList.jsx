import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {useRef} from "react";
import { useDownloadExcel } from 'react-export-table-to-excel';
import Button from "../../components/Button/Button";
import './OrderList.css';


const OrderList = () => {

  const tableRef = useRef(null);

  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: 'Users table',
    sheet: 'Users'
  })

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

  ];

  return (


    <div style={{ height: 400, width: '1300px', marginTop: '20px'}}>

    <DataGrid inputRef={tableRef} aline="center"
      rows={rows}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      checkboxSelection
    />
      <div className="list-button-wrapper">
        <div>
          <Button className="delivery-total-upload" >송장일괄등록</Button>
        </div>
        <div>
          <Button onClick={onDownload}> 엑셀다운로드 </Button>
        </div>
      </div>
  </div>
  )
}

export default OrderList