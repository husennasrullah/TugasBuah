import React, { Component } from "react";
import Button from "../../component/button";
import Field from "../../component/input";
import "./style.css";

class FormBeli extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container2">
        <div className="judul">
          <center>Masukkan Data Pembelian</center>
        </div>
        <hr />

        <div>
          <label className="label">Nama Buah</label>
          <select
            className="input"
            id="daftarBuah"
            name="daftarBuah"
            onClick=""
          ></select>
        </div>

        <div>
          <label className="label">Jumlah Beli</label>
          <Field
            class="input"
            type="number"
            value=""
            name="jumlah"
            id="jumlah"
            placeholder="masukkan jumlah stok"
          />
        </div>
        <Button className="tombol" onclick="handleSubmitBeli()">
          Beli
        </Button>
      </div>
    );
  }
}

export default FormBeli;
