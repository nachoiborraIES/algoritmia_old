# Algoritmos voraces

Veremos en esta sección un tipo de algoritmos en los que hay que procesar los datos de entrada para dejarlos de forma que, conforme se van consumiendo o analizando, se vaya resolviendo el problema que estamos tratando. Hablaremos, por tanto, de **algoritmos voraces**.

## 1. Agujeros en la manguera

En <a href="https://aceptaelreto.com/problem/statement.php?id=282" target="_blank">este reto</a> de *Acepta el Reto* debemos reparar una manguera, comprando el mínimo número de parches necesarios para tapar sus agujeros.

Como datos de entrada en cada caso de prueba nos darán dos líneas:

* En la primera línea leeremos cuántos agujeros tiene la manguera (N) y cuánto miden los parches que vamos a comprar (L)
* En la segunda línea aparecen N números, que nos dicen a qué distancia del inicio de la manguera está cada agujero (en orden creciente).

Deberemos indicar cuál es el número mínimo de parches necesarios para tapar todos los agujeros, sabiendo que un parche de longitud L puede tapar agujeros que estén separados entre sí hasta esa distancia (inclusive).

### 1.1. Planteando el problema

Dado que las distancias de los agujeros nos las dan en orden, lo que tenemos que hacer es irlas procesando. Cuando leamos una distancia, la guardamos y vamos leyendo las siguientes hasta que no excedan de una distancia L de la primera. Todas las que estén comprendidas en una distancia L caben en ese primer parche. Cuando la distancia exceda de L tomamos un segundo parche, y repetimos el proceso.

Por ejemplo, si nos dicen que la manguera tiene N = 8 agujeros, y los parches son de una longitud L = 10, y nos dan estas distancias de agujeros:

```
3 8 8 9 20 45 55 90
```

* Con el primer parche podremos tapar los agujeros desde 3 hasta 9 (inclusive)
* Con el segundo parche podremos tapar el agujero 20
* Con el tercer parche podemos tapar los agujeros 45 y 55 (están justo a distancia L = 10)
* Un cuarto parche será necesario para tapar el agujero 90
* En total harán falta 4 parches

Aquí vemos el planteamiento en Java:

```java
import java.util.Scanner;

public class Reto282
{
    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);
        int n, l, distancia, distanciaAnterior, parches;
        
        while(sc.hasNext())
        {
            // Número de agujeros
            n = sc.nextInt();
            // Longitud de los parches
            l = sc.nextInt();
            
            parches = 0;
            distanciaAnterior = 0;
            for(int i = 0; i < n; i++)
            {
                distancia = sc.nextInt();
                // Si es el primer agujero, o se distancia más de L del
                // anterior inicio de parche...
                if(parches == 0 || distancia - distanciaAnterior > l)
                {
                    parches++;
                    distanciaAnterior = distancia;
                }
            }
            
            System.out.println(parches);
        }
    }
}
```

> **NOTA** el reto termina cuando ya no quedan datos que leer, por lo que la condición de continuación del bucle será mientras "haya algo que leer" (`sc.hasNext()`).

## 2. Otros retos para resolver

De una forma similar al reto anterior se pueden resolver otros similares. Basta con procesar la entrada, ordenarla de algún modo (si es necesario) e ir analizando los datos que hay en ella para determinar la solución al problema.

### 2.1. Seleccionando castellers

En <a href="https://aceptaelreto.com/problem/statement.php?id=409" target="_blank">este reto</a> de *Acepta el Reto* tenemos que seleccionar a un conjunto de *castellers* para formar una torre humana. Para ello debemos agruparlos por alturas, ya que los *castellers* de un mismo piso no pueden diferir en más de 15 cm de altura.

Primero leeremos el número de casos de prueba a procesar, y como datos de entrada para cada caso de prueba nos darán dos líneas:

* En la primera leeremos el número N de castellers que se quiere poner en cada nivel de la torre, y cuántos castellers hay disponibles (T)
* En la segunda línea nos dan las alturas de todos los castellers disponibles, en centímetros.

Como salida debemos mostrar cuántos niveles podemos hacer agrupando los castellers en grupos de N con altura similar (máxima diferencia de 15 cm).

Por ejemplo, si tenemos que hacer grupos de 3 castellers, y tenemos 10 disponibles con estas alturas:

```
170 105 130 175 180 192 195 172 195 165
```

Pasamos primero a ordenar las alturas:

```
105 130 165 170 172 175 180 192 195 195
```

Ahora vemos qué grupos de 3 se pueden hacer:

* El de 105 no encaja con ninguno (el siguiente en altura ya mide 130)
* El de 130 tampoco (el siguiente ya mide 165)
* El de 165 se puede emparejar con los dos siguientes (primer grupo)
* Pasamos al de 175, que sólo se puede emparejar con el de 180, no cuenta.
* El de 180 se podría emparejar con los dos siguientes (segundo grupo)
* El último (195) no tiene a nadie con quien emparejarse
* Por tanto, se pueden hacer 2 alturas

<div class="ejercicio">
    <p><strong>Ejercicio 1:</strong></p>
    <p>Trata de resolver el reto en Java</p>
</div>

### 2.2. La tienda de la esquina

En <a href="https://aceptaelreto.com/problem/statement.php?id=284" target="_blank">este reto</a> de *Acepta el Reto* tenemos que ayudar a dar el cambio al dueño de una tienda. Se dispone para ello de monedas de 2 euros, 1 euro, 50 cts, 20 cts, 10 cts, 5 cts, 2 cts y 1 céntimo.

Como entrada primero leeremos el número de casos a procesar. Cada caso consta de dos valores en la misma línea:

* Coste de la compra (expresado en céntimos de euro)
* Dinero entregado por el cliente (también en céntimos de euro)

Como salida tenemos que indicar cuántas monedas de cada tipo debemos dar como cambio para que el número de monedas total sea el mínimo necesario, o imprimir la palabra "DEBE" si el dinero entregado por el cliente no cubre el coste de la compra, indicando los céntimos a deber.

Por ejemplo, si el coste de la compra es de 60 cts y el cliente da 200 cts, le tendremos que devolver

* 0 monedas de 2 euros
* 1 moneda de 1 euro
* 0 monedas de 50 cts
* 2 monedas de 20 cts
* 0 monedas de 10 cts
* 0 monedas de 5 cts
* 0 monedas de 2 cts
* 0 monedas de 1 céntimo

Todos estos datos los mostramos en una sola línea, separados por espacios, en este orden (de moneda de mayor valor a moneda de menor valor):

```
0 1 0 2 0 0 0 0
```

Por el contrario, si el coste son 300 céntimos y el cliente paga 30, le diremos que "DEBE 270".

<div class="ejercicio">
    <p><strong>Ejercicio 2:</strong></p>
    <p>Trata de resolver el reto en Java</p>
</div>
