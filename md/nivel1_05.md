# Algoritmos de bucles combinados

En este documento veremos retos donde, para resolver el problema, tendremos que hacer uso de varios bucles enlazados o anidados. Los usaremos bien para procesar los datos de entrada, bien para analizarlos del modo correcto según el problema. 

## 1. Los saltos de Mario

Comenzaremos con <a href="https://aceptaelreto.com/problem/statement.php?id=158" target="_blank">este reto</a> de *Acepta el Reto*. En él nos van a dar varias secuencias de saltos de Mario, y tenemos que averiguar cuántos saltos ha dado hacia arriba (es decir, a una plataforma a una altura mayor de la que está ahora) y hacia abajo (a plataformas por debajo de su nivel).

Al principio leeremos el total de casos de prueba que tenemos que examinar. Esto nos proporcionará el primer bucle (para recorrer todos los casos de prueba). Cada caso de prueba está formado por dos cosas:

* El número de muros entre los que hay que saltar
* Las alturas de cada uno de esos muros. Aquí vendrá el segundo bucle (dentro del anterior), para leer cada altura de cada uno de los muros.

Iremos procesando cada altura de cada muro y comparándola con la del muro anterior (menos la primera, que es desde donde empieza Mario). Si es mayor que la anterior contaremos un salto ascendente, y si es menor contaremos un salto descendente. 

Como resultado debemos mostrar el número de saltos ascendentes y descendentes, separados por un espacio.

Por ejemplo, imaginemos un caso de prueba en el que nos dan 8 muros con estas alturas:

```
1 4 2 2 3 5 3 4
```

* Al pasar del muro de altura 1 al muro de altura 4, se tiene un salto ascendente. 
* Al pasar de éste al muro de altura 2 tenemos un salto descendente
* Pasamos a otro muro de altura 2: ni ascendente ni descendente
* Saltamos a un muro de altura 3. Otro salto ascendente (2)
* Pasamos a un muro de altura 5. Otro salto ascendente (3)
* Bajamos a un muro de altura 3. Contamos salto descendente (2)
* Finalmente, pasamos a un muro de altura 4, y nuevo salto ascendente (4)

Tenemos en total 4 saltos ascendentes y 2 descendentes. Mostraremos como resultado:

```
4 2
```

Aquí vemos cómo resolver el problema en Java:

```java
import java.util.Scanner;

public class Reto158
{    
    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);
        int casos = sc.nextInt();
        int muros, arriba, abajo, previo, actual;
        
        // Procesamos cada caso de prueba
        for(int i = 1; i <= casos; i++)
        {
            // Leemos la cantidad de muros
            muros = sc.nextInt();
            // Aún no hemos hecho ningún salto desde un muro previo
            // en esta tanda
            previo = -1;
            // Contadores de saltos ascendentes y descendentes
            arriba = abajo = 0;
            // Segundo bucle: leemos los muros de este caso
            for(int j = 0; j < muros; j++)
            {
                actual = sc.nextInt();
                // Miramos si venimos de una torre previa
                // y si es un salto arriba o abajo
                if (previo >= 0 && actual > previo)
                    arriba++;
                else if (previo >= 0 && actual < previo)
                    abajo++;
                previo = actual;
            }
            
            System.out.println(arriba + " " + abajo);
        }  
    }
}
```

<div class="ejercicio">
    <p><strong>Ejercicio 1:</strong></p>
    <p>Trata de resolver este mismo reto en C++ y comprueba que la plataforma lo acepta.</p>
</div>

## 2. A dibujar hexágonos

En <a href="https://aceptaelreto.com/problem/statement.php?id=150" target="_blank">este reto</a> de *Acepta el Reto* debemos dibujar hexágonos regulares (polígonos de 6 lados de igual tamaño) rellenos con el símbolo que se indique. 

Para cada caso de prueba leeremos la longitud del lado y el carácter de relleno. Finalizaremos el proceso cuando leamos longitud 0 y carácter de relleno 0.

Plantearemos entonces cómo dibujar un hexágono. Observemos este hexágono de lado 4, relleno de símbolos de asterisco:

```
   ****
  ******
 ********
**********
 ********
  ******
   ****
```

Tendremos que dibujar el hexágono por líneas, y el truco está en ver cómo aumentan o disminuyen los símbolos y los espacios en blanco iniciales en cada línea. Para un hexágono de lado 4:

