const Buat = {
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
        <div class="main-content-buatlowongan">
            <h1>Buat Lowongan Kerja Anda</h1>
            <p>Isi formulir iklan lowongan kerja di bawah ini dengan lengkap dan sebenar-benarnya</p>
            <div class="buat-lowongan-container">
              <form class="buatloker-form">
                <label for="posisi">Posisi Pekerjaan</label>
                <input type="text" id="posisi" name="posisi" placeholder="ex. Kasir">
                
                <label for="linkedin">Tautan Linkedin Perusahaan</label>
                <input type="url" id="linkedin" name="linkedin" placeholder="ex. linkedin.com/in/nama-perusahaan">
                
                <label for="instagram">Tautan Instagram Perusahaan</label>
                <input type="text" id="instagram" name="instagram" placeholder="ex. instagram.com/nama_perusahaan">
                <p class="input-hint">Opsional</p>
                
                <label for="gaji">Rentang Gaji</label>
                <input type="text" id="gaji" name="gaji" placeholder="ex. 1 - 2 juta atau negosiasi">
                
                <label for="level">Level Pekerjaan</label>
                <input type="text" id="level" name="level" placeholder="ex. Junior / Entry Level">
                
                <label for="syarat">Persyaratan Pendidikan</label>
                <input type="text" id="syarat" name="syarat" placeholder="ex. Sarjana">
                
                <label for="tipe">Tipe Pekerjaan</label>
                <input type="text" id="tipe" name="tipe" placeholder="ex. Kontrak">
                
                <label for="desc">Deskripsi Singkat Tentang Pekerjaan</label>
                <input type="text" id="desc" name="desc" placeholder="ex. PT. namaperusahaan adalah ...">
                
                <label for="tanggungjawab">Tanggung Jawab Pekerjaan</label>
                <input type="text" id="tanggungjawab" name="tanggungjawab">
                <p class="input-hint">Buat dalam bentuk list</p>
                
                <label for="keahlian">Keahlian yang Dibutuhkan</label>
                <input type="text" id="keahlian" name="keahlian">
                <p class="input-hint">Buat dalam bentuk list</p>
                
                <label for="kualifikasi">Kualifikasi Tambahan</label>
                <input type="text" id="kualifikasi" name="kualifikasi">
                <p class="input-hint">Buat dalam bentuk list</p>
                
                <label for="jam">Rentang Jam Kerja</label>
                <input type="text" id="jam" name="jam" placeholder="ex. 08.00 - 17.00 WIB">
                <p class="input-hint">Mohon sertakan zona waktu lokal perusahaan</p>

                <button type="submit" class="submit-buatloker-button">Pasang Lowongan</button>
                <p>Pastikan untuk mengecek ulang informasi lowongan kerja di atas sebelum menekan tombol "Pasang Lowongan"</p>
              </form>
            <div>
        <div>
      <div>    
      `;
    },
  };
  
export default Buat;
  