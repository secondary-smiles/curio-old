var item = document.getElementById("header__navbar__inner-input-parent-input");
var noResults = document.getElementById(
  "header__navbar__inner-input-parent-noresults"
);

item.addEventListener("keydown", function (e) {
  if (e.code === "Enter") {
    validate();
  }
});

async function validate() {
  text = item.value;
  text = text.toLowerCase();

  const response = await fetch(
    "https://secondary-smiles.github.io/curio/words/" + text.trim() + ".html"
  );

  if (response.status.toString() == '200') {
    changeWord(text.trim());
    item.value = "";
    noResults.style.display = "none";
    word = text.trim();
  } else {
    noResults.style.display = "block";
  }
  item.blur();
}
