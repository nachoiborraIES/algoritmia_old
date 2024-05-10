# C# en 10 minutos

Este documento pretende dar un vistazo rápido a los fundamentos de la programación básica con C#, para entender las estructuras básicas con las que empezar a hacer programas.

## 1. Ejemplo introductorio

Para verlo todo rápidamente de un vistazo, observemos este ejemplo: en él le pedimos al usuario que indique el número de perros y gatos que hay en una protectora, y muestra por pantalla el porcentaje de perros y de gatos que hay.

```cs
using System;

class Ejemplo
{
    static void Main()
    {
        int perros, gatos, total, porcentajePerros, porcentajeGatos;

        Console.WriteLine("Indica el número de perros:");
        perros = Convert.ToInt32(Console.ReadLine());
        Console.WriteLine("Indica el número de gatos:");
        gatos = Convert.ToInt32(Console.ReadLine());

        total = perros + gatos;
        porcentajePerros = perros * 100 / total;
        porcentajeGatos = gatos * 100 / total;

        Console.WriteLine("Hay un " + porcentajePerros + "% de perros");
        Console.WriteLine("Hay un " + porcentajeGatos + "% de gatos");
    }
}
```

Analicemos las estructuras empleadas en el ejemplo:

* La instrucción `using System` del inicio se utiliza para incorporar el espacio de nombres *System*. Esto nos va a permitir utilizar directamente instrucciones que pertenecen a ese espacio de nombres, como por ejemplo *Console.WriteLine*, *Convert.ToInt32* o *Console.ReadLine*. Si no incluyéramos esta línea tendríamos que anteponer el prefijo *System* delante de cada una de estas instrucciones (*System.Console.WriteLine*, *System.Convert.ToInt32*...) haciendo el código más largo.
* Todo programa en C# debe estar encapsulado dentro de una clase `class` seguida de un nombre (en nuestro caso hemos llamado a la clase *Ejemplo*).
* Dentro de la clase debe haber un bloque de código principal llamado `Main`, que es el que se ejecuta al lanzar el programa. En el caso de C#, el bloque *Main* se define como `static void Main()`.
* Entre las llaves del bloque *Main* definimos la secuencia de instrucciones que queremos que se ejecuten:
  * Primero declaramos las variables que vamos a usar: emplearemos las variables `perros` y `gatos` para guardar el total de perros y gatos por separado que diga el usuario, la variable `total` para sumar ambas cantidades y las variables `porcentajePerros` y `porcentajeGatos` para calcular los porcentajes
  * Después le pedimos al usuario con dos mensajes `Console.WriteLine` que escriba la cantidad de perros y de gatos. Recogemos lo que escribe el usuario con la instrucción `Console.ReadLine` y lo tenemos que convertir a un dato numérico entero con la instrucción `Convert.ToInt32`.
  * Tras este bloque hacemos las operaciones matemáticas: calculamos el `total` de animales de la protectora sumando perros y gatos, y los respectivos porcentajes de perros y gatos. Es IMPORTANTE recalcar que, a la hora de calcular los porcentajes, primero conviene multiplicar el dato por 100 y luego dividir entre el total porque, si lo hacemos al revés (primero dividir y luego multiplicar) la división dará 0 al ser entera, y el porcentaje siempre saldrá 0.
  * Finalmente mostramos por pantalla los datos de porcentajes calculados

## 2. Software para programar

¿Qué software necesitamos para programar en C#? Ofreceremos aquí dos alternativas.

### 2.1. Compilador online

Podemos utilizar un compilador online si queremos hacer pruebas rápidas y sencillas, sin necesidad de tener nada instalado en el sistema. Aquí indicamos un par de herramientas que os pueden venir bien:

<ul>
    <li><a href="https://www.programiz.com/csharp-programming/online-compiler" target="_blank">Editor online de <em>Programiz</em> para C#</a></li>
    <li><a href="https://www.tutorialspoint.com/online_csharp_compiler.php" target="_blank">Editor online de <em>TutorialsPoint</em> para C#</a></li>
</ul>

En cualquiera de estas opciones podemos editar nuestro código en una ventana de edición y luego ejecutarlo en un terminal adjunto a la derecha, con el que podemos interactuar e introducir datos por teclado.

### 2.2. Compilación y ejecución local

Si queremos compilar y ejecutar programas en C# de forma local, también tenemos varias alternativas:

* En Windows ya disponemos de un compilador de C# integrado, en nuestra carpeta *C:\Windows\Microsoft.NET\Framework*, seguido de una carpeta con número de versión. Puede haber varias, y la más habitual es la versión 4.0.x.
* En Linux y Mac debemos instalar un compilador de C#, como el que tenemos disponible en el <a href="https://www.mono-project.com/" target="_blank">Proyecto Mono</a>. Nos descargamos el instalador adecuado para nuestro sistema operativo y lo instalamos.

Como editor simple para hacer nuestros programas podemos usar **Geany**, que se puede descargar desde su <a href="https://www.geany.org/" target="_blank">web oficial</a>. Una vez lo tengamos instalado debemos seguir estos pasos:

1. Crear un archivo nuevo y guardarlo como un programa C#. Por ejemplo, podemos copiar el código del ejemplo anterior y guardarlo como *Ejemplo.cs*.
2. Ahora vamos al menú *Construir*, y elegimos *Establecer comandos de construcción*. Debemos rellenar las casillas de *Compilar* y *Ejecutar* para que localicen cómo compilar y ejecutar programas en C#. En el caso de Windows nos puede quedar más o menos así (variando el nombre de la carpeta 4.0.x.x.x.x al compilar con la que tengas en tu instalación de Windows). 

<div align="center">
    <img src="https://nachoiborraies.github.io/csharp/img/01_geany_conf.png" width="80%">
</div>

3. En el caso de Linux o Mac, donde habremos instalado el proyecto Mono, estas secciones normalmente se quedan rellenas con la configuración adecuada para usar el compilador instalado.
4. Para compilar nuestros programas podemos ir al menú *Construir > Compilar*, y una vez compilado ejecutamos con *Construir > Ejecutar*. También podemos usar los botones correspondientes de la barra de herramientas superior.

<div align="center">
    <img src="https://nachoiborraies.github.io/csharp/img/01_geany_compilar.png" width="80%">
</div>

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
    <p>Escribe un programa que le pida al usuario la nota de 3 exámenes y calcule por pantalla su media (entera).</p>
</div>