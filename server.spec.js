const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

chai.use(chaiHttp);

const server = require('./server.js').app;

describe('server', function () {
  it('should change the status id appropriately', function (done) {
   done();
  });

  it('GET /pizzaTracker/getTrackerConfig responds with two blank lines', function (done) {
    chai.request(server)
      .get('/pizzaTracker/getTrackerConfig')
      .end((err, res) => {
        should.not.exist(err, 'should be no errors');

        res.status.should.equal(200, 'should respond with status code 200');

        res.text.should.equal('\n\n', 'should respond with two linebreaks');

        done();
      });
  });

  it('rejects an invalid status id', function (done) {
    done();
  });
});
