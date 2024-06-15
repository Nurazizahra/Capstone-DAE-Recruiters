const Bantuan = {
  async render() {
      return `
      <div class="pusat-bantuan">
        <h2 class="pusat-bantuan-title">Pusat Bantuan</h2>
          <h3 class="pusat-bantuan-subTitle">Registrasi Akun Perusahaan</h3>
              <p>
                1. Klik <span><a href="#/registrasi">di sini</a></span>
                untuk membuka halaman registrasi akun perusahaan.
              </p>
              <p>
                2. Isi semua kolom pada formulir registrasi dengan data yang benar dan
                lengkap untuk memastikan proses registrasi berjalan lancar.
              </p>
              <p>
                3. Klik tombol &quot;Create&quot; untuk menyelesaikan pendaftaran.
              </p>
              <p>
                4. Setelah registrasi selesai, Anda dapat memasang lowongan pekerjaan
                sesuai kebutuhan perusahaan Anda dengan login menggunakan kredensial
                yang telah didaftarkan.
              </p>
        <h3 class="pusat-bantuan-subTitle">Pasang Lowongan Kerja</h3>
          <p>
            1. Pastikan perusahaan Anda sudah memiliki akun. Jika belum, silakan
            registrasi terlebih dahulu.
          </p>
          <p>
            2. Login ke akun perusahaan Anda dengan memasukkan email dan password yang
            telah didaftarkan.
          </p>
          <p>
            3. Setelah berhasil login, klik menu &quot;Buat Lowongan Baru”.
          </p>
          <p>
            4. Isi formulir iklan lowongan kerja dengan data yang benar dan lengkap.
          </p>
          <p>
            5. Periksa kembali semua informasi yang telah diisi untuk memastikan tidak
            ada kesalahan.
          </p>
          <p>
            6. Klik tombol &quot;Pasang Lowongan&quot; untuk mempublikasikan lowongan
            pekerjaan Anda.
          </p>
          <p>
            7. Lowongan Anda sekarang sudah diposting dan dapat dilihat oleh calon
            pelamar.
          </p>
        <h3 class="pusat-bantuan-subTitle">Manajemen Lowongan Kerja</h3>
          <p>
            1. Pastikan perusahaan Anda sudah memiliki akun. Jika belum, silakan
            registrasi terlebih dahulu.
          </p>
          <p>
            2. Login ke akun perusahaan Anda dengan memasukkan email dan password yang
            telah didaftarkan.
          </p>
          <p>
            3. Setelah berhasil login, klik menu &quot;Manajemen Lowongan”.
          </p>
          <p>
            4. Pada halaman manajemen lowongan, Anda akan melihat daftar lowongan kerja yang telah Anda buat.
          </p>
          <p>
            5. Untuk mengedit lowongan kerja:
          </p>
           <ul>
                <li>a. Temukan lowongan kerja yang ingin Anda edit pada daftar lowongan kerja.</li>
                <li>b. Klik tombol "Edit" pada kartu lowongan yang ingin Anda edit.</li>
                <li>c. Ubah informasi yang perlu diperbarui pada formulir edit lowongan kerja.</li>
                <li>d. Klik tombol "Simpan Perubahan" untuk mengupdate lowongan kerja Anda.</li>
            </ul>
          <p>
            6. Untuk menghapus lowongan kerja:
          </p>
          <ul>
            <li>a. Temukan lowongan kerja yang ingin Anda hapus pada daftar lowongan kerja.</li>
            <li>b. Klik tombol "Hapus" pada kartu lowongan yang ingin Anda hapus.</li>
          </ul>
          <p>
            7. Setelah mengedit atau menghapus lowongan kerja, perubahan akan segera diterapkan dan calon pelamar akan melihat pembaruan tersebut.
          </p>
          <h3 class="pusat-bantuan-subTitle">Kelola Akun Perusahaan</h3>
          <p>
            1. Pastikan perusahaan Anda sudah memiliki akun. Jika belum, silakan registrasi terlebih dahulu.
          </p>
          <p>
            2. Login ke akun perusahaan Anda dengan memasukkan email dan password yang telah didaftarkan.
          </p>
          <p>
            3. Setelah berhasil login, klik menu "Kelola Akun".
          <p>
            4. Pada halaman kelola akun, Anda dapat mengganti informasi akun perusahaan Anda.
          </p>
          <p>
            5. Isi form kelola akun dengan data yang dapat diperbarui, seperti:
          </p>
          <ul>
            <li>a. Nama perusahaan</li>
            <li>b. Nama penanggung jawab</li>
            <li>c. NIK penanggung jawab</li>
            <li>d. Alamat perusahaan</li>
            <li>e. Email address</li>
            <li>f. Password</li>
          </ul>
          <p>
            6. Setelah mengubah informasi yang diperlukan, klik tombol "Simpan Perubahan" untuk memperbarui akun perusahaan Anda.
          </p>
          <p>
            7. Perubahan pada akun perusahaan Anda akan segera diterapkan.
          </p>
      </div>
    `;
  },

  async afterRender() {
    // Jangan dihapus, biarin aja kosong agar tidak error
  },
};

export default Bantuan;
