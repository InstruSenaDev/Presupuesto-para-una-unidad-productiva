const express = require("express");
const router = express.Router();
const controller = require("./controllers/datacontroler.js");
const app = express();

router.get("/saludo",controller.saludo);
router.get("/roles",controller.roles);


module.exports = router;
