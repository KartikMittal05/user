const express=require('express');
const usercontroller=require('../controller/userController')
const router=express.Router();
router.get("/users",usercontroller.getAllUsers);
router.get("/user/:email",usercontroller.getUser);
router.post("/createuser",usercontroller.createUser);
router.put("/edituser/:email",usercontroller.updateUser);
router.delete("/deleteuser/:email",usercontroller.deleteUser)
module.exports=router;