// Reference from: The Rick and Morty API (https://rickandmortyapi.com)
const API_BASE_URL = 'https://rickandmortyapi.com/api'

$(document).ready(function () {
    getCharacters()
    setCharacterSearch()

    var aboutDescription = `
        Rick and Morty (em português Rick e Morty) é uma série de animação adulta norte-americana de comédia
        e ficção científica criada por Justin Roiland e Dan Harmon para o bloco de programação noturno Adult
        Swim, exibido no canal Cartoon Network.

        A série estreou em 2 de dezembro de 2013 e acompanha as perigosas aventuras do cientista alcoólatra
        Rick e seu neto Morty, que divide seu tempo entre a vida familiar e viagens interdimensionais. Em
        2016, suas duas primeiras temporadas foram lançadas na Netflix com a dublagem brasileira realizada
        pelo estúdio Dubbing Company, de Campinas, com tradução de Carlos Freires, e também foi transmitida
        nos canais pagos TBS, I.Sat e TNT Séries, atualmente é exibida no Brasil pelo canal Warner Channel
        desde 4 de maio de 2020 com a estreia do bloco do Adult Swim no canal. Em agosto de 2015, o Adult
        Swim renovou a série para uma terceira temporada de 10 episódios, que estreou no dia 1 de abril de
        2017 com o resto da temporada programada para ir ao ar durante o verão do mesmo ano.[1]

        A série se originou de uma paródia animada em curta-metragem do filme De Volta Para o Futuro criada
        por Roiland para o festival de cinema Channel 101. A Adult Swim abordou Harmon a respeito de ideias
        para um programa de televisão, então ele e Roiland desenvolveram o programa com base no curta,
        substituindo os personagens de Doc com Rick e Marty com Morty.
    `

    $('#about-description > p').html(aboutDescription)
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