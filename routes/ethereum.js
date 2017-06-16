const express = require('express');
const router = express.Router();

const getBalance = (req, res, next) => {
  // tempo. use api call to tonvert
  const balance = 19254563000000000 / Math.pow(10, 18);
  res.send({
    balance
  })
}

/* GET balance. */
router.get('/balance', getBalance);
router.get('/balance/:id', getBalance);

module.exports = router;
