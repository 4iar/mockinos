const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const async = require('async');

chai.use(chaiHttp);

const server = require('./server.js').app;
const changeStatusId = require('./server.js').changeStatusId;

describe('server', function () {
  it('should change the status id appropriately', function (done) {
    async.series([
      function (cb) {
        changeStatusId(2);
        chai.request(server)
          .get('/pizzaTracker/getOrderStatus')
          .end((err, res) => {
            should.not.exist(err, 'should be no errors');
            res.status.should.equal(200, 'should respond with status code 200');
            JSON.parse(res.text).statusId.should.equal(2, 'status id should change appropriately');
            cb();
          });
      },
      function (cb) {
        changeStatusId(5);
        chai.request(server)
          .get('/pizzaTracker/getOrderStatus')
          .end((err, res) => {
            should.not.exist(err, 'should be no errors');
            res.status.should.equal(200, 'should respond with status code 200');
            JSON.parse(res.text).statusId.should.equal(5, 'status id should change appropriately');
            cb();
          });
      },
    ], function() {
      done();
    })
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
