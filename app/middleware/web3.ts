import { Request, Response, NextFunction } from "express";
import Web3 from "web3";

export const injectWeb3 =
  (web3: Web3) => (req: Request, res: Response, next: NextFunction) => {
    //@ts-ignore
    req.web3 = web3;
    next();
  };
