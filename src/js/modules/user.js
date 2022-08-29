const User = function () {
  let name = '';

  async function Login() {
    name = prompt('Username: '); 
    if (name.length > 100) {
      alert('Limite de 100 caracteres');
      Login();
    } else {
      const response = await fetch('https://mock-api.driven.com.br/api/v6/uol/participants')
    }
  }

  return Login();
}();

export default User;