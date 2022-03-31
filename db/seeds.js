const mongoose = require('./connection')
const ToEatList = require('../models/toEatList')
const User = require('../models/user')
const toEatListSeeds = require('../db/seeds.json')

ToEatList.deleteMany({})
.then(() => {
    return User.deleteMany({})
})
.then (() => {
    return User.create({ 
        username: 'owner',
        password: 'testPass147',
        confirmPassword:'testPass147'
    })
    .then( user => {
        console.log(user)
        return toEatListSeeds.map(toEatList => ({
            ...toEatList, owner: user._id
        }))
    })
})
.then((seeds) => {
    return ToEatList.insertMany(seeds)
})
.then(data => console.log(data))
.catch(err => console.log(err))
.finally(() => process.exit)
