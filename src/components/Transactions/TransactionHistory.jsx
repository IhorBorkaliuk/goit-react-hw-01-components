import PropTypes from 'prop-types';

import Transaction from './OneTransaction';

export default function TransactionHistory({ items }) {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
          <tbody>
              {items.map(el => (<Transaction key={el.id} item={el} />))}
          </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
    items: PropTypes.array,
}
