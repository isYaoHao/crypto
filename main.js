const dotenv = require("dotenv");
const Cpt = require("./cpt.js");
dotenv.config();
const cpt = new Cpt(process.env.secretKey);
