const Dashboard = {
    async render() {
      return `
      <div class="dashboard-container">
        <div class="sidebar">
            <ul>
                <li><a href="#/dashboard">Dashboard</a></li>
                <li><a href="#/buatloker">Buat Lowongan Baru</a></li>
                <li><a href="#/manajemenloker">Manajemen Lowongan</a></li>
                <li><a href="#/kelolaakun">Kelola Akun</a></li>
            </ul>
        </div>
        <div class="main-content-dashboard">
            <h1>Iklan Lowongan Kerja Anda</h1>
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
          </div>
        </div>
      `;
    },
  };
  
  export default Dashboard;
  