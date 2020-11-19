var api = "https://api.giphy.com/v1/gifs/search?";
//url & path
var apiKey = "&api_key=dc6zaTOxFJmzC"
//public key
var query = "&q=thanks+obama"

function setup() {
  noCanvas();
  var url = api + apiKey + query;
  //grouping to create the url
  loadJSON(url, gotData);
  //use url with a call back
}

function gotData(giphy) {
  for (var i = 0; i < giphy.data.length; i++) {
    //creates an images element for all images pulled from giphy
    createImg(giphy.data[i].images.original.url);
    //makes html element with an arguement = source, element that appears on the web page
  }
}
