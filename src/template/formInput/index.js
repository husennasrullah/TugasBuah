import React, { Component } from "react";
import Field from "../../component/input";
import Button from "../../component/button";
import "./style.css";

class FormInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      namaBuah: "",
      hargaBuah: "",
      stokBuah: "",
    };
  }

  handleSubmitInput = () => {
    if (
      namaBuah.value.length != 0 &&
      hargaBuah.value.length != 0 &&
      stokBuah.value.length != 0
    ) {
      inputData(id.value);
    } else alert("Isi Data Sceara lengkap!");
  };

  setValue = (event) => {};

  render() {
    return (
      <div class="container1">
        <div class="judul">
          <center>Masukkan Data Produk Buah</center>
        </div>
        <hr />

        <div className="field">
          <Field
            className="input"
            type="text"
            id="id"
            hidden="true"
            onChange={this.handleSubmitInput}
          />
        </div>

        <div>
          <label className="label">Nama Buah</label>
          <Field
            className="input"
            type="text"
            name="nama"
            id="nama"
            type="text"
            placeholder="masukkan nama buah"
            onChange={this.handleSubmitInput}
          />
        </div>

        <div>
          <label className="label">Jumlah Stok</label>
          <Field
            className="input"
            type="number"
            value=""
            name="stok"
            id="stok"
            placeholder="masukkan jumlah stok"
            onChange={this.handleSubmitInput}
          />
        </div>

        <div>
          <label className="label">Harga</label>
          <Field
            className="input"
            type="number"
            value=""
            name="harga"
            id="harga"
            placeholder="masukkan harga"
            onChange={this.handleSubmitInput}
          />
        </div>
        <Button
          className="tombol"
          id="submit"
          name="submit"
          onclick={this.handleSubmitInput}
        >
          Submit
        </Button>
      </div>
    );
  }
}

export default FormInput;
