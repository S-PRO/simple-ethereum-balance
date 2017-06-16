const express = require('express');
const router = express.Router();

const await = require('asyncawait/await');
const async = require('asyncawait/async');
const axios = require('axios');

const BASE_URL = `https://api.blockcypher.com/v1/eth/main/addrs/`;

const getBalance = async((req, res, next) => {
  try {
    const url = `${BASE_URL}${req.params.id}/balance`;
    const wallet_balance = await (axios.get(url));
    const {
      balance
    } = wallet_balance.data;

    // 1 Eth = 10^18Wei
    res.send({
      balance: balance / Math.pow(10, 18)
    })

  } catch (e) {
    const {
      status,
      statusText
    } = e.response ? e.response : {
      status: 500,
      statusText: 'Something is wrong'
    };
    res.status(status).send(statusText);
  }

})

/* GET balance. */
router.get('/balance', getBalance);
router.get('/balance/:id', getBalance);

module.exports = router;
