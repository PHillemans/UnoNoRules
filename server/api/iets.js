const express = require('express')
const router = express.Router();


router.get('/', (req,res)=>{
    res.send({message: 'Iets is gelukt'})
})

module.exports = router