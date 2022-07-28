import express from "express";
// import Web3 from "web3";

// import config from "../config";
// import endpoints from "./endpoints";
// import { injectWeb3 } from "./middleware";
const app = express();
// const web3 = new Web3(new Web3.providers.HttpProvider(config.BLOCKCHAIN_URI));
// const mongoose = require("mongoose");

// const bodyParser = require("body-parser");
// const path = require("path");
// const session = require("express-session");
// const MongoStore = require("connect-mongo");
// const staticAsset = require("static-asset");

// app.use(
//   session({
//     secret: config.SESSION_SECRET,
//     resave: true,
//     saveUninitialized: false,
//     store: MongoStore.create({}),
//   })
// );

// // database
// mongoose.Promise = global.Promise;
// mongoose.set("debug", config.IS_PRODUCTION);
// mongoose.set("useUnifiedTopology", true);
// mongoose.connection
//   .on("error", (error) => console.log(error))
//   .on("close", () => console.log("Database connection closed."))
//   .once("open", () => {
//     const info = mongoose.connections[0];
//     console.log(`Connected to ${info.host}:${info.port}/${info.name}`);
//   });
// mongoose.connect(config.MONGO_URL, {
//   useNewUrlParser: true,
//   useCreateIndex: true,
// });

// app.use(staticAsset(path.join(__dirname, "public")));
// app.use("/public", express.static(path.join("public")));
// app.use(
//   "/scripts",
//   express.static(path.join(__dirname, "node_modules", "jquery", "dist"))
// );
// app.set("view engine", "ejs");
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/", (req, res) => res.render("index"));

// app.get("/login", (req, res) => res.render("login"));

// app.get("/registr", (req, res) => res.render("registr"));

// app.get("/accaunt", (req, res) => {
//   const id = req.session.userID;
//   const login = req.session.userLogin;
//   const token = req.session.userToken;
//   res.render("accaunt", {
//     user: {
//       id,
//       login,
//       token,
//     },
//   });
// });

// app.get("/download", (req, res) => {
//   const id = req.session.userID;
//   const login = req.session.userLogin;
//   const token = req.session.userToken;
//   res.render("download", {
//     user: {
//       id,
//       login,
//       token,
//     },
//   });
// });

// app.get("/change", (req, res) => {
//   const id = req.session.userID;
//   const login = req.session.userLogin;
//   const token = req.session.userToken;
//   res.render("change", {
//     user: {
//       id,
//       login,
//       token,
//     },
//   });
// });

// app.get("/predmet", (req, res) => {
//   const id = req.session.userID;
//   const login = req.session.userLogin;
//   const token = req.session.userToken;
//   res.render("predmet", {
//     user: {
//       id,
//       login,
//       token,
//     },
//   });
// }) -
//   app.get("/achiv", (req, res) => {
//     const id = req.session.userID;
//     const login = req.session.userLogin;
//     const token = req.session.userToken;
//     res.render("achiv", {
//       user: {
//         id,
//         login,
//         token,
//       },
//     });
//   });

app.use(express.json());
// app.use(injectWeb3(web3));
// app.use("/api/auth", endpoints.authRoutes);
// app.use("/api/main", routes.main);
if (import.meta.env.PROD) {
  app.listen(3000);
}

export const nodeApp = app;
