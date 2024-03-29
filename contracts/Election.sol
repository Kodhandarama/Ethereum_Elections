pragma solidity ^0.5.8;
contract Election{
    //Model candidate
    struct Candidate{
        uint id;
        string name;
        uint voteCount;
    }
    //fetch candidate
    mapping(uint => Candidate)public candidates;
    //Store candidates count
    uint public candidatesCount;
    constructor() public {   
    addCandidate("Candidate 1");
    addCandidate("Candidate 2");   

    }
    function addCandidate(string memory _name) private{
        candidatesCount ++;
        candidates[candidatesCount] = Candidate(candidatesCount, _name,0);

    }

}
