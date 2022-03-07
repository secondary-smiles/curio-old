var prevWord = ''
var word = ''

window.onload = function () {
    random();
}

function searchOut() {
    searchButton = document.getElementById("header__navbar__inner-search");
    searchBarParent = document.getElementById("header__navbar__inner-input-parent");
    searchButton.style.display = "none";
    searchBarParent.style.display = "flex";
}

function random() {
    word = wordlist[Math.floor(Math.random() * wordlist.length)];
    while (word == prevWord) {
        word = wordlist[Math.floor(Math.random() * wordlist.length)];
    }
    prevWord = word;
    changeWord(word);
}

function changeWord(word) {
    wordObj = document.getElementById("article-body__object");
    wordObj.data = "./words/" + word + ".html";
}
