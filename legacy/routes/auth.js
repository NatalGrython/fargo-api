const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt-nodejs");
const models = require("../models");
// var Web3 = require("web3");
// var provider = new Web3.providers.HttpProvider("http://localhost:7545");
// var web3 = new Web3(provider);

router.post("/signup", async (req, res) => {
  // console.log(req.body);
  // const name = req.body.name;
  // const login = req.body.login;
  // const password = req.body.password;
  // const passwordvalid = req.body.passwordvalid;
  // var admin;
  // web3.eth.getAccounts().then(
  //   function (result) {
  //     admin = result[0];
  //   },
  //   function (error) {
  //     console.log(eror);
  //   }
  // );
  // const token = await web3.eth.personal.newAccount();
  // web3.eth.sendTransaction({
  //   from: admin,
  //   to: token,
  //   value: 800000000000000000,
  // });
  // web3.eth.personal.unlockAccount(token);
  // if (!name || !login || !password || !passwordvalid) {
  //   const fields = [];
  //   if (!login) fields.push("login");
  //   if (!password) fields.push("pass");
  //   if (!passwordvalid) fields.push("valpass");
  //   res.json({
  //     ok: false,
  //     error: "Все поля должны быть заполнены!",
  //     fields: ["name", "email", "pass", "valpass"],
  //   });
  // } else if (login.length < 3) {
  //   res.json({
  //     ok: false,
  //     error: "Длина логина от 3 символов",
  //     fields: ["email"],
  //   });
  // } else if (!/^[a-zA-Z0-9]+$/.test(login)) {
  //   res.json({
  //     ok: false,
  //     error: "Только латинские буквы и цифры!",
  //     fields: ["email"],
  //   });
  // } else if (password !== passwordvalid) {
  //   res.json({
  //     ok: false,
  //     error: "Пароли не совпадают!",
  //     fields: ["pass", "valpass"],
  //   });
  // } else if (password.length < 5) {
  //   res.json({
  //     ok: false,
  //     error: "Минимальная длина пароля 5 символов!",
  //     fields: ["pass"],
  //   });
  // } else {
  //   models.Users.findOne({
  //     login,
  //   }).then((user) => {
  //     if (!user) {
  //       bcrypt.hash(password, null, null, (err, hash) => {
  //         models.Users.create({
  //           name: name,
  //           login: login,
  //           token: token,
  //           password: hash,
  //         })
  //           .then((user) => {
  //             console.log(user);
  //             req.session.userID = user.id;
  //             req.session.userLogin = user.login;
  //             req.session.userToken = user.token;
  //             res.json({
  //               ok: true,
  //             });
  //           })
  //           .catch((err) => {
  //             console.log(err);
  //             res.json({
  //               ok: false,
  //               error: "Ошибка, попробуйте позже!",
  //             });
  //           });
  //       });
  //     } else {
  //       res.json({
  //         ok: false,
  //         error: "Имя занято!",
  //         fields: ["login"],
  //       });
  //     }
  //   });
  // }
});

router.post("/signin", (req, res) => {
  console.log(req.body);
  const login = req.body.login;
  const password = req.body.password;
  if (!login || !password) {
    const fields = [];
    if (!login) fields.push("login");
    if (!password) fields.push("password");
    res.json({
      ok: false,
      error: "Все поля должны быть заполнены!",
      fields: ["login", "password"],
    });
  } else {
    models.Users.findOne({
      login,
    })
      .then((user) => {
        if (!user) {
          res.json({
            ok: false,
            error: "Нет такого пользователя",
            fields: ["login", "password"],
          });
        } else {
          bcrypt.compare(password, user.password, function (err, result) {
            if (!result) {
              res.json({
                ok: false,
                error: "Неправильный пароль",
                fields: ["login", "password"],
              });
            } else {
              req.session.userID = user.id;
              req.session.userLogin = user.login;
              req.session.userToken = user.token;
              res.json({
                ok: true,
              });
            }
          });
        }
      })
      .catch((err) => {
        console.log(err);
        res.json({
          ok: false,
          error: "Ошибка входа",
        });
      });
  }
});

router.get("/logout", (req, res) => {
  if (req.session) {
    req.session.destroy(() => {
      res.redirect("/");
    });
  } else {
    res.redirect("/");
  }
});
module.exports = router;
