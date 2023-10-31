const schema=require("./module")
const bcrypt = require('bcrypt')
const Signup=(async(req,res)=>{
const data = new schema({
    ...req.body,
    Password:bcrypt.hashSync(req.body.Password,10),
});
const {Email} = req.body
const existingUser = await schema.findOne({Email});
if(existingUser){
    return res.json ({error:"Email already exists"})
}
await data.save()
res.json(data);
})
const Login=(async(req,res)=>{
    const {Email, Password} = req.body;
    //Find user by email
    const user = await schema.findOne({Email});
    if(!user){
        return res.json({message:'Invaild Email'})
    }
    //Check Password - make sure the password is correct  before checking
    const passwordMatch = await bcrypt.compare(Password,user.Password);
    console.log(Password,user.Password);
    if(!passwordMatch){
        return res.json ({message:'Invalid Password'})
    }
    res.json({message:'Login Sucessfully',user})
});
const GetData=async(req,res)=>{
const Datas=await Schema.find({})
res.json(Datas)
}
const UpdateData=async(req,res)=>{
const updatedata=await
schema.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
res.json({msg:"update successfully",data:updatedata})
}
const DeleteData=async(req,res)=>{
const deletedata= await schema.findByIdAndDelete(req.params.id);
res.json({msg:"data delete successfully"});
}
module.exports={Signup,Login,GetData,UpdateData,DeleteData}