const bcrypt = require("bcrypt");

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          name: "Barbara",
          email: "b.kullmanns@gmail.com",
          password: bcrypt.hashSync("segredo", 10),
        },
      ]);
    });
};
