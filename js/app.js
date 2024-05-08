let idActual = "";

function mostrar(id)
{
    if (idActual != id)
    {
        if (idActual != "")
        {
            document.getElementById("opciones_" + idActual).style.display = "none";
        }
        document.getElementById("opciones_" + id).style.display = "block";
        idActual = id;
    }
}

function cargar(div, id_doc)
{
    alert(id_doc);

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'md/' + id_doc + '.md', true);
    xhr.onreadystatechange = function () {
      if(xhr.readyState === 4 && xhr.status === 200) {
        var converter = new showdown.Converter(),  // Utilizamos Showdown para convertir Markdown a HTML
            markdownText = xhr.responseText,
            html = converter.makeHtml(markdownText);
        document.getElementById(div).innerHTML = html;
      }
      else
      {
        alert(xhr.readyState);
        alert(xhr.status);
      }
    };
    xhr.send();    
}