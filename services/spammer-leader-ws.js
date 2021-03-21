console.log("Starting connection to websocket server!");
const connection = new WebSocket("ws://localhost:13402/");

let clientEventListeners = [];

let clients = [];
let clientGetter = { clients };

connection.onopen = (event) => {
  console.log(event);
  console.log("Connected!");
};

connection.onmessage = (event) => {
  const data = JSON.parse(event.data);
  clientGetter.clients = data.followers;
  clientEventListeners.forEach((listener) => {
    listener(data.followers);
  });
};

export { connection, clientEventListeners, clientGetter };
