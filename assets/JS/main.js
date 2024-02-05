let bookContainer = document.getElementById('root');
let genreContainer = document.querySelector('.container__filter__genre');
let langContainer = document.querySelector('.container__filter__language')
let filterContainer = document.querySelector('.container__filter');
let shopCounter = document.getElementById('shopCounter');
let shopBtn = document.getElementById('shopBtn');
let hiddenMenuBtn = document.getElementById('hiddenMenuBtn');
let hiddenMenu = document.getElementById('hiddenMenu');
let container = document.querySelector('.container');
let pagention = document.getElementById('pagenation');

let genresInp;
let langsInp;

let pagesContainer;

let genres = [];
let langs = [];

let langFilterd = [];

renderGenreFilter()
renderLangFilter()
filter()


shopBtn.addEventListener('click', renderShop);
hiddenMenuBtn.addEventListener('click', hideMenu);