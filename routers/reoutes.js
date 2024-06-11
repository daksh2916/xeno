const express = require("express");
const router = express.Router();

const { createConsumer  } = require("../controllers/consumerregistration");
const { createOrder } = require("../controllers/order");

router.post("/registration", createConsumer); 
router.post("order",createOrder);

module.exports = router;
