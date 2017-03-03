
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tags').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('tags').insert({id: 1, name: 'music'}),
        knex('tags').insert({id: 2, name: 'magic'}),
        knex('tags').insert({id: 3, name: 'javascript'}),
        knex('tags').insert({id: 4, name: 'cooking'}),
      ]);
    });
};