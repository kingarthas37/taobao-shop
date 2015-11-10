'use strict';

require('jquery-validate');

module.exports = function () {
    
    $('#form-add-product').validate();

    //使用购买说明信息
    (function() {

        var contentInfo = $('#content-info');
        var mdCodeInfo = $('#md-code-info');

        mdCodeInfo.val('![]('+ contentInfo.find('.product-title img').attr('src') +')');

        contentInfo.find(':checkbox').click(function() {
            if(this.checked) {
                mdCodeInfo.val('![]('+ contentInfo.find('.product-title img').attr('src') +')');
            } else {
                mdCodeInfo.val('');
            }
        });

    })();


    //选择banner
    (function() {

        var select = $('#select-banner');
        var bannerLength = select.find('option').length - 1;
        var codeBanner = $('.code-banner');
        var mdCodeBanner = $('#md-code-banner');

        var count = Math.floor(Math.random(100) * bannerLength);
        var currentBannerSrc = select.find('option:eq(' + count + ')').attr('data-src');
        var currentBannerTitle = select.find('option:eq(' + count + ')').text();

        codeBanner.html('<img src="'+ currentBannerSrc +'"/>');
        mdCodeBanner.val('!['+ currentBannerTitle +']('+ currentBannerSrc +')');

        select.on('change',function() {

            if(parseInt(this.value) === 0) {
                var count = Math.floor(Math.random(100) * bannerLength);
                currentBannerSrc = select.find('option:eq(' + count + ')').attr('data-src');
                currentBannerTitle = select.find('option:eq(' + count + ')').text();
            } else {
                currentBannerSrc = select.find('option:eq(' + this.value + ')').attr('data-src');
                currentBannerTitle = select.find('option:eq(' + this.value + ')').text();
            }
            codeBanner.html('<img src="'+ currentBannerSrc +'"/>');
            mdCodeBanner.val('!['+ currentBannerTitle +']('+ currentBannerSrc +')');

        });

    })();

};