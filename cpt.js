const crypto = require("crypto");
const { Buffer } = require("buffer");

class cpt {
  constructor(cpt) {
    this.secretKey = cpt;
  }

  encryption(data) {
    //AES对称加密
    const algorithm = "aes-192-cbc";
    const key = crypto.scryptSync(this.secretKey, "yaohao", 24);
    const iv = Buffer.alloc(16, 0); // 初始化向量。
    const cipher = crypto.createCipheriv(algorithm, key, iv); //使用aes192加密
    let enc = cipher.update(data, "utf8", "hex"); //编码方式从utf-8转为hex;
    enc += cipher.final("hex"); //编码方式转为hex;
    return enc;
  }

  //解密
  decrypt(text) {
    const algorithm = "aes-192-cbc";
    const key = crypto.scryptSync(this.secretKey, "yaohao", 24);
    const iv = Buffer.alloc(16, 0); // 初始化向量。
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    let dec = decipher.update(text, "hex", "utf8");
    dec += decipher.final("utf8");
    return dec;
  }
}

module.exports = cpt;
