import User from './user.js';
import Logs from './logs.js';

const Chat = function () {
  async function load() {
    const loginSucess = await User.login();
    if (loginSucess) {
      Logs.refresh();
      const timer = setInterval(Logs.refresh, 3000);
      const timeout = setInterval(User.keepConnected, 5000);
    }
  }

  return load();
}();

export default Chat;
