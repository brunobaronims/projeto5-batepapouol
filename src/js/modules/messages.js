const Messages = function () {
  async function getMessages() {
    try {  
      const buffer = await fetch('https://mock-api.driven.com.br/api/v6/uol/messages');
      return buffer.json();
    } catch(error) {
      console.error('Não foi possivel resgatar as mensagens: ', error);
    }
  };

  return getMessages();
}();

export default Messages;