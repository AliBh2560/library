function render(list, page = 1) {


    let currPage = (page - 1) * 5;

    let currPageBooks = list.slice(currPage, currPage + 5);

    let tamplate = currPageBooks.map((card, index) => {
        return `
            <div class="card">
                <i onclick="addToShop(${index})" id="addToShop" class="fa-regular fa-lg fa-bookmark" style="color:${card.isSelected ? "gold" : "#86C232"}; "></i>
                <i onclick="renderCard(${index})" id="cardDesc" class="fa-solid fa-lg fa-ellipsis" style = "color: #86C232;" ></i>
            <img class="card__img" src="./assets/images/${card.imgSrc}" alt="">

                <sec class="card__content">
                    <h2>${card.title}</h2>
                </sec>
            </div>
    `
    }).join('')


    bookContainer.innerHTML = tamplate;



    renderPagination(list)
}


function renderPagination(list) {
    pagention.innerHTML = `
    <div class="paginationContainer"> </div>
    `

    pagesContainer = document.querySelector(".paginationContainer");

    let pages = list.length / 5;

    if (list.length % 5) pages++;

    let paginationTemp = ""

    for (let i = 1; i <= pages; i++) {
        paginationTemp += `<div onclick="render(langFilterd,${i})" class="paginationNumber">${i}</div>`
    }


    pagesContainer.innerHTML = paginationTemp;
    
}



function renderGenreFilter() {

    BOOKS.forEach(card => {

        if (!genres.includes(card.genre)) genres.push(card.genre)
    });

    genreContainer.innerHTML = genres.map(item => {

        return `
                <li>
                    <label for="${item}">${item}</label>
                    <input class="container__genre__filter__input" type="checkbox" value="${item}" id="${item}">
                </li>
        
        
        `

    }).join('')

    genresInp = document.querySelectorAll('.container__genre__filter__input');
    for (const genre of genresInp) {
        genre.addEventListener('change', filter)
    }
}



function renderLangFilter() {
    BOOKS.forEach(card => {

        if (!langs.includes(card.language)) langs.push(card.language)
    });

    langContainer.innerHTML = langs.map(item => {

        return `
                <li>
                    <label for="${item}">${item}</label>
                    <input class="container__lang__filter__input" type="checkbox" value="${item}" id="${item}">
                </li>
        
        
        `

    }).join('')

    langsInp = document.querySelectorAll('.container__lang__filter__input');

    for (const lang of langsInp) {
        lang.addEventListener('change', filter)
    }
}



function filter() {
    langFilterd = [];
    let selcetedGenre = [];
    let selcetedLang = [];

    let genreFilterd = [];

    for (const genre of genresInp) {
        if (genre.checked) selcetedGenre.push(genre.value)
    }
    if (!selcetedGenre.length) selcetedGenre = genres


    BOOKS.forEach(card => {

        if (selcetedGenre.includes(card.genre)) genreFilterd.push(card)

    });




    for (const lang of langsInp) {
        if (lang.checked) selcetedLang.push(lang.value)
    }
    if (!selcetedLang.length) selcetedLang = langs


    genreFilterd.forEach(card => {

        if (selcetedLang.includes(card.language)) langFilterd.push(card)

    });
    
    render(langFilterd)
}


function addToShop(index) {
    shopCounter.textContent = 0;

    BOOKS[index].isSelected = !(BOOKS[index].isSelected)

    BOOKS.forEach(card => {
        if (card.isSelected) shopCounter.textContent++
    })
    filter()
    
}

function renderCard(index) {
    pagention.classList.add('hide');
    filterContainer.classList.add('hide');
    bookContainer.innerHTML = `
    <div class="single-card">

            <img src="./assets/images/${BOOKS[index].imgSrc}" alt="">

            <i onclick="closeCard()" id="closeBtn" class="fa-solid fa-x" style="color: #86C232;"></i>

            <span class="single-card__content">
                <h1>${BOOKS[index].title}</h1>
                <h3>${BOOKS[index].author}</h3>
                <h3>${BOOKS[index].published_date}</h3>
                <h3>${BOOKS[index].language}</h3>
                <h3>${BOOKS[index].genre}</h3>
            </span>
        </div>
    
    
    `
}

function closeCard() {
    pagention.classList.remove('hide');
    filterContainer.classList.remove('hide');
    render(langFilterd)
}

function renderShop() {
    pagention.classList.add('hide');
    filterContainer.classList.add('hide');
    let selcetedCards = [];
    BOOKS.forEach(card => {
        if (card.isSelected) selcetedCards.push(card)
    })

    bookContainer.innerHTML = `<i onclick="closeCard()" id="closeShop" class="fa-solid fa-x" style="color: #86C232;"></i>`

    bookContainer.innerHTML += selcetedCards.map(card => {
        return `
        <div class="single-card">

            <img src="./assets/images/${card.imgSrc}" alt="">

            

            <span class="single-card__content">
                <h1>${card.title}</h1>
                <h3>${card.author}</h3>
                <h3>${card.published_date}</h3>
                <h3>${card.language}</h3>
                <h3>${card.genre}</h3>
            </span>
        </div>
        
        
        `

    }).join('')
}

function hideMenu() {
    hiddenMenu.classList.toggle('show');
    container.classList.toggle('hide');
}