* La primera línea tiene 3 espacios y 4 símbolos (es decir, un espacio menos que símbolos)
* La segunda línea tiene un espacio menos (dos) y 2 símbolos más (seis)
* La tercera línea también tiene un espacio menos (uno) y 2 símbolos más (ocho)
* La cuarta línea (con la que terminamos el lado diagonal), también tiene un espacio menos (cero) y dos símbolos más (10).

Una vez hemos alcanzado tantas repeticiones como el lado del hexágono, comienza el dibujado de la mitad inferior, en el que vamos al revés: cada línea que bajemos tendrá un espacio más y dos símbolos menos que la anterior, hasta terminar en una línea con tantos símbolos como el lado del hexágono.

Formaremos un bucle `for` formado por dos secciones: una para dibujar la mitad superior con las primeras N iteraciones (siendo N el lado del hexágono), y otro para dibujar la mitad inferior con las N-1 últimas iteraciones (ya que el segmento central es compartido por las dos mitades y ya lo hemos dibujado).

Dentro de cada bucle iremos incrementando o decrementando los contadores de espacios y símbolos según el patrón que hemos indicado anteriormente. Al finalizar cada uno de estos bucles haremos un salto de línea para pasar a la siguiente iteración.

Así podría quedar el código en C++:

```cpp
#include <iostream>

using namespace std;

int main()
{
	int lado, filas, simbolos, espacios;
	char simbolo;

	do
	{
        // Leemos de golpe el tamaño del lado y el símbolo de relleno
        // Cada cosa en su variable
		cin >> lado >> simbolo;
		
		if (lado > 0)
		{
			// Número total de filas a dibujar
			filas = lado * 2 - 1;
			
            // Comenzamos con tantos símbolos como el lado
            // y un espacio menos
			simbolos = lado;
			espacios = lado - 1;
			
			for (int i = 1; i <= filas; i++)
			{
                // Parte superior: incrementamos los símbolos de 2 en 2
                // y decrementamos espacios de uno en uno
				if (i > 1 && i <= lado)
				{
					simbolos += 2;
					espacios--;
				}
                // Parte inferior: decrementamos símbolos de 2 en 2
                // e incrementamos espacios de uno en uno
				else if (i > lado)
				{
					simbolos -= 2;
					espacios++;
				}
				
				// Dibujamos espacios y símbolos para la fila actual
				for (int j = 0; j < espacios; j++)
					cout << ' ';
				for (int j = 0; j < simbolos; j++)
					cout << simbolo;
				// Pasamos a la siguiente línea para la siguiente iteración
				cout << endl;
			}
		}		
	} while (lado > 0);
	return 0;
}
```

<div class="ejercicio">
    <p><strong>Ejercicio 2:</strong></p>
    <p>Trata de resolver este mismo reto en Java y comprueba que la plataforma lo acepta. <strong>¡CUIDADO!</strong>: la lectura de los datos de entrada para cada caso puede resultar algo más compleja en Java, al estar el número y el símbolo en la misma línea.</p>
</div>

## 3. Más retos para practicar

Agrupamos en este apartado otros retos de características similares para practicar.

### 3.1. Gálibo

En <a href="https://aceptaelreto.com/problem/statement.php?id=664" target="_blank">este reto</a> de *Acepta el Reto* debemos calcular la altura máxima que puede tener un camión para pasar por una serie de puentes.

Cada caso de prueba que nos dan está compuesto por estos datos:

* Primero nos dirán cuántos puentes tiene que atravesar el camión
* Para cada puente, en la segunda línea nos dirán cuántos carriles hay en la autovía, y la altura que tiene cada carril al pasar bajo el puente
* El problema termina cuando leamos 0 puentes como primer dato del caso de prueba

Como resultado tendremos que mostrar la altura máxima que puede tener el camión para poder pasar por debajo de cada puente (eligiendo el carril apropiado).

Veamos algunas pistas para resolver este problema:

* Una vez leamos el número de puentes, construiremos un bucle para procesar cada puente
* Dentro de este bucle, tendremos que leer el número de carriles, y con ello construiremos un segundo bucle (anidado) para leer la altura de cada carril
* De cada puente nos interesa quedarnos con el carril que tenga más altura (por ahí pasará el camión)
* Por otra parte, de todos los puentes que examinemos nos tendremos que quedar con la altura seleccionada que sea menor (ya que ésa será la que condicione si el camión puede pasar por todos los puentes o no)

Veamos el siguiente caso de prueba:

```
2
3 300 300 250
2 325 200
```

Nos dicen que hay dos puentes:

