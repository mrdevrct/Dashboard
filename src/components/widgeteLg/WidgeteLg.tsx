import React from "react";
import "./WidgeteLg.css";
import { transactions } from "../../data/data";

interface PropsType {
  type: string;
}

function widgeteLg() {
  const Button = ({ type }: PropsType) => {
    return <button className={"widgeteLg-button " + type}>{type}</button>;
  };

  return (
    <div className="widgeteLg">
      <h3 className="widgeteLg-title">Latest TransActions</h3>
      <table className="widgeteLg-table">
        <tr className="widgeteLg-table-tr">
          <th className="widgeteLg-table-th">Customer</th>
          <th className="widgeteLg-table-th">Date</th>
          <th className="widgeteLg-table-th">Amout</th>
          <th className="widgeteLg-table-th">Status</th>
        </tr>

        {transactions.map((transaction) => (
          <tr className="widgeteLg-table-user-tr">
            <td className="widgeteLg-user">
              <img src={transaction.userImg} className="widgeteLg-image" />
              <span className="widgeteLg-name">{transaction.customer}</span>
            </td>
            <td className="widgeteLg-Date">{transaction.date}</td>
            <td className="widgeteLg-Amout">
              {transaction.amount === 0 ? "free" : `$${transaction.amount}`}
            </td>
            <td className="widgeteLg-Status">
              <Button type={transaction.status} />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default widgeteLg;
