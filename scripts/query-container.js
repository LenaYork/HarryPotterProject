let characterName;
let charactedInfo;

//get user's character name
document.querySelector("#getQueryName").addEventListener("click", function() {
    characterName = document.querySelector("#queryName").value;
    console.log(characterName);
    let recievedData;
    fetch(`http://hp-api.herokuapp.com/api/characters`)
        .then(resp => resp.json())
        .then(response => {
            // response.name{characterName}
            // console.log(response)
            recievedData = response;
            charactedInfo = recievedData.filter( (elem) => elem.name == characterName);
            if (charactedInfo.length > 0) { //if the name is found
                console.log("3", charactedInfo[0]);
            } else console.log(`Oops! There is no ${characterName} in Harry Potter Universe! Try smth else`  );
            
        });
    
});

//get faculty
document.querySelector("#getQueryFaculty").addEventListener("click", function() {
    let characterFaculty = document.querySelector("#faculty-select").value;
    console.log(characterFaculty);
});