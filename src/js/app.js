import User from './modules/user.js';
import Logs from './modules/logs.js';

window.onload = (event) => {
  async function chat() {
    const loginSucess = await User.login();
    if (loginSucess) {
      Logs.refresh();
      const timer = setInterval(Logs.refresh, 3000);
      const timeout = setInterval(User.keepConnected, 5000);
    }
  }
  chat();
};