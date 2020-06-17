// const db = require('./database/queries');
require('dotenv').config();
process.env.NODE_ENV = 'test';
const { Client } = require('pg');


// beforeAll(() => {
//   // Clears the database and adds some testing data.
//   // Jest will wait for this promise to resolve before running tests.
//   return db.clear().then(() => {
//     return db.insert({testData: 'foo'});
//   });
// });
var DB = ""
if (process.env.NODE_ENV == 'test') {
  DB = 'test_makersbnb'
}
else {
  DB = 'makersbnb'
}

const client = new Client({
  user: 'victorvallet',
  host: 'localhost',
  database: `${DB}`,
  password: 'password',
  port: 5432
});

client.connect();

const request = { 'body': { title: 'villa', location: 'Valencia', description: 'bla bla', price: 100, host: 'Sophie' } }

const insertProperty = (request, response) => {
  console.log("Hello world")
  const { title, location, description, price, host } = request.body

  client.query('INSERT INTO properties (title, location, description, price, host) VALUES ($1, $2, $3, $4, $5)',
    [title, location, description, price, host], (error, results) => {
      if (error) {
        throw error
      }
      console.log("Hello world")
    })
}

const truncateTable = () => {
  client.query('TRUNCATE TABLE properties', (error, result) => {
    if (error) {
      throw error
    }
    console.log("Table truncated")
  })

}
// db.insertProperty(request)

// insertProperty(request);
truncateTable();