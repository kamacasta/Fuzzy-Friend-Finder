// petfinder info:
// API Key
// atfPgagnJHNfbVqbQA6zLRMWoYqUn6ojfbWtZq60qIpaK5rTjN
// Secret
// 97QbKuk6kztQyIuW8CjuCBEd8pN4sS83AdMYzmGmcopy
var dogBreedList;
var dogBreedImages;

//save About You to local Storage


function store(){
  var inputanimal= document.getElementById("favoriteanimal");
  localStorage.setItem("favoriteanimal", inputanimal.value);
}

//random dog image - need to set max size
function getRandomDog() {
  fetch("https://dog.ceo/api/breeds/image/random")
  .then(function (response){
    return response.json();
  })
  .then(function (response){
    $("#randomdog").append('<img src="' + response.message + '">');
    
  })
}
//random cat image
function getRandomCat() {
  fetch("https://api.thecatapi.com/v1/images/search")
  .then(function (response){
    return response.json();
  })
  .then(function (response){

    $("#randomcat").append('<img src="' + response[0].url + '">');
    
  })
}
$("#dropDownID").on("change", getSpecificDogBreedImage);

function getSpecificDogBreedImage () {
  var breedChoice = $("#dropDownID").val();
  fetch("https://dog.ceo/api/breed/"+ breedChoice +"/images/random")
  .then(function (response){
    return response.json();
  })
  .then(function (response){
    console.log(response);
 
  })
}

$("#dropDownID").on("change", getSpecificDogBreedImage);

//gets list of all dog breeds and turns it into an array
function getDogBreedList() {
  fetch("https://dog.ceo/api/breeds/list/all")
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      var dogBreedList = response;
      console.log(dogBreedList);
    });
  for (const breed in dogBreedList) {
    alert("Line 20!");
    console.log(`${breed}: ${dogBreedList[breed]}`);
  }
}

function getDogBreedImages() {
  fetch("https://dog.ceo/api/breed/" + dogBreed + "/images")
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(dogBreedImages);
    });
}

// This example adds a search box to a map, using the Google Place Autocomplete
// feature. People can enter geographical searches. The search box will return a
// pick list containing a mix of places and predicted search terms.
// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
function initAutocomplete() {
  var map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 33.4484, lng: -112.0740 },
    zoom: 13,
    mapTypeId: "roadmap",
  });
  // Create the search box and link it to the UI element.
  const input = document.getElementById("pac-input");
  const searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
  // Bias the SearchBox results towards current map's viewport.
  map.addListener("bounds_changed", () => {
    searchBox.setBounds(map.getBounds());
  });
  let markers = [];
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener("places_changed", () => {
    const places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }
    // Clear out the old markers.
    markers.forEach((marker) => {
      marker.setMap(null);
    });
    markers = [];
    // For each place, get the icon, name and location.
    const bounds = new google.maps.LatLngBounds();
    places.forEach((place) => {
      if (!place.geometry || !place.geometry.location) {
        console.log("Returned place contains no geometry");
        return;
      }
      const icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25),
      };
      // Create a marker for each place.
      markers.push(
        new google.maps.Marker({
          map,
          icon,
          title: place.name,
          position: place.geometry.location,
        })
      );

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });
}

getRandomCat()
getRandomDog()
getDogBreedList();

