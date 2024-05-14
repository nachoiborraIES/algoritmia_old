# Nuestro primer reto: Hola mundo

Cuando aprendemos a programar en cualquier lenguaje de programación, el primer código que se suele aprender es uno que muestre un mensaje corto por pantalla, que típicamente suele ser *Hola mundo* (*Hello world* en inglés).

## 1. Descripción del reto a resolver en Acepta el Reto

Así que, para empezar nuestra andadura en la resolución de problemas algorítmicos, vamos a ver cómo resolver un reto llamado *Hola mundo*, que tenemos disponible en <a href="https://aceptaelreto.com/problem/statement.php?id=116" target="_blank">este enlace de la plataforma Acepta el Reto</a>.

Lee con detenimiento el enunciado del reto. A modo de resumen, lo que nos pide es que hagamos un programa en el que leeremos un número entero entre 0 y 5, y deberemos mostrar el mensaje *Hola mundo.* por pantalla tantas veces como el número que hemos leído. Por ejemplo, si leemos por pantalla el número 4, la salida de nuestro programa deberá ser esta:

```
Hola mundo.
Hola mundo.
Hola mundo.
Hola mundo.
```

Notar que en estos retos no tenemos que mostrar más información por pantalla que la que nos piden (es decir, no tenemos que pedirle al usuario "Escribe el número de veces que hay que repetir el mensaje"). Además, el texto de salida debe coincidir *exactamente* con el que nos dan de ejemplo. En este caso, debemos escribir la frase *Hola mundo.*, incluyendo el punto del final.

Dado que estamos en *Acepta el reto*, podemos resolver este problema usando los lenguajes Java o C++ (de entre los que estamos aprendiendo a usar en esta web). En el caso de C++, una posible solución al problema sería ésta:

```cpp
#include <iostream>

using namespace std;

int main()
{
    int veces;

    // Leemos de la entrada el número de veces que nos digan
    cin >> veces;

    // Repetimos esas veces el mensaje
    for(int i = 1; i <= veces; i++)
    {
        cout << "Hola mundo." << endl;
    }
}
```

A la hora de probar el programa, una vez nos hayamos logueado en la web, vamos a la página del reto y en el menú izquierdo veréis una opción que pone *Enviar*.

<div align="center">
    <img src="/algoritmia/img/acepta_el_reto_3.png" width="70%">
</div>

Se abrirá un formulario donde podemos elegir el lenguaje en el que queremos resolver el reto (C++ en nuestro caso) y o bien adjuntar el archivo con el código fuente, o bien copiarlo y pegarlo en el formulario de código inferior:

<div align="center">
    <img src="/algoritmia/img/acepta_el_reto_4.png" width="80%">
</div>

Al pulsar el botón inferior de *Enviar* se envía el código al servidor, y tardará unos segundos en procesarlo y emitir una respuesta. Algunos ejemplos de respuestas que podemos obtener son:

* **AC**: reto aceptado. Es el resultado que debemos esperar en todos los retos que resolvamos. El resto de mensajes corresponden a distintos tipos de error.
* **WA**: respuesta incorrecta (*wrong answer*). Este resultado significa que el reto no ha dado el resultado esperado en alguna de las pruebas que se han hecho
* **RTE**: error en tiempo de ejecución (*runtime exception*). Se ha producido un error mientras se ejecutaba el código del programa. Esta opción es frecuente que pase cuando estamos recorriendo datos de una colección, por ejemplo.
* **PE**: error de presentación (*presentation error*). El resultado es casi correcto, pero hay alguna cosa al inicio o al final de la respuesta que no concuerda. Típicamente nos pasará cuando pongamos algún espacio en blanco de sobra al inicio o al final del texto a mostrar.
* **TLE**: tiempo límite excedido (*time limit exceeded*). Esto se dará en retos donde la eficiencia y la rapidez son importantes, y nuestro programa tarde demasiado tiempo en resolverlos. Volveremos a ellos en la sección de *Algoritmos intermedios*.

En nuestro caso, al enviar el código tal y como lo tenemos en el ejemplo obtendremos una respuesta satisfactoria:

