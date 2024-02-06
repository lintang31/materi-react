import React from "react";

const barangs = [
  {
    nama: "Sepeda",
    harga: 15000,
  },
  {
    nama: "Motor",
    harga: 17000,
  },
  {
    nama: "Mobil",
    harga: 7000,
  },
  {
    nama: "Truk",
    harga: 5000,
  },
  {
    nama: "Alpard",
    harga: 6000,
  },
];

// Reduce
const total_bayar = barangs.reduce(
  (total_harga, barang) => total_harga + barang.harga,
  0
);

const Jajal = () => {
  const allBarangs = barangs.map((barang, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{barang.nama}</td>
      <td>{barang.harga}</td>
    </tr>
  ));

  const filteredBarangs = barangs
    .filter((barang) => barang.harga < 10000)
    .map((barang, index) => (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{barang.nama}</td>
        <td>{barang.harga}</td>
      </tr>
    ));

  return (
    <div style={{ padding: "50px" }}>
      <h2> Menu Barang</h2>

      {/* Table showing all makanans */}
      <h3> Barang</h3>
      <table striped bordered hover>
        <thead>
          <tr>
            <th style={{ width: "20px" }}>No</th>
            <th>Nama Barang</th>
            <th>Harga</th>
          </tr>
        </thead>
        <tbody>{allBarangs}</tbody>
      </table>
      <br></br>
      {/* Table showing makanans with harga below 10000 */}
      <h2>Daftar Barang Di Bawah Rp 10.000</h2>
      <table striped bordered hover>
        <thead>
          <tr>
            <th style={{ width: "20px" }}>No</th>
            <th>Nama Barang</th>
            <th>Harga</th>
          </tr>
        </thead>
        <tbody>{filteredBarangs}</tbody>
      </table>

      <h1>Total Harga Barang : {total_bayar}</h1>
    </div>
  );
};

export default Jajal;
