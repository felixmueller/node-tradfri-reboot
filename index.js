const trad = require('node-tradfri-client');
const TradfriClient = trad.TradfriClient;

const psk = "YOUR_GATEWAY_PASSKEY";
const ip = "YOUR_GATEWAY_IP";

const client = new TradfriClient(ip);

client.authenticate(psk).then((creds) => {
  client.connect(creds.identity, creds.psk);
  client.rebootGateway().then((res) => {
    console.log(res ? "rebooting" : "could not reboot");
    client.destroy();
  }).catch((error) => console.log(error));
}).catch((error) => console.log(error));
