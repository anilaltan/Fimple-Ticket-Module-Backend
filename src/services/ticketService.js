const Ticket = require("../models/ticketModel");

const getAllTickets = async () => {
  try {
    const allTickets = await Ticket.find();
    return allTickets;
  } catch (error) {
    throw error;
  }
};

const getOneTicket = async (ticketId) => {
  try {
    const OneTicket = await Ticket.findById(ticketId);
    return OneTicket;
  } catch (error) {
    throw error;
  }
};

const createNewTicket = async (newTicket) => {
  try {
    const ticket = new Ticket(newTicket);
    await ticket.save();
    return ticket;
  } catch (error) {
    throw error;
  }
};

const updateOneTicket = async (ticketId, changes) => {
  try {
    const updatedTicket = await Ticket.findByIdAndUpdate(ticketId, changes, {
      new: true,
    });
    return updatedTicket;
  } catch (error) {
    throw error;
  }
  return;
};

const deleteOneTicket = async (ticketId) => {
  try {
    await Ticket.deleteOne({ _id: ticketId });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllTickets,
  getOneTicket,
  createNewTicket,
  updateOneTicket,
  deleteOneTicket,
};
