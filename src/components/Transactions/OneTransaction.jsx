import PropTypes from 'prop-types';

export default function Transaction( {item} ) {
  const { type, amount, currency } = item;
    return (
          <tr>
            <th>{type}</th>
            <th>{amount}</th>
            <th>{currency}</th>
          </tr>
    );
}

Transaction.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
