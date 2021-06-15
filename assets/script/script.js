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
    console.log(response.url);
    $("#randomcat").append('<img src="' + response[0].url + '">');
    
  })
}

function getSpecificDogBreedImage () {
  fetch("https://dog.ceo/api/breed/"+        +"/images/random")
  .then(function (response){
    return response.json();
  })
  .then(function (response){
    console.log(response);
 
  })
}

$("#dogButton").on("change", getSpecificDogBreedImage);

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


// }
// let map;

// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: 33.4484, lng: -112.0740 },
//     zoom: 8,
//   });
// }
// getRandomCat()
// getRandomDog()
// getDogBreedList();

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 33.4484, lng: -112.0740 },
    zoom: 8,
  });
}
getRandomCat()
getRandomDog()
getDogBreedList();

