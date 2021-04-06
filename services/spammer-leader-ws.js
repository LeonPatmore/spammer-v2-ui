const { clientGetter, leaderGetter } = require("./spammer-leader-store");

async function createWebsocket(host) {
  console.log(`Starting connection to websocket server with host [ ${host} ]`);
  const connection = new WebSocket(`ws://${host}:13402/`);

  connection.onopen = (event) => {
    console.log(event);
    console.log("Connected!");
  };

  connection.onmessage = (event) => {
    const data = JSON.parse(event.data);
    console.log(event.data);
    if (Object.prototype.hasOwnProperty.call(data, "followers"))
      clientGetter.clients = data.followers;
    if (Object.prototype.hasOwnProperty.call(data, "leader"))
      leaderGetter.leader = data.leader;
  };
}

export { createWebsocket };
