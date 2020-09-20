import React, { useContext, useEffect } from 'react';
import { Transaction } from './Transaction';

import { GlobalContext } from '../context/GlobalState';
import { DailyAmount } from './DailyAmount';

export const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="row">
        {transactions.map((transaction, i) => (
          <>
            {(i === 0 ||
              transaction.date.toDateString() !==
                transactions[i - 1].date.toDateString()) && (
              <DailyAmount key={transaction.date} date={transaction.date} />
            )}
            <Transaction key={transaction._id} transaction={transaction} />
          </>
        ))}
      </div>
    </>
  );
};
