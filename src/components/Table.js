import React from "react";
import styles from "../App.module.css";

function convertTime(unixTime){
  return new Date(unixTime * 1000).toLocaleDateString();
}

const Table = (props) => {
  return (
    <div>
      <table className={styles.bitcoinTable}>
        <thead>
          <tr>
            <th>Day</th>
            <th>Open</th>
            <th>Close</th>
            <th>Highest</th>
            <th>Lowest</th>
          </tr>
        </thead>
        <tbody>
          {props.data.slice(0).reverse().map((item) => (
            <tr>
              <td> {convertTime(item.time)} </td>
              <td> $ {item.open} </td>
              <td> $ {item.close} </td>
              <td> $ {item.high} </td>
              <td> $ {item.low} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { Table };
