
function buildQueryURL() {
var APIKey = "c801e4bd8ea3d74d66e1e5c2c6df8fdb";

var queryURL = "api.openweathermap.org/data/2.5/forecast?q=";


queryParams = $("#city-search")
    .val()
    .trim();

   
    console.log(queryURL + queryParams + "&appid=" + APIKey);
    return queryURL + queryParams + "&appid=" + APIKey;
    // q={city name}&appid={API key}
}


$("#run-search").on("click", function(event) {
   
    event.preventDefault();
  
  
 
    var queryURL = buildQueryURL();
  

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response){
        console.log(response.temp);
    });
  });
  







// $.ajax({
//     url: queryUrl,
//     method: "GET"
// })

// .then(function(response) {

//     console.log(queryUrl);

//     console.log(response);
// })




