# Probando Logo

Antes de entrar en materia sobre el desarrollo y prueba de algoritmos, en esta sesión vamos a dedicarnos a experimentar con una herramienta visual que nos puede dar una idea de a qué nos estamos refiriendo.

## 1. ¿Qué es Logo?

Logo es un lenguaje de programación educativo diseñado en 1967, que se ideó para ayudar a la gente a conocer las bases de la programación a través de instrucciones simples que producen un resultado directo en pantalla. Para ello cuenta con un entorno gráfico donde una tortuga se mueve de acuerdo a las instrucciones que le facilitamos, dibujando figuras con su recorrido.

<div align="center">
    <img src="/algoritmia/img/logo_01.png" width="20%">
</div>

### 1.1. Software necesario

Para poder trabajar con Logo hoy en día contamos con distintas herramientas. Aquí ponemos algunos ejemplos:

* **WinLogo**: una antigua aplicación Windows que es aún compatible con versiones recientes. Podemos encontrarla como *MSWLogo* en diversas webs
* **XLogo**: una versión basada en Java que permite desarrollar programas logo en distintas plataformas. 
* Intérpretes *online* de Logo, como [este de aquí](https://calormen.com/jslogo/)

En estos apuntes utilizaremos esta última opción para no tener que descargar ni instalar nada en nuestro sistema.

<div align="center">
    <img src="/algoritmia/img/logo_02.png" width="70%">
</div>

En la parte inferior hay un cuadro donde escribiremos las instrucciones para mover a la tortuga por el área principal.

## 2. Instrucciones básicas de movimiento

Logo dispone de este conjunto de instrucciones básicas para mover la tortuga:

<table width="100%">
    <tr>
        <th>Abreviat.</th><th>Instrucción</th><th>Descripción</th><th>Ejemplo</th>
    </tr>
    <tr>
        <td align="center"><strong>fd</strong></td>
        <td align="center"><strong>forward</strong></td>
        <td>Avanza la tortuga el número de pasos indicado</td>
        <td><strong>fd 50</strong></td>
    </tr>
    <tr>
        <td align="center"><strong>bk</strong></td>
        <td align="center"><strong>backward</strong></td>
        <td>Retrocede la tortuga el número de pasos indicado</td>
        <td><strong>bk 20</strong></td>
    </tr>
    <tr>
        <td align="center"><strong>rt</strong></td>
        <td align="center"><strong>right</strong></td>
        <td>Gira a la derecha el número de grados indicado</td>
        <td><strong>rt 90</strong></td>
    </tr>
    <tr>
        <td align="center"><strong>lt</strong></td>
        <td align="center"><strong>left</strong></td>
        <td>Gira a la izquierda el número de grados indicado</td>
        <td><strong>lt 45</strong></td>
    </tr>
    <tr>
        <td align="center"><strong>cs</strong></td>
        <td align="center"><strong>clearscreen</strong></td>
        <td>Borra el lienzo de dibujo y resitúa a la tortuga en el centro</td>
        <td><strong>cs</strong></td>
    </tr>
    <tr>
        <td align="center"><strong>st</strong></td>
        <td align="center"><strong>showturtle</strong></td>
        <td>Muestra la tortuga</td>
        <td><strong>st</strong></td>
    </tr>
    <tr>
        <td align="center"><strong>ht</strong></td>
        <td align="center"><strong>hideturtle</strong></td>
        <td>Oculta la tortuga</td>
        <td><strong>ht</strong></td>
    </tr>
    <tr>
        <td align="center"><strong>pu</strong></td>
        <td align="center"><strong>penup</strong></td>
        <td>Sube el lápiz (para no dibujar mientras se mueve la tortuga)</td>
        <td><strong>pu</strong></td>
    </tr>
    <tr>
        <td align="center"><strong>pd</strong></td>
        <td align="center"><strong>pendown</strong></td>
        <td>Baja el lápiz (para dibujar mientras se mueve la tortuga)</td>
        <td><strong>pd</strong></td>
    </tr>
    <tr>
        <td align="center"><strong>setpos</strong></td>
        <td align="center"><strong>&nbsp;</strong></td>
        <td>Coloca a la tortuga en las coordenadas que indiquemos (basándonos en el centro del lienzo)</td>
        <td><strong>setpos [50 10]</strong></td>
    </tr>
</table>

Podemos escribir más de una instrucción seguida en el recuadro inferior, separadas por espacios, y pulsando *Intro* se ejecutan todas en el orden indicado. Por ejemplo:

```
fd 40 rt 90 fd 50
```

Además, podemos utilizar los cursores de flecha arriba/abajo para movernos por el historial de instrucciones escritas y volverlas a ejecutar si queremos.

<div class="ejercicio">
    <p><strong>Ejercicio 1:</strong></p>
    <p>Utiliza las instrucciones anteriores para dibujar estas dos figuras. Puedes guardarte después las instrucciones elegidas en ficheros de texto para tenerlas disponibles</p>
    <div align="center">
        <img src="/algoritmia/img/logo_03.png" width="80%">
    </div>
</div>

## 3. Colores y tamaños

Podemos también cambiar colores o grosor del trazo, y rellenar figuras siempre que estén cerradas. Aquí tenemos las instrucciones correspondientes:

<table width="100%">
    <tr>
        <th>Abreviat.</th><th>Instrucción</th><th>Descripción</th><th>Ejemplo</th>
    </tr>
    <tr>
        <td align="center"><strong>setpc</strong></td>
        <td align="center"><strong>setpencolor</strong></td>
        <td>Establece el color del trazo en formato RGB</td>
        <td><strong>setpc [255 0 0]</strong></td>
    </tr>
    <tr>
        <td align="center"><strong>setpw</strong></td>
        <td align="center"><strong>setpenwidth</strong></td>
        <td>Establece el grosor del trazo</td>
        <td><strong>setpw 10</strong></td>
    </tr>
    <tr>
        <td align="center"><strong>fill</strong></td>
        <td align="center"><strong>&nbsp;</strong></td>
        <td>Rellena el área cerrada donde se encuentra actualmente la tortuga (debemos colocarla DENTRO de un área cerrada previamente)</td>
        <td><strong>fill</strong></td>
    </tr>
</table>

<div class="ejercicio">
    <p><strong>Ejercicio 2:</strong></p>
    <p>Trata de crear este pentágono con color azul. <strong>PISTA:</strong> si sumamos todos los ángulos internos de un pentágono, suman 540 grados.</p>
    <div align="center">
        <img src="/algoritmia/img/logo_04.png" width="20%">
    </div>
</div>

## 4. Repetir instrucciones

Habrás comprobado con algún ejercicio anterior que necesitas repetir varias instrucciones varias veces para conseguir la figura deseada. La pregunta que deberías hacerte es... ¿es necesaria esa repetición? Afortunadamente la respuesta es *no*.

Logo dispone de la instrucción `repeat` que nos va a permitir repetir un conjunto de instrucciones un número determinado de veces. Estas instrucciones a repetir las debemos poner entre corchetes tras la instruccion *repeat* en sí, como en este ejemplo que dibuja un cuadrado de lado 100:

```
repeat 4 [fd 100 rt 90]
```

<div class="ejercicio">
    <p><strong>Ejercicio 3:</strong></p>
    <p>Utilizando la instrucción *repeat* junto con otras que hemos visto anteriormente, trata de reproducir estas figuras:</p>
    <div align="center">
        <img src="/algoritmia/img/logo_05.png" width="80%">
    </div>
</div>

## 5. Utilizar variables

En Logo podemos emplear variables para guardar datos que queramos utilizar más adelante en el programa, o cuyo valor queramos modificar durante la ejecución. Usamos la instrucción `make` para ello, indicando el nombre de la variable tras las comillas dobles:

```
make "numero 10
```

Si queremos utilizar esa variable en nuestro código pondremos el nombre precedido de dos puntos `:`, como en este ejemplo:

```
fd :numero
```

También podemos reutilizar la instrucción *make* para modificar el valor previo de una variable:

```
make "numero :numero + 10
```

<div class="ejercicio">
    <p><strong>Ejercicio 4:</strong></p>
    <p>Utilizando variables y bucles, trata de representar estas figuras:</p> 
    <div align="center">
        <img src="/algoritmia/img/logo_06.png" width="70%">
    </div>
    <p><strong>AYUDA:</strong> para dibujar un círculo, podemos avanzar una pequeña cantidad y girar un pequeño número de grados, y repetir esto un número de veces, como aquí: `repeat 120 [fd 1 rt 3]`. Si aumentamos el paso o reducimos el ángulo obtenemos un círculo más grande, y la operación contraria (reducir el paso o aumentar el ángulo) nos dará un círculo más pequeño.</p>
</div>

## 5. Introducción a las funciones

En el ejercicio anterior habrás comprobado que necesitamos repetir un conjunto de instrucciones varias veces, cambiando el valor de una variable (por ejemplo, el ángulo a girar). También es posible "ahorrarnos" repetir estas estructuras en el código englobando el conjunto de instrucciones en un módulo llamado normalmente *función*. Simplemente le tenemos que dar un nombre a ese grupo de instrucciones y, cada vez que queramos ejecutarlo, invocamos ese nombre en el programa:

```
TO cuadrado
   repeat 4 [fd 100 rt 90]
END
```

Si queremos dibujar un cuadrado en nuestro programa usando esta función sólo tenemos que hacer lo siguiente:

```
cuadrado
```

Además, podemos facilitar a esta función unas variables que utilizar:

```
TO cuadrado :tamano
   repeat 4 [fd :tamano rt 90]
END
```

Esta función va a dibujar un cuadrado del tamaño que indiquemos cuando invoquemos ese código. Aquí dibujamos cuadrados de distintos tamaños:

```
cuadrado 50
cuadrado 100
cuadrado 150
```

Obtendremos esta imagen como resultado:

<div align="center">
    <img src="/algoritmia/img/logo_07.png" width="20%">
</div>

<div class="ejercicio">
    <p><strong>Ejercicio 4:</strong></p>
    <p>Trata de dibujar estas figuras empleando funciones:</p> 
    <div align="center">
        <img src="/algoritmia/img/logo_08.png" width="60%">
    </div>
</div>
