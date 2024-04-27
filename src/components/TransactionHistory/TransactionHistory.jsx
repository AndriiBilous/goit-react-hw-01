import css from './TransactionHistory.module.css';
import clsx from 'clsx';
function TransactionHistory({ data }) {
  return (
    <table className={clsx(css.container, css.border)}>
      <thead>
        <tr className={css.wrap}>
          <th className={clsx(css.title, css.border)}>Type</th>
          <th className={clsx(css.title, css.border)}>Amount</th>
          <th className={clsx(css.title, css.border)}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => {
          const { type, amount, currency } = item;
          return (
            <tr className={css.item} key={item.id}>
              <td className={clsx(css.border, css.text)}>{type}</td>
              <td className={clsx(css.border, css.text)}>{amount}</td>
              <td className={clsx(css.border, css.text)}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default TransactionHistory;
