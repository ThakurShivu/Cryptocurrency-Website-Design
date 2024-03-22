var bitcoinElement = document.getElementById("bitcoin");
var ethereumElement = document.getElementById("ethereum");
var dogecoinElement = document.getElementById("dogecoin");

var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
    "method": "GET",
    "headers": {}
};

$.ajax(settings).done(function(response) {
    bitcoinElement.innerHTML = response.bitcoin.usd;
    ethereumElement.innerHTML = response.ethereum.usd;
    dogecoinElement.innerHTML = response.dogecoin.usd;
});