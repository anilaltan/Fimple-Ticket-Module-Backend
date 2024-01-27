const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ticketSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    TC: {
      type: Number,
      required: true,
      minLength: 11,
      maxLength: 11,
    },
    definition: {
      type: String,
      required: true,
    },
    address: {
      type: String,
    },
    imageText: {
      type: String,
    },
    // photos: [
    //   {
    //     imageUrl: {
    //       type: String,
    //     },
    //     publicId: {
    //       type: String,
    //     },
    //     imageBase64: {
    //       type: String,
    //     },
    //   },
    // ],
    status: {
      type: String,
      default: "Pending",
    },
    response: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Ticket", ticketSchema);
