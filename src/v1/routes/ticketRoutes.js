// In src/v1/routes/index.js
const express = require("express");
const ticketController = require("../../controllers/ticketController");
const upload = require("../../middleware/upload");

const router = express.Router();

router.get("/", ticketController.getAllTickets);

router.get("/:ticketId", ticketController.getOneTicket);

router.post(
  "/",
  upload.array("ticketImages", 2),
  ticketController.createNewTicket
);

router.patch("/:ticketId", ticketController.updateOneTicket);

router.delete("/:ticketId", ticketController.deleteOneTicket);

module.exports = router;
