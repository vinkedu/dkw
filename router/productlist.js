const express=require("express")
var router=express.Router();
const pool=require("../pool.js")
// router.get("/list",(req,res)=>{
//     var sql=" SELECT id,title,add_time,click,img_url FROM news";
//     pool.query(sql,[],(err,result)=>{
//         if(err) throw err;
//         res.send({code:1,msg:result})
//     })
// })
router.get("/details",(req,res)=>{
     var tid=req.query.tid;
    // var sql="(SELECT * FROM product left outer join type on product.tid=type.tid)union(SELECT * FROM product right outer join type on product.tid=type.tid)";
    if(!tid){
        var sql=`select pid,tid,title,hpic from product`;
    }else{
        var sql=`select pid,tid,title,hpic from product where tid=?`;
    }
    

    pool.query(sql,[tid],(err,result)=>{
        if (err)throw err;
        res.send({product:result,type:[]})
    });
})
module.exports=router;