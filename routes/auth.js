const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt-nodejs')
const config = require('public/scripts/config')
var Web3 = require('web3')
var provider = new Web3.providers.HttpProvider(config.HOST)
var web3 = new Web3(provider)

/* eslint-disable*/
router.post('/register', async (req, res) => {
    console.log(req.body)

    if (!req.body) {
        res.status(400).json({
            ok: false,
        })
    }

    console.log('works')

    const accounts = await web3.eth.getAccounts()

    const admin = accounts[0]

    const token = await web3.eth.personal.newAccount()

    web3.eth.sendTransaction({
        from: admin,
        to: token,
        value: 800000000000000000,
    })

    web3.eth.personal.unlockAccount(token)

    res.status(200).json({
        token,
    })
})

router.post('/login', (req, res) => {
    console.log(req.body)
    const login = req.body.login
    const password = req.body.password
    if (!login || !password) {
        const fields = []
        if (!login) fields.push('login')
        if (!password) fields.push('password')
        res.json({
            ok: false,
            error: 'Все поля должны быть заполнены!',
            fields: ['login', 'password'],
        })
    } else {
        models.Users.findOne({
            login,
        })
            .then(user => {
                if (!user) {
                    res.json({
                        ok: false,
                        error: 'Нет такого пользователя',
                        fields: ['login', 'password'],
                    })
                } else {
                    bcrypt.compare(password, user.password, function (
                        err,
                        result
                    ) {
                        if (!result) {
                            res.json({
                                ok: false,
                                error: 'Неправильный пароль',
                                fields: ['login', 'password'],
                            })
                        } else {
                            req.session.userID = user.id
                            req.session.userLogin = user.login
                            req.session.userToken = user.token
                            res.json({
                                ok: true,
                            })
                        }
                    })
                }
            })
            .catch(err => {
                console.log(err)
                res.json({
                    ok: false,
                    error: 'Ошибка входа',
                })
            })
    }
})

router.get('/logout', (req, res) => {
    if (req.session) {
        req.session.destroy(() => {
            res.redirect('/')
        })
    } else {
        res.redirect('/')
    }
})
module.exports = router
