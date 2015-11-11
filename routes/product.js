'use strict';

var router = require('express').Router();
var AV = require('leanengine');

var flash = require('connect-flash');

var markdown = require( "markdown" ).markdown;

var Product = AV.Object.extend('Product');

var title = '产品编辑';
var currentPage = 'product';

//首页
router.get('/', function(req, res, next) {
    
    return res.render('product/index',{
        title:title,
        currentPage:currentPage
    });
    
});

//首页
router.post('/',function(req,res,next) {

    return res.render('product/index',{
        title:title,
        currenetPage:currentPage
    });
    
});


//添加产品页
router.get('/add',function(req,res,next) {

    return res.render('product/add',{
        title:title,
        currentPage:currentPage,
        info:req.flash('info')
    });
    
});


//添加产品页
router.post('/add', function(req, res, next) {
    
    var mdCodeInfo = req.body['md-code-info'] || '';
    var mdCodeBanner = req.body['md-code-banner'] || '';
    var mdCodeVideo = req.body['md-code-video'] || '';
    var mdCodeName = req.body['md-code-name'] || '';
    var mdCodeReview = req.body['md-code-review'] || '';
    var mdCodeProperty = req.body['md-code-property'] || '';
    var mdCodeInstruction = req.body['md-code-instruction'] || '';
    var mdCodeDetail = req.body['md-code-detail'] || '';
    var mdCodeImage = req.body['md-code-image'] || '';    
    
  //  var md = markdown.toHTML( mdContent );
    
    var product = new Product();
    
    product.set('info',mdCodeInfo);
    product.set('banner',mdCodeBanner);
    product.set('video',mdCodeVideo);
    product.set('name',mdCodeName);
    product.set('review',mdCodeReview);
    product.set('property',mdCodeProperty);
    product.set('instruction',mdCodeInstruction);
    product.set('detail',mdCodeDetail);
    product.set('image',mdCodeImage);

    product.save(null, {
        success: function(data) {
            
            req.flash('info', 'Flash is back!');
            
            res.render('product/add',{
                title:title,
                currentPage:currentPage,
                data:data,
                info:req.flash('info')
            });
        },
        error: function(err) {
            next(err);
        }
    });
    
    
});

module.exports = router;