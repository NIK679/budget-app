import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const DailyAmount = ({ date }) => {
  const { transactions } = useContext(GlobalContext);

  const income = transactions
    .filter(
      transaction => transaction.date.toDateString() === date.toDateString()
    )
    .filter(transaction => transaction.type === 'income')
    .map(transaction => transaction.amt)
    .reduce((acc, amt) => (acc += amt), 0);

  const expense = transactions
    .filter(
      transaction => transaction.date.toDateString() === date.toDateString()
    )
    .filter(transaction => transaction.type === 'expense')
    .map(transaction => transaction.amt)
    .reduce((acc, amt) => (acc += amt), 0);

  const balance = (income - expense).toFixed(2);

  return (
    <>
      <div className="divider"></div>
      <div className="row">
        <br />
        <div className="col s7">
          <span>{date.toDateString()}</span>
        </div>
        <div className={`col s5 ${balance >= 0 ? 'green-text' : 'red-text'}`}>
          <span>{balance}</span>
        </div>
      </div>
    </>
  );
};
