const {assert} = require('chai');
const request = require('supertest');

const app = require('../../app');

const {parseTextFromHTML, seedItemToDatabase} = require('../test-utils');
const {connectDatabaseAndDropData, diconnectDatabase} = require('../setup-teardown-utils');

describe('Server path: /items/:itemID', () => {
  beforeEach(connectDatabaseAndDropData);

  afterEach(diconnectDatabase);

  // Write your test blocks below:
  it('single item route returns correct itme', async () => {

  var item = await seedItemToDatabase();
  var url = '/items/'  + item._id;
  var response = await request(app)
  .get(url);
  assert.include(parseTextFromHTML(response.text, '#item-title'), item.title);
  assert.include(parseTextFromHTML(response.text, '#item-description'), item.description);


});

});
