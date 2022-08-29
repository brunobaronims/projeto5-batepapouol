import * as Chat from './modules/chat.js'

window.sendMessage = Chat.sendMessage;

window.onload = (event) => {
  Chat.load('https://mock-api.driven.com.br/api/v6/uol/status');
};