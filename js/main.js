// Reference from: The Rick and Morty API (https://rickandmortyapi.com)
const API_BASE_URL = 'https://rickandmortyapi.com/api'

$(document).ready(function () {
    getCharacters()
    setCharacterSearch()
});

/**
 * It makes an AJAX request to the Rick and Morty API, and then it calls the setCharactersCards
 * function, passing the response as an argument.
 * @param [name=null] - the name of the character you want to search for
 */
function getCharacters(name = null) {
    var url = API_BASE_URL + '/character/'
    if (name) {
        url += `?name=${name}`
    }

    $.ajax({
        type: "GET",
        url: url,
        dataType: "json",
        success: function ({
            info,
            results
        }) {
            setCharactersCards(results)
        }
    });
}

/**
 * It takes a list of characters and creates a card for each one of them
 * @param characterList - an array of objects, each object is a character
 */
function setCharactersCards(characterList) {
    var cardListElement = '#characters .cards'

    $(cardListElement).empty()

    characterList.forEach(character => {
        let cardCharacter = `
            <div class="col-md-6">
                <div class="card mb-3 mx-auto" style="max-width: 540px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${character.image}" class="img-fluid rounded-start" alt="${character.name}">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${character.name}</h5>
                                <p class="card-text">
                                    <b>Genêro:</b> ${character.gender}
                                    <br>
                                    <b>Espécie:</b> ${character.species}
                                </p>
                                <p class="card-text">
                                <span class="status-${character.status}"></span>
                                    <small class="text-muted">
                                        ${character.status}
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `

        $(cardCharacter).appendTo(cardListElement);
    });
}

/**
 * When the user types in the input field, get the value of the input field and pass it to the
 * getCharacters function.
 */
function setCharacterSearch() {
    $('#character-name').on('input', function (e) {
        e.preventDefault();
        let characterName = $(this).val()

        getCharacters(characterName)
    });
}