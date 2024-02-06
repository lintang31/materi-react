import React from "react";
import "./css/home.css";

function Home() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
        <div className="container">
          <a
            className="navbar-brand text-uppercase fw-bold d-lg-none"
            href="index.html"
          >
            Start Bootstrap
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item px-lg-4">
                <a className="nav-link text-uppercase" href="index.html">
                  Home
                </a>
              </li>
              <li className="nav-item px-lg-4">
                <a className="nav-link text-uppercase" href="about.html">
                  About
                </a>
              </li>
              <li className="nav-item px-lg-4">
                <a className="nav-link text-uppercase" href="products.html">
                  Products
                </a>
              </li>
              <li className="nav-item px-lg-4">
                <a className="nav-link text-uppercase" href="store.html">
                  Store
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section className="page-section clearfix">
        <div className="container">
          <div className="intro">
            <div className="intro-text left-0 text-center bg-faded p-5 rounded">
              <h2 className="section-heading mb-4">
                <span className="section-heading-upper">Kopi Tubruk</span>
                <br></br>
                <span className="section-heading-lower">
                  Segernya bikin ampun
                </span>
              </h2>
              <p className="mb-3">
                Setiap cangkir kopi artisan berkualitas kami dimulai dari produk
                lokal bersumber, bahan-bahan pilihan sendiri. Setelah Anda
                mencobanya, kopi kami akan menjadi tambahan yang menyenangkan
                untuk rutinitas pagi Anda sehari-hari - kami menjaminnya!
              </p>
              <div className="intro-button mx-auto">
                <a className="btn btn-primary btn-xl" href="#!">
                  Kunjungi Kami Sekarang!
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="page-section cta">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <div className="cta-inner bg-faded text-center rounded">
                <h2 className="section-heading mb-4">
                  <span className="section-heading-upper">Janji kita</span>
                  <br></br>
                  <span className="section-heading-lower">kepadamu</span>
                </h2>
                <p className="mb-0">
                  Saat Anda masuk ke toko kami untuk memulai hari Anda, kami pun
                  hadir didedikasikan untuk memberi Anda layanan yang ramah,
                  penyambutan suasananya, dan yang terpenting, produk unggulan
                  yang dibuat dengan bahan dengan kualitas terbaik. Jika Anda
                  tidak puas, tolong beri tahu kami dan kami akan melakukan apa
                  pun yang kami bisa untuk mewujudkannya semuanya benar!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer text-faded text-center py-5">
        <div className="container">
          <p className="m-0 small"> Situs Web Anda 2024</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
