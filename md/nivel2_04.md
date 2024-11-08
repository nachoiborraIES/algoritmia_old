# Mejorar la eficiencia de un algoritmo

Llegados a este punto, vamos a hablar de cómo de complejo es un algoritmo, y cómo tratar de mejorar su eficiencia.

## 1. La complejidad de un algoritmo

Para resolver un mismo problema, se pueden utilizar distintas estrategias o algoritmos. Normalmente interesa, no sólo encontrar un algoritmo, sino que éste sea suficientemente "bueno". La bondad de un algoritmo puede medirse por
dos factores:

* El **tiempo** que se necesita para ejecutarse, que puede estimarse por el número de instrucciones necesarias para completar el proceso, y el tipo de las mismas (no es lo mismo una asignación que un cálculo matemático complejo).
* Los **recursos** que se necesitan para implementar el algoritmo o, dicho de otro modo, la cantidad de memoria necesaria.

Un algoritmo es eficiente si su consumo de tiempo o recursos es inferior a un umbral determinado por el programador. Para determinar qué algoritmo es más eficiente, se pueden utilizar dos estrategias:

* Estrategia **empírica**: ejecutamos los algoritmos sobre datos de prueba y medimos el tiempo y recursos utilizados por cada uno. Esta estrategia puede resultar costosa si tenemos muchas soluciones para un mismo problema, ya que hay que programarlas y probarlas todas.
* Estrategia **teórica**: es la más utilizada. Consiste en determinar matemáticamente la cantidad de recursos que necesitará el algoritmo. Además, con esta estrategia no se depende del ordenador ni del lenguaje de programación elegido.

Para poder medir la eficiencia necesitamos una unidad de medida. Lo normal en algoritmia es utilizar la notación de la cota superior asintótica (también llamada ‘O grande’ o ‘Big-O’), para establecer la complejidad de un algoritmo en función de un tamaño de entrada *n*, siendo *n* un valor suficientemente grande.

Por ejemplo, si tenemos una función que se utiliza para localizar un elemento dentro de una lista de elementos previamente guardados, y se nos dice que es una operación de tipo O(1), quiere decir que da igual cuántos elementos haya en la lista, la operación siempre tarda lo mismo.

Ahora supongamos que tenemos una función que dibuja en una gráfica los puntos que le pasemos en una matriz o array. Su documentación nos dice que su complejidad es O(n). Esto quiere decir, para entendernos, que si pintar 1 punto implica, por ejemplo, 10ms, pintar 2 implicaría 20ms, 3 puntos serían 30ms, etc... O sea, el tiempo necesario para ejecutar la función depende linealmente del número de elementos que le pasemos.

Atendiendo a su complejidad, las notaciones más comunes para todo tipo de algoritmos y funciones son las que se muestran en esta lista:

* **O(1)**: complejidad constante. La operación no depende del tamaño de los datos. Es el caso ideal, pero a la vez probablemente el menos frecuente.
* **O(n)**: lineal. El tiempo de ejecución es directamente proporcional al tamaño de los datos.
* **O(log n)**: logarítmica. por regla general se asocia con algoritmos que "fragmentan" el problema para abordarlo, como por ejemplo una búsqueda binaria.
* **O(n log n)**: en este caso se trata de funciones similares a las anteriores, pero que rompen el problema en varios fragmentos por cada elemento, volviendo a recomponer información tras la ejecución de cada fragmento. Por ejemplo, el algoritmo de ordenación Quicksort.
* **O(n<sup>2</sup>)**: cuadrática. Es típico de algoritmos que necesitan realizar una iteración por todos los elementos en cada uno de los elementos a procesar. Por ejemplo el algoritmo de ordenación de burbuja.
* **O(2<sup>n</sup>)**: exponencial. Se trata de funciones que duplican su complejidad con cada elemento añadido al procesamiento. Son algoritmos muy raros pues en condiciones normales no debería ser necesario hacer algo así.
Un ejemplo sería, por ejemplo, el cálculo recursivo de la serie de Fibonacci, que es muy poco eficiente.
* **O(n!)**: explosión combinatoria. Un algoritmo que siga esta complejidad es un algoritmo totalmente fallido. Una explosión combinatoria se dispara de tal manera que cuando el conjunto crece un poco, lo normal
es que se considere computacionalmente inviable. Solo se suele dar en algoritmos que tratan de resolver algo por la mera fuerza bruta.

<div class="ejercicio">
    <p><strong>Ejercicio 1:</strong></p>
    <p>Indica qué complejidad teórica crees que tienen los siguientes procesos:</p>
    <ol>
        <li>Buscar si un número existe o no en un array de tamaño *n*</li>
        <li>Acceder a la casilla X de un array de tamaño *n* para obtener el valor almacenado</li>
        <li>Ordenar un array de tamaño *n* de mayor a menor para obtener su valor máximo</li>
        <li>Dibujar un cuadrado relleno de asteriscos de lado *n* en pantalla</li>
    </ol>
