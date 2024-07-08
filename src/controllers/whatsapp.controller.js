class whatsappController {
  static verfiToken(req, res) {
    try {
        const accessToken = "SDFSFSswggdfgfdg16sd19v1sv15"
        console.log(req);
        const token = req.query["hub.vefify_token"];
        const challenge = req.body["hub.challenge"];
        if (challenge != null && token != null && token == accessToken) {
            res.send(challenge);
        }else{
            res.status(400).send();
        }
    } catch (error) {
        console.log(error);
        res.status(400).send();
    }
    
  }

  static receivedMessage(req, res) {
    res.send("Recibir")

  }
}

module.exports = { whatsappController };
