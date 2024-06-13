import supabase from '../../config/supabase.js';
import bcrypt from 'bcryptjs';

const Registrasi = {
  async render() {
    return `
      <div class="regis-form-container">
        <h2>Registrasi Perusahaan</h2>
        <form class="regis-form" id="regisForm">
          <label for="namaPerusahaan">Nama Perusahaan</label>
          <input type="text" id="namaPerusahaan" name="namaPerusahaan" placeholder="Nama Perusahaan" required>
          <label for="alamatPerusahaan">Alamat Perusahaan</label>
          <input type="text" id="alamatPerusahaan" name="alamatPerusahaan" placeholder="Alamat Perusahaan" required>
          <label for="namaPenanggungJawab">Nama Penanggung Jawab</label>
          <input type="text" id="namaPenanggungJawab" name="namaPenanggungJawab" placeholder="Nama Penanggung Jawab" required>
          <label for="email">Email Address</label>
          <input type="email" id="email" name="email" placeholder="Email Address" required>
          <label for="nikPenanggungJawab">NIK Penanggung Jawab</label>
          <input type="text" id="nikPenanggungJawab" name="nikPenanggungJawab" placeholder="NIK Penanggung Jawab" required>
          <label for="password">Password</label>
          <div class="password-container">
            <input type="password" id="password" name="password" placeholder="Password" required>
            <i class="toggle-password" id="togglePassword">👁️</i>
          </div>
          <p class="input-hint">Must be at least 8 characters</p>
          <button type="submit" class="submit-regis-button">Create</button>
        </form>
        <p>Already have an account? <a href="#/login">Login</a></p>
      </div>
    `;
  },

  async afterRender() {
    const form = document.getElementById('regisForm');
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');

    togglePassword.addEventListener('click', () => {
      const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordInput.setAttribute('type', type);
      togglePassword.textContent = type === 'password' ? '👁️' : '🙈';
    });

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const namaPerusahaan = document.getElementById('namaPerusahaan').value;
      const alamatPerusahaan = document.getElementById('alamatPerusahaan').value;
      const namaPenanggungJawab = document.getElementById('namaPenanggungJawab').value;
      const email = document.getElementById('email').value;
      const nikPenanggungJawab = document.getElementById('nikPenanggungJawab').value;
      const password = document.getElementById('password').value;

      const hashedPassword = await bcrypt.hash(password, 10);

      console.log('Data to insert:', {
        nama_perusahaan: namaPerusahaan,
        alamat: alamatPerusahaan,
        nama_penanggung_jawab: namaPenanggungJawab,
        email: email,
        nik: nikPenanggungJawab,
        password: hashedPassword,
      });

      try {
        const { data, error } = await supabase
          .from('perusahaan')
          .insert([
            {
              nama_perusahaan: namaPerusahaan,
              alamat: alamatPerusahaan,
              nama_penanggung_jawab: namaPenanggungJawab,
              email: email,
              nik: nikPenanggungJawab,
              password: hashedPassword,
            }
          ]);

        if (error) {
          console.error('Error inserting data:', error);
          throw error;
        }

        console.log('Data inserted successfully:', data);
        alert('Account created successfully!');
        window.location.hash = '#/home';
      } catch (error) {
        console.error('Error creating account:', error);
        alert('Error creating account. Please try again.');
      }
    });
  }
};

export default Registrasi;
