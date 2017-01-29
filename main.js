var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var jquery = require('jquery');

function cnn(body){
    var $ = cheerio.load(body);
    var str = $.html();
    var regex = /"headline":/gi, result, hlIndices = [];
    while((result = regex.exec(str))) {
        hlIndices.push(result.index);
    }
    var regex = /"thumbnail":/gi, result, tnIndices = [];
    while((result = regex.exec(str))) {
        tnIndices.push(result.index);
    }
    var regex = /"uri":/gi, result, urlIndices = [];
    while((result = regex.exec(str))) {
        urlIndices.push(result.index);
    }
    headlines = []
    for(var i = 2; i < hlIndices.length; i++){
        headlines.push($.html().substring(hlIndices[i] + 12, tnIndices[i-1] - 2));
    }
    links = []
    for(var i = 1; i < hlIndices.length; i++){
        links.push("http://www.cnn.com" + $.html().substring(urlIndices[i - 1] + 7, hlIndices[i] - 2));
    }
    hl1 = document.getElementById('hl1');
    hl1.href = links[1];
    hl1.innerHTML = headlines[0];

    hl2 = document.getElementById('hl2');
    hl2.href = links[2];
    hl2.innerHTML = headlines[1];

    hl3 = document.getElementById('hl3');
    hl3.href = links[3];
    hl3.innerHTML = headlines[2];

    hl4 = document.getElementById('hl4');
    hl4.href = links[4];
    hl4.innerHTML = headlines[3];

    hl5 = document.getElementById('hl5');
    hl5.href = links[5];
    hl5.innerHTML = headlines[4];

    hl6 = document.getElementById('hl6');
    hl6.href = links[6];
    hl6.innerHTML = headlines[5];

    hl7 = document.getElementById('hl7');
    hl7.href = links[7];
    hl7.innerHTML = headlines[6];

    hl8 = document.getElementById('hl8');
    hl8.href = links[8];
    hl8.innerHTML = headlines[7];

    hl9 = document.getElementById('hl9');
    hl9.href = links[9];
    hl9.innerHTML = headlines[8];
}

request({
    method: 'GET',
    url: 'https://www.cnn.com',
    strictSSL: false,
    }, function(error, response, body) {
            if(error) {
                console.log(error);
            }
            cnn(body);
       });


// function huffpost(body){
//     var $ = cheerio.load(body);
//     console.log($.html());
// }

// request({
//     method: 'GET',
//     url: 'http://www.huffingtonpost.com/'
//     }, function(error, response, body) {
//             if(error) {
//                 console.log(error);
//             }
//             huffpost(body);
//        });











