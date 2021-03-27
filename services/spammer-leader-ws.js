console.log("Starting connection to websocket server!");
const connection = new WebSocket("ws://localhost:13402/");

// Getters
let clientGetter = { clients: [] };
let leaderGetter = { leader: { uuid: undefined } };

connection.onopen = (event) => {
  console.log(event);
  console.log("Connected!");
};

connection.onmessage = (event) => {
  const data = JSON.parse(event.data);
  console.log(event.data);
  if (data.hasOwnProperty("followers")) clientGetter.clients = data.followers;
  if (data.hasOwnProperty("leader")) leaderGetter.leader = data.leader;
};

export { connection, clientGetter, leaderGetter };
