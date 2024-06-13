import supabase from '../../config/supabase.js';

const Home = {
  async render() {
    try {
      // Mengambil data lowongan kerja dari database Supabase dengan melakukan dua query terpisah
      const { data: jobs, errorJobs } = await supabase
        .from('lowongan')
        .select('posisi, gaji, deskripsi_perusahaan, id_perusahaan, id');

      const { data: companies, errorCompanies } = await supabase
        .from('perusahaan')
        .select('nama_perusahaan, alamat, id');

      if (errorJobs || errorCompanies) {
        console.error('Error fetching data:', errorJobs || errorCompanies);
        return `<div>Error fetching data. Please try again later.</div>`;
      }

      // Menggabungkan data dari kedua tabel berdasarkan id_perusahaan
      const mergedData = jobs.map(job => {
        const company = companies.find(company => company.id === job.id_perusahaan);
        return {
          posisi: job.posisi,
          gaji: job.gaji,
          deskripsi_perusahaan: job.deskripsi_perusahaan,
          nama_perusahaan: company.nama_perusahaan,
          alamat: company.alamat,
          id: job.id // tambahkan ID lowongan
        };
      });

      // Maksimum panjang deskripsi yang ingin ditampilkan dalam kartu pekerjaan
      const maxDescriptionLength = 200;

      // Memproses data untuk menampilkan card job dengan deskripsi yang sudah dipotong
      const jobCards = mergedData.map(job => {
        // Memotong deskripsi perusahaan jika melebihi panjang maksimum
        const truncatedDescription = job.deskripsi_perusahaan.length > maxDescriptionLength ?
          job.deskripsi_perusahaan.substring(0, maxDescriptionLength) + '...' :
          job.deskripsi_perusahaan;

        return `
          <div class="job-card">
            <h3>${job.posisi}</h3>
            <p class="highlight"><a href="/#/detail/${job.id}">${job.nama_perusahaan}</a></p>
            <p class="highlight">Gaji: ${job.gaji}</p>
            <p class="highlight">Lokasi: ${job.alamat}</p>
            <p>${truncatedDescription}</p>
          </div>
        `;
      }).join('');

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
                <input type="text" placeholder="Cari posisi pekerjaan...">
                <button>Cari</button>
            </div>
            <div class="job-cards">
                ${jobCards}
            </div>
        </section>
      `;
    } catch (error) {
      console.error('Error fetching data:', error.message);
      return `<h1>Error fetching data. Please try again later.</h1>`;
    }
  },

  async afterRender() {
    const searchButton = document.querySelector('.search-bar button');
    const searchInput = document.querySelector('.search-bar input');
    const jobCardsContainer = document.querySelector('.job-cards');

    // Mengambil data perusahaan untuk digunakan dalam event listener
    const { data: companies, errorCompanies } = await supabase
      .from('perusahaan')
      .select('nama_perusahaan, alamat, id');

    searchButton.addEventListener('click', async () => {
      const keyword = searchInput.value.trim().toLowerCase();
      if (keyword) {
        // Lakukan pencarian berdasarkan posisi

        const { data: jobs, error } = await supabase
          .from('lowongan')
          .select('posisi, gaji, deskripsi_perusahaan, id_perusahaan, id')
          .ilike('posisi', `%${keyword}%`);

        if (error) {
          console.error('Error searching for jobs:', error.message);
          return;
        }

        if (jobs && jobs.length > 0) {
          // Tampilkan hasil pencarian dalam job cards
          const jobCards = jobs.map(job => {
            const company = companies.find(c => c.id === job.id_perusahaan);
            if (company) {
              // Memotong deskripsi perusahaan jika melebihi panjang maksimum
              const maxDescriptionLength = 200;
              const truncatedDescription = job.deskripsi_perusahaan.length > maxDescriptionLength ?
                job.deskripsi_perusahaan.substring(0, maxDescriptionLength) + '...' :
                job.deskripsi_perusahaan;

              return `
                <div class="job-card">
                  <h3>${job.posisi}</h3>
                  <p class="highlight"><a href="/#/detail/${job.id}">${company.nama_perusahaan}</a></p>
                  <p class="highlight">Gaji: ${job.gaji}</p>
                  <p class="highlight">Lokasi: ${company.alamat}</p>
                  <p>${truncatedDescription}</p>
                </div>
              `;
            } else {
              return '';
            }
          }).join('');

          jobCardsContainer.innerHTML = jobCards;
        } else {
          // Tampilkan pesan jika tidak ada hasil pencarian
          jobCardsContainer.innerHTML = `<h3 class="no-results-search">Tidak ada iklan lowongan dengan posisi "${keyword}"</h3>`;
        }
      } else {
        console.log('Keyword pencarian kosong.');
      }
    });

    // Tambahkan event listener untuk tombol enter pada input search
    searchInput.addEventListener('keypress', async (event) => {
      if (event.key === 'Enter') {
        const keyword = searchInput.value.trim().toLowerCase();
        if (keyword) {
          // Lakukan pencarian berdasarkan posisi
          const { data: jobs, error } = await supabase
            .from('lowongan')
            .select('posisi, gaji, deskripsi_perusahaan, id_perusahaan, id')
            .ilike('posisi', `%${keyword}%`);

          if (error) {
            console.error('Error searching for jobs:', error.message);
            return;
          }

          if (jobs && jobs.length > 0) {
            // Tampilkan hasil pencarian dalam job cards
            const jobCards = jobs.map(job => {
              const company = companies.find(c => c.id === job.id_perusahaan);
              if (company) {
                // Memotong deskripsi perusahaan jika melebihi panjang maksimum
                const maxDescriptionLength = 200;
                const truncatedDescription = job.deskripsi_perusahaan.length > maxDescriptionLength ?
                  job.deskripsi_perusahaan.substring(0, maxDescriptionLength) + '...' :
                  job.deskripsi_perusahaan;

                return `
                  <div class="job-card">
                    <h3>${job.posisi}</h3>
                    <p class="highlight"><a href="/#/detail/${job.id}">${company.nama_perusahaan}</a></p>
                    <p class="highlight">Gaji: ${job.gaji}</p>
                    <p class="highlight">Lokasi: ${company.alamat}</p>
                    <p>${truncatedDescription}</p>
                  </div>
                `;
              } else {
                return '';
              }
            }).join('');

            jobCardsContainer.innerHTML = jobCards;
          } else {
            // Tampilkan pesan jika tidak ada hasil pencarian
            jobCardsContainer.innerHTML = `<h3 class="no-results-search">Tidak ada iklan lowongan dengan posisi "${keyword}"</h3>`;
          }
        } else {
          console.log('Keyword pencarian kosong.');
        }
      }
    });
  }
};

export default Home;
