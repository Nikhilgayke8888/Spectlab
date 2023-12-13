const loginController = require('../controllers/loginController')



const router =require('express').Router()

router.post('/loginemployee',loginController.Login)


module.exports=router