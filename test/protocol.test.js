process.env.DEBUG = "minecraft-protocol";

const { createServer } = require("../index");

createServer({
  host: "0.0.0.0",
  port: 19132,
  version: "1.18.0",
  maxVersion: "1.19.63",
  motd: {
    motd: "Hello",
    levelName: "KodaMC",
  },
});

console.log("created");
