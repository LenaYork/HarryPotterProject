//like
function addLike(characterInfo){
    let likeBlock = document.createElement("form");
    likeBlock.classList.add("like__block");
    likeBlock.setAttribute("method", "post")
    characterInfo.append(likeBlock);

    let countOfLikes = 0;

    let likeCounter = document.createElement("span");
    likeCounter.classList.add("like__counter");
    likeCounter.innerHTML = countOfLikes;
    likeBlock.append(likeCounter);

    let likeSvg = `<svg viewBox="0 0 24 24" xml:space="preserve"
                             xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="19" fill="none" r="4.5" stroke="#303C42" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
                            <path d="M12,21.5   c-1.3789063,0-2.5-1.121582-2.5-2.5" fill="none" stroke="#303C42"
                                  stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
                            <path
                                d="   M15.6721792,16.399004C15.6721792,16.399004,17.5,15.5,17.5,13s-1-2.5-1-4.5c0-4,6.5-2.5,6-8c0,0,1,1.5,1,2.5s0,1-0.5,1.9994197   C23,4.9994197,23.5,5.5,23.5,7S22,9.5,22,9.5s0.5,2-1.5,3C20.5,12.5,20.6721802,14.3990049,15.6721792,16.399004z"
                                fill="none" stroke="#303C42" stroke-linecap="round" stroke-linejoin="round"
                                stroke-miterlimit="10"/>
                            <path
                                d="   M8.3275213,16.3989086C8.3275213,16.3989086,6.5,15.5,6.5,13s1-2.5,1-4.5c0-4-6.5-2.5-6-8c0,0-1,1.5-1,2.5s0,1,0.5,1.9994197   C1,4.9994197,0.5,5.5,0.5,7S2,9.5,2,9.5s-0.5,2,1.5,3C3.5,12.5,3.3275216,14.3989086,8.3275213,16.3989086z"
                                fill="none" stroke="#303C42" stroke-linecap="round" stroke-linejoin="round"
                                stroke-miterlimit="10"/></svg>`;

    let likeBtn = document.createElement("button");
    likeBtn.classList.add("like__icon");
    likeBtn.innerHTML = likeSvg;
    likeBlock.append(likeBtn);

    likeBtn.onclick = function (e) {
        e.preventDefault();

        likeBtn.classList.toggle("like__icon_active");
        let countOfLikes = 0;
        countOfLikes++;
        fetch("https://httpbin.org/post", {
            method: "POST",
            body: countOfLikes,
        }).then(function (response) {
            return response.json();
        }).then(function (count) {
            let countOfLike = Number(count.data);

            if (likeBtn.classList.contains("like__icon_active")) {
                likeCounter.innerHTML = countOfLikes;
            } else {
                likeCounter.innerHTML = countOfLikes - 1;
            }
        }).catch(function (error) {
            console.log(error);
        });

    };
}
//?????????????? HTML ?? ??????????????????????
function createCharacterItem(charactersJson) {
    let characters = "";
    characters = JSON.parse(charactersJson);

    let characterBlock = document.querySelector(".character__wrap");
    characterBlock.innerHTML = "";

    for (let i = 0; i <= characters.length; i++) {

        let characterItem = document.createElement("div");
        characterItem.classList.add("character__item");
        characterBlock.append(characterItem);

        let characterImageWrap = document.createElement("div");
        characterImageWrap.classList.add("character__img");
        characterItem.append(characterImageWrap);

        if (characters[i].image) {
            let characterImage = document.createElement("img");
            characterImage.src = characters[i].image;
            characterImageWrap.append(characterImage);
        }

        let characterInfo = document.createElement("div");
        characterInfo.classList.add("character__info");
        characterItem.append(characterInfo);

        let characterName = document.createElement("div");
        characterName.classList.add("character__info-item", "character__info-item_name");
        characterName.innerHTML = characters[i].name;
        characterInfo.append(characterName);


        function createElementItem(title, value) {
            let elementItem = document.createElement("div");
            elementItem.classList.add("character__info-item");
            elementItem.innerHTML = `<span>${title}: </span> ${value}`
            characterInfo.append(elementItem);
        }

        createElementItem("Gender", characters[i].gender);
        createElementItem("House", characters[i].house);
        createElementItem("Date of birth", characters[i].dateOfBirth);
        createElementItem("Ancestry", characters[i].ancestry);
        createElementItem("Actor", characters[i].actor);


        let characterLink = document.createElement("a");
        characterLink.classList.add("link__more");
        characterLink.innerText = "Show more...";
        characterInfo.append(characterLink);

        characterLink.onclick = function (e) {
            e.preventDefault();
            location.href = 'person.html' + `?name=${characters[i].name}`;
        }

        addLike(characterInfo);
    }
}

//?????????????? HTML ?? ????????????????????
function createItem(person) {
    let character = "";
    character = person;
    let characterBlock = document.querySelector(".character__wrap");
    characterBlock.innerHTML = "";

        let characterItem = document.createElement("div");
        characterItem.classList.add("character__item");
        characterBlock.append(characterItem);

        let characterImageWrap = document.createElement("div");
        characterImageWrap.classList.add("character__img");
        characterItem.append(characterImageWrap);

        if (character.image) {
            let characterImage = document.createElement("img");
            characterImage.src = character.image;
            characterImageWrap.append(characterImage);
        }

        let characterInfo = document.createElement("div");
        characterInfo.classList.add("character__info");
        characterItem.append(characterInfo);

        let characterName = document.createElement("div");
        characterName.classList.add("character__info-item", "character__info-item_name");
        characterName.innerHTML = character.name;
        characterInfo.append(characterName);


        function createElementItem(title, value) {
            let elementItem = document.createElement("div");
            elementItem.classList.add("character__info-item");
            elementItem.innerHTML = `<span>${title}: </span> ${value}`
            characterInfo.append(elementItem);
        }

        createElementItem("Gender", character.gender);
        createElementItem("House", character.house);
        createElementItem("Date of birth", character.dateOfBirth);
        createElementItem("Ancestry", character.ancestry);
        createElementItem("Actor", character.actor);


        let characterLink = document.createElement("a");
        characterLink.classList.add("link__more");
        characterLink.innerText = "Show more...";
        characterInfo.append(characterLink);

        characterLink.onclick = function (e) {
            e.preventDefault();
            location.href = 'person.html' + `?name=${character.name}`;
        }

        addLike(characterInfo);
}
