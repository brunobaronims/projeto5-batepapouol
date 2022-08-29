import * as Logs from './modules/logs.js'
import * as User from './modules/user.js'

window.sendMessage = sendMessage;

window.onload = (event) => {
  load('https://mock-api.driven.com.br/api/v6/uol/status');
};

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
  const name = User.name;
  const response = await fetch('https://mock-api.driven.com.br/api/v6/uol/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: `${name}`,
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
      location.reload();
    default: 
      location.reload();
  }
};