const { Client } = require('tplink-smarthome-api');

const client = new Client();

const plugIP = process.argv[2];
const power = process.argv[3] === 'true';

client.getDevice({ host: plugIP }).then(
	(device) => {device.setPowerState(power);}
);