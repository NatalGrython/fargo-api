const config = require('../public/scripts/config')
const express = require('express')
const router = express.Router()
const Web3 = require('web3')
const trufcontract = require('truffle-contract')
const path = require('path')

const provider = new Web3.providers.HttpProvider(config.HOST)
const contractJSON = path.join(__dirname, 'build', 'contracts')

const contract = trufcontract(contractJSON)
contract.setProvider(provider)
const web3 = new Web3(provider)

router.post('/predmet', (req, res) => {
    web3.eth.getAccounts().then(
        function (result) {
            admin = result[0]
        },
        function (error) {
            console.log(eror)
        }
    )

    contract
        .deployed()
        .then(function (instance) {
            return instance.givetData(myAccount, balls, {
                from: myAccount,
                gas: 400000,
            })
        })
        .then(
            function (result) {
                console.log('Оценки внесены в систему')
                res.json({
                    ok: true,
                    predmet: predmet,
                    balls: balls,
                })
            },
            function (error) {
                res.json({
                    ok: false,
                    error: error,
                })
            }
        )
})

router.post('/download', (req, res) => {
    console.log(req.body)
    const myAccount = req.session.userToken
    const name = req.body.name
    const token = req.body.token

    var admin
    web3.eth.getAccounts().then(
        function (result) {
            admin = result[0]
        },
        function (error) {
            console.log(eror)
        }
    )

    contract
        .deployed()
        .then(function (instance) {
            return instance.setDiploms(token, { from: admin, gas: 400000 })
        })
        .then(
            function (result) {
                console.log('Диплом внесен ')
            },
            function (error) {
                console.log(error)
            }
        )

    contract
        .deployed()
        .then(function (instance) {
            return instance.giveDiploms(myAccount, token, {
                from: myAccount,
                gas: 400000,
            })
        })
        .then(
            function (result) {
                console.log('Диплом был передан по адресу ' + myAccount)
                res.json({
                    ok: true,
                    name: name,
                    address: myAccount,
                    token: token,
                })
            },
            function (error) {
                console.log(error)
            }
        )
})

router.post('/accaunt', async (req, res) => {
    const myAccount = req.session.userToken

    var admin
    web3.eth.getAccounts().then(
        function (result) {
            admin = result[0]
        },
        function (error) {
            console.log(eror)
        }
    )

    contract
        .deployed()
        .then(function (instance) {
            return instance.ballToAdmin(100000, { from: admin, gas: 400000 })
        })
        .then(
            function (result) {
                console.log('Админу перечисленно ' + 10000 + ' баллов')
            },
            function (error) {
                console.log(error)
            }
        )

    await contract
        .deployed()
        .then(function (instance) {
            return instance.giveBall(myAccount, {
                from: myAccount,
                gas: 400000,
            })
        })
        .then(
            function (result) {
                console.log('Расчет баллов для студента по адресу ' + myAccount)
            },
            function (error) {
                console.log(error)
            }
        )
    contract
        .deployed()
        .then(function (instance) {
            return instance.balanceOf.call(myAccount)
        })
        .then(
            function (result) {
                console.log(
                    'Баланс контракта по адресу ' + myAccount + ' = ' + result
                )
                res.json({
                    ok: true,
                    address: myAccount,
                    balance: result,
                })
            },
            function (error) {
                console.log(error)
            }
        )
})

/*
contract.deployed().then(function(instance){
    return instance.ballToAdmin(100000, {from: myAccount, gas:400000});
}).then(function(result){
    console.log('Админу перечисленно '+ contract_argument + ' баллов');
}, function(error){
    console.log(error);
})

const balanceOfjs = contract.deployed().then(function(instance){
    return instance.balanceOf.call(address_owner);
}).then(function(result){
    console.log('Баланс контракта по адресу '+ address_owner + ' = '+ result);
}, function(error){
    console.log(error);
})

const giveBalljs = contract.deployed().then(function(instance){
    return instance.giveBall(contract_argument, {from: myAccount, gas:400000});
}).then(function(result){
    console.log('Расчет баллов для студента по адресу '+ contract_argument);
}, function(error){
    console.log(error);
})

const givetDatajs = contract.deployed().then(function(instance){
    return instance.givetData(owner, grade, {from: myAccount, gas:400000});
}).then(function(result){
    console.log('Оценки внесены в систему');
}, function(error){
    console.log(error);
})

const giveDiplomsjs = contract.deployed().then(function(instance){
    return instance.giveDiploms(owner, tokenId, {from: myAccount, gas:400000});
}).then(function(result){
    console.log('Диплом был передан по адресу' + owner);
}, function(error){
    console.log(error);
})

const ownerOfjs = contract.deployed().then(function(instance){
    return instance.ownerOf.call(contract_argument);
}).then(function(result){
    console.log('Токен '+ contract_argument + ' приналежит адресу '+ result);
}, function(error){
    console.log(error);
})

const setDiplomsjs = contract.deployed().then(function(instance){
    return instance.setDiploms(contract_argument, {from: myAccount, gas:400000});
}).then(function(result){
    console.log('Диплом внесен ');
}, function(error){
    console.log(error);
})

const totalSupplyjs = contract.deployed().then(function(instance){
    return instance.totalSupply.call();
}).then(function(result){
    console.log('Всего баллов в системе = '+ result);
}, function(error){
    console.log(error);
})

*/
module.exports = router
