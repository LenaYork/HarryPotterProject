document.addEventListener("DOMContentLoaded", (event) => {
    // getCharacters();
    createCharacterPage();

});


// let character = {
//     name: "",
//     // "alternate_names": [""],
//     // "species": "human",
//     gender: "",
//     house: "",
//     dateOfBirth: "",
//     // "yearOfBirth": 1980,
//     // "wizard": true,
//     ancestry: "",
//     // "eyeColour": "green",
//     // "hairColour": "black",
//     // "wand": { "wood": "holly", "core": "phoenix feather", "length": 11 },
//     // "patronus": "stag",
//     // "hogwartsStudent": true,
//     // "hogwartsStaff": false,
//     actor: "",
//     // "alternate_actors": [""],
//     // "alive": true,
//     image: "",
// }


//страница с персонажем
function createCharacterPage(charactersJson) {
    let characterName = new URL(location.href).searchParams.get('name');
    let characterNameBlock = document.querySelector(".person__name");
    characterNameBlock.innerText = characterName;

    //
    // fetch("http://hp-api.herokuapp.com/api/characters").then(function (response) {
    //     return response.json();
    // }).then(function (j) {
    //     let charactersJson = JSON.stringify(j);
    //     console.log(filterIt(charactersJson));
    //
    //
    // }).catch(function (error) {
    //     console.log(error);
    // });
    //
    //
    //
    //
    // function filterIt(charactersJson) {
    //     return charactersJson.filter(function(obj) {
    //         return Object.keys(obj).some(function(key) {
    //             return obj[key].includes(characterName);
    //         })
    //     });
    // }


    console.log(charactersJson);

    let characterPage = document.querySelector(".person__wrap");

    let characterImg = document.createElement("img");
    // characterImg.src = characters.image;
    characterPage.append(characterImg);

}