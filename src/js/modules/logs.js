let messageBuffer = [];
const messageList = document.querySelector('ul');

function truncateString(string) {
  if (string.length >= 50) {
    return string.slice(0, 50);
  } else {
    return string;
  }
}

async function getMessages() {
  try {
    const buffer = await fetch('https://mock-api.driven.com.br/api/v6/uol/messages');
    return buffer.json();
  } catch (error) {
    console.error('Não foi possivel resgatar as mensagens:', error);
  }
}

function renderMessage(Message, Buffer) {
  const message = document.createElement('li');
  switch (Message.type) {
    case 'status':
      message.classList.add('status');
      message.innerHTML = `<span>(${Message.time}) </span><b>${truncateString(Message.from)} </b>` + truncateString(Message.text);
      Buffer.appendChild(message);
      break;
    case 'private_message':
      break;
    case 'message':
      message.classList.add('message');
      message.innerHTML = `<span>(${Message.time}) </span><b>${truncateString(Message.from)} </b>para <b>${truncateString(Message.to)}: </b>` + truncateString(Message.text);
      Buffer.appendChild(message);
      break;
    default:
      console.log(`Erro ao carregar mensagem: Tipo inválido "${Message.type}"`);
  }
};

async function refresh() {
  messageBuffer = await getMessages();
  console.log(messageBuffer);
  const htmlBuffer = document.createElement('ul');
  messageBuffer.forEach(Message => {
    renderMessage(Message, htmlBuffer);
  })
  messageList.innerHTML = htmlBuffer.innerHTML;
  messageList.lastChild.scrollIntoView();
};

export { refresh };