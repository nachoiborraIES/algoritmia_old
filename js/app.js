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