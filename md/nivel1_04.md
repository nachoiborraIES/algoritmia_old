# Algoritmos matemáticos simples

En este documento vamos a practicar con algoritmos en los que hay que realizar alguna operación matemática sencilla, como alguna suma, división, cálculo de resto... para poder resolver el problema en cuestión.

## 1. Losetas claras y oscuras

En <a href="https://aceptaelreto.com/problem/statement.php?id=413" target="_blank">este reto</a> de *Acepta el Reto* se nos plantea el problema de contar el número de losetas necesarias para cubrir un suelo con un tamaño determinado. 

Comenzaremos el problema leyendo el número de casos de prueba diferentes que tendremos que procesar, y luego, para cada caso de prueba, nos darán dos números: el número de losetas que caben a lo ancho y el número que caben a lo largo de la habitación a cubrir.

Para cada caso tendremos que indicar cuántas losetas claras y cuántas oscuras van a hacer falta, teniendo en cuenta que queremos que haya el mismo número de ambas o, en el caso de que no sea posible, que haya una loseta más de las claras que de las oscuras.

Por ejemplo, si la habitación a cubrir mide 5 losetas de ancho y 4 de largo, necesitaremos un total de 20 losetas. Harán falta entonces 10 losetas claras y 10 oscuras. En cambio, si la habitación mide 5 losetas de ancho y 3 de largo, harán falta 15 losetas, y en ese caso usaremos 8 claras y 7 oscuras.

Lo primero que tendremos que hacer es leer el número de casos de prueba, y con él construir un bucle (*for*) para procesarlos todos. En cada caso de prueba leeremos el ancho y el alto de la habitación (en número de losetas), y con ello sabremos cuántas losetas harán falta. Si es un número par, dividimos por dos y tendremos las losetas claras y las oscuras. Si es impar, tendremos que sumar una loseta clara más a esa mitad.

Aquí tenemos cómo resolver el ejercicio con C++:

```cpp
#include <iostream>

using namespace std;

int main()
{
    int casos, ancho, largo, total, claras, oscuras;

    // Determinamos el número de casos de prueba
    cin >> casos;

    for(int i = 1; i <= casos; i++)
    {
        // Leemos ancho y alto del caso actual
        cin >> ancho;
        cin >> largo;

        // Calculamos total de losetas
        total = ancho * largo;

        // Determinamos losetas claras y oscuras según
        // si es par o impar el total
        claras = oscuras = total / 2;
        if (total % 2 != 0)
        {
            claras++;
        }

        // Resultado
        cout << claras << " " << oscuras << endl;
    }
}
```

Aunque no serían necesarias tantas, hemos declarado variables para cada cosa:

* La variable `casos` leerá el número de casos de prueba a procesar
* Las variables `ancho` y `largo` leerán el ancho y largo de cada caso
* La variable `total` calcula el total de losetas necesarias (*ancho x largo*)
* En las variables `claras` y `oscuras` almacenamos el número de losetas de cada tipo, para mostrarlo en la respuesta (en ese orden, separadas por un espacio).

<div class="ejercicio">
    <p><strong>Ejercicio 1:</strong></p>
    <p>Trata de resolver este mismo reto en Java y comprueba que la plataforma lo acepta.</p>
</div>

## 2. Para tu información

En <a href="https://open.kattis.com/problems/fyi" target="_blank">este reto</a> de *Kattis* nos plantean cómo detectar el prefijo de un número telefónico para saber a qué centralita tenemos que redirigir la llamada. En concreto, los números (todos ellos de 7 dígitos) que comiencen por 555 serán redirigidos a un operador de información, y el resto no.

Debemos escribir un programa que lea un número telefónico (se asume y garantiza que será de 7 dígitos) y muestre por pantalla un 1 si empieza por 555 (y hay que redirigirlo al operador de información) o 0 en caso contrario.

Vamos a plantear el problema usando Python. Leeremos el número entero y, para saber por qué 3 dígitos empieza, lo que haremos será dividir el número entre 10000. Esto quitará los últimos 4 dígitos, y así podremos comprobar cuáles son esos tres primeros. Si coincide con 555 sacaremos un 1 por pantalla, y si es otra cosa sacaremos un 0.

El código podría quedar así:

