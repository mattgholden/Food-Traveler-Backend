const express = require ('express')
const router = express.Router()
const ToEatList = require('../models/toEatList')


//Index
router.get('/', (req, res) => {
    console.log('hitting this route')
    ToEatList.find({})
    .populate('owner')
    .exec((error, lists) => {
        if (error) {
            res.status(400).json({error: error.message})
            return
        }
        res.status(200).json(lists)
    })
})

//Show
router.get('/:id', (req, res) => {
    console.log(req.params.id, "show route")
    ToEatList.findById(req.params.id)
    .populate('owner')
    .then((toEatList) => res.json(toEatList))
    // .catch
})

//Create
router.post('/', (req, res) => {
    ToEatList.create(req.body, (error, newList) => {
        console.log(req.body)
        if(error){
            res.status(400).json({error: error.message})
        }
        res.status(200).json(newList)
    })
})

//Update
router.put('/edit/:id', (req, res) => {
    try{ToEatList.findByIdAndUpdate(req.params.id, req.body, {new: true}, (error, updatedList) => {
        if(error) {
            res.status(400).json({error: error.message})
            // return
            // console.log(error)
        }
        // console.log(updatedList)
        res.status(200).json(updatedList)
    })
    } catch(e){
        console.log(e)
    }
})

//Delete
router.delete('/:id', (req, res) => {
    ToEatList.findByIdAndDelete(req.params.id, (error, list) => {
        if(error) {
            res.status(400).json({error: error.message})
            return
        }
        ToEatList.find({}, (error, remainingLists) => {
            res.status(200).json(remainingLists)
        })
    })
})



module.exports = router