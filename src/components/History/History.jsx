import css from './History.module.css'
import { Transactions } from '../History/Transactions'

export const TransactionHistory = ({items}) => {
    return (
        <table className={css.transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

        <tbody>
          {items.map(({id, type, amount, currency}) => (
            < Transactions
              key={id}
              type={type}
              amount={amount}
              currency={currency} />
          ))}
  </tbody>
</table>
    );
}