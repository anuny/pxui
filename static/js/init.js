(function(pxui){
	pxui.define("public", function( module ) {
        "use strict";
        var exp = {
            init:function(){ 
                var $ = pxui.require('plugin::dom');
                var source = $('#markdown').text();

                var markdown = pxui.require('plugin::markdown');
                var html2 = markdown(source);
                $('#markdown-body').html(html2);

                var highlight = pxui.require('plugin::highlight');
                highlight = highlight({line:false,warp:true}).init();
            }
        }
        module.exports = exp;
    })
})(pxui);
