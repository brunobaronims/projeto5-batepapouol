import * as Chat from './modules/chat.js'

window.sendMessage = Chat.sendMessage;

window.onload = (event) => {
  Chat.loadChat('https://mock-api.driven.com.br/api/v6/uol/status');
};