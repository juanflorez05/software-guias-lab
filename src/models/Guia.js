const { Schema, model } = require("mongoose");

const GuiaSchema = new Schema(
  {
    title: {
      type: String,
      required: false
    },
    description: {
      type: String,
      required: false
    },
    autor: {
      type: String,
      required: false      
    },
    autor1: {
      type: String,
      required: false
    },
    autor2: {
      type: String,
      required: false
    },
    autor3: {
      type: String,
      required: false
    }
  },
  {
    timestamps: true
  }
);

module.exports = model("Guia", GuiaSchema);
