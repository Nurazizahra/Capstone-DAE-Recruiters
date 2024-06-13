const Detail = {
  async render() {
      return `
      <div class="data-loker">
            <h2>Posisi Pekerjaan</h2> <!-- Fetch Data -->
            <h4>Nama Perusahaan, Lokasi</h4> <!-- Fetch Data -->
                <div class="icon-sosmed"></div>
            <p><strong>Gaji:</strong> <!-- Fetch Data --> </P>
            <p><strong>Level Pekerjaan:</strong> <!-- Fetch Data --></p>
            <p><strong>Pendidikan:</strong> <!-- Fetch Data --></p>
            <p><strong>Tipe Pekerjaan:</strong> <!-- Fetch Data --></p>
                <p>penjelasan tipe pekerjaan</p> <!-- Fetch Data -->
            <p><strong>Tanggung Jawab Pekerjaan:</strong></P>
                <p>list tanggung jawab pekerjaan</p> <!-- Fetch Data -->
            <p><strong>Keahlian yang Dibutuhkan:</strong></P>
                <p>list keahlian</p> <!-- Fetch Data -->
            <p><strong>Kualifikasi:</strong></P>
                <p>list kualifikasi</p> <!-- Fetch Data -->
            <p><strong>Jam Kerja:</strong></P>
                <p>misal 08.00 - 17.00</p><!-- Fetch Data -->
            <h5> Tanggal Posting : (diambil dari database juga) </h5>
      </div>
    `;
  },
};

export default Detail;
