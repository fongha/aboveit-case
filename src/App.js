import React from "react";
import "./App.css";
import { Table } from "./components/Table.js";
import { Pagination } from "./components/Pagination.js";
import axios from "axios";
import styles from './App.module.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bitcoins: [],
    };
  }
/**
 * TO DO
 * 1. Finn ut hvorfor bakgrunnen blir fucka når siden loades - neon på h1 eller på thead?
 * 2. Ta ferdig kurset om hooks
 * 3. Sjekk ut pagination og prøv litt
 * 4. Lær det som skjer i koden
 * 5. Finn ut av App.css vs App.module.css
 * 6. Er designet bra nok???
 * 7. Push til github og lever på mail
 */
  async componentDidMount() {
    await axios.get(
      "https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=100&api_key=8ae55d463e1bf8d38b4a502ca47512f9b1dec21533ad9af7acb993e8ba952bc2"
    ).then((response) => (
      this.setState({bitcoins: response.data.Data.Data })
    )
    );
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <h1>BITCOIN LAST 100 DAYS</h1>
        <Table data={this.state.bitcoins} />
        <Pagination data={this.state.bitcoins} />
      </div>
    );
  }
}

export default App;
