import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import ru from 'date-fns/locale/ru';
import "react-datepicker/dist/react-datepicker.css";
import calendar from "./calendar.module.css";
registerLocale('ru', ru)

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export const Calendar = () => {
  const handleCalendarClose = () => console.log("Calendar closed");
  const handleCalendarOpen = () => console.log("Calendar opened");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates:any) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  return (
    <div className={calendar.container}>
      <div className={calendar.header}>
        <h2 className={calendar.header__title}>Выбрать дату</h2>
        <button className={calendar.close} type='button'></button>
      </div>
      <DatePicker
                locale = {ru}
                calendarClassName = {calendar.datepicker}
                placeholderText = "Выбрать дату"
                dateFormat="dd/MM/yyyy" 
                startDate={startDate}
                endDate={endDate}
                onChange={onChange}
                selectsRange               
                monthsShown={2}
                inline
                onCalendarClose={handleCalendarClose}
                onCalendarOpen={handleCalendarOpen}
                shouldCloseOnSelect={false}                
      >
      </DatePicker>
    <div className={calendar.footer}>
      <button className={calendar.footerButton} type="button">Отменить</button>
      <button className={calendar.footerButton} type="button">Выбрать</button>
    </div>    
    </div>
  );
};