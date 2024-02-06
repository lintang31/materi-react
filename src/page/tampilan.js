// Tampilan.js
import React, { useState } from "react";
import "./css/tampilan.css";

function Tampilan() {
  const [modalImage, setModalImage] = useState(""); // State untuk menyimpan URL gambar modal
  const [modalTitle, setModalTitle] = useState(""); // State untuk menyimpan judul gambar modal

  // Fungsi untuk menampilkan modal
  const openModal = (image, title) => {
    setModalImage(image);
    setModalTitle(title);
    document.body.style.overflow = "hidden"; // Mencegah scroll pada background saat modal ditampilkan
  };

  // Fungsi untuk menutup modal
  const closeModal = () => {
    setModalImage("");
    setModalTitle("");
    document.body.style.overflow = "auto"; // Mengaktifkan kembali scroll pada background setelah modal ditutup
  };

  return (
    <div>
      <header className="bg-primary text-white text-center py-4">
        <div className="container">
          <h1 className="display-10">Selamat Datang di E-Courmace</h1>
          <p className="lead">Temukan produk terbaik di ujung jari Anda</p>
        </div>
      </header>

      <section className="page-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="section-heading">Jelajahi Produk Premium Kami</h2>
              <p className="text-muted">
                Dari elektronik hingga fashion, temukan penawaran terbaik pada
                produk berkualitas tinggi.
              </p>
              <div className="intro-button mx-auto mt-4">
                <a className="btn btn-light btn-xl" href="#products">
                  Lihat Produk
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                className="img-fluid rounded-circle"
                src="https://cf.shopee.co.id/file/id-11134207-7r98z-llkdptib0otn96"
                alt="Tampilan Produk"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="page-section bg-faded">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">Mengapa Memilih E-Courmace?</h2>
              <p className="text-muted">
                Kami menjamin pengalaman belanja yang mulus dengan layanan
                pelanggan terbaik dan produk berkualitas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section" id="products">
        <div className="container">
          <h2 className="section-heading text-center">Produk Unggulan</h2>
          <div className="row">
            {/* Produk 1 */}
            <div className="col-lg-4 mb-4">
              <div
                className="img-container"
                onClick={() =>
                  openModal(
                    "https://www.hargen.co.id/wp-content/uploads/2019/06/Genset-Yanmar-35-kVA-Silent-Stamford.jpg",
                    "Genset 35 kva"
                  )
                }
              >
                <img
                  className="img-fluid rounded"
                  src="https://www.hargen.co.id/wp-content/uploads/2019/06/Genset-Yanmar-35-kVA-Silent-Stamford.jpg"
                  alt="Genset 35 kva"
                />
              </div>
              <h3>Genset 35 kva</h3>
              <p className="text-muted">
                Genset adalah akronim dari “Generator set”, yaitu suatu mesin
                atau perangkat yang terdiri dari pembangkit listrik (generator)
                dengan mesin penggerak yang disusun menjadi satu kesatuan untuk
                menghasilkan suatu tenaga listrik dengan besaran tertentu.
              </p>
            </div>
            {/* Produk 2 */}
            <div className="col-lg-4 mb-4">
              <div
                className="img-container"
                onClick={() =>
                  openModal(
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrOpRpwWklRKU-os-wt9toQcWq6G_eGViVdlsTN3-MuA&s",
                    "Power Bell Upp"
                  )
                }
              >
                <img
                  className="img-fluid rounded"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrOpRpwWklRKU-os-wt9toQcWq6G_eGViVdlsTN3-MuA&s"
                  alt="Power Bell Upp"
                />
              </div>
              <h3>Power Bell Upp</h3>
              <p className="text-muted">
                Fungsi utama power amplifier adalah menghadirkan suara lebih
                keras, berisi tapi tetap enak didengar. Umumnya, power amplifier
                adalah komponen atau rangkaian penguat sinyal dari head unit.
              </p>
            </div>
            {/* Produk 3 */}
            <div className="col-lg-4 mb-4">
              <div
                className="img-container"
                onClick={() =>
                  openModal(
                    "https://id-live-01.slatic.net/p/850b5a1b50e1cef5c9a8fb0b87da7d39.jpg",
                    "Spiker Ashley"
                  )
                }
              >
                <img
                  className="img-fluid rounded"
                  src="https://id-live-01.slatic.net/p/850b5a1b50e1cef5c9a8fb0b87da7d39.jpg"
                  alt="Spiker Ashley"
                />
              </div>
              <h3>Spiker Ashley</h3>
              <p className="text-muted">
                Speaker sendiri merupakan sebuah perangkat yang membantu untuk
                mengeraskan suara. Kamu bisa menemukan speaker pada mobil,
                perangkat komputer, atau di dalam sebuah ruangan. Speaker
                biasanya digunakan untuk menyetel musik di dalam ruangan, mobil,
                atau perangkat elektronik pendukung lainnya.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalImage && (
        <div className="modal-container" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={modalImage} alt={modalTitle} />
            <h3>{modalTitle}</h3>
            {/* Tambahan elemen atau deskripsi modal lainnya */}
            <span className="close-btn" onClick={closeModal}>
              &times;
            </span>
          </div>
        </div>
      )}

      <section className="page-section bg-faded">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">
                Bergabung dengan Komunitas E-Courmace
              </h2>
              <p className="text-muted">
                Berlangganan newsletter kami untuk penawaran eksklusif dan
                pembaruan.
              </p>
              <div className="intro-button mx-auto">
                <a className="btn btn-primary btn-xl" href="#subscribe">
                  Berlangganan Sekarang
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer text-muted text-center py-3">
        <div className="container">
          <p className="m-0 small">© 2024 E-Courmace. Hak cipta dilindungi.</p>
        </div>
      </footer>
    </div>
  );
}

export default Tampilan;