</div>

## 2. Mejorando la eficiencia de un algoritmo

Vamos a tratar de mejorar la eficiencia de un algoritmo, y para ello nos basaremos en <a href="https://aceptaelreto.com/problem/statement.php?id=168" target="_blank">este reto</a> de *Acepta el Reto*. En él nos dicen que tenemos un puzzle de N piezas, con las piezas numeradas por la parte trasera, de la 1 a la N, pero nos falta una pieza.

En cada caso de prueba que procesemos nos dirán, en la primera línea, cuántas piezas totales tiene el puzzle (el número N). En la segunda línea nos darán, separadas por espacios, los números de las piezas que tenemos (un total de N-1 piezas, ya que falta una). Tendremos que determinar, después de leer todos los números de piezas, cuál es la que falta.

Por ejemplo, si el puzzle tiene N = 10 piezas, y los números de piezas que tenemos son 1, 2, 3, 5, 6, 7, 8, 9 y 10, podemos decir que falta la pieza 4.

> **NOTA**: los números de las piezas que nos dan no tienen por qué venir ordenados

Vamos a resolver este reto de varias formas posibles, intentando mejorar la eficiencia en cada paso.

### 2.1. Primer intento

Como primer intento, vamos a ordenar el array de menor a mayor, y vamos a ir procesando cada casilla. En la casilla 0 debe estar la pieza 1, en la casilla 1 debe estar la pieza 2... y así sucesivamente. Cuando esta secuencia se rompa (por ejemplo, cuando en la casilla 3 esté la pieza 5 en lugar de la 4), sabremos cuál es la pieza que falta.

Aquí vemos una solución al reto usando Java:

```java
/*
 * Acepta el reto 168: La pieza perdida
 * https://aceptaelreto.com/problem/statement.php?id=168
 * Versión que ordena el array de piezas y busca la rotura en la secuencia
 */ 

import java.util.Scanner;
import java.util.Arrays;

public class Reto168
{
    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);
        int totalPiezas, i;
        int[] piezas;
        boolean encontrado;
        
        do
        {
            totalPiezas = sc.nextInt();
            
            if(totalPiezas != 0)
            {
                piezas = new int[totalPiezas - 1];
                
                // Leer piezas
                for (i = 0; i < piezas.length; i++)
                {
                    piezas[i] = sc.nextInt();
                }
                
                // Ordenar piezas
                Arrays.sort(piezas);
                
                // Recorrer array hasta encontrar descuadre en secuencia
                i = 0; 
                encontrado = false;
                while(!encontrado && i < piezas.length)
                {
                    if(piezas[i] != i+1)
                    {
                        encontrado = true;
                    }
                    else
                    {
                        i++;
                    }
                }

                // Mostramos la pieza que falta en la casilla que no cuadra
                System.out.println(i+1);
            }            
        }
        while(totalPiezas != 0);
    }
}
```

<div class="ejercicio">
    <p><strong>Ejercicio 2:</strong></p>
    <p>Indica qué complejidad teórica tiene el algoritmo empleado en la solución anterior.</p>
</div>

### 2.2. Segundo intento

Como habrás podido comprobar, el algoritmo en la solución anterior tiene una complejidad de **O(n<sup>2)**, o como mucho de **O(n log n)**, dependiendo del algoritmo de ordenación que utilicemos: un algoritmode burbuja o de intercambio directo es más lento (*O(n<sup>2</sup>)*), mientras que uno tipo *QuickSort* o *MergeSort* (como los que utiliza la instrucción `Arrays.sort`) es algo más rápido (*O(n log n)*). En cualquier caso, es una complejidad mejorable.

En este segundo intento no vamos a ordenar el array. Vamos a descomponerlo en estos pasos:

* Sumaremos los valores de todas las piezas que tenemos del puzzle
* Sumaremos después todos los valores de todas las piezas que debería haber en el puzzle. Si tiene 10 piezas, haremos un bucle que sume de 1 a 10.
* La diferencia entre la segunda suma y la primera será justamente el número de pieza que falta.

Aquí tenemos la solución a esta segunda versión:

```java
/*
 * Acepta el reto 168: La pieza perdida
 * https://aceptaelreto.com/problem/statement.php?id=168
 * Versión que ordena el array de piezas y busca la rotura en la secuencia
 */ 

import java.util.Scanner;
import java.util.Arrays;

public class Reto168
{
    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);
        int totalPiezas, sumaTotal, sumaParcial, pieza;
        
        do
        {
            totalPiezas = sc.nextInt();
            
            if(totalPiezas != 0)
            {
                sumaTotal = 0;
                sumaParcial = 0;
                
                // Sumar 1+2+3+...+totalPiezas
                for(int i = 1; i <= totalPiezas; i++)
                {
                    sumaTotal = sumaTotal + i;
                }
                
                // Leer totalPiezas-1 y sumarlas
                for(int i = 1; i <= totalPiezas - 1; i++)
                {
                    pieza = sc.nextInt();
                    sumaParcial = sumaParcial + pieza;
                }
                
                // Calcular resta
                System.out.println(sumaTotal - sumaParcial);
            }            
        }
        while(totalPiezas != 0);
    }
}
```

