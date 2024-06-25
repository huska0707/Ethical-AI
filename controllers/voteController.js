const Web3 = require('web3');
const Vote = require('../models/Vote');
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

const recordVoteOnChain = async (voteData) => {

};

exports.createVote = async (req, res) => {
    const { guidelineId, voterId, vote } = req.body;
    try {
        const newVote = new Vote({ guidelineId, voterId, vote });
        await newVote.save();
        const transactionHash = await recordVoteOnChain({ guidelineId, voterId, vote });
        res.json({ transactionHash, message: 'Vote recorded successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
