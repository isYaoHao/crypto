const dotenv = require("dotenv");
const Cpt = require("./cpt.js");
const fs = require("fs");
const { writeSync } = require("clipboardy");
dotenv.config();
const cpt = new Cpt(process.env.secretKey);

(() => {
  const str = fs.readFileSync("decrypt.txt", "utf-8");
  const secret = cpt.encryption(str);
  fs.writeFileSync("encryption.txt", secret);
  writeSync(secret);
  console.log("加密操作成功，已经复制到粘贴板！");
})();
