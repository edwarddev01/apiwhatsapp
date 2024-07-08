const express = require("express");
const { routerWhatsapp } = require("./routes/whatsapp.route.js");
const app = express();

app.use(express.json())

app.use("/api-whatsapp/v1", routerWhatsapp);

const port = process.env.POTR || 3000;

app.listen(port, () => {
  console.log(`Server run in port: ${port}`);
});
 