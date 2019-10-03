const app = require("../app");
const chai = require("chai");
const chaiHttp = require("chai-http");

var sql = require('../model/db.js');

const { expect } = chai;
chai.use(chaiHttp);


describe("bikes use case", () => {
  describe("GET /", () => {

    after(function() { 
      console.log('after');
      sql.rollback();
     });

      // Test to get all students record
      it("should get all bikes record", (done) => {
           chai.request(app)
               .get('/bikes')
               .end((err, res) => {
                expect(res).to.have.status(200);
                   done();
                });
       });

        // Test post bike
        it('it sould post the user info', (done) => {
            const bike = {
              model : "model",
              color : "color",
              frameNumber : "frameNumber",
              city : "city",
              stolenDate : "2019-04-10 23:50:40",
              description : "description"
            };
            chai.request(app)
            .post('/bikes')
            .send(bike)
            .end((err, res) => {
              expect(res).to.have.status(200);
                //res.body.should.be.a('object');
                //res.body.should.have.property('data');
                //res.body.should.have.property('message');
                //res.body.should.have.property('statusType').eq('success');
                done();
            });
        });
   
    
  });
});
