var Election =artifacts.require("./Election.sol")

contract("Election",function(accounts){
    var electionInstance;
    it("initializes with 2 candidates", function(){
        return Election.deployed().then(function(instance){
            return instance.candidatesCount();
        }).then(function(count){
            assert.equal(count,2);
        });
    });

    it("it initaializes the candidates with the correct values",function(){
        return Election.deployed().then(function(instance){
            electionInstance=instance;
            return electionInstance.candidates(1);

        }).then(function(candidate){
            assert.equal(candidate[0],1,"contains the correct id")
            assert.equal(candidate[1],"Candidate 1","contains legit name")
            assert.equal(candidate[2],0,"contains right number of votes");
            return electionInstance.candidates(2);

        }).then(function(candidate){
            assert.equal(candidate[0],2,"contains the correct id")
            assert.equal(candidate[1],"Candidate 2","contains legit name")
            assert.equal(candidate[2],0,"contains right number of votes");
        });     
    });
});