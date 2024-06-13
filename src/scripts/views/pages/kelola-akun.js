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
            <h1>Kelola Akun Perusahaan</h1>
            <div class="kelolaakun-container">
              <form class="kelolaakun-form">
                <label for="company">Nama Perusahaan</label>
                <input type="text" id="company" name="company">
                
                <label for="alamat">Alamat Perusahaan</label>
                <input type="url" id="alamat" name="alamat">
                
                <label for="dataNIK">NIK Penanggung Jawab</label>
                <input type="text" id="dataNIK" name="dataNIK">
                
                <label for="email">Alamat Email</label>
                <input type="text" id="email" name="email">
                <button type="submit" class="submit-kelolaakun-button">Simpan Perubahan</button>
              </form>
            </div>
        </div>
    </div>
    `;
  },
};

export default Akun;
