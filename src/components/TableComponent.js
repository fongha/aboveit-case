import React from "react";
import styles from "../App.module.css";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function convertTime(unixTime){
  return new Date(unixTime * 1000).toLocaleDateString();
}

export const TableComponent = (props) => {
  return (
    <div>
      <Table className={styles.bitcoinTable}>
        <TableHead className={styles.bitcoinTable}>
          <TableRow >
            <TableCell>Day</TableCell>
            <TableCell>Open</TableCell>
            <TableCell>Close</TableCell>
            <TableCell>Highest</TableCell>
            <TableCell>Lowest</TableCell>
          </TableRow>
          </TableHead>
        <TableBody>
          {props.data.slice(0).reverse().map((item) => (
            <TableRow>
              <TableCell> {convertTime(item.time)} </TableCell>
              <TableCell> $ {item.open} </TableCell>
              <TableCell> $ {item.close} </TableCell>
              <TableCell> $ {item.high} </TableCell>
              <TableCell> $ {item.low} </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

