const User = function () {
  let username;

  async function Login() {
    username = prompt('Username: ');
    if (username.length > 100) {
      alert('Limite de 100 caracteres');
      Login();
    } else {
      const response = await submitUsername('https://mock-api.driven.com.br/api/v6/uol/participants');
      switch (response.status) {
        case 400:
          alert('Nome de usuário já em uso');
          Login();
        case 200:
          return true;
        default:
          return false;
      }
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

  return {
    login() {
      return Login();
    },

    keepConnected() {
      submitUsername('https://mock-api.driven.com.br/api/v6/uol/status');
    },

    name() {
      return username;
    }
  }
}();

export default User;