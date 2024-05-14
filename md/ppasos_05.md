# C++ en 10 minutos

En este documento veremos rápidamente las nociones elementales para empezar a hacer programas en el lenguaje C++.

## 1. Ejemplo introductorio

Para verlo rápidamente de un vistazo, plantearemos el mismo ejemplo que en otros documentos: le pedimos al usuario que indique el número de perros y gatos que hay en una protectora, y mostramos por pantalla el porcentaje de perros y de gatos que hay.

```cs
#include <iostream>

using namespace std;

int main()
{
    int perros, gatos, total, porcentajePerros, porcentajeGatos;

    cout << "Indica el número de perros:" << endl;
    cin >> perros;
    cout << "Indica el número de gatos:" << endl;
    cin >> gatos;

    total = perros + gatos;
    porcentajePerros = perros * 100 / total;
    porcentajeGatos = gatos * 100 / total;

    cout << "Hay un " << porcentajePerros << "% de perros" << endl;
    cout << "Hay un " << porcentajeGatos << "% de gatos" << endl;

    return 0;
}
```

Analicemos las estructuras empleadas en el ejemplo:

* Las instrucciones `#include <iostream>` y `using namespace std;` sirven para cargar las librerías iniciales necesarias para un uso básico del lenguaje. Disponen de elementos como las instrucciones `cin` y `cout` que usaremos en el código para mostrar información por pantalla o recoger datos desde el teclado, respectivamente. En lo que respecta a la cláusula `using`, nos sirve para omitir el prefijo `std` a la hora de usar estas instrucciones, haciendo el código más corto y legible.
* Todo programa en C++ parte de una función principal llamada `main`, que suele ser de tipo `int`, es decir, finaliza devolviendo un código numérico que indica si el programa ha terminado adecuadamente o no.
* Entre las llaves del bloque *main* definimos la secuencia de instrucciones que queremos que se ejecuten:
  * Primero declaramos las variables que vamos a usar: emplearemos las variables `perros` y `gatos` para guardar el total de perros y gatos por separado que diga el usuario, la variable `total` para sumar ambas cantidades y las variables `porcentajePerros` y `porcentajeGatos` para calcular los porcentajes
  * Después le pedimos al usuario con dos mensajes `cout` que escriba la cantidad de perros y de gatos. El elemento `endl` al final de cada mensaje indica que terminarmos pasando a la siguiente línea de la consola o terminal.
  * Recogemos lo que escribe el usuario con la instrucción `cin` y lo asignamos directamente a la variable donde queremos guardarlo
  * Tras este bloque hacemos las operaciones matemáticas: calculamos el `total` de animales de la protectora sumando perros y gatos, y los respectivos porcentajes de perros y gatos. Es IMPORTANTE recalcar que, a la hora de calcular los porcentajes, primero conviene multiplicar el dato por 100 y luego dividir entre el total porque, si lo hacemos al revés (primero dividir y luego multiplicar) la división dará 0 al ser entera, y el porcentaje siempre saldrá 0.
  * Después mostramos por pantalla los datos de porcentajes calculados, con nuevas instrucciones `cout`.
  * Finalmente hay una instrucción `return 0`, que es el código numérico que proporciona el programa al finalizar. Por convenio, se entiende que un programa que termina con el código 0 ha terminado de forma normal. Cualquier otro código supone un error inesperado, y se debe consultar qué significa en cada programa en concreto.

## 2. Software para programar

¿Qué software necesitamos para programar en C++? Ofreceremos aquí dos alternativas.

### 2.1. Compilador online

Podemos utilizar un compilador online si queremos hacer pruebas rápidas y sencillas, sin necesidad de tener nada instalado en el sistema. Aquí indicamos un par de herramientas que os pueden venir bien:

<ul>
    <li><a href="https://www.programiz.com/cpp-programming/online-compiler" target="_blank">Editor online de <em>Programiz</em> para C++</a></li>
    <li><a href="https://www.onlinegdb.com/online_c++_compiler" target="_blank">Editor online de <em>OnlineGDB</em> para C++</a></li>
</ul>

En cualquiera de estas opciones podemos editar nuestro código en una ventana de edición y luego ejecutarlo en un terminal adjunto (a la derecha o en la parte inferior), con el que podemos interactuar e introducir datos por teclado.

### 2.2. Compilación y ejecución local

Si queremos compilar y ejecutar programas en C++ de forma local, también tenemos varias alternativas. En Windows debemos descargar e instalar algún compilador para C++, como por ejemplo <a href="https://sourceforge.net/projects/mingw/" target="_blank">MinGW</a>. En el asistente debemos marcar para instalar el paquete *base* y el compilador *gcc-g++*. Podemos instalarlo todo en una carpeta sencilla, como por ejemplo *C:\MinGW*.

<div align="center">
    <img src="https://nachoiborraies.github.io/entornos/img/ED_b1_tema01-01-mingw.png" width="80%">
</div>

Después debemos editar las variables de entorno del sistema y añadir la subcarpeta *bin* de la instalación, para que Windows reconozca al compilador:

<div align="center">
    <img src="https://nachoiborraies.github.io/entornos/img/ED_b1_tema01-01-mingw_2.png" width="80%">
</div>

En Linux el compilador *gcc* o *g++* viene instalado por defecto, y en el caso de Mac se instala también por defecto instalando la herramienta XCode.

Como editor simple para hacer nuestros programas podemos usar **Geany**, que se puede descargar desde su <a href="https://www.geany.org/" target="_blank">web oficial</a>. Una vez lo tengamos instalado debemos seguir estos pasos:

1. Crear un archivo nuevo y guardarlo como un programa C++. Por ejemplo, podemos copiar el código del ejemplo anterior y guardarlo como *Ejemplo.cpp*.
2. Al guardar el fichero como *.cpp*, Geany ya lo identificará como fichero de código C++, y activará automáticamente el compilador por defecto.
4. Para compilar nuestros programas podemos ir al menú *Construir > Build* (no elegir la opción *Compilar*) y una vez compilado ejecutamos con *Construir > Ejecutar*. También podemos usar los botones correspondientes de la barra de herramientas superior.

<div class="ejercicio">
    <p><strong>Ejercicio 1:</strong></p>
    <p>Prueba a compilar y ejecutar el ejemplo anterior de los perros y gatos, y comprueba el resultado que se muestra por pantalla al indicar 30 perros y 20 gatos.</p>
</div>

<div class="ejercicio">
    <p><strong>Ejercicio 2:</strong></p>
    <p>Ahora nuestra protectora añade un tercer tipo de animal: los pájaros. Pide al usuario este nuevo dato y calcula ahora los tres porcentajes.</p>
</div>

<div class="ejercicio">
    <p><strong>Ejercicio 3:</strong></p>
    <p>Escribe un programa que le pida al usuario su nombre completo y su edad, y muestra por pantalla el mensaje *Hola XXXX, tienes YYYY años*.</p>
    <p><strong>NOTA:</strong> para leer de teclado un texto largo (con espacios) no te servirá la instrucción `cin`. Deberás usar otra que se llama `getline(cin, variable_texto)`. 
</div>