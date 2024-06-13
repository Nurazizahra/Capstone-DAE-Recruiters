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
                    Mahasiswi Universitas Palangka Raya.
                  <h6>
                    Nur Azizah Rabiulakhhir
                  </h6>
                  <p>
                     Mahasiswi Universitas Palangka Raya.
                  </p>
                  <h6>
                    El Emir Di Haryanto
                  </h6>
                  <p>
                      Mahasiswa Universitas Pancasila.
                  </p>
            </div>
            <div class="image-about-loker">
                <img class="image-about" src="./logo.png" alt="Logo DAE Recruiters" />
            </div>
          </div>
      `;
  },
};

export default About;
