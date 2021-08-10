// // Using Google's REST search result API w/ custom key at https://developers.google.com/custom-search/v1/using_rest
var KEY = "AIzaSyB8mjsz6uOQVW3OWZYTAot0REBajNrMrIA";
var CX = "2285ce8a05b90d2be"

var query_term = "banana";

// accessing promised data with .then() to wait for response first
getSearchResults(query_term).then(function(results) {
  var titles = [];
  var links = [];

  // print results while parsing through results and organizing them into title and link arrays
  console.log("=== Search Results for '" + query_term + "' ===")
  for (var i = 0; i < results.length; i++) {
    titles.push(results[i].title);
    links.push(results[i].link);
    console.log ((i+1) + ". '" + titles[i] + "'");
    console.log ("    link -> " + links[i]);
  }

  // boom, now we have two arrays of search results


});

// requesting data from Google Search API, returning list of GoogleSearch objects
function getSearchResults(query) {
  return $.getJSON(
    'https://www.googleapis.com/customsearch/v1?key='+KEY+'&cx='+CX+'&q='+query).then(function(data) {
      return data.items;
    });
  }
