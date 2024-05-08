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
    var resultado = null;
    $.ajax( { url: 'md/' + id_doc + '.md', 
        type: 'get', 
        dataType: 'html',
        async: false,
        success: function(data) { resultado = data; } 
    });

    resultado = markdown.toHTML( resultado );
    document.getElementById(div).innerHTML = resultado;

    alert("Fin");
}