module.exports = require("knex")({
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    port: 3306,
    user: "admin",
    password: "123456",
    database: "manager"
  }
});
