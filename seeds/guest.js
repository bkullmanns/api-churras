exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("guests")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("guests").insert([
        { name: "Reinaldo", bbq_id: 1 },
        { name: "Nadine", bbq_id: 1 },
      ]);
    });
};
