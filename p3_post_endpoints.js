/*

  Part 3: Post Endpoints

  STEP ONE:
    - Inside of your POST /customers, write a knex.raw query that would add values to your customers table like this:

        knex.raw('insert into customers(name, email) values(?, ?)', [req.body.name, req.body.email])
            .then(function() {
              res.send(customers.rows);
            })
            .catch(function(err) {
              console.log("err", err)
            });

    - The ?s (question marks) act as placeholders and the values inside of the array in the second parameter of the knex.raw method apply respectively.

  STRETCH GOAL 1:
    - Apply these patterns to the other two sets of endpoints.

  STRETCH GOAL 2:
    - Move these req/res callback functions into modules and import them into the server.js file to clean it up a little.

  STRETCH GOAL 3:
    - Use this pattern with the ?s to create update endpoints.

  STRETCH GOAL 4:
    - Use this pattern with the ?s to create delete endpoints.

*/
