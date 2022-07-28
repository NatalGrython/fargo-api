const signIn = (req, res) => {};

const signUp = async (req, res) => {
  const { name, login, password } = req.body;
  try {
    const [admin] = await req.web3.eth.getAccounts();
    const addressNewAccount = await req.web3.eth.personal.newAccount(password);
    await req.web3.eth.sendTransaction({
      from: admin,
      to: addressNewAccount,
      value: 800000000000000000,
    });
    res.status(200).json({
      address: addressNewAccount,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error",
    });
  }
};

const logout = (req, res) => {};

module.exports = { signIn, signUp, logout };
