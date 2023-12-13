const visitController = require('../controllers/visitController')



const router = require('express').Router()

router.get('/getVisit',visitController.getVisit);


module.exports=router