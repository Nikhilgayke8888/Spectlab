const doctorsController = require('../controllers/doctorsController')



const router =require('express').Router()

router.get('/getAllDoctors',doctorsController.getAllDoctors)


module.exports=router