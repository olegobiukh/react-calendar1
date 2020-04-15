import './index.scss'

import React, { useState } from 'react'
import Input from 'components/Input'

const CalendarPopup = () => {

  const [date, setDate] = useState(26)


  const formDaysArray =(start, end)=> {
    let newArr = [];
    for (let i = start; i <= end; i++) {
      newArr = [...newArr, i]
    }
    return newArr
  }
  const current = 10;
  const weekDays = ['su', 'mo', 'tu', 'we', 'th', 'fr', 'sa'];
  const prevMonthDays = formDaysArray(25, 30);
  const currentMonthDays = formDaysArray(1, 30);
  const nextMonthDays = formDaysArray(1, 6);
  const chosenDate = date ? `06/${date}/2019` : null;

  return (
    <div className="calendar">
      <Input 
        label="Date" 
        inputClassName="custom-input custom-input--caption" 
        placeholder="Choose"
        value={chosenDate}
        icon="calendar"
      />
      <div className="calendar__wrapper">
        <div className="calendar__top">
          <button type="button" className={`calendar__button calendar__button--prev`}></button>
          <span className={`calendar__date`}>June, 2019</span>
          <button type="button" className={`calendar__button calendar__button--next`}></button>
        </div>
        <div className="calendar__container">
          <div className="calendar__head">
            {weekDays.map((item, index) => <span key={index} className="calendar__cell">{item}</span>)}
          </div>
          <div className="calendar__body">
          {prevMonthDays.map((item, index) => <span key={index} className="calendar__cell calendar__cell--prev">{item}</span>)}
          {currentMonthDays.map((item, index) => (
            <span 
              key={index} 
              onClick={()=>setDate(item)}
              className={`calendar__cell ${current=== item ? 'calendar__cell--current': date === item ? 'calendar__cell--chosen' : null}`}>
                {item}
            </span>))
          }
          {nextMonthDays.map((item, index) => <span key={index} className="calendar__cell calendar__cell--next">{item}</span>)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CalendarPopup
