import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import Divider from '@material-ui/core/Divider';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import toCurrency from '../utils/FormatNumber';

function StatisticsCard(props) {
  const {
    title, value, rate, type, total,
  } = props;

  return (
    <Container>
      <Title>{title}</Title>
      <Divider />
      <Value>
        {toCurrency(value)}
        {
          type && type === 'vnd'
          && <VndType> VNĐ </VndType>
        }
        {
          type && type === 'percent'
          && <span>%</span>
        }
      </Value>
      <Rate>
        <Icon>
          {total === 'increase' ? <ArrowDropUpIcon style={{ color: '#4CFA9D' }} /> : <ArrowDropDownIcon style={{ color: '#ED455C' }} />}
        </Icon>
        <span>{`${rate}% so với tháng trước`}</span>
      </Rate>
    </Container>
  );
}

StatisticsCard.defaultProps = {
  type: null,
};

StatisticsCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  rate: PropTypes.number.isRequired,
  type: PropTypes.string,
  total: PropTypes.string.isRequired,
};

export default StatisticsCard;

const Container = styled.div`
  color: #000000;
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const Value = styled.p`
  margin-top: 15px;
  margin-bottom: 5px;
  font-size: 26px;
  font-weight: 700;
`;

const Rate = styled.div`
  font-size: 12px;
  display: inherit;
  align-items: center;
`;

const VndType = styled.span`
  font-size: 16px;
  color: #8D9297;
  font-weight: 400;
  position: absolute;
  transform: scale(1) translate(10%, -30%);
`;
const Icon = styled.span`

`;
