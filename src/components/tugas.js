import React from "react";

const makanans = [
  {
    nama: "Soto",
    harga: 15000,
  },
  {
    nama: "Bakso",
    harga: 17000,
  },
  {
    nama: "Mie Ayam",
    harga: 7000,
  },
  {
    nama: "Nasi Bebeb",
    harga: 5000,
  },
  {
    nama: "Mie tek tek",
    harga: 6000,
  },
];

// Reduce
const total_bayar = makanans.reduce(
  (total_harga, makanan) => total_harga + makanan.harga,
  0
);

const Tugas = () => {
  const allMakanans = makanans.map((makanan, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{makanan.nama}</td>
      <td>{makanan.harga}</td>
    </tr>
  ));

  const filteredMakanans = makanans
    .filter((makanan) => makanan.harga < 10000)
    .map((makanan, index) => (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{makanan.nama}</td>
        <td>{makanan.harga}</td>
      </tr>
    ));

  return (
    <div style={{ padding: "50px" }}>
      <h2> Menu Makanan</h2>

      {/* Table showing all makanans */}
      <h3> Makanan</h3>
      <table striped bordered hover>
        <thead>
          <tr>
            <th style={{ width: "20px" }}>No</th>
            <th>Nama Makanan</th>
            <th>Harga</th>
          </tr>
        </thead>
        <tbody>{allMakanans}</tbody>
      </table>
      <br></br>
      {/* Table showing makanans with harga below 10000 */}
      <h2>Daftar Makanan Di Bawah Rp 10.000</h2>
      <table striped bordered hover>
        <thead>
          <tr>
            <th style={{ width: "20px" }}>No</th>
            <th>Nama Makanan</th>
            <th>Harga</th>
          </tr>
        </thead>
        <tbody>{filteredMakanans}</tbody>
      </table>

      <h1>Total Harga Makanan : {total_bayar}</h1>
    </div>
  );
};

export default Tugas;
