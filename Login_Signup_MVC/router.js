const express=require("express")
const router=express.Router()
const {Signup,Login,GetData,UpdateData,DeleteData}=require("./controller")
router.post("/signup",Signup)
router.post("/login",Login)
router.get("/get",GetData)
router.put("/update",UpdateData)
router.delete("/delete",DeleteData)
module.exports=router;