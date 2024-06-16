const Pasang = {
  async render() {
    return `
            <div class="pasang-loker-content">
                <h2 class="pasang-loker-title">Cari Kandidat Terbaik untuk Perusahaan Anda</h2>
                <p class="pasang-loker-description">
                    Kami menyediakan platform yang mudah digunakan untuk membantu Anda memasang lowongan kerja untuk kebutuhan perusahaan Anda. Jika Anda belum memiliki akun, silakan daftar terlebih dahulu. Jika sudah memiliki akun, silakan login untuk mulai memasang lowongan kerja.
                </p>
                <div class="pasang-loker-button">
                    <a href="#/login">Login</a>
                    <a href="#/registrasi">Registrasi Perusahaan</a>
                </div>
            </div>
      `;
  },

  async afterRender() {
  
  },
};

export default Pasang;
