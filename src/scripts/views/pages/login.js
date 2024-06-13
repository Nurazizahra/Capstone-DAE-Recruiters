import bcrypt from 'bcryptjs';
import supabase from '../../config/supabase.js';

const Login = {
    async render() {
        return `
         <div class="login-form-container">
          <h2>Login</h2>
          <form class="login-form" id="loginForm">
            <label for="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="Email Address" required>
            <label for="password">Password</label>
            <div class="password-container">
              <input type="password" id="password" name="password" placeholder="Password" required>
              <i class="toggle-password" id="togglePassword">👁️</i>
            </div>
            <button type="submit" class="submit-button">Login</button>
          </form>
          <p>Don’t have an account yet? <a href="#/registrasi">Create Account</a></p>
        </div>
      `;
    },

    async afterRender() {
        const loginForm = document.getElementById('loginForm');
        const togglePassword = document.getElementById('togglePassword');
        const passwordInput = document.getElementById('password');

        togglePassword.addEventListener('click', () => {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            togglePassword.textContent = type === 'password' ? '👁️' : '🙈';
        });

        loginForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            const formData = new FormData(loginForm);
            const email = formData.get('email');
            const password = formData.get('password');

            try {
                // Ambil data user dari Supabase berdasarkan email
                const { data: users, error } = await supabase
                    .from('perusahaan')
                    .select('*')
                    .eq('email', email)
                    .single();

                if (error) {
                    throw error;
                }

                if (users) {
                    // Verifikasi password menggunakan bcrypt
                    const isPasswordValid = await bcrypt.compare(password, users.password);

                    if (isPasswordValid) {
                        // Simpan id perusahaan ke session storage
                        sessionStorage.setItem('companyId', users.id);

                        // Login berhasil, alihkan ke halaman dashboard
                        window.location.hash = '#/dashboard';
                    } else {
                        // Password salah
                        alert('Email atau password yang Anda masukkan salah. Silakan coba lagi.');
                    }
                } else {
                    // Email tidak ditemukan
                    alert('Email atau password yang Anda masukkan salah. Silakan coba lagi.');
                }
            } catch (error) {
                console.error('Login error:', error.message);
                alert('Terjadi kesalahan saat login. Silakan coba lagi.');
            }
        });
    },
};

export default Login;
