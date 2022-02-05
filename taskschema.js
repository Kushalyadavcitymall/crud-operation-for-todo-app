const  mongoose  = require("mongoose")

const task=new mongoose.Schema({

    info:{
        type:String,
        required:true,
    },
    duedate:{
        type: String,
        required:true,
    },
    is_completed:{
        type: Boolean,
        required:true,
    },
    assigned_to:{
        type:String,
        required:true,
    }
    
})

module.exports=mongoose.model("task",task);