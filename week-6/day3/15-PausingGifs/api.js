var apiKey = "&api-key=L0mLZbme3uYPLMPcospHJmUoc335gsVe";

var userInput = $("#search-term").val().trim();

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + userInput + apiKey;

$("#search").on("click", function(event){
event.preventDefault()
var userInput = $("#search-term").val().trim();

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + userInput + apiKey;

$.ajax ({
    URL : queryURL,
    method : "GET"
}).then(function(response) {
console.log(response);
})



});




