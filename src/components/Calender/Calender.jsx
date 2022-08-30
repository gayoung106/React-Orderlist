import React, {useState} from 'react';
import './Calender.css'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from "date-fns/esm/locale";

const Calender = () => {
    const [month, setMonth] = useState(new Date().getMonth());

    const handleMonthChange = (startDate) => {
        setMonth(startDate.getMonth());
    }

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate ] = useState(new Date());

    return (
        <>
        <DatePicker
        locale={ko}
        dateFormat="yyyy-MM-dd"
        selected={startDate}
        onChange={(selectDate) => setStartDate(selectDate)}
        onMonthChange={handleMonthChange}
        />

        <DatePicker
        locale={ko}
        dateFormat="yyyy-MM-dd"
        selected={endDate}
        onChange={(selectDate) => setEndDate(selectDate)}
        onMonthChange={handleMonthChange}
        />
        </>
    )
}

export default Calender;