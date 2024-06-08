const Registrasi = {
    async render() {
        return `
        <div class="regis-form-container">
          <h2>Registrasi Perusahaan</h2>
          <form class="regis-form">
          <label for="namaPerusahaan">Nama Perusahaan</label>
          <input type="text" id="namaPerusahaan" name="namaPerusahaan" placeholder="Nama Perusahaan">
          
          <label for="alamatPerusahaan">Alamat Perusahaan</label>
          <input type="text" id="alamatPerusahaan" name="alamatPerusahaan" placeholder="Alamat Perusahaan">
          
          <label for="namaPenanggungJawab">Nama Penanggung Jawab</label>
          <input type="text" id="namaPenanggungJawab" name="namaPenanggungJawab" placeholder="Nama Penanggung Jawab">
          
          <label for="email">Email Address</label>
          <input type="email" id="email" name="email" placeholder="Email Address">
          
          <label for="nikPenanggungJawab">NIK Penanggung Jawab</label>
          <input type="text" id="nikPenanggungJawab" name="nikPenanggungJawab" placeholder="NIK Penanggung Jawab">
          
          <label for="username">Username</label>
          <input type="text" id="username" name="username" placeholder="Username">
          <p class="input-hint">Must be at least 6 characters</p>
          
          <label for="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Password">
          <p class="input-hint">Must be at least 8 characters</p>
          
          <button type="submit" class="submit-regis-button">Create</button>
        </form>
        <p>Already have an account? <a href="#/login">Login</a></p>
      </div>
      `;
    },
};

export default Registrasi;
