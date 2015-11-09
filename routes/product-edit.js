'use strict';

var router = require('express').Router();
var AV = require('leanengine');

var markdown = require( "markdown" ).markdown;


router.get('/', function(req, res, next) {
    
    return res.render('product-edit',{
        name:"111",
        md:'kingarthas'
    });
    
   
});

// 新增 Todo 项目
router.post('/', function(req, res, next) {

    
    var mdContent = req.body['md-code-review'];
    
    
    var md = markdown.toHTML( mdContent );
    
    
    
    return res.render('product-edit',{
        name:"kingarthas",
        md:md
    });
    
    
    
});

module.exports = router;
