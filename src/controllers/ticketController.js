// const Ticket = require("../models/ticketModel");
const ticketService = require("../services/ticketService");
const {
  uploadToCloudinary,
  removeFromCloudinary,
} = require("../services/cloudinaryService");

const getAllTickets = async (req, res) => {
  try {
    const allTickets = await ticketService.getAllTickets();
    res.send({ success: true, data: allTickets });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ success: false, data: { error: error?.message || error } });
  }
};

const getOneTicket = async (req, res) => {
  const {
    params: { ticketId },
  } = req;
  if (!ticketId) {
    res.status(400).send({
      success: false,
      data: { error: "Parameter ':ticketId' can not be empty" },
    });
  }
  try {
    const ticket = await ticketService.getOneTicket(ticketId);
    res.send({ success: true, data: ticket });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ success: false, data: { error: error?.message || error } });
  }
};

const createNewTicket = async (req, res) => {
  const { body } = req;
  // const urls = [];
  // const files = req.files;
  const fileStr = body?.image;

  try {
    // for (const file of files) {
    //   const { path } = file;
    //   const imageData = await uploadToCloudinary(path, "ticket-images");
    //   urls.push(imageData);
    // }

    const imageData = await uploadToCloudinary(fileStr, "ticket-images");
    // urls.push(imageData);

    const newTicket = {
      name: body.name,
      surname: body.surname,
      age: body.age,
      TC: body.TC,
      definition: body.definition,
      address: body.address,
      imageText: imageData ? imageData.url : null,
      // photos: urls.map((imageData) => ({
      //   imageUrl: imageData.url,
      //   publicId: imageData.public_id,
      // })),
    };

    const createTicket = await ticketService.createNewTicket(newTicket);
    res.status(201).send({ success: true, data: createTicket });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ success: false, data: { error: error?.message || error } });
  }
};

const updateOneTicket = async (req, res) => {
  const {
    body,
    params: { ticketId },
  } = req;
  if (!ticketId) {
    res.status(400).send({
      success: false,
      data: { error: "Parameter ':ticketId' can not be empty" },
    });
  }
  try {
    const updatedTicket = await ticketService.updateOneTicket(ticketId, body);
    res.status(200).send({ success: true, data: updatedTicket });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ success: false, data: { error: error?.message || error } });
  }
};

const deleteOneTicket = async (req, res) => {
  const {
    params: { ticketId },
  } = req;
  if (!ticketId) {
    res.status(400).send({
      success: false,
      data: { error: "Parameter ':ticketId' can not be empty" },
    });
  }
  try {
    await ticketService.deleteOneTicket(ticketId);
    res.status(200).send({ success: true });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ success: false, data: { error: error?.message || error } });
  }
};

module.exports = {
  getAllTickets,
  getOneTicket,
  createNewTicket,
  updateOneTicket,
  deleteOneTicket,
};
