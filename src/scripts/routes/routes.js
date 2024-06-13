import Home from '../views/pages/home.js';
import Pasang from '../views/pages/pasang-loker.js';
import Tips from '../views/pages/tips-loker.js';
import About from '../views/pages/about-loker.js';
import Bantuan from '../views/pages/pusat-bantuan.js';
import Login from '../views/pages/login.js';
import Registrasi from '../views/pages/registrasi-perusahaan.js';
import Dashboard from '../views/pages/dashboard-loker.js';
import Buat from '../views/pages/buat-lowongan.js';
import Manajemen from '../views/pages/manajemen-lowongan.js';
import Edit from '../views/pages/edit-loker.js';
import Detail from '../views/pages/detail-loker.js';
import Akun from '../views/pages/kelola-akun.js';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/pasang': Pasang,
  '/tips': Tips,
  '/tentangloker': About,
  '/pusatbantuan': Bantuan,
  '/login': Login,
  '/registrasi': Registrasi,
  '/dashboard': Dashboard,
  '/buatloker': Buat,
  '/manajemenloker': Manajemen,
  '/editloker/:id': Edit,
  '/detail/:id': Detail,
  '/kelolaakun': Akun,
};

export default routes;
