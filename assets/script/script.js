// petfinder info:
// API Key
// atfPgagnJHNfbVqbQA6zLRMWoYqUn6ojfbWtZq60qIpaK5rTjN
// Secret
// 97QbKuk6kztQyIuW8CjuCBEd8pN4sS83AdMYzmGmcopy
var dogBreedList;
var dogBreedImages;


//random dog image

//random cat image

//gets list of all dog breeds and turns it into an array
function getDogBreedList() {
  fetch("https://dog.ceo/api/breeds/list/all")
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      var dogBreedList = response;
      console.log(dogBreedList);
    })
    for (const breed in dogBreedList) {
    alert("Line 20!")
    console.log(`${breed}: ${dogBreedList[breed]}`);
}



}

function getDogBreedImages() {
  fetch("https://dog.ceo/api/breed/" + dogBreed + "/images")
  .then(function (response){
      return response.json();
  })
  .then (function (response){
      console.log(dogBreedImages);
  })

}

getDogBreedList();