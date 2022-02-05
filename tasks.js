const express=require('express');
const router=express.Router()
const taskschema=require('./taskschema')

router.get('/',async(req,res)=>{
    try{
        const result= await taskschema.find()             // get all post in Urgentschema
        res.send(result)
    }catch(err){
        res.send("error")
    }
});

router.post('/',async(req,res)=>{
    const singletask=new taskschema({
        info: req.body.info,
        duedate :req.body.duedate,
        is_completed:req.body.is_completed,
        assigned_to: req.body.assigned_to

});
    try{                                                    // post in Urgent Schema
        const save= await singletask.save()
        res.json(save)
    }catch(err){
        res.send('error')
    }
})

router.delete('/',async(req,res)=>{
    const result=await taskschema.deleteMany()                // delete all posts
    res.json(result)
})

module.exports=router