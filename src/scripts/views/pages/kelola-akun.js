const Akun = {
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
          <div class="main-content-kelolaakun">
              <h1>Kelola Akun Anda</h1>
              <p class="subHeader">Update akun anda dengan mengganti isi formulir dibawah ini</p>
              <div class="kelolaakun-container">
                <form class="kelolaakun-form">
                    <label for="namaPerusahaan">Nama Perusahaan</label>
                    <input type="text" id="namaPerusahaan" name="namaPerusahaan">

                    <label for="alamatPerusahaan">Alamat Perusahaan</label>
                    <input type="text" id="alamatPerusahaan" name="alamatPerusahaan">

                    <label for="email">Email Address</label>
                    <input type="email" id="email" name="email">
                    <button type="submit" class="submit-kelolaakun-button">Simpan Perubahan</button>
                </form>
              </div>
          </div>
      </div>
      `;
    },

    async afterRender() {
        // Jangan dihapus, biarin aja kosong agar tidak error
    },
  };
  
  export default Akun;