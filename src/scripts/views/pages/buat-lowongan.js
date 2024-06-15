import supabase from '../../config/supabase.js';
import '../../component/sidebar.js';

const Buat = {
  async render() {
    return `
    <div class="dashboard-container">
    <div class="sidebar">
      <custom-sidebar></custom-sidebar>
    </div>
      <div class="main-content-buatlowongan">
          <h1>Buat Lowongan Kerja Anda</h1>
          <p class="subHeader">Isi formulir iklan lowongan kerja di bawah ini dengan lengkap dan sebenar-benarnya</p>
          <div class="buat-lowongan-container">
            <form class="buatloker-form" id="buatLokerForm">
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

              <button type="submit" class="submit-buatloker-button">Pasang Lowongan</button>
              <p>Pastikan untuk mengecek ulang informasi lowongan kerja di atas sebelum menekan tombol "Pasang Lowongan".</p>
            </form>
          </div>
      </div>
    </div>    
    `;
  },

  async afterRender() {
    const buatLokerForm = document.getElementById('buatLokerForm');
    
    buatLokerForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const formData = new FormData(buatLokerForm);
      const posisi = formData.get('posisi');
      const linkedin = formData.get('linkedin');
      const instagram = formData.get('instagram');
      const gaji = formData.get('gaji');
      const level = formData.get('level');
      const syarat = formData.get('syarat');
      const tipe = formData.get('tipe');
      const desc = formData.get('desc');
      const tanggungjawab = formData.get('tanggungjawab');
      const keahlian = formData.get('keahlian');
      const kualifikasi = formData.get('kualifikasi');
      const jam = formData.get('jam');

      // Mendapatkan ID perusahaan yang sedang login dari session storage
      const loggedInCompanyId = sessionStorage.getItem('companyId');
      
      if (!loggedInCompanyId) {
        alert('No company ID found in session storage.');
        return;
      }

      // Memasukkan data lowongan ke dalam tabel 'lowongan'
      const { data, error } = await supabase
        .from('lowongan')
        .insert([
          {
            id_perusahaan: loggedInCompanyId,
            posisi: posisi,
            tautan_linkedin: linkedin,
            tautan_instagram: instagram,
            gaji: gaji,
            level_pekerjaan: level,
            pendidikan: syarat,
            tipe_pekerjaan: tipe,
            deskripsi_perusahaan: desc,
            tanggung_jawab: tanggungjawab,
            keahlian: keahlian,
            kualifikasi: kualifikasi,
            jam_kerja: jam
          }
        ]);

      if (error) {
        console.error('Error inserting job data:', error.message);
        alert('Terjadi kesalahan saat memasukkan data lowongan. Silakan coba lagi.');
      } else {
        alert('Lowongan berhasil dipasang!');
        window.location.hash = '#/dashboard';
      }
    });

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

export default Buat;
