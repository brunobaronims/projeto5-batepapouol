import * as Logs from './logs.js'
import * as User from './user.js'

async function load(url) {
  const loginSucess = await User.login();
  if (loginSucess) {
    Logs.refresh();
    setInterval(Logs.refresh, 3000);
    setInterval(() => {User.submitUsername(url)}, 5000);
  }
};

async function sendMessage() {
  const message = document.querySelector('input').value;
  const response = await fetch('https://mock-api.driven.com.br/api/v6/uol/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: `${User.name}`,
      to: "Todos",
      text: `${message}`,
      type: "message" 
    })
  });
  switch (response.status) {
    case 200:
      Logs.refresh();
      break;
    case 400: 
      location.reload;
      break;
    default: 
      location.reload;
      break;
  }
};

export { load, sendMessage };