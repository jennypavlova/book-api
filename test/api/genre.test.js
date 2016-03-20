var Genre = require('../../model/genre');
var superagent = require('superagent');

describe('Genre Api', function(){ 
  beforeEach(test.startServer);
  beforeEach(function(done){
    Genre.create({name: "test"}, done );
  });
  afterEach(test.stopServer);

  it('Genre Api Get', function(done) {
    superagent.get('http://localhost:3000/api/genre', function(error, res){
      expect(error).to.not.exist;
      console.log(res.body);
      expect(res.body).to.be.an("array");
      expect(res.body).to.have.lengthOf(1);
      expect(res.body[0].name).to.exist;
      expect(res.body[0].name).to.equal('test');
      done();
    });
  });
});