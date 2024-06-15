import supabase from '../../config/supabase.js';
import '../../component/sidebar.js';

const Manajemen = {
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
        .select('id, posisi, gaji, deskripsi_perusahaan, id_perusahaan') // Menambahkan id
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
          // Potong deskripsi jika lebih dari panjang maksimum
          const truncatedDescription = job.deskripsi_perusahaan.length > maxDescriptionLength ?
            job.deskripsi_perusahaan.substring(0, maxDescriptionLength) + '...' :
            job.deskripsi_perusahaan;

          return `
            <div class="job-card">
              <h3>${job.posisi}</h3>
              <p class="highlight">${companyData.nama_perusahaan}</p>
              <p class="highlight">Gaji: ${job.gaji}</p>
              <p class="highlight">Lokasi: ${companyData.alamat}</p>
              <p class="description">${truncatedDescription}</p>
              <a href="#/editloker/${job.id}" class="edit-button">Edit</a>
              <button class="hapus-button" onclick="hapusLoker('${job.id}')">Hapus</button>
            </div>
          `;
        }).join('');
      } else {
        // Jika tidak ada data lowongan yang tersedia
        jobCards = `<h3 class="no-results-search">Belum ada iklan lowongan yang Anda buat</h3>`;
      }

      return `
        <div class="dashboard-container">
         <div class="sidebar">
          <custom-sidebar></custom-sidebar>
        </div>
          <div class="main-content-manajemen">
            <h1>Manajemen Iklan Lowongan Kerja Anda</h1>
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
    // Menambahkan kelas aktif ke elemen menu yang sesuai
    const currentPath = window.location.hash.split('/')[1];
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
      if (item.getAttribute('data-route') === currentPath) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  },
};

// Fungsi untuk menghapus lowongan
window.hapusLoker = async (idLowongan) => {
  try {
    const { data, error } = await supabase
      .from('lowongan')
      .delete()
      .eq('id', idLowongan);

    if (error) {
      throw new Error(`Error deleting job: ${error.message}`);
    }

    // Tampilkan notifikasi atau refresh halaman setelah berhasil menghapus
    alert('Lowongan berhasil dihapus.');
    // Refresh halaman untuk menampilkan perubahan
    window.location.reload();
  } catch (error) {
    console.error('Error deleting job:', error.message);
    alert('Terjadi kesalahan saat menghapus lowongan. Silakan coba lagi.');
  }
};

export default Manajemen;
