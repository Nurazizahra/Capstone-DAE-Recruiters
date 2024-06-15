import supabase from '../../config/supabase.js';
import bcrypt from 'bcryptjs';
import '../../component/sidebar.js';

const Akun = {
  async render() {
    return `
      <div class="dashboard-container">
       <div class="sidebar">
          <custom-sidebar></custom-sidebar>
        </div>
          <div class="main-content-kelolaakun">
              <h1>Kelola Akun Anda</h1>
              <p class="subHeader">Update akun anda dengan mengganti isi formulir dibawah ini</p>
              <div class="kelolaakun-container">
                <form class="kelolaakun-form">
                    <label for="namaPerusahaan">Nama Perusahaan</label>
                    <input type="text" id="namaPerusahaan" name="namaPerusahaan" required>

                    <label for="alamatPerusahaan">Alamat Perusahaan</label>
                    <input type="text" id="alamatPerusahaan" name="alamatPerusahaan" required>

                    <label for="namaPenanggungJawab">Nama Penanggung Jawab</label>
                    <input type="text" id="namaPenanggungJawab" name="namaPenanggungJawab" required>

                    <label for="email">Email Address</label>
                    <input type="email" id="email" name="email" required>

                    <label for="nik">NIK Penanggung Jawab</label>
                    <input type="text" id="nik" name="nik" required>

                    <label for="currentPassword">Password Saat Ini</label>
                    <div class="password-container">
                      <input type="password" id="currentPassword" name="currentPassword" placeholder="Masukkan password anda saat ini" required>
                      <i class="toggle-password" id="toggleCurrentPassword">🔓</i>
                    </div>

                    <label for="newPassword">Password Baru</label>
                    <div class="password-container">
                      <input type="password" id="newPassword" name="newPassword" placeholder="Masukkan password baru anda" required>
                      <i class="toggle-password" id="toggleNewPassword">🔓</i>
                    </div>
                    <p class="input-hint">Must be at least 8 characters</p>
          
                    <label for="confirmNewPassword">Konfirmasi Password Baru</label>
                    <div class="password-container">
                      <input type="password" id="confirmNewPassword" name="confirmNewPassword" placeholder="Masukkan password baru anda" required>
                      <i class="toggle-password" id="toggleConfirmNewPassword">🔓</i>
                    </div>

                    <button type="submit" class="submit-kelolaakun-button">Simpan Perubahan</button>
                </form>
              </div>
          </div>
      </div>
    `;
  },

  async afterRender() {
    try {
      const loggedInCompanyId = sessionStorage.getItem('companyId');

      if (!loggedInCompanyId) {
        throw new Error('No company ID found in session storage.');
      }

      const { data: companyData, error } = await supabase
        .from('perusahaan')
        .select('nama_perusahaan, alamat, nama_penanggung_jawab, email, nik, password')
        .eq('id', loggedInCompanyId)
        .single();

      if (error) {
        throw new Error(`Error fetching company data: ${error.message}`);
      }

      document.querySelector('#namaPerusahaan').value = companyData.nama_perusahaan;
      document.querySelector('#alamatPerusahaan').value = companyData.alamat;
      document.querySelector('#namaPenanggungJawab').value = companyData.nama_penanggung_jawab;
      document.querySelector('#email').value = companyData.email;
      document.querySelector('#nik').value = companyData.nik;

      document.querySelectorAll('.toggle-password').forEach(toggle => {
        toggle.addEventListener('click', () => {
          const input = toggle.previousElementSibling;
          const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
          input.setAttribute('type', type);
          toggle.textContent = type === 'password' ? '🔓' : '🔒';
        });
      });

      document.querySelector('.kelolaakun-form').addEventListener('submit', async (event) => {
        event.preventDefault();

        const currentPassword = document.querySelector('#currentPassword').value;
        const newPassword = document.querySelector('#newPassword').value;
        const confirmNewPassword = document.querySelector('#confirmNewPassword').value;

        const isPasswordValid = await bcrypt.compare(currentPassword, companyData.password);

        if (!isPasswordValid) {
          alert('Password sebelumnya yang Anda masukkan salah.');
          return;
        }

        if (newPassword.length < 8) {
          alert('Buat password dengan panjang minimal 8 karakter.');
          return;
        }

        if (newPassword !== confirmNewPassword) {
          alert('Konfirmasi password baru tidak sesuai.');
          return;
        }

        const hashedNewPassword = await bcrypt.hash(newPassword, 10);

        const updatedCompanyData = {
          nama_perusahaan: document.querySelector('#namaPerusahaan').value,
          alamat: document.querySelector('#alamatPerusahaan').value,
          nama_penanggung_jawab: document.querySelector('#namaPenanggungJawab').value,
          email: document.querySelector('#email').value,
          nik: document.querySelector('#nik').value,
          password: hashedNewPassword,
        };

        const { data, error: updateError } = await supabase
          .from('perusahaan')
          .update(updatedCompanyData)
          .eq('id', loggedInCompanyId);

        if (updateError) {
          throw new Error(`Failed to update company data: ${updateError.message}`);
        }

        alert('Akun berhasil diperbarui');
        
        sessionStorage.removeItem('isLoggedIn');
        sessionStorage.removeItem('companyId');

        const loginButton = document.querySelector('.login-button a');

        loginButton.textContent = 'Login';
        loginButton.href = '#/login';
        
        window.location.hash = '#/login';
      });

      document.querySelector('a[data-route="kelolaakun"]').classList.add('active');

    } catch (error) {
      console.error('Error:', error.message);
      alert('Terjadi kesalahan saat memuat data. Silakan coba lagi.');
    }
  },
};

export default Akun;