```py
numero = int(input())
prefijo = numero // 10000 # División entera

if prefijo == 555:
    print(1)
else:
    print(0)
```

<div class="ejercicio">
    <p><strong>Ejercicio 2:</strong></p>
    <p>Trata de resolver este mismo reto en C# y comprueba que la plataforma lo acepta.</p>
</div>

## 3. Años bisiestos

En <a href="https://www.codewars.com/kata/526c7363236867513f0005ca" target="_blank">este reto</a> de *CodeWars* nos proponen averiguar si un año almacenado en una variable `year` es bisiesto o no. Las reglas que nos dicen son las siguientes:

* Si es divisible por 4, es bisiesto
* Si es divisible por 100, no es bisiesto
* Si es divisible por 400, sí es bisiesto

Es decir, un año como por ejemplo 2024, divisible por 4, es bisiesto. El año 2100 es divisible por 4, pero también lo es por 100, y no lo es por 400, por lo que no es bisiesto. En cambio el año 2400, que es divisible por 400 sí lo es.

El código para resolver el ejercicio en C# podría quedar así:

```cs
public static class Kata
{
  public static bool IsLeapYear(int year)
  {
    bool result = false;
    if(year % 4 == 0 && year % 100 != 0)
      result = true;
    else if (year % 400 == 0)
      result = true;
    return result;
  }
}
```

<div class="ejercicio">
    <p><strong>Ejercicio 3:</strong></p>
    <p>Trata de resolver este mismo reto en C++ y comprueba que la plataforma lo acepta.</p>
</div>

## 4. Más retos para practicar

Agrupamos en este apartado otros retos de características similares para practicar.

### 4.1. Tu amigable vecino

En <a href="https://aceptaelreto.com/problem/statement.php?id=474" target="_blank">este reto</a> de *Acepta el Reto* debemos determinar la distancia mínima que debe recorrer SpiderMan para desactivar dos bombas situadas en la Quinta Avenida de Nueva York.

El problema comienza leyendo el número de casos de prueba que tenemos que procesar. Después, cada caso de prueba consta de 3 números (distancias en metros):

* Posición de Spiderman desde el inicio de la Quinta Avenida
* Posición de la primera bomba (también desde el inicio de la Quinta Avenida)
* Posición de la segunda bomba (también desde el inicio de la Quinta Avenida)

Tendremos que mostrar por pantalla el total mínimo de metros que tendrá que recorrer SpiderMan para desactivar las dos bombas.

Por ejemplo: si SpiderMan se encuentra a distancia 100, una bomba a distancia 150 y otra a distancia 200, SpiderMan tendrá que recorrer 50 metros para llegar a la primera bomba y, desde ahí, otros 50 metros para llegar a la segunda bomba: en total, 100 metros.

En cambio, si SpiderMan está a distancia 300, una bomba a distancia 100 y otra a distancia 700, SpiderMan tendrá que decidir qué bomba desactivar primero. Si elige la bomba 2, recorrerá 400 metros hasta ella (700 menos su posición inicial 300), y luego desde allí tiene otros 600 metros hasta la primera bomba. En total, 100 metros. En cambio, si elige ir primero a por la bomba uno recorre 300 - 100 = 200 metros, y luego los 600 que hay entre las dos bombas. En total, 800 metros. La distancia mínima en este caso sería de 800 metros.

Como **PISTA** para resolver este reto en Java, puedes usar la instrucción `Math.abs`, que calcula el valor absoluto de un valor. Si llamamos `s` a la posición de SpiderMan, `a` a la posición de la bomba A y `b` la posición de la bomba `b`, podemos usar esta función para calcular la distancia de SpiderMan a cualquiera de las dos bombas. Por ejemplo:

```java
// Distancia de SpiderMan a la bomba A
int distA = Math.abs(s - a);
```

De este modo, da igual si la bomba está antes o después de SpiderMan, la diferencia resultará un número positivo. 

En definitiva, tendremos que decidir qué es mejor:

* Ir primero a por la bomba A y luego a por la B (sumar las dos distancias)
* Ir primero a por la bomba B y luego a por la A (sumar las dos distancias)

<div class="ejercicio">
    <p><strong>Ejercicio 4:</strong></p>
    <p>Trata de resolver este reto en Java y comprueba que la plataforma lo acepta.</p>
</div>


