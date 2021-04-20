import React from "react";
import styles from "../App.module.css";

const Table = (props) => {
  let convertFromUnixTime = (unixTime) => {
    let convertTime = unixTime;
    console.log(unixTime);
    let newTime = new Intl.DateTimeFormat("en-GB", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(convertTime);
    return newTime;
  };

  return (
    <div>
      <table className={styles.bitcoinTable}>
        <thead>
          <tr>
            <th></th>
            <th>Day</th>
            <th>Open</th>
            <th>Close</th>
            <th>Highest</th>
            <th>Lowest</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((item) => (
            <tr>
              <td className={styles.count}></td>
              <td> {convertFromUnixTime(item.time)} </td>
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
