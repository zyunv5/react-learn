//验证第二步 编写整体页面
const express = require("express");
//验证第三步 引入body-parser
//验证第四步 引入lodash和validator
const isEmpty = require("lodash/isEmpty");
const validator = require("validator");
let router = express.Router();

const Knex = require("../knex");

function createUser() {
  return;
  knex.schema
    .hasTable("user")
    .then(ifExist => {
      if (!ifExist) {
        return knex.schema.createTable("user", table => {
          table.increments("id").primary();
          table.string("username").notNullable();
          table.string("email").notNullable();
          table.string("password_digest").notNullable();
          table.dateTime("task_end_date");
        });
      }
    })
    .catch(err => {
      console.log("error !!!", err.message, err.stack);
      return;
    });
}

const validateInput = data => {
  let errors = {};

  if (validator.isEmpty(data.username)) {
    errors.username = "The field is required";
  }

  if (validator.isEmpty(data.email)) {
    errors.email = "The field is required";
  }

  if (validator.isEmpty(data.password)) {
    errors.password = "The field is required";
  }

  if (validator.isEmpty(data.passwordConfirmation)) {
    errors.passwordConfirmation = "The field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
router.post("/", (req, res) => {
  const { errors, isValid } = validateInput(req.body);

  if (isValid) {
    res.json({ success: true });
  } else {
    res.status(400).json(errors);
  }
});

module.exports = router;
