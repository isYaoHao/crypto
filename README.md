## 说明

#### 简介

此项目为 Node.js 实现的对称加密工具。首先配置自己的密钥和盐值，运行加密操作生成加密值，加密值可通过解密操作还原。例如我拥有一个比特币密钥，通过加密操作后生成的加密值，储存或者传播在具有潜在泄露风险的设备中更具安全性。

#### 创建

下载代码：

```bash
git clone https://github.com/isYaoHao/crypto.git
```

在根目录下创建以下三个文件：
.env
decrypt.txt
encryption.txt

#### 配置私钥

在 .env 文件中填写：

```bash
secretKey = "XXXX"
salt = "SALT"
```

XXXX 为密钥，自定义值，请私人保存；
SALT 为盐值，自定义值，请私人保存；

#### 加密操作

将需要加密的值粘贴放置在 encryption.txt 文件，输出 decrypt.txt

运行:

```bash
yarn d
```

或者

```bash
npm run d
```

#### 解密操作

将需要解密的值粘贴放置在 decrypt.txt 文件，输出 encryption.txt

运行:

```bash
yarn e
```

或者

```bash
npm run e
```

#### 通用

每次完成会自动复制在粘贴板；
