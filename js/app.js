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
        cargar('cont_' + id, id + '_01');
    }
}

function cargar(div, id_doc)
{
    var markdownFile = 'md/' + id_doc + '.md?_=' + new Date().getTime();  
    // Cargar el contenido del archivo Markdown
    $.get(markdownFile, function(data) {
      // Convertir Markdown a HTML
      var converter = new showdown.Converter();
      var html = converter.makeHtml(data);
      // Insertar el HTML resultante en el div
      $('#' + div).html(html);
      hljs.highlightAll();
    });
}