const injectWeb3 = (web3) => (req, res, next) => {
  req.web3 = web3;
  next();
};

module.exports = { injectWeb3 };
