let characterName;
let characterInfo;
let recievedData;
let receivedCharacterInfo // хранит информацию о человеке
let recievedHouse; // хранит информкацию о всех на факультете

//get user's character name
document.querySelector("#getQueryName").addEventListener("click", function() {
    characterName = document.querySelector("#queryName").value;

    fetch(`https://hp-api.herokuapp.com/api/characters`)
        .then(resp => resp.json())
        .then(response => {
            recievedData = response;
            characterInfo = recievedData.filter( (elem) => elem.name == characterName);
            if (characterInfo.length > 0) { //if the name is found
                receivedCharacterInfo = characterInfo[0];
                createItem(receivedCharacterInfo);
            } else console.log(`Oops! There is no ${characterName} in Harry Potter Universe! Try smth else`  );
        }
    );

});

//get faculty
document.querySelector("#getQueryFaculty").addEventListener("click", function() {
    let characterFaculty = document.querySelector("#faculty-select").value;
    fetch(`https://hp-api.herokuapp.com/api/characters/house/${characterFaculty}`)
    .then(resp => resp.json())
    .then(response => {
        recievedHouse = response;
        let characters = JSON.stringify(recievedHouse);
        createCharacterItem(characters);
    })
});
