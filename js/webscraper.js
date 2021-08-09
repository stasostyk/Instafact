// // Using Google's REST search result API w/ custom key at https://developers.google.com/custom-search/v1/using_rest
var KEY = "AIzaSyB8mjsz6uOQVW3OWZYTAot0REBajNrMrIA";
var CX = "2285ce8a05b90d2be"

getSearchResults("banana");

function getSearchResults(query) {
  $.getJSON('https://www.googleapis.com/customsearch/v1?key='+KEY+'&cx='+CX+'&q='+query, function(resp)
  {
    var i=0;
    for (var i = 0; i < 10; i++) {
      var title=resp.items[i].title;
      var link=resp.items[i].link;

      alert(title);
    }
  });
}
