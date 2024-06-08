import Home from '../views/pages/home.js';
import Pasang from '../views/pages/pasang-loker.js';
import Tips from '../views/pages/tips-loker.js';
import About from '../views/pages/about-loker.js';
import Bantuan from '../views/pages/pusat-bantuan.js';
import Login from '../views/pages/login.js';
import Registrasi from '../views/pages/registrasi-perusahaan.js';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/pasang': Pasang,
  '/tips': Tips,
  '/tentangloker': About,
  '/pusatbantuan': Bantuan,
  '/login': Login,
  '/registrasi': Registrasi,
};

export default routes;
