const express = require('express');
const router = express()
const path = require('path');

const basePath = path.join(__dirname,'../templates');


router.get('/teste', (req, res) =>{
    res.sendFile(`${basePath}/teste.html`)
})

module.exports = router;