import Messages from "./messages.js";

const Logs = function () {
  let messageBuffer = [];
  const messageList = document.querySelector('ul');
  
  function renderMessage(Message, Buffer) {
    const message = document.createElement('li');
    switch (Message.type) {
      case 'status':
        message.classList.add('status');
        if (Message.text.length < 100) {
          message.innerHTML += Message.text;
        }        
        Buffer.appendChild(message);
        break;
      case 'reserved':
        //add reserved message to chat log element
        break;
      case 'message':
        message.classList.add('message');
        if (Message.text.length < 100) {
          message.innerHTML += Message.text;
        }
        Buffer.appendChild(message);
        break;
      default: 
        console.log(`Erro ao carregar mensagem: Tipo inválido "${Message.type}"`);
    }
  };

  async function refreshLogs() {
    messageBuffer = await Messages;
    const htmlBuffer = document.createElement('ul');
    messageBuffer.forEach(Message => {
      renderMessage(Message, htmlBuffer);
    })
    messageList.innerHTML = htmlBuffer.innerHTML;
    messageList.lastChild.scrollIntoView();
  };

  return {
    refresh() {
      refreshLogs();
    },

    messages() {
      return Buffer;
    }
  }
}();

export default Logs;