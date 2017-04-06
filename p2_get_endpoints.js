/*

  Part 2: Setting up the GET endpoints

  STEP ONE:
    - Start by copy/pasting this on your "server.js" page:

          var knex = require('./knexfile');

    - This will allow you to use knex in your server file now.

  STEP TWO:
    - Inside of your GET /customers endpoint, write the following:

      knex.raw('');

    - Between the single quotes, write the SQL query that will retrieve all of the customers you entered in part 1.

    - To retrieve the results from the query, we need to add a ".then()" to the end of this knex.raw method, so write this at the end of the knex.raw method:

      knex.raw('')
          .then(function(customers) {
            res.send(customers);
          })
          .catch(function(err) {
            console.log("err", err)
          });

    - Hit your endpoint with Postman or Httpie and notice that there's a lot of fluff that you don't need. All you need is that data in the "rows" key. To get rid of that, use this instead:

      knex.raw('')
          .then(function(customers) {
            res.send(customers.rows);
          })
          .catch(function(err) {
            console.log("err", err)
          });

  STEP THREE:
    - Inside of your GET /customers/:id, write the same thing that you did for the last endpoint, but this time, only retrieve, with the SQL query, the one customer that you are looking for. HINT: Maybe you'd find out which customer that was using a url param or query. Also, use the same trick as last time with "customer.rows" this time, since it's only one customer. To insert the url param or query into the SQL query, though you need to do this:

        knex.raw('select * from customers where id = ?', [req.params.id])
            .then(function(customers) {
              res.send(customers.rows);
            })
            .catch(function(err) {
              console.log("err", err)
            });

  STRETCH GOAL 1:
    - Apply these patterns to the other two sets of endpoints.

  STRETCH GOAL 2:
    - Move these req/res callback functions into modules and import them into the server.js file to clean it up a little.


  MOVE ON FORTH TO...Part 3!

*/
