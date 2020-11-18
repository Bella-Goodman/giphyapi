
var api = "http://api.giphy.com/v1/gifs/search?";
//url & path
var apiKey = "&api_key=dc6zaTOxFJmzC"
 //public key
var query = "&q=thanks+obama"

function setup() {
  noCanvas();
  var url = api + apiKey + query;
  loadJSON(url, gotData);
}
function gotData(giphy) {
  for (var i = 0; i < giphy.data.length; i++){
  createImg(giphy.data[i].images.original.url);
}
}

function draw() {
  background(220);
}
