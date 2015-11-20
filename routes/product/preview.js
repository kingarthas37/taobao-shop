'use strict';

var router = require('express').Router();
var AV = require('leanengine');

var flash = require('connect-flash');

var async = require('async');
var extend = require("xtend");
var markdown = require("markdown").markdown;

//class
var Product = AV.Object.extend('Product');
var Category = AV.Object.extend('Category');
var Banner = AV.Object.extend('Banner');


var title = '产品编辑-预览产品';
var currentPage = 'product';


//预览产品页
router.post('/', function (req, res, next) {

    var mdCodeInfo = req.body['md-code-info'] || '';
    var mdCodeBanner = req.body['md-code-banner'] || '';
    var mdCodeVideo = req.body['md-code-video'] || '';
    var mdCodeName = req.body['md-code-name'] || '';
    var mdCodeReview = req.body['md-code-review'] || '';
    var mdCodeProperty = req.body['md-code-property'] || '';
    var mdCodeInstruction = req.body['md-code-instruction'] || '';
    var mdCodeDetail = req.body['md-code-detail'] || '';
    var mdCodeImage = req.body['md-code-image'] || '';


    var datas = {
        title: title,
        currentPage: currentPage,
        mdCodeInfo: markdown.toHTML(mdCodeInfo),
        mdCodeBanner: markdown.toHTML(mdCodeBanner),
        mdCodeVideo: markdown.toHTML(mdCodeVideo),
        mdCodeName: markdown.toHTML(mdCodeName),
        mdCodeReview: markdown.toHTML(mdCodeReview),
        mdCodeProperty: markdown.toHTML(mdCodeProperty),
        mdCodeInstruction: markdown.toHTML(mdCodeInstruction),
        mdCodeDetail: markdown.toHTML(mdCodeDetail),
        mdCodeImage: markdown.toHTML(mdCodeImage)
    };

    res.render('product/preview', datas);


});

module.exports = router;