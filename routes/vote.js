const express = require('express');
const { createVote } = require('../controllers/voteController');
const router = express.Router();

router.post('/', createVote);

modoule.exports = router;