* El primero de ellos tiene 3 carriles con alturas 300, 300 y 250. Elegiremos cualquiera de los carriles de 300 (altura máxima para poder pasar)
* El segundo puente tiene 2 carriles de alturas 325 y 200. Elegiremos el carril de 325 para poder pasar
* De las alturas de los dos puentes, la más pequeña por la que pasaremos es la de 300, por lo que nuestra altura máxima de camión tendrá que ser de 300
* AYUDA: Cada vez que termines de procesar un puente y escoger su altura máxima, compárala con la altura máxima que lleves hasta ahora y, si es menor, quédate con la menor.

<div class="ejercicio">
    <p><strong>Ejercicio 3:</strong></p>
    <p>Trata de resolver este reto en Java y comprueba que la plataforma lo acepta.</p>
</div>

### 3.2. Distribución

En <a href="https://open.kattis.com/problems/upprodun" target="_blank">este reto</a> de *Kattis* tenemos que distribuir a los equipos de una competición de programación en salas. Nos darán como entrada el número N de salas y el número M de equipos. Hay que tener en cuenta que todas las salas son de un tamaño similar, y el objetivo es distribuir los equipos de forma equitativa entre las salas.

La salida tendrá que contener N líneas (una por cada sala). En cada línea dibujaremos un asterisco `*` por cada equipo que esté ubicado en esa sala.

Veamos algunos ejemplos que indica el enunciado:

* Si nos dan N = 1 salas y M = 5 equipos, evidentemente debemos colocar los 5 equipos en la única sala disponible. La salida del problema será la siguiente:

```
*****
```

* Si nos dan N = 3 salas y M = 8 equipos, hay que distribuir los equipos de forma equitativa. El propio reto dice que se admiten distintas soluciones equivalentes. En este caso, al haber 3 salas cada sala tendrá 2 equipos, y dos de ellas añadirán un equipo más para completar los 8 que hay. Aquí vemos algunas posibles soluciones (en columnas independientes, bastaría con mostrar una de ellas):

```
**       ***      ***
***      **       ***
***      ***      **
```

Explicamos algunas pistas para resolver el reto:

* Como podrás deducir el número de equipos que va a cada sala es el cociente (entero) entre el número de equipos y el número de salas. En el ejemplo anterior 8 equipos repartidos entre 3 salas = 2 equipos por sala.
* El resto de equipos que no han cabido en la división entera (2 equipos en el ejemplo anterior), se van añadiendo uno por sala, hasta que ya no queden.

<div class="ejercicio">
    <p><strong>Ejercicio 4:</strong></p>
    <p>Trata de resolver este reto en Python y comprueba que la plataforma lo acepta.</p>
</div>

### 3.3. La media prometida

En <a href="https://aceptaelreto.com/problem/statement.php?id=622" target="_blank">este reto</a> de *Acepta el Reto* debemos ayudar a una alumna a saber qué nota sacar en su último examen para obtener la nota media (exacta) que quiere sacar.

Para cada caso de prueba, primero nos dirán cuántos exámenes ha hecho la alumna, y luego leeremos en la segunda línea las notas que ha sacado en esos exámenes. Finalmente, en la tercera línea leeremos la media que quiere sacar. A partir de aquí tendremos que averiguar qué tiene que sacar en su último examen para conseguir esa media y, si no es posible, mostraremos por pantalla "IMPOSIBLE".

Veamos algunos ejemplos:

* La alumna ha hecho 3 exámenes, en los que ha sacado 6, 6 y 6. Y ella quiere sacar de media un 6. Evidentemente, en su último examen tendrá que volver a sacar un 6 para obtener esa media.
* Si ha hecho 2 exámenes con notas de 10 y 10, y ella quiere sacar un 7, tendrá que sacar un 1 en su último examen para que la media de notas (10 + 10 + 1) / 3 dé 7.
* Si ha hecho 3 exámenes con notas de 6, 6 y 7 y quiere sacar de media un 8, le diremos que es IMPOSIBLE, porque para sacar una media de 8 con 4 exámenes la suma de los 4 tendría que dar 32 (para que, al dividir entre 4 salga 8). Pero 6 + 6 + 7 = 19. Tendría que sacar un 13 en el último examen para llegar a 32, y eso es imposible.

<div class="ejercicio">
    <p><strong>Ejercicio 5:</strong></p>
    <p>Trata de resolver este reto en C++ y comprueba que la plataforma lo acepta.</p>
</div>
