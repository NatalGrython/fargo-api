import { Request, Response } from "express";

export const signIn = (req: Request, res: Response) => {};

export const signUp = async (req: Request, res: Response) => {
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

export const logout = (req: Request, res: Response) => {};
