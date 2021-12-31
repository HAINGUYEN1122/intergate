import React, { useState } from 'react';
import styled from 'styled-components/macro';
import DateRangePicker from 'react-bootstrap-daterangepicker';
// you will need the css that comes with bootstrap@3. if you are using
// a tool like webpack, you can do the following:
import 'bootstrap/dist/css/bootstrap.css';
// you will also need the css that comes with bootstrap-daterangepicker
import 'bootstrap-daterangepicker/daterangepicker.css';
import DateRangeIcon from '@material-ui/icons/DateRange';
import moment from 'moment';

// eslint-disable-next-line react/prefer-stateless-function
function SomeReactComponent() {
  const [dateRange, setDate] = useState('');
  const handleCallback = (start, end) => {
    if (start && end) {
      setDate(`${moment(start).format('MM/DD/YYYY')} - ${moment(end).format('MM/DD/YYYY')}`);
    }
  };

  return (
    <DateRangePicker
      onCallback={handleCallback}
    >
      <Content>
        <InputDate readOnly placeholder="From - To" value={dateRange} />
        <CalendarIcon>
          <DateRangeIcon />
        </CalendarIcon>
      </Content>
    </DateRangePicker>
  );
}

export default SomeReactComponent;

const InputDate = styled.input`
  height: 35px;
`;

const CalendarIcon = styled.div`
  height: 35px;
  background-color: #C4C4C4;
  display: inherit;
  align-items: center;
  padding: 5px;
`;

const Content = styled.div`
  display: inherit;
  align-items: center;
`;
