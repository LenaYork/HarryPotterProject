document.addEventListener("DOMContentLoaded", (event) => {
    getCharacter();
});

//функция получения JSON с персонажами
function getCharacter() {
    fetch("http://hp-api.herokuapp.com/api/characters").then(function (response) {
        return response.json();
    }).then(function (j) {
        let characterName = new URL(location.href).searchParams.get('name');
        let character = j.find(item => item.name === characterName);
        createCharacterPage(character);
    }).catch(function (error) {
        console.log(error);
    });
}


//страница с персонажем
function createCharacterPage(character) {
    let characterNameBlock = document.querySelector(".person__name");
    characterNameBlock.innerText = character.name;

    let characterPage = document.querySelector(".person__wrap");

    let characterImgWrap = document.createElement("div");
    characterImgWrap.classList.add("person__img");
    characterPage.append(characterImgWrap);

    if(character.image !== "") {
        let characterImg = document.createElement("img");
        characterImg.src = character.image;
        characterImgWrap.append(characterImg);
    }

    let characterInfo = document.createElement("div");
    characterInfo.classList.add("person__info");
    characterPage.append(characterInfo);

    function createInfoItem(title, value) {
        if(value !== "") {
            let elementItem = document.createElement("div");
            elementItem.classList.add("person__info-item");
            elementItem.innerHTML = `<span>${title}: </span> ${value}`
            characterInfo.append(elementItem);
        }
    }

    createInfoItem("Alternate names", character.alternate_names);
    createInfoItem("Species", character.species);
    createInfoItem("Gender", character.gender);
    createInfoItem("House", character.house);
    createInfoItem("Date Of Birth", character.dateOfBirth);
    createInfoItem("Wizard", (character.wizard === true ) ? "yes" : "no");
    createInfoItem("Ancestry", character.ancestry);
    createInfoItem("Eye Colour", character.eyeColour);
    createInfoItem("Hair Colour", character.hairColour);
    createInfoItem("Wand Wood" , character.wand.wood);
    createInfoItem("Wand Core" , character.wand.core);
    createInfoItem("Wand Length" , character.wand.length);
    createInfoItem("Patronus", character.patronus);
    createInfoItem("Hogwarts Student", (character.hogwartsStudent === true ) ? "yes" : "no");
    createInfoItem("Hogwarts Staff", (character.hogwartsStaff === true ) ? "yes" : "no");
    createInfoItem("Actor", character.actor);
    createInfoItem("Alternate actors", character.alternate_actors);
    createInfoItem("Alive", (character.alive === true ) ? "yes" : "no" );

}