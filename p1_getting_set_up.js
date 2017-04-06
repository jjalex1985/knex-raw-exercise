/*

  Part 1: Getting Started!

  STEP ONE:
    - Create a REST-ful server in the server.js file with the following endpoints (with nothing inside the req/res callback function):

      GET /customers              GET /orders             GET /products
      GET /customers/:id          GET /orders/:id         GET /products/:id
      POST /customers             POST /orders            POST /products
      PUT /customers/:id          PUT /orders/:id         PUT /products/:id
      DELETE /customers/:id       DELETE /orders/:id      DELETE /products/:id

  STEP TWO:
    - Create a database called best_store_ever
    - Create three tables with the following fields:
      - customers: id, name, email
      - orders: id, customer_id, product_id
      - products: id, product_name, qty
    - Insert three customers, three products, and three orders


  STEP THREE:
    - Set up Knex.

    1. In the root directory, create a new file called knexfile.js. Also, create a new folder in the root directory called "db". Inside of the "db" directory, create a file called "knex.js".

    2. In your terminal inside of the root directory, run "sudo npm install -g knex". After that is finished installing, run "npm install --save knex pg express body-parser".

    3. Inside of your "knexfile.js", paste the following code:

        module.exports = {
          development: {
              client: 'pg',
              connection: 'postgres://localhost/best_store_ever',
              migrations: {
                  directory: __dirname + '/db/migrations',
                },
              seeds: {
                  directory: __dirname + '/db/seeds',
                },
            },
          production: {
              client: 'pg',
              connection: process.env.DATABASE_URL,
              migrations: {
                  directory: __dirname + '/db/migrations',
                },
              seeds: {
                  directory: __dirname + '/db/seeds/production',
                },
            },
        };

    ***** Don't worry about what "migrations" and "seeds" mean for now. We'll talk about those later. *****

    Now, go into "db/knex.js" and paste the following code:

        var environment = process.env.NODE_ENV || 'development';
        var config = require('../knexfile.js')[environment];
        module.exports = require('knex')(config);



    CONGRATULATIONS! YOU'RE ALL SET UP FOR KNEXJS! Now, we move on to the server file to get that data from postgres!



*/
