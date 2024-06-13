import supabase from '../../config/supabase.js';
import UrlParser from '../../routes/url-parser.js';

const Edit = {
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
      <div class="main-content-editloker">
          <h1>Edit Lowongan Kerja Anda</h1>
          <p class="subHeader">Edit lowongan kerja Anda dengan mengganti Isi formulir iklan lowongan kerja di bawah ini</p>
          <div class="edit-lowongan-container">
            <form class="editloker-form">
              <label for="posisi">Posisi Pekerjaan</label>
              <input type="text" id="posisi" name="posisi" placeholder="ex. Kasir" required>
              
              <label for="linkedin">Tautan Linkedin Perusahaan</label>
              <input type="url" id="linkedin" name="linkedin" placeholder="ex. linkedin.com/in/nama-perusahaan" required>
              
              <label for="instagram">Tautan Instagram Perusahaan</label>
              <input type="text" id="instagram" name="instagram" placeholder="ex. instagram.com/nama_perusahaan">
              <p class="input-hint">Opsional</p>
              
              <label for="gaji">Rentang Gaji</label>
              <input type="text" id="gaji" name="gaji" placeholder="ex. 1 - 2 juta atau negosiasi" required>
              
              <label for="level">Level Pekerjaan</label>
              <input type="text" id="level" name="level" placeholder="ex. Junior / Entry Level" required>
              
              <label for="syarat">Persyaratan Pendidikan</label>
              <input type="text" id="syarat" name="syarat" placeholder="ex. Sarjana" required>
              
              <label for="tipe">Tipe Pekerjaan</label>
              <input type="text" id="tipe" name="tipe" placeholder="ex. Kontrak" required>
              
              <label for="desc">Deskripsi Singkat Tentang Pekerjaan</label>
              <textarea id="desc" name="desc" placeholder="ex. PT. namaperusahaan adalah ..." required></textarea>
              
              <label for="tanggungjawab">Tanggung Jawab Pekerjaan</label>
              <textarea id="tanggungjawab" name="tanggungjawab" placeholder="ex. Mengelola transaksi harian, Mencatat pemasukan dan pengeluaran, ..." required></textarea>
              <p class="input-hint">Pisahkan tanggung jawab pekerjaan dengan koma</p>
               
              <label for="keahlian">Keahlian yang Dibutuhkan</label>
              <textarea id="keahlian" name="keahlian" placeholder="ex. Kemampuan komunikasi yang baik, Kemampuan bekerja dalam tim, ..." required></textarea>
              <p class="input-hint">Pisahkan keahlian yang dibutuhkan dengan koma</p>
              
              <label for="kualifikasi">Kualifikasi Tambahan</label>
              <textarea id="kualifikasi" name="kualifikasi" placeholder="ex. Pengalaman minimal 2 tahun di bidang terkait, Sertifikasi profesional terkait, ..."></textarea>
              <p class="input-hint">Pisahkan kualifikasi tambahan dengan koma</p>
              
              <label for="jam">Rentang Jam Kerja</label>
              <input type="text" id="jam" name="jam" placeholder="ex. 08.00 - 17.00 WIB" required>
              <p class="input-hint">Mohon sertakan zona waktu lokal perusahaan</p>

              <button type="submit" class="submit-editloker-button">Simpan Perubahan</button>
              <p>Pastikan untuk mengecek ulang informasi lowongan kerja di atas sebelum menekan tombol "Simpan Perubahan".</p>
            </form>
          <div>
      <div>
    <div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const jobId = url.id;

    console.log('Parsed URL:', url); // Log URL parsed
    console.log('Job ID:', jobId); // Log job ID parsed

    try {
      // Mengambil data lowongan berdasarkan ID
      const { data: job, error } = await supabase
        .from('lowongan')
        .select('*')
        .eq('id', jobId)
        .single();

      if (error) {
        throw new Error(`Failed to fetch job data: ${error.message}`);
      }

      // Mengisi form dengan data yang diambil
      document.querySelector('#posisi').value = job.posisi;
      document.querySelector('#linkedin').value = job.tautan_linkedin || '';
      document.querySelector('#instagram').value = job.tautan_instagram || '';
      document.querySelector('#gaji').value = job.gaji;
      document.querySelector('#level').value = job.level_pekerjaan;
      document.querySelector('#syarat').value = job.pendidikan;
      document.querySelector('#tipe').value = job.tipe_pekerjaan;
      document.querySelector('#desc').value = job.deskripsi_perusahaan;
      document.querySelector('#tanggungjawab').value = job.tanggung_jawab;
      document.querySelector('#keahlian').value = job.keahlian;
      document.querySelector('#kualifikasi').value = job.kualifikasi;
      document.querySelector('#jam').value = job.jam_kerja;

      // Event listener untuk submit form
      document.querySelector('.editloker-form').addEventListener('submit', async (event) => {
        event.preventDefault();

        // Mengambil nilai dari form
        const updatedJob = {
          posisi: document.querySelector('#posisi').value,
          tautan_linkedin: document.querySelector('#linkedin').value,
          tautan_instagram: document.querySelector('#instagram').value,
          gaji: document.querySelector('#gaji').value,
          level_pekerjaan: document.querySelector('#level').value,
          pendidikan: document.querySelector('#syarat').value,
          tipe_pekerjaan: document.querySelector('#tipe').value,
          deskripsi_perusahaan: document.querySelector('#desc').value,
          tanggung_jawab: document.querySelector('#tanggungjawab').value,
          keahlian: document.querySelector('#keahlian').value,
          kualifikasi: document.querySelector('#kualifikasi').value,
          jam_kerja: document.querySelector('#jam').value,
        };

        // Update data lowongan di database
        const { data, error: updateError } = await supabase
          .from('lowongan')
          .update(updatedJob)
          .eq('id', jobId);

        if (updateError) {
          throw new Error(`Failed to update job data: ${updateError.message}`);
        }

        // Menampilkan notifikasi dan kembali ke halaman manajemen
        alert('Lowongan berhasil diperbarui');
        window.location.href = '#/manajemenloker';
      });
    } catch (error) {
      console.error('Error:', error.message);
      alert('Terjadi kesalahan saat memuat data. Silakan coba lagi.');
    }
  },
};

export default Edit;
