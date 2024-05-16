# Algoritmos básicos con condiciones simples

En este documento vamos a practicar el uso de condiciones simples en diferentes tipos de problemas a resolver. Entendemos por *condición simple* a condiciones que sean fácilmente programables, como por ejemplo comprobar si una variable (o unas pocas) valen exactamente un valor, o son mayores o menores que un valor determinado.

## 1. El día de Navidad

El día de Navidad es una fecha señalada y fácil de recordar: el 25 de diciembre. Si lo expresamos de forma numérica, el día es el 25 y el mes es el 12. Sabiendo esto, vamos a echar un vistazo a <a href="https://aceptaelreto.com/problem/statement.php?id=362" target="_blank">este reto</a> de *Acepta el Reto*.

El reto en sí consiste en que:

* Primero nos van a indicar cuántas fechas nos van a proporcionar (un número N por concretar)
* Después leeremos cada una de esas N fechas (primero el día y luego el mes) y diremos *SI* si corresponde al día de Navidad (25 del 12) o *NO* en caso contrario.

Vamos a plantear el reto en Java: utilizaremos el método `nextInt` de la variable `Scanner` para leer primero el número de fechas, y luego el día y mes de cada fecha (usamos un bucle `for` para leer tantas fechas como nos diga el número que hemos leído al principio). Cuando leamos cada día y mes, comprobamos con un `if` si es el día de Navidad o no.

```java
import java.util.Scanner;

public class Reto362
{
    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);
        int numFechas, dia, mes;

        // Leemos el número de fechas que nos van a pasar
        numFechas = sc.nextInt();

        // Repetimos el bucle para leer ese número de fechas
        for(int i = 1; i <= numFechas; i++)
        {
            // Leemos día y mes por separado
            dia = sc.nextInt();
            mes = sc.nextInt();

            // Comprobamos si es el día de Navidad
            if(dia == 25 && mes == 12)
            {
                System.out.println("SI");
            }
            else
            {
                System.out.println("NO");
            }
        }
    }
}
```

Si pruebas a enviar el código de este ejemplo, verás que lo da como aceptado.

<div class="ejercicio">
    <p><strong>Ejercicio 1:</strong></p>
    <p>Trata de resolver este mismo reto en C++ y comprueba que la plataforma lo acepta.</p>
</div>

## 2. Ecos impares

Vamos ahora a <a href="https://open.kattis.com/problems/oddecho" target="_blank">este reto</a> de Kattis. En él nos van a dar primero un número, indicando cuántas palabras vamos a tener que leer. Después leeremos cada una de esas palabras (una por línea) y tenemos que sacar por pantalla sólo las que nos den en posiciones impares. Por ejemplo, si nos dicen que vamos a leer 5 palabras con esta entrada:

```
5
una
dos
tres
cuatro
cinco
```

Nuestra salida por pantalla debe mostrar sólo las que hemos leído en posiciones impares, es decir:

```
una
tres
cinco
```

Leeremos primero el número de palabras *n* y construiremos un bucle `for` que lea esas palabras. Dentro del bucle mostraremos únicamente las palabras que tengan el contador del bucle impar. Para ver si un número es impar, tenemos que comprobar que NO sea divisible por 2.

El código puede quedar más o menos así en C#:

```cs
using System;

class Ejemplo
{
    static void Main()
    {
        int numPalabras;
        string palabra;

        // Leemos el número de palabras
        numPalabras = Convert.ToInt32(Console.ReadLine());

        // Recorremos las palabras y mostramos las impares
        for(int i = 1; i <= numPalabras; i++)
        {
            palabra = Console.ReadLine();
            if(i % 2 != 0)
            {
                Console.WriteLine(palabra);
            }
        }
    }
}
```

<div class="ejercicio">
    <p><strong>Ejercicio 2:</strong></p>
    <p>Trata de resolver este mismo reto en Python y comprueba que la plataforma lo acepta.</p>
</div>

## 3. Contando sables láser

