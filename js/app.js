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
    var markdownFile = 'md/' + id_doc + '.md';  
    // Cargar el contenido del archivo Markdown
    $.get(markdownFile, function(data) {
      // Convertir Markdown a HTML
      var converter = new showdown.Converter();
      var html = converter.makeHtml(data);
      // Insertar el HTML resultante en el div
      $('#' + div).html(html);
    });
}