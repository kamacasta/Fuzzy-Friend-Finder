
// this is the initial API call

function getPetInfo() {

    //searchTerm is our ID for the input
    var searchTerm = document.querySelector("#searchTerm").value;
    console.log(searchTerm);
    fetch(
      " PET FINDER API GOES HERE" +
        searchTerm +
        "QW1PdphVRcy3Pmf5qoWqfg91fEAk5o7yswNmRWPcsyyiADA14L"
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        petInfo = response;
        console.log(petInfo);
  
        localStorage.setItem(searchTerm, JSON.stringify(response));



    });
};