import supabase from '../../config/supabase.js';
import UrlParser from '../../routes/url-parser.js';
import '../../component/sidebar.js';

const Dashboard = {
  async render() {
    try {
      const loggedInCompanyId = sessionStorage.getItem('companyId');
      
      if (!loggedInCompanyId) {
        throw new Error('No company ID found in session storage.');
      }

      const { data: jobs, error: errorJobs } = await supabase
        .from('lowongan')
        .select('id, posisi, gaji, deskripsi_perusahaan, id_perusahaan')
        .eq('id_perusahaan', loggedInCompanyId);

      if (errorJobs) {
        throw new Error(`Error fetching job data: ${errorJobs.message}`);
      }

      const { data: companyData, error: errorCompany } = await supabase
        .from('perusahaan')
        .select('nama_perusahaan, alamat')
        .eq('id', loggedInCompanyId)
        .single();

      if (errorCompany) {
        throw new Error(`Error fetching company data: ${errorCompany.message}`);
      }

      const maxDescriptionLength = 140;
      let jobCards = '';

      if (jobs.length > 0) {
        jobCards = jobs.map(job => {
          const truncatedDescription = job.deskripsi_perusahaan.length > maxDescriptionLength ?
            job.deskripsi_perusahaan.substring(0, maxDescriptionLength) + '...' :
            job.deskripsi_perusahaan;

          const detailUrl = `#/detail/${job.id}`;

          return `
            <div class="job-card">
              <h3>${job.posisi}</h3>
              <p class="highlight"><a href="${detailUrl}">${companyData.nama_perusahaan}</a></p>
              <p class="highlight">Gaji: ${job.gaji}</p>
              <p class="highlight">Lokasi: ${companyData.alamat}</p>
              <p class="description">${truncatedDescription}</p>
            </div>
          `;
        }).join('');
      } else {
        jobCards = `<h3 class="no-results-search">Belum ada iklan lowongan yang Anda buat</h3>`;
      }

      return `
        <div class="dashboard-container">
         <div class="sidebar">
          <custom-sidebar></custom-sidebar>
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
    const loginButton = document.querySelector('.login-button a');
    
    if (sessionStorage.getItem('isLoggedIn') === 'true') {
      loginButton.textContent = 'Logout';
      loginButton.href = '#/login';

      loginButton.addEventListener('click', (event) => {
        event.preventDefault();

        sessionStorage.removeItem('isLoggedIn');
        sessionStorage.removeItem('companyId');
       
        window.location.hash = '#/login';
       
        loginButton.textContent = 'Login';
        loginButton.href = '#/login';
      });
    }

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

export default Dashboard;
