// File: Profile.js

import React, { useState } from "react";
import "./css/Profilee.css";

const Profilee = () => {
  const [formData, setFormData] = useState({
    name: "Lintang Setia",
    bio: "Saya adalah seorang individu yang bernama Lintang Setia. Dengan latar belakang dan keterampilan yang dimiliki, Anda memiliki ketertarikan dalam berbagai hal, termasuk teknologi dan produk elektronik. Anda suka berbagi informasi dan terlibat dalam komunitas online, terutama di platform seperti GitHub dan Instagram.",
    email: "dalangulung@gmail.com",
    instagram: "Love_araks",
    github: "Lintang31",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="profile-container">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <img
              className="img-fluid rounded-circle profile-image"
              src="https://suarabanyumas.com/wp-content/uploads/2023/07/top25animecharacters-blogroll-1660777571580.jpg"
              alt="Profile"
            />
          </div>
          <div className="col-lg-6 profile-info">
            <h1>{formData.name}</h1>
            <p className="bio">{formData.bio}</p>

            <div className="contact-section">
              <h2>Tentang Saya</h2>
              <form>
                <label htmlFor="name">Nama:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />

                <label htmlFor="email">Email:</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />

                <label htmlFor="instagram">Instagram:</label>
                <input
                  type="text"
                  id="instagram"
                  name="instagram"
                  value={formData.instagram}
                  onChange={handleChange}
                />

                <label htmlFor="github">GitHub:</label>
                <input
                  type="text"
                  id="github"
                  name="github"
                  value={formData.github}
                  onChange={handleChange}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profilee;
