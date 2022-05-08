const express = require("express")
const router = express.Router()
const Service = require("../models/service")

router.get("/calculator/:tip",async(req,res,next)=>{
    items = req.body.items
    tip = req.params.tip
    try{
        const total = await Service.calculator(items,tip)
        return res.status(200).json({total})
    }catch(err){
        next(err)
    }
})

module.exports = router