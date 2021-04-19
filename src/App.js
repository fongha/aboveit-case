import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import "./App.css";
import { Table } from "./components/Table.js";
import axios from "axios";

// 1. Hent API
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bitcoins: [],
    };
  }

  async getBitcoinAPI() {
    const { data: bitcoins } = await axios.get(
      "https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=100&api_key=8ae55d463e1bf8d38b4a502ca47512f9b1dec21533ad9af7acb993e8ba952bc2"
    );
    this.setState({ bitcoins });
  }

  /*useEffect(() => {
    fetchData();
  }, []); //[] viser til hvis en variabel inni [] forandrer seg, så vil koden inni useEffect kjøres om igjen
  
    
  const fetchData = async () => {
    const response = await fetch(bitcoinURL);
    const jsonData = await response.json();
    setBitcoin(jsonData);
  };*/

  // 2. Print ut 20 stk

  // 3. Lag en tabell

  // 4. Styling

  // Konverter Time fra UNIX Timestamp

  /*få til å printe ut 20 stk fra api på en eller annen måte
    const viewTwenty = () => {
      let i = 0;
      let showTime;
      for (i = 0; i < 20; i ++) {
        showTime = { bitcoin.Data.Data.time }
        
      }
    }*/
  render() {
    return (
      <div>
        <h1>Bitcoins de siste 100 dagene</h1>
        <Table bitcoinList={this.state.bitcoins} />
      </div>
    );
  }
}

export default App;
