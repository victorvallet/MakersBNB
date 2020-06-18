const db = require('../database/queries')
describe('Properties', function () {
  // beforeEach(function () {
  var properties = new db.Property()
  var client = db.client
  var request = { 'body': { title: 'villa', location: 'Valencia', description: 'bla bla', price: 100, host: 'Sophie' } }
  // })

  it('inserts properties into the testdb', async () => {
    var result = await client.query('SELECT * FROM properties')
    properties.insertProperty(request)
    expect(result.rows[0]).toEqual(request.body);
  });


  it('returns properties from the testdb', async () => {
    var result = await properties.viewProperties(request)
    console.log(result)
    expect(result).toEqual(request.body)
  });
});

