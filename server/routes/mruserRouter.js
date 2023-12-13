const MrUserController = require('../controllers/MrUserControlller')



const router =require('express').Router()

router.post('/adduser',MrUserController.addUser)
router.get('/getUser',MrUserController.getAllUsers)
router.put('/updateUser/:id',MrUserController.updateMRUser)
router.delete('/deleteUser/:id',MrUserController.deleteUser)


module.exports=router