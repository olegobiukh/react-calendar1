import React, { useState } from 'react'
import Input from 'components/Input'
import styled from 'styleguide/styled';
import { css } from '@emotion/core';
import { colors } from 'styleguide/theme.json';
import nextImg from '../../icons/arrow-next.svg';
import prevImg from '../../icons/arrow-prev.svg';

const CalendarWrapper = styled.div`
  margin-top: 8px;
  box-shadow: 0px 18px 50px ${colors.shadow};
  border-radius: 3px;
  padding: 24px 13px 16px;
  background: #fff;
`
const Calendar = styled.div`
  width: 300px;
`
const CalendarTop = styled.div`
  display: grid;
  grid-template-columns: 20px auto 20px;
  justify-content: space-between;
`
const CalendarDate = styled.span`
  font-weight: bold;
  font-size: 16px;
`
const CalendarBody = styled.span`
  display: grid;
  grid-template-columns: repeat(7, auto);
  justify-content: space-between;
  text-align: center;
  margin-top: 17px;
  grid-gap: 5px;
  padding-top: 20px;
  border-top: 1px solid ${colors.gray};
`
const CalendarHead = styled.span`
  display: grid;
  grid-template-columns: repeat(7, auto);
  justify-content: space-between;
  text-align: center;
  margin-top: 17px;
`
const CalendarCell = styled.span`
  width: 30px;
  height: 30px;
  text-transform: capitalize;
  color: #000;
  display: grid;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 3px;
  cursor: pointer;
  &--prev {
    color: $cm-prev;
  }
  &--next {
    color: $cm-next;
  }
  ${props => css`
    background-color: ${props.current && 'red'};
    color: ${props.current ? '#fff' : props.prev ? colors.gray : props.next ? colors.alto : null };
    border: ${props.chosenDate && `1px solid ${colors.red}`};
  `}
`
const CustomArrow = styled.button`
  position: relative,
  height: 10px,
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: none;
  background-color: transparent;
  cursor: pointer;
  ${props => css`
    background-image: url(${props.next ? nextImg : prevImg})
  `}
}`

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
    <Calendar>
      <Input 
        label="Date"
        placeholder="Choose"
        value={chosenDate}
        icon="calendar"
      />
      <CalendarWrapper>
        <CalendarTop>
          <CustomArrow prev />
          <CalendarDate>June, 2019</CalendarDate>
          <CustomArrow next />
        </CalendarTop>
        <div>
          <CalendarHead>
            {weekDays.map((item, index) => <CalendarCell key={index} className="calendar__cell">{item}</CalendarCell>)}
          </CalendarHead>
          <CalendarBody>
            {prevMonthDays.map((item, index) => <CalendarCell key={index} prev >{item}</CalendarCell>)}
            {currentMonthDays.map((item, index) => (
              <CalendarCell 
                key={index} 
                onClick={()=>setDate(item)}
                current={current=== item}
                chosenDate={date === item}
                >
                  {item}
              </CalendarCell>))
            }
            {nextMonthDays.map((item, index) => <CalendarCell key={index} next >{item}</CalendarCell>)}
          </CalendarBody>
        </div>
      </CalendarWrapper>
    </Calendar>
  )
}

export default CalendarPopup
