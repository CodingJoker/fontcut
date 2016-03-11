var fs = require('fs')
    //测试新建字体

var fontCarrier = require('../../font-carrier/lib/index.js');
var transFont = fontCarrier.transfer('./font-carrier/test/anjingchen.ttf')
var trans = {
    do: function(str,id) {
            //会自动根据当前的输入的文字过滤精简字体
        transFont.min(str)
        transFont.output({
            path: './font-carrier/test/temp/'+id,
            types:['ttf']
        });
    },
    alert: function(str) {
        console.log(str);
    }
};

module.exports = trans;
