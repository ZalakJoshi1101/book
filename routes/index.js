var express = require('express');
var router = express.Router();
const USER = require('../model/user')
const bcrypt = require("bcrypt")

/* GET home page. */
router.post('/createdata',async function(req, res, next) {
  try {
    req.body.password = await bcrypt.hash(req.body.password , 10)
    const data = await USER.create(req.body)
    
    res.status(201).json({
      status : "Success",
      message : "Password is secure",
      data : data
    })

    
  } catch (error) {
    res.status(401).json({
      status : "Fail" , 
      message : error.message
    })
  }
});



module.exports = router;
