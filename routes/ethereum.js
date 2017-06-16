const express = require('express');
const router = express.Router();

/* GET balance. */
router.get('/balance', function(req, res, next) {
  // tempo. use api call to tonvert
  const balance = 19254563000000000 / Math.pow(10, 18);
  res.send({
    balance
  })
});

module.exports = router;
