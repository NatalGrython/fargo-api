import express from "express";
import Web3 from "web3";

import { authRouter } from "./endpoints";
import { injectWeb3 } from "./middleware";

const app = express();
const web3 = new Web3(
  new Web3.providers.HttpProvider(import.meta.env.RATING_BLOCKCHAIN_URI)
);

app.use(express.json());
app.use(injectWeb3(web3));

app.use("/api/auth", authRouter);

if (import.meta.env.PROD) {
  app.listen(import.meta.env.RATING_PORT);
}

export const nodeApp = app;
