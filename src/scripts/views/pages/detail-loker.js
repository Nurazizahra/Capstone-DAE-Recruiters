import supabase from '../../config/supabase.js';
import UrlParser from '../../routes/url-parser.js';

const Detail = {
  async render() {
    return `
      <div class="data-loker">
            <h2 id="posisi"></h2>
            <p class="subHeader" id="nama-perusahaan"></p>
            <div class="icon-sosmed">
              <a id="linkedin" href="#" target="_blank">
                  <i class="fab fa-linkedin"></i>
              </a>
              <a id="instagram" href="#" target="_blank">
                  <i class="fab fa-instagram"></i>
              </a>
            </div>
            <h3>Gaji: <span id="gaji"></span></h3>
            <h3>Level Pekerjaan: <span id="level-pekerjaan"></span></h3>
            <h3>Pendidikan: <span id="pendidikan"></span></h3>
            <h3>Tipe Pekerjaan: <span id="tipe-pekerjaan"></span></h3>
            <p id="deskripsi-perusahaan"></p>
            <h3>Tanggung Jawab Pekerjaan:</h3>
            <p id="tanggung-jawab"></p>
            <h3>Keahlian yang Dibutuhkan:</h3>
            <p id="keahlian"></p>
            <h3>Kualifikasi:</h3>
            <p id="kualifikasi"></p>
            <h3>Jam Kerja:</h3>
            <p id="jam-kerja"></p>
            <h5 id="tanggal-posting">Tanggal Posting: </h5>
      </div>  
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const jobId = url.id;

    try {
      const { data: job, error: jobError } = await supabase
        .from('lowongan')
        .select('*')
        .eq('id', jobId)
        .single();

      if (jobError) {
        throw new Error(`Failed to fetch job data: ${jobError.message}`);
      }

      const { data: company, error: companyError } = await supabase
        .from('perusahaan')
        .select('nama_perusahaan, alamat')
        .eq('id', job.id_perusahaan)
        .single();

      if (companyError) {
        throw new Error(`Failed to fetch company data: ${companyError.message}`);
      }

      const formattedDate = new Date(job.dibuat).toLocaleDateString('id-ID', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      }).replace(/\//g, ' - ');

      document.querySelector('#posisi').textContent = job.posisi;
      document.querySelector('#nama-perusahaan').textContent = `${company.nama_perusahaan}, ${company.alamat}`;
      document.querySelector('#linkedin').href = job.tautan_linkedin;
      document.querySelector('#instagram').href = job.tautan_instagram;
      document.querySelector('#gaji').textContent = job.gaji;
      document.querySelector('#level-pekerjaan').textContent = job.level_pekerjaan;
      document.querySelector('#pendidikan').textContent = job.pendidikan;
      document.querySelector('#tipe-pekerjaan').textContent = job.tipe_pekerjaan;
      document.querySelector('#deskripsi-perusahaan').textContent = job.deskripsi_perusahaan;
      document.querySelector('#tanggung-jawab').textContent = job.tanggung_jawab;
      document.querySelector('#keahlian').textContent = job.keahlian;
      document.querySelector('#kualifikasi').textContent = job.kualifikasi;
      document.querySelector('#jam-kerja').textContent = job.jam_kerja;
      document.querySelector('#tanggal-posting').textContent = `Tanggal Posting: ${formattedDate}`;
    } catch (error) {
      console.error('Error:', error.message);
      alert('Terjadi kesalahan saat memuat data. Silakan coba lagi.');
    }
  },
};

export default Detail;
