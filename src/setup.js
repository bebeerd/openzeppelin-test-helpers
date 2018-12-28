const chai = require('chai');

const BN = web3.utils.BN;

const should = chai
  .use(require('chai-bignumber')(BN))
  .should();

module.exports = {
  BN,
  should,
};