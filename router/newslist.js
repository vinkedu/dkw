const express=require("express")
var router=express.Router();
const pool=require("../pool.js")

router.get("/details",(req,res)=>{
    var tid=req.query.tid;
    if(!tid){
        var sql=`select tid,tid,title,updateTime,sm from news`;
    }else{
        var sql=`select tid,tid,title,updateTime,sm from news where tid=?`;
    }
    

    pool.query(sql,[tid],(err,result)=>{
        if (err)throw err;
        res.send({product:result,type:[]})
    });
})
module.exports=router;