<div align="center">
    <img src="/algoritmia/img/acepta_el_reto_5.png" width="80%">
</div>

En la sección izquierda, en el menú *Mis envíos* podemos ver el historial de envíos que hemos hecho para esta reto, y consultar el código fuente que usamos en cada uno:

<div align="center">
    <img src="/algoritmia/img/acepta_el_reto_6.png" width="80%">
</div>

<div class="ejercicio">
    <p><strong>Ejercicio 1:</strong></p>
    <p>Trata de resolver este mismo reto en Java y prueba tu programa en la plataforma.</p>
</div>

## 2. Descripción del reto a resolver en Kattis

En la plataforma *Kattis* el reto más sencillo que podemos plantearnos es este reto de <a href="https://open.kattis.com/problems/hello" target="_blank">Hello world</a>. Como se indica en la descripción, debemos hacer un programa que diga *Hello world*.

Vamos a resolverlo en lenguaje Python. Para ello, en la sección derecha elegimos el lenguaje Python 3 y pulsamos en *Start coding*:

<div align="center">
    <img src="/algoritmia/img/kattis_2.png" width="80%">
</div>

En el editor de código que se abre escribimos el código para resolver el reto, que es tan sencillo como éste:

```py
print("Hello World!")
```

Pulsando el botón de *Submit* en la parte inferior del formulario enviamos el reto para que se evalúe:

<div align="center">
    <img src="/algoritmia/img/kattis_3.png" width="50%">
</div>

En la siguiente pantalla veremos los resultados:

<div align="center">
    <img src="/algoritmia/img/kattis_4.png" width="70%">
</div>

Lo deseable es ver el reto como aceptado (*Accepted*) con todas las aspas verdes marcadas. En el caso de haber tenido algún error, podemos pulsar el botón superior de *Edit and resubmit* y volverlo a intentar. Notar que también podemos descargar el fichero con el código fuente que hemos usado para resolver el reto.

<div class="ejercicio">
    <p><strong>Ejercicio 2:</strong></p>
    <p>Trata de resolver este mismo reto en C# y prueba tu programa en la plataforma.</p>
</div>

## 3. Descripción del reto a resolver en CodeWars

En cuanto a la plataforma *CodeWars*, uno de los retos más sencillos que podemos resolver es <a href="https://www.codewars.com/kata/523b4ff7adca849afe000035" target="_blank">este reto</a>. Como podemos leer en la descripción, nos pide que hagamos una función que devuelva el mensaje "hello world!". En el desplegable superior podemos elegir el lenguaje en que resolverlo (en nuestro caso elegiremos C#), y luego en la parte superior derecha tenemos un botón *Train* para escribir y probar nuestro código:

<div align="center">
    <img src="/algoritmia/img/codewars_2.png" width="90%">
</div>

En el caso de CodeWars, los problemas se encapsulan en bloques de código llamados *funciones*, sobre los que aprenderemos más adelante. De momento, en el formulario que aparecerá debemos escribir un bloque de código o función llamado *greet* que devuelva (*return*) el texto indicado:

<div align="center">
    <img src="/algoritmia/img/codewars_3.png" width="60%">
</div>

En la parte inferior derecha tenemos un botón llamado *Test* para hacer una prueba preliminar de nuestro código y ver si cumple con lo que se pide:

<div align="center">
    <img src="/algoritmia/img/codewars_4.png" width="70%">
</div>

Una vez pasadas las pruebas preliminares, podemos pulsar el segundo botón *Attempt* para pruebas más exhaustivas, y ver si las supera también.

A medida que vayamos superando retos aumentará nuestra puntuación y nivel, que podemos consultar en la parte superior derecha de la web:

<div align="center">
    <img src="/algoritmia/img/codewars_5.png" width="30%">
</div>

<div class="ejercicio">
    <p><strong>Ejercicio 3:</strong></p>
    <p>Trata de resolver este mismo reto en Python y prueba tu programa en la plataforma. Deberás averiguar cómo se definen funciones en Python, y crear una llamada <code>greet</code> que devuelva el texto indicado con una instrucción <code>return</code>.</p>
</div>