<div class="ejercicio">
    <p><strong>Ejercicio 3:</strong></p>
    <p>Indica qué complejidad teórica tiene ahora el algoritmo empleado.</p>
</div>

### 2.3. Tercer intento

El algoritmo anterior tiene ya una complejidad lineal **O(n)**, ya que, para determinar la pieza faltante de un puzzle de N piezas, tengo que sumar N números. En realidad es una complejidad de *2n* porque hacemos dos bucles casi iguales, pero a efectos de complejidad es prácticamente lo mismo.

Sin embargo, esto sigue siendo mejorable si, para sumar los números de 1 a N, en lugar de usar un bucle *for* empleamos un método llamado la *suma de Gauss*. El matemático alemán Gauss ideó un método sencillo para sumar una secuencia de números consecutivos de 1 a N, observando que si vamos cogiendo números de los dos extremos, siempre obtenemos la misma cantidad.

Por ejemplo, para sumar 1 + 2 + 3 + 4 + 5 + 6, la suma 1 + 6 es la misma que 2 + 5, y la misma que 3 + 4. Basta con tomar esa suma (1 + N) y multiplicarla por el número de veces que se hace (N/2).

Así, reemplazamos el segundo *for* anterior por una fórmula que lo calcule de una sola vez:

```java
/*
 * Acepta el reto 168: La pieza perdida
 * https://aceptaelreto.com/problem/statement.php?id=168
 * Versión que ordena el array de piezas y busca la rotura en la secuencia
 */ 

import java.util.Scanner;
import java.util.Arrays;

public class Reto168
{
    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);
        int totalPiezas, sumaTotal, sumaParcial, pieza;
        
        do
        {
            totalPiezas = sc.nextInt();
            
            if(totalPiezas != 0)
            {
                sumaTotal = 0;
                sumaParcial = 0;
                
                // Sumar 1+2+3+...+totalPiezas usando suma de Gauss
                sumaTotal = (totalPiezas + 1) * totalPiezas / 2;
                
                // Leer totalPiezas-1 y sumarlas
                for(int i = 1; i <= totalPiezas - 1; i++)
                {
                    pieza = sc.nextInt();
                    sumaParcial = sumaParcial + pieza;
                }
                
                // Calcular resta
                System.out.println(sumaTotal - sumaParcial);
            }            
        }
        while(totalPiezas != 0);
    }
}
```

Esta última complejidad es la mitad que la anterior, ya que sólo empleamos un bucle *for* en lugar de dos.

## 3. Más retos para practicar

Practicaremos la mejora de la eficiencia con algunos retos adicionales planteados en esta sección.

### 3.1. Último dígito del factorial

En <a href="https://aceptaelreto.com/problem/statement.php?id=114" target="_blank">este reto</a> de *Acepta el Reto* nos piden que calculemos cuál es el último dígito del factorial de los números que nos van pasando. Primero nos dirán cuántos números tenemos que procesar (número de casos de prueba) y luego nos irán dando los distintos números a calcular.

Por ejemplo, para el número 4, su factorial es 4·3·2·1 = 24, y diremos que termina en 4.

<div class="ejercicio">
    <p><strong>Ejercicio 4:</strong></p>
    <p>Trata de resolver el reto en Java</p>
</div>

### 3.2. Tirando bolos

En <a href="https://aceptaelreto.com/problem/statement.php?id=208" target="_blank">este reto</a> de *Acepta el Reto* nos piden que calculemos cuántos bolos quedan en pie después de hacer una tirada. Para ello, se supone que, cuando impactamos en un bolo, se derriban todos los del triángulo que se forma desde ese bolo hacia atrás.

Como datos de entrada para cada caso de prueba nos darán dos números: cuántas filas de bolos hay, y en qué fila (empezando por la más cercana) impacta la bola. El reto finalizará cuando estos dos datos sean cero. Hay que tener en cuenta que la fila 1 tendrá un bolo, la fila 2 tendrá 2 bolos, la fila 3 tendrá 3 bolos... etc.

También hay que tener en cuenta que puede haber hasta 2<sup>31</sup> filas, por lo que el número de bolos a contar puede ser muy grande.

Por ejemplo, si tenemos 4 filas de bolos y la bola impacta en la fila 2, se derribará 1 bolo de la fila 2 + 2 bolos de la fila 3 + 3 bolos de la fila 4 (6 bolos en total, ver imagen de ejemplo en la página del reto). Si en total había 1 + 2 + 3 + 4 = 10 bolos, quedarán en pie 10 - 6  = 4 bolos.

<div class="ejercicio">
    <p><strong>Ejercicio 5:</strong></p>
    <p>Trata de resolver el reto en Java</p>
</div>
