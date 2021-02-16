import React, { Component } from "react";

import "./style.css";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <center>
          <h3>Data Ketersediaan Produk</h3>
        </center>
        <table class="content-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama Buah</th>
              <th>Jumlah-Stok</th>
              <th>Harga</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody id="isiTable"></tbody>
        </table>
      </>
    );
  }
}

export default Table;
