const { Router } = require("express");
const { whatsappController } = require("./../controllers/whatsapp.controller.js");
const routerWhatsapp = Router();

routerWhatsapp
.get("/", whatsappController.verfiToken)
.post("/", whatsappController.receivedMessage)

module.exports = { routerWhatsapp }