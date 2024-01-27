require("dotenv").config();
require("./db/db");
const express = require("express");
const cors = require("cors");
const v1TicketRouter = require("./v1/routes/ticketRoutes");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(
  express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 })
);

app.use("/api/v1/tickets", v1TicketRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
