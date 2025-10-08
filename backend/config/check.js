const config = require("config");

let keys = Object.keys(config);
let missing = false;
let env = process.env.NODE_ENV === "development";

for (let key of keys) {
  for (let configKey of Object.keys(config[key])) {
    if (env && configKey === "caCert") {
      console.log(`Skipping ca certificate`);
      continue;
    }
    if (!config[key][configKey]) {
      console.log(`fatal error: missing ${key} ${configKey}`);
      missing = true;
    }
  }
}

if (missing) process.exit(1);
