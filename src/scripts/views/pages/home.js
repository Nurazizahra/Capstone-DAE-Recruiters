const Home = {
  async render() {
    return `
      <section class="hero">
          <h1>Temukan Karir Impian Anda Bersama Kami!</h1>
          <p>Jelajahi lowongan kerja dari berbagai industri dan temukan peluang yang tepat untuk karir Anda di DAE Recruiters</p>
          <a href="#cari">Mulai Pencarian</a>
          <img src="./jumbotron-home.png" alt="Hero"/>
      </section>
      <section class="search-jobs" id="jobs">
          <h2 id="cari">Cari Lowongan Kerja</h2>
          <div class="search-bar">
              <input type="text" placeholder="Cari lowongan...">
              <button>Cari</button>
          </div>
          <div class="job-cards">
              <div class="job-card">
                  <h3>Kasir</h3>
                  <p class="nama-perusahaan">SEN LONG</p>
                  <p class="highlight">Gaji: Negosiasi</p>
                  <p class="highlight">Lokasi: DKI Jakarta</p>
                  <p class="description">Bidang usaha resto (F & B), daerah PIK dan Kelapa Gading...</p>
              </div>
              <div class="job-card">
                  <h3>Host Live Streaming</h3>
                  <p class="nama-perusahaan">PT MEI TECH INDO RESOURCES</p>
                  <p class="highlight">Gaji: Rp.3 - 4 Juta</p>
                  <p class="highlight">Lokasi: Jakarta Utara</p>
                  <p class="description">Mempromosikan dan berinteraksi dengan audiens...</p>
              </div>
              <div class="job-card">
                  <h3>Staff Creative Design</h3>
                  <p class="nama-perusahaan">PT Sari Kreasi Boga</p>
                  <p class="highlight">Gaji: Rp.4 - 5 Juta</p>
                  <p class="highlight">Lokasi: Jakarta Barat</p>
                  <p class="description">PT Sari Kreasi Boga adalah perusahaan yang bergerak di bidang penjualan bahan baku...</p>
              </div>   
          </div>
      </section>
    `;
  },
};

export default Home;
