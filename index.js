import PeerId from "peer-id";
import minimist from "minimist";

const argv = minimist(process.argv.slice(2));

if (argv.privateKey) {
  const peerId = await PeerId.createFromPrivKey(argv.privateKey);
  conclude(peerId);
}

if (argv.hex) {
  const peerId = await PeerId.createFromHexString(argv.hex);
  conclude(peerId);
}

if (argv.publicKey) {
  const peerId = await PeerId.createFromPubKey(argv.publicKey);
  conclude(peerId);
}

if (argv.cid) {
  const peerId = await PeerId.createFromCID(argv.cid);
  conclude(peerId);
}

const type = argv.type || "ed25519";
const peerId = await PeerId.create({ type });
conclude(peerId);

function conclude(peerId) {
  console.log(JSON.stringify(peerId.toJSON()));
  process.exit(0);
}
