const express=require('express');
const router=express.Router()
const Urgenttaskschema=require('./Urgenttasksschema')

router.get('/',async(req,res)=>{
    try{
        const result= await Urgenttaskschema.find()             // get all post in Urgentschema
        res.send(result)
    }catch(err){
        res.send("error")
    }
});

router.post('/',async(req,res)=>{
    const singleUrgenttask=new Urgenttaskschema({
        name: req.body.name,
        status :req.body.status,
        flag:req.body.flag
});
    try{                                                    // post in Urgent Schema
        const save= await singleUrgenttask.save()
        res.json(save)
    }catch(err){
        res.send('error')
    }
})
router.put('/',async(req,res)=>{
    const filter={"status":"pending"}
    const xx= await Urgenttaskschema.updateMany(filter,{status:req.body.status})            // search all post with status pending and change status to completed
    res.json(xx)
})
router.delete('/',async(req,res)=>{
    const result=await Urgenttaskschema.deleteMany()                // delete all posts
    res.json(result)
})
router.get('/flag',async(req,res)=>{
    const flag=req.query.flag;
    const xx =await Urgenttaskschema.find({
        "flag": flag                                // search all post with given query string (here we are searching by flag)
    })
    res.send(xx)
})
router.get('/flagupdate',async(req,res)=>{
    const flag=req.query.flag;
    const status=req.query.status;
    const xx= await Urgenttaskschema.updateMany({"flag":flag},{"status":status})  // searching posts by flagname and chnage the status
    res.send(xx);
})
module.exports = router