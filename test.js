var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

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

function createCORSRequest(method, url){
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr){
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined"){
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else {
        xhr = null;
    }
    return xhr;
}

var request = createCORSRequest("get", "http://www.stackoverflow.com/");
if (request){
    request.onload = function() {
        console.log(request);
    };
    request.send();
}