var mongoose = require("mongoose");
const Joi = require("@hapi/joi");
const { date } = require("@hapi/joi");
var productSchema = mongoose.Schema({
  name: String,
  email: String,
  contact: Number,
  date: Date,
  // timer : time,
  guest : Number,

});
var Product = mongoose.model("Product", productSchema);

function validateProduct(data) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(20).required(),
    email: Joi.string().min(0).required(),
    contact: Joi.number().min(0).required(),
    date: Joi.date().min(2).required(),
    // timer : Joi.time().min(0).required(),
    guest: Joi.number().min(0).required(),

  });
  return schema.validate(data, { abortEarly: false });
}
module.exports.Product = Product;
module.exports.validate = validateProduct;
