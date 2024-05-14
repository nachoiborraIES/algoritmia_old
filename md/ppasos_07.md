# Python en 10 minutos

En este documento vamos a dar un vistazo rápido a los elementos principales para hacer programas en lenguaje Python.

## 1. Ejemplo introductorio

Para verlo todo de un vistazo usaremos el mismo ejemplo que hemos visto en documentos anteriores: en este programa le pedimos al usuario que indique el número de perros y gatos que hay en una protectora, y mostramos por pantalla el porcentaje de perros y de gatos que hay.

```cs
print("Indica el número de perros:")
perros = int(input())
print("Indica el número de gatos:")
gatos = int(input())

total = perros + gatos;
porcentajePerros = perros * 100 / total;
porcentajeGatos = gatos * 100 / total;

print("Hay un", porcentajePerros,"% de perros")
print("Hay un", porcentajeGatos, "% de gatos")
```

Analicemos las estructuras empleadas en el ejemplo. Podemos ver que el código es más corto que el realizado con los lenguajes anteriores...

* La instrucción `print` sirve para mostrar información por pantalla. La usamos para pedirle al usuario el número de perros y gatos al principio, y para mostrar los resultados al final. Si queremos mostrar varias cosas enlazadas, podemos separarlas por comas dentro de la instrucción `print`.
* Para recoger datos por teclado usamos la instrucción `input`, que recoge todo el texto que el usuario escribe hasta que pulsa *Intro*. Ese dato luego hay que convertirlo a entero, usando la instrucción `int()`.
* Tras este bloque hacemos las operaciones matemáticas: calculamos el `total` de animales de la protectora sumando perros y gatos, y los respectivos porcentajes de perros y gatos. En este caso hay una diferencia con otros lenguajes, ya que la operación `/` calcula una división real (con decimales), y ya no es tan importante multiplicar por 100 antes de dividir para no perder el resultado. 
* Finalmente mostramos por pantalla los datos de porcentajes calculados

## 2. Software para programar

¿Qué software necesitamos para programar en Python? Ofreceremos aquí dos alternativas.

### 2.1. Intérprete online

Podemos utilizar un intérprete online si queremos hacer pruebas rápidas y sencillas, sin necesidad de tener nada instalado en el sistema. Aquí indicamos un par de herramientas que os pueden venir bien:

<ul>
    <li><a href="https://www.programiz.com/python-programming/online-compiler" target="_blank">Editor online de <em>Programiz</em> para Python</a></li>
    <li><a href="https://www.tutorialspoint.com/online_python_compiler.php" target="_blank">Editor online de <em>TutorialsPoint</em> para Python</a></li>
</ul>

En cualquiera de estas opciones podemos editar nuestro código en una ventana de edición y luego ejecutarlo en un terminal adjunto a la derecha, con el que podemos interactuar e introducir datos por teclado.

### 2.2. Ejecución local

Si queremos ejecutar programas en Python de forma local, debemos instalar Python en nuestro sistema. Lo podemos descargar de su <a href="https://www.python.org/downloads/" target="_blank">web oficial</a>. En el caso de Windows convendrá añadir a la variable PATH la carpeta de instalación. Esto puede hacerse marcando la casilla adecuada durante el proceso de instalación:

<div align="center">
    <img src="https://nachoiborraies.github.io/entornos/img/ED_b1_tema01-05-python.png" width="80%">
</div>

En el caso de **Linux** podemos comprobar si ya lo tenemos instalado en nuestra distribución:

```
python 3 --version
```

Si el comando no se reconoce, podemos instalar Python con este otro comando (en sistemas Ubuntu o similares):

```
sudo apt-get install python3
```

Como editor simple para hacer nuestros programas podemos usar **Geany**, que se puede descargar desde su <a href="https://www.geany.org/" target="_blank">web oficial</a>. Una vez lo tengamos instalado debemos seguir estos pasos:

1. Crear un archivo nuevo y guardarlo como un programa Python. Por ejemplo, podemos copiar el código del ejemplo anterior y guardarlo como *Ejemplo.py*. Esto lo identificará como un archivo de tipo Python, y hará que Geany le asocie el intérprete por defecto.
2. Para ejecutar nuestros programas podemos ir al menú *Construir > Ejecutar* (recuerda que Python es un lenguaje interpretado, no se compila). También podemos usar los botones correspondientes de la barra de herramientas superior.

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
