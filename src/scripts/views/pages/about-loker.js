const About = {
  async render() {
    return `
          <h2 class="about-title">Tentang Loker</h2>
          <h3 class="about-subtitle"> Mengenal lebih dekat tim di balik DAE Recruiters</h3>
          <div class="about-loker">
            <div class="about-content">
              <p>
                DAE Recruiters adalah platform rekrutmen yang diciptakan untuk membantu
                pencari kerja mencari lowongan pekerjaan dan perusahaan dalam merekrut
                kandidat terbaik. Kami menyadari urgensi masalah pengangguran yang masih
                merajalela di Indonesia. Solusi ini dianggap relevan karena bertujuan
                untuk memudahkan pencari kerja menemukan informasi lowongan pekerjaan yang
                sesuai dengan kualifikasi/keahlian dan minat mereka, serta membantu
                perusahaan untuk memasang lowongan pekerjaan secara efektif.
              </p>
              <h3 class="about-subarticle">Tentang DAE Recruiters</h3>
                <p>
                  Selamat datang di DAE Recruiters. Kami adalah tim capstone yang mengikuti
                  program Kampus Merdeka, yaitu Studi Independen pada mitra Dicoding
                  Indonesia. Sebagai bagian dari tugas akhir kami, kami mengembangkan proyek
                  website loker ini untuk memberikan solusi rekrutmen yang terbaik bagi
                  perusahaan dan pencari kerja.
                </p>
              <h3 class="about-subarticle">Kontak Kami</h3>
                <p>
                  Jika Anda memiliki pertanyaan atau ingin mengetahui lebih lanjut tentang
                  DAE Recruiters, jangan ragu untuk menghubungi kami di <span><a href="mailto:C624-PS124@dicoding.org">C624-PS124@dicoding.org</a></span>.
                </p>
              <h3 class="about-subarticle">Tentang Tim</h3>
                  <p>
                    DAE Recruiters didukung oleh tim yang berdedikasi dari berbagai latar
                    belakang. Kami semua adalah mahasiswa yang bersemangat dan berdedikasi
                    untuk memberikan solusi rekrutmen terbaik.
                  </p>
                  <h5>
                    Anggota Tim:
                  </h5>
                  <h6>
                    Dwita Anatasya
                  </h6>
                   <p>
                    Saya <strong>Dwita Anatasya</strong> yang lebih dikenal dengan sebutan <strong>Dwita</strong>, saya seorang mahasiswi semester 6 di Universitas Palangka Raya jurusan Teknik Informatika.
                    Jika Anda ingin terhubung dengan saya, silakan kunjungi akun media sosial saya di bawah ini: 
                  </p>
                  <div class="icon-sosmed">
                    <a id="linkedin" href="https://www.linkedin.com/in/dwita-anatasya-b92877308?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank">
                        <i class="fab fa-linkedin"></i>
                    </a>
                    <a id="github" href="https://github.com/dwitaanatasya" target="_blank">
                        <i class="fab fa-github"></i>
                    </a>
                  </div>
                  <h6>
                    Nur Azizah Rabiulakhhir
                  </h6>
                  <p>
                    Saya <strong>Nur Azizah Rabiulakhhir</strong> yang lebih dikenal dengan sebutan <strong>Jijah</strong>, saya seorang mahasiswi semester 6 di Universitas Palangka Raya jurusan Teknik Informatika.
                    Jika Anda ingin terhubung dengan saya, silakan kunjungi akun media sosial saya di bawah ini: 
                  </p>
                  <div class="icon-sosmed">
                    <a id="linkedin" href="https://linkedin.com/in/nurazizahrabiulakhhir" target="_blank">
                        <i class="fab fa-linkedin"></i>
                    </a>
                    <a id="github" href="https://github.com/Nurazizahra" target="_blank">
                        <i class="fab fa-github"></i>
                    </a>
                  </div>
                  <h6>
                    El Emir Di Haryanto
                  </h6>
                  <p>
                    Saya <strong>El Emir Di Haryanto</strong> yang lebih dikenal dengan sebutan <strong>Emir</strong>, saya seorang mahasiswa semester 6 di Universitas Pancasila jurusan Teknik Informatika.
                    Jika Anda ingin terhubung dengan saya, silakan kunjungi akun media sosial saya di bawah ini: 
                  </p>
                  <div class="icon-sosmed">
                    <a id="linkedin" href="http://www.linkedin.com/in/el-emir-di-haryanto-775383296" target="_blank">
                        <i class="fab fa-linkedin"></i>
                    </a>
                    <a id="github" href="https://github.com/elemir07" target="_blank">
                        <i class="fab fa-github"></i>
                    </a>
                  </div>
            </div>
            <div class="image-about-loker">
                <img class="image-about" src="./logo.png" alt="Logo DAE Recruiters" />
            </div>
          </div>
      `;
  },

  async afterRender() {
    // Jangan dihapus, biarin aja kosong agar tidak error
  },
};

export default About;
