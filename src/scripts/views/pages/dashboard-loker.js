import supabase from '../../config/supabase.js';
import UrlParser from '../../routes/url-parser.js';

const Dashboard = {
  async render() {
    try {
      // Mendapatkan ID perusahaan yang sedang login dari session storage
      const loggedInCompanyId = sessionStorage.getItem('companyId');
      
      if (!loggedInCompanyId) {
        throw new Error('No company ID found in session storage.');
      }

      // Mengambil data lowongan kerja yang hanya terkait dengan perusahaan yang sedang login
      const { data: jobs, error: errorJobs } = await supabase
        .from('lowongan')
        .select('id, posisi, gaji, deskripsi_perusahaan, id_perusahaan')
        .eq('id_perusahaan', loggedInCompanyId);

      if (errorJobs) {
        throw new Error(`Error fetching job data: ${errorJobs.message}`);
      }

      // Mengambil data perusahaan untuk menampilkan informasi perusahaan di dalam job cards
      const { data: companyData, error: errorCompany } = await supabase
        .from('perusahaan')
        .select('nama_perusahaan, alamat')
        .eq('id', loggedInCompanyId)
        .single();

      if (errorCompany) {
        throw new Error(`Error fetching company data: ${errorCompany.message}`);
      }

      // Memproses data untuk menampilkan card job dengan deskripsi yang sudah dipotong
      const maxDescriptionLength = 140;
      let jobCards = '';

      if (jobs.length > 0) {
        jobCards = jobs.map(job => {
          const truncatedDescription = job.deskripsi_perusahaan.length > maxDescriptionLength ?
            job.deskripsi_perusahaan.substring(0, maxDescriptionLength) + '...' :
            job.deskripsi_perusahaan;

          // Menggunakan URL Parser untuk membuat URL dengan ID lowongan
          const detailUrl = `#/detail/${job.id}`;

          return `
            <div class="job-card">
              <h3>${job.posisi}</h3>
              <p class="highlight"><a href="${detailUrl}">${companyData.nama_perusahaan}</a></p>
              <p class="highlight">Gaji: ${job.gaji}</p>
              <p class="highlight">Lokasi: ${companyData.alamat}</p>
              <p>${truncatedDescription}</p>
            </div>
          `;
        }).join('');
      } else {
        jobCards = `<h3 class="no-results-search">Belum ada iklan lowongan yang Anda buat</h3>`;
      }

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
                  ${jobCards}
              </div>
            </div>
          </div>
        `;
    } catch (error) {
      console.error('Error fetching data:', error.message);
      return `<h1>Error fetching data. Please try again later.</h1>`;
    }
  },

  async afterRender() {
    // Jangan dihapus, biarin aja kosong agar tidak error
  },
};

export default Dashboard;
