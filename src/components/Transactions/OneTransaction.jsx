import PropTypes from 'prop-types';
import { TR, TH } from './transactionsHistory.Styled';


export default function Transaction( {item} ) {
  const { type, amount, currency } = item;
    return (
          <TR>
            <TH>{type}</TH>
            <TH>{amount}</TH>
            <TH>{currency}</TH>
          </TR>
    );
}

Transaction.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
