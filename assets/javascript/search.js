var item = document.getElementById("header__navbar__inner-input-parent-input");
var noResults = document.getElementById("header__navbar__inner-input-parent-noresults");

item.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {
        validate();
    }
});

function validate() {
    text = item.value;
    text = text.toLowerCase()
    if (wordlist.includes(text.trim())) {
        changeWord(text.trim());
        item.value = "";
        noResults.style.display = "none";
        word = text.trim();
    }
    else {
        noResults.style.display = "block";
    }
    item.blur();
}
