const dotenv = require("dotenv");
const Cpt = require("./cpt.js");
const fs = require("fs");
const { writeSync } = require("clipboardy");
dotenv.config();
const cpt = new Cpt({
  secretKey: process.env.secretKey,
  salt: process.env.salt,
});
(() => {
  const str = fs.readFileSync("encryption.txt", "utf-8");
  const secret = cpt.decrypt(str);
  fs.writeFileSync("decrypt.txt", secret);
  writeSync(secret);
  console.log("解密操作成功，已经复制到粘贴板！");
})();
