const Tips = {
  async render() {
    return `
          <h2 class="tips-loker-title">Tips Loker</h2>
          <h3 class="tips-loker-subtitle">Kenali dan Waspadai Sebelum Melamar</h3>
          <div class="content-tips">
            <div class="paragraph-tips">
            <p> 
              1. Jelajahi Website atau Laman Perusahaan. Pastikan perusahaan merupakan
              perusahaan nyata dan tidak fiktif agar menghindari terjadinya penipuan.
              Platform ini sudah disertai verifikasi, namun tetap berhati-hatilah
              sebelum melamar.
            </p>
            <p> 
              2. Pastikan sudah memenuhi persyaratan dan kualifikasi yang ditetapkan oleh
              perusahaan dan menyiapkan dokumen-dokumen yang dibutuhkan.
            </p>
            <p> 
              3. Harap lebih waspada dan berhati-hati jika perusahaan meminta sejumlah uang
              untuk biaya apapun selama proses melamar pekerjaan dan pastikan kembali
              perusahaan merupakan perusahaan yang nyata dan tidak fiktif.
            </p>
            <p> 
              4. Periksa lokasi perusahaan apakah sesuai (dapat menggunakan Google
              Maps/Maps) dan dapat dijangkau secara pribadi jika melamar pekerjaan di
              perusahaan tersebut.
            </p>
            </div>
            <div class="image-tips">
              <img class="image1" src="./tipsloker.png" alt="Tips Loker" />
            </div>
          </div>
      `;
  },
};

export default Tips;
