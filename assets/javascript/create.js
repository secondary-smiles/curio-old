function create() {
  word = document.getElementById("form-word").value;
  type = document.getElementById("form-type").value;
  desc = document.getElementById("form-desc").value;

  template = `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="../assets/css/style.css">

    <title>Curio</title>
</head>

<body>
    <div class="article-center">
        <div class="article">
            <div class="article__name">
                <p id="article__name-title">${word}</p>
                <p id="article__name-title-meta">${type}.</p>
            </div>
            <hr width="45%" class="article-separator">
            <div class="article__meta">
                <p id="article__meta-desc">${desc}</p>
            </div>
            <hr width="75%" class="article-hr">
        </div>

    </div>
</body>

</html>
`;

download("word.txt", template);
}

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }
