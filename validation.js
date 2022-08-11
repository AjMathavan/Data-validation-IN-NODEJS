const Joi = require("joi");
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
exports.person = Joi.object()
  .keys({
    name: Joi.string()
      .min(3)
      .max(40)
      .required(),
    age: Joi.number()
      .integer()
      .min(16)
  });


const validation = require('./validation')
const {
  validate
} = require('./validationMiddleware')

app.post("/", validate(validation.person), (req, res) => {
    console.log(res)
  res.send("request processed");
});
app.listen(5000,()=>{
    console.log('server running on port 5000')
})
