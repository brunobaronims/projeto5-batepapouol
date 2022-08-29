let username;

async function login() {
  username = prompt('Username: ');
  const response = await submitUsername('https://mock-api.driven.com.br/api/v6/uol/participants');
  switch (response.status) {
    case 400:
      alert('Nome de usuário já em uso');
      login();
    case 200:
      return true;
    default:
      return false;
  }
}

async function submitUsername(url) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: username })
  });
  return response;
}

function name() {
  return username;
}

export { name, submitUsername, login };