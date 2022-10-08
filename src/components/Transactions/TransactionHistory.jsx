import PropTypes from 'prop-types';

import Transaction from './OneTransaction';
import { Table, Caption, TR, TRH, TBODY } from './transactionsHistory.Styled';

export default function TransactionHistory({ items }) {
  return (
    <Table>
      <Caption>
        <TR>
          <TRH>Type</TRH>
          <TRH>Amount</TRH>
          <TRH>Currency</TRH>
        </TR>
      </Caption>
          <TBODY>
              {items.map(el => (<Transaction key={el.id} item={el} />))}
          </TBODY>
    </Table>
  );
}

TransactionHistory.propTypes = {
    items: PropTypes.array,
}
