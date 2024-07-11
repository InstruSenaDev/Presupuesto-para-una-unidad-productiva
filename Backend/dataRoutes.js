const express = require("express");
const router = express.Router();
const controller = require("./controller.js");
const app = express();

router.get("/saludo",controller.saludo);
router.get("/roles",controller.roles);


module.exports = router;
