const express = require("express"); // import express in this module
const router = new express.Router(); // create an app sub-module (router)

module.exports = router;

router.get('/create', (req,res,next)=> {

    res.render('products_add')
});