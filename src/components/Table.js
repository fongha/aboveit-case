import React from 'react';
import styles from './src/App.module.css';

const Table = (props) => {
    return (
        <table className = { styles.bitcoinTable }>
            <thead>
                <tr>
                    <th>Title 1</th>
                    <th>Title 2</th>
                    <th>Title 3</th>
                </tr>
            </thead>
            <tbody>
                { props.bitcoinList.map(item => (
                    <h1>{ item.Response }</h1>
                ))}
                    <tr>
                    <td> API: { props.bitcoinList }</td>
                    <td></td>
                    <td></td>
                    </tr>
            </tbody>
        </table>
    );
}

export { Table };