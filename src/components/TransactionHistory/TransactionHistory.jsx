import PropTypes from 'prop-types';

import {
  Table,
  Header,
  TransactionHistory,
  HeaderColumn,
  HeaderLine,
  TransactionValue,
  TransactionLine,
} from './TransactionHistory.styled';
// function in utilis
import { normalizeType } from '../utilis/normalizeType';

function TransactionTable({ items }) {
  return (
    <Table>
      <Header>
        <HeaderLine>
          <HeaderColumn>Type</HeaderColumn>
          <HeaderColumn>Amount</HeaderColumn>
          <HeaderColumn>Currency</HeaderColumn>
        </HeaderLine>
      </Header>

      {items.map(({ id, type, amount, currency }) => {
        return (
          <TransactionHistory key={id}>
            <TransactionLine>
              <TransactionValue>{normalizeType(type)}</TransactionValue>
              <TransactionValue>{amount}</TransactionValue>
              <TransactionValue>{currency}</TransactionValue>
            </TransactionLine>
          </TransactionHistory>
        );
      })}
    </Table>
  );
}

TransactionTable.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionTable;
