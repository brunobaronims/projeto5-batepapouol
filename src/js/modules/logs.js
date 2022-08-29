import Messages from "./messages.js";

const Logs = function () {
  let messageBuffer = [];
  const messageList = document.querySelector('ul');

  function truncateString(string) {
    if (string.length >= 50) {
      return string.slice(0, 50);
    } else {
      return string;
    }
  }

  function renderMessage(Message, Buffer) {
    const message = document.createElement('li');
    switch (Message.type) {
      case 'status':
        message.classList.add('status');
        if (Message.text.length < 100) {
          message.innerHTML = `<span>(${Message.time}) </span><b>${truncateString(Message.from)} </b>` + truncateString(Message.text);
        }
        Buffer.appendChild(message);
        break;
      case 'reserved':
        //add reserved message to chat log element
        break;
      case 'message':
        message.classList.add('message');
        if (Message.text.length < 100) {
          message.innerHTML = `<span>(${Message.time}) </span><b>${truncateString(Message.from)} </b>para <b>${truncateString(Message.to)}: </b>` + truncateString(Message.text);
        }
        Buffer.appendChild(message);
        break;
      default:
        console.log(`Erro ao carregar mensagem: Tipo inválido "${Message.type}"`);
    }
  };

  async function refreshLogs() {
    messageBuffer = await Messages;
    console.log(messageBuffer);
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
    }
  }
}();

export default Logs;