Echemos un vistazo a <a href="https://www.codewars.com/kata/51f9d93b4095e0a7200001b8" target="_blank">este reto</a> de CodeWars. En él se nos pide que indiquemos cuántos sables láser tiene el usuario almacenado en la variable `name`, sabiendo que si se llama *Zach* tiene 18 sables, y el resto tienen 0.

Podríamos resolverlo en Python de este modo:

```py
def how_many_light_sabers_do_you_own(name=None):
    result = 0
    if name == "Zach":
        result = 18
    return result
```

El dato `name=None` es el dato que le proporcionamos al programa. Lo igualamos a *None* ("nada" en Python), porque el ejercicio dice que es posible que no proporcionemos ningún nombre y, en ese caso, también nos tiene que decir que hay 0 sables láser.

<div class="ejercicio">
    <p><strong>Ejercicio 3:</strong></p>
    <p>Trata de resolver este mismo reto en C# y comprueba que la plataforma lo acepta. En el caso de C# no debemos igualar el parámetro <code>name</code> a nada. Simplemente ver si es "Zach" o es otra cosa.</p>
</div>

## 4. Más retos para practicar

Agrupamos en este apartado otros retos de características similares para practicar.

### 4.1. Contando en la arena

En <a href="https://aceptaelreto.com/problem/statement.php?id=369" target="_blank">este reto</a> de *Acepta el Reto* se plantea el siguiente problema: cómo contar usando sólo el número uno. Como entrada nos irán dando números positivos, y para cada uno tendremos que indicar a qué equivale en unos. Por ejemplo, si leemos el número 4 equivaldría a *1111* (cuatro unos). El problema terminará cuando leamos un cero.

<div class="ejercicio">
    <p><strong>Ejercicio 4:</strong></p>
    <p>Trata de resolver este reto en C++ y comprueba el resultado en la plataforma.</p>
</div>

### 4.2. Tomar dos piedras

En <a href="https://open.kattis.com/problems/twostones" target="_blank">este reto</a> de *Kattis* se nos plantea un juego con piedras: hay N piedras en el suelo formando una fila o secuencia, numeradas de la piedra 1 a la N. Alice y Bob juegan por turnos, y deben tomar dos piedras consecutivas, hasta que ya no queden dos piedras consecutivas que tomar. Si el número de piedras que queda al final es impar, gana Alice, y si es par, gana Bob. Empieza jugando Alice siempre.

Como entrada nos dirán el número de piedras que hay, y debemos indicar, suponiendo que ambos jugadores juegan de forma inteligente, quién va a ganar. Veamos algunos ejemplos:

* Hay 1 piedra. Como no se pueden tomar dos consecutivas y queda un número impar de piedras, gana Alice
* Hay 2 piedras. Alice toma las dos piedras y deja 0 piedras restantes (número par), por lo que gana Bob.
* Hay 5 piedras. Si Alice toma cualquier secuencia de 2 piedras consecutivas, Bob elegirá otra secuencia de 2 que también quedará disponible, y finalmente quedará una piedra suelta. Gana Alice.

<div class="ejercicio">
    <p><strong>Ejercicio 5:</strong></p>
    <p>Trata de resolver este reto en Python y comprueba el resultado en la plataforma.</p>
</div>

### 4.3. Si no puedes dormir, cuenta ovejas

En <a href="https://www.codewars.com/kata/5b077ebdaf15be5c7f000077" target="_blank">este reto</a> de *CodeWars* nos proponen contar ovejas para dormir. Dado el valor de una variable `n`, debemos construir un texto con todo el conteo de ovejas, en el formato que se indica en el ejercicio. Por ejemplo, si n = 3 el texto a mostrar (o devolver con *return*) debe ser *1 sheep...2 sheep...3 sheep...*.

<div class="ejercicio">
    <p><strong>Ejercicio 6:</strong></p>
    <p>Trata de resolver este reto en C# y comprueba el resultado en la plataforma.</p>
</div>
