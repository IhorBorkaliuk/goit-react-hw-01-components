import PropTypes from 'prop-types';

import Transaction from './OneTransaction';
import { Table, Caption, TR, TH } from './transactionsHistory.Styled';

export default function TransactionHistory({ items }) {
  return (
    <Table>
      <Caption>
        <TR>
          <TH>Type</TH>
          <TH>Amount</TH>
          <TH>Currency</TH>
        </TR>
      </Caption>
          <tbody>
              {items.map(el => (<Transaction key={el.id} item={el} />))}
          </tbody>
    </Table>
  );
}

TransactionHistory.propTypes = {
    items: PropTypes.array,
}
