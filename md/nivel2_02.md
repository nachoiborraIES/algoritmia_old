# Algoritmos de manipulación de arrays

Veremos en este apartado algunos algoritmos que tienen que ver con el procesamiento de arrays. Por ejemplo, leer los datos de la entrada y guardarlos en un array para hacer algún tipo de búsqueda, o incluso almacenarlos en alguna tabla (array bidimensional).

## 1. Recorrido de arrays unidimensionales: senda pirenaica

En <a href="https://aceptaelreto.com/problem/statement.php?id=485" target="_blank">este reto</a> de *Acepta el Reto* debemos calcular cuánta distancia nos queda por recorrer tras completar cada tramo de una senda por los Pirineos.

Para cada caso de prueba nos darán dos líneas:

* En la primera nos indicarán cuántos tramos vamos a recorrer
* En la segunda nos darán, separadas por espacios, las distancias de cada tramo
* El reto finalizará cuando leamos 0 tramos en la primera línea

Una vez leamos la primera línea de cada caso podremos crear un array de enteros para almacenar ese número de tramos. Después, a medida que leamos los números de la segunda línea almacenaremos la distancia de cada tramo en su casilla correspondiente. Podemos aprovechar también para, a medida que almacenamos las distancias de cada tramo, irlas sumando para ver cuál es la distancia total del recorrido de la senda.

Ahora que ya tenemos el array relleno, vamos a irlo recorriendo de principio a fin. Antes de procesar cada tramo (casilla del array) sacamos por pantalla cuánta distancia nos queda por recorrer (la distancia total que hemos calculado cuando hemos leído los tramos), y al pasar al siguiente tramo descontaremos de ese total la distancia del tramo examinado.

Por ejemplo, para este caso de prueba:

```
5
1 2 1 2 1
```

Tenemos 5 tramos de 1, 2, 1, 2, y 1 km. En total suman 7 km. El procesamiento del caso y el resultado que mostraremos será como sigue:

* Al principio nos quedan 7 km por recorrer
* Tras recorrer el primer tramo (1 km), nos quedan 6 km
* Tras recorrer el segundo tramo (2 km), nos quedan 4 km
* Tras recorrer el tercer tramo (1 km), nos quedan 3 km
* Tras recorrer el cuarto tramo (2 km), nos queda 1 km
* Tras recorrer el quinto y último tramo ya no nos quedarán kilómetros pendientes, pero este cero final no se cuenta.

Así, la salida para este caso debería ser:

```
7 6 4 3 1
```

Indicamos, separados por espacios, las distancias restantes antes de iniciar cada tramo.

Veamos cómo resolver el problema en C++:

```cpp
#include <iostream>

using namespace std;

int main()
{        
    int numEtapas, suma;

    do
    {
        cin >> numEtapas;
        
        if (numEtapas > 0)
        {            
            int distancias [numEtapas];
            suma = 0;
            
            // Leemos las distancias de cada etapa
            // y las vamos sumando            
            for (int i = 0; i < numEtapas; i++)
            {
                cin >> distancias[i];
                suma += distancias[i];
            }
            
            // Resolvemos el problema
            
            for (int i = 0; i < numEtapas; i++)
            {
                // Antes de procesar una etapa, mostramos
                // la suma de distancias restante
                cout << suma;
                if (i < numEtapas - 1)
                    cout << " ";
                // Tras procesar la etapa, descontamos de
                // la suma la distancia recorrida
                suma -= distancias[i];
            }                
            
            cout << endl;            
        }
    } while (numEtapas > 0);
    
    return 0;
} 
```

<div class="ejercicio">
    <p><strong>Ejercicio 1:</strong></p>
    <p>Trata de resolver este reto en Java y comprueba que la plataforma lo acepta.</p>
</div>

### 1.1. Plantas contra chicos malos

En <a href="https://open.kattis.com/problems/pvbg" target="_blank">este reto</a> de *Kattis* nos trasladamos a una versión alternativa del juego *Plants vs Zombies*. Este es un juego en el que el protagonista debe sembrar su jardín con plantas de distintos tipos para evitar que los zombies lleguen a su casa. El jardín se divide en distintas filas, y en cada fila se pueden poner, en secuencia, un número de plantas.

En este caso, para resolver el problema nos darán un número N que indica el número de filas que tiene el jardín del protagonista. Después leeremos N números, que representan el número de plantas (lanzadoras de guisantes) que el protagonista ha plantado en cada fila. Por ejemplo, dado este caso de prueba:

```
5
3 5 7 9 11
```

significa que el jardín tiene 5 filas, y en cada fila ha plantado 3, 5, 7, 9 y 11 plantas lanzadoras, respectivamente.

Los zombies atacantes vienen en grupos u hordas, de forma que cada zombie en una horda decide atacar por una fila en concreto, y cada planta resiste el ataque de un zombie en cada horda. Tenemos que determinar cuál es el número mínimo de ataques que necesitan los zombies de una horda para pasar el jardín. Hay que tener en cuenta que las plantas de una fila sólo protegen a la fila en la que están (no a las demás).

En el ejemplo anterior, el número mínimo de ataques que necesitan los zombies de una horda para pasar el jardín es de 4: con los tres primeros ataques destruirían las plantas de la fila 1, y el cuarto ataque por esa misma fila les permitiría acceder a la casa del protagonista.

<div class="ejercicio">
    <p><strong>Ejercicio 2:</strong></p>
    <p>Trata de resolver este reto en C# y comprueba que la plataforma lo acepta.</p>
</div>

## 2. Recorrido de arrays bidimensionales: matriz identidad

En <a href="https://aceptaelreto.com/problem/statement.php?id=151" target="_blank">este reto</a> de *Acepta el Reto* nos van a dar a procesar matrices bidimensionales de N filas y N columnas, y tenemos que determinar si es una matriz identidad o no.

Una matriz identidad es aquella que tiene unos en su diagonal principal (la que va del extremo superior izquierdo al extremo inferior derecho) y ceros en el resto de casillas. Por ejemplo, esta es una matriz identidad de tamaño 4 x 4:

```
1 0 0 0 
0 1 0 0
0 0 1 0
0 0 0 1
```

Como datos de entrada de cada caso a resolver nos darán:

* El número de filas y columnas N de la tabla o matriz (un solo número para filas y columnas)
* Luego vendrán N filas de números, cada una con N columnas. Tendremos que irlos procesando y guardando en un array bidimensional del tamaño correspondiente.
* El reto finaliza cuando leamos que el tamaño de la matriz será 0.

Una vez tengamos el array guardado debemos determinar si es una matriz identidad o no. Como en muchos problemas donde debemos comprobar algo, podemos empezar suponiendo una cosa (por ejemplo, que no es una matriz identidad) e intentar demostrar la contraria (que sí lo es). En este caso es más sencillo empezar suponiendo que sí es una matriz identidad, y en cuanto encontremos un número que lo desmienta (por ejemplo, algo que no sea cero fuera de la diagonal principal, o que no sea uno en la diagonal principal), ya podemos decir que no es identidad.

Así podríamos resolver el reto en Java:

```java
// Reto 151: ¿Es una matriz identidad?

import java.util.Scanner;

public class Reto151
{
    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);
        int n;
        int[][] datos;
        boolean esIdentidad;
        
        do
        {
            // Leemos el tamaño de la matriz (filas y columnas)
            n = sc.nextInt();
            if(n != 0)
            {
                // Creamos la matriz del tamaño indicado
                datos = new int[n][n];
                // Leemos cada fila
                for(int i = 0; i < n; i++)
                {
                    // Leemos cada columna de la fila
                    for(int j = 0; j < n; j++)
                    {
                        datos[i][j] = sc.nextInt();
                    }
                }
                
                // Ya tenemos la matriz leída.
                // Vemos si es identidad
                
                // Suponemos al inicio que sí lo es
                esIdentidad = true;
                
                // Recorremos cada casilla de la matriz
                // y vemos si no es identidad
                for(int i = 0; i < n; i++)
                {
                    for(int j = 0; j < n; j++)
                    {
                        // Diagonal principal (i == j) debe tener unos
                        if (i == j && datos[i][j] != 1)
                        {
                            esIdentidad = false;
                        }
                        // Fuera de diagonal principal debe haber ceros
                        else if (i != j && datos[i][j] != 0)
                        {
                            esIdentidad = false;
                        }
                    }
                }
                
                if(esIdentidad)
                {
                    System.out.println("SI");
                }
                else
                {
                    System.out.println("NO");
                }
            }
        }
        while(n != 0);
    }
}
```

<div class="ejercicio">
    <p><strong>Ejercicio 3:</strong></p>
    <p>Trata de resolver este reto en C++ y comprueba que la plataforma lo acepta.</p>
</div>

### 2.1. Matrices triangulares

En <a href="https://aceptaelreto.com/problem/statement.php?id=160" target="_blank">este reto</a> de *Acepta el Reto* debemos determinar si una matriz que nos dan de entrada es triangular.

Una matriz es triangular si tiene a ceros todos los números por encima o por debajo de su diagonal principal (o ambos lados). La diagonal principal es irrelevante lo que tenga.

Por ejemplo, esta matriz 4x4 sería triangular:

```
1 2 3 4
0 5 6 7
0 0 8 9
0 0 0 1
```

Esta otra también lo es:

```
1 0 0 0
0 2 0 0
0 0 3 0
0 0 0 4
```

Esta última, en cambio, no lo es (el 2 de la segunda fila, primera columna, lo impide):

```
1 2 3 4
2 5 6 7
0 0 8 9
0 0 0 1
```

El funcionamiento es similar al del ejercicio anterior: leeremos primero un número que nos dará el tamaño de la matriz (filas y columnas) y luego iremos procesando por filas los datos de la matriz. Finalmente deberemos mostrar por pantalla SI o NO, dependiendo de si la matriz es triangular o no.

Algunas pistas:

* Las casillas por debajo de la diagonal principal tienen como característica que su número de fila (*i*) es mayor que su número de columna (*j*)
* Las casillas por encima de la diagonal principal cumplen justo lo contrario: su número de columna (*j*) es mayor que su número de fila (*i*)
* Una matriz es triangular si tiene a ceros todos los datos por debajo de la diagonal principal y/o por encima de la diagonal principal.

<div class="ejercicio">
    <p><strong>Ejercicio 4:</strong></p>
    <p>Trata de resolver este reto en Java y comprueba que la plataforma lo acepta.</p>
</div>

## 3. Ordenación de arrays: en la mente del timonel

En <a href="https://aceptaelreto.com/problem/statement.php?id=458" target="_blank">este reto</a> de *Acepta el Reto* debemos calcular cuál es el mayor número que podemos obtener multiplicando dos números de un array.

Cada caso de prueba estará formado por dos líneas:

* En la primera nos dirán cuántos números tiene el array
* En la segunda vendrán los números del array, separados por espacios
* El reto finaliza cuando el primer número sea 0.

¿Cómo calculamos el mayor producto posible con los números de un array? Veamos este caso de prueba:

```
4
10 40 20 20
```

En este caso el mayor producto lo obtenemos multiplicando 40 x 20 = 800. Básicamente podemos ver que tomando los dos números más grandes del array obtenemos el producto máximo, pero... ¿es siempre así? Veamos este otro ejemplo:

```
4
-10 -40 -20 -20
```

En este caso los dos números mayores son -10 y -20, cuyo producto es 200. En cambio, si tomamos -40 y -20 el producto es 800. No se cumple la regla anterior. ¿Qué podemos hacer?

Si observamos bien, podemos deducir que todo depende de si obtenemos el máximo producto multiplicando dos números negativos (en cuyo caso nos interesan los dos números menores) o positivos (en cuyo caso nos interesan los dos números mayores). Así que lo que haremos para resolver cada caso es:

* Ordenar el array de menor a mayor. Podemos usar la instrucción `Arrays.sort` en el caso de Java para hacerlo automáticamente
* Tomamos los dos primeros números (los dos menores) y los multiplicamos
* Tomamos los dos últimos números (los dos mayores) y los multiplicamos
* Nos quedamos con el mayor de esos dos productos

Así podríamos resolver el reto en Java:

```java
import java.util.Scanner;
import java.util.Arrays;

public class Reto458
{
    public static void main(String[] args) 
    {
        Scanner sc = new Scanner(System.in);
        int totalNumeros;
        // Los números pueden ser grandes
        long[] numeros;

		do
		{
			totalNumeros = sc.nextInt();
			if (totalNumeros > 0)
			{
                // Leemos los números del array
				numeros = new long[totalNumeros];
				for (int i = 0; i < totalNumeros; i++)
					numeros[i] = sc.nextLong();
					
                // Ordenamos de menor a mayor
				Arrays.sort(numeros);
				
                // Nos quedamos con el mayor de los dos productos:
                // Los dos primeros o los dos últimos
				System.out.println(Math.max(
                    numeros[0] * numeros[1], 
                    numeros[totalNumeros-2] * numeros[totalNumeros-1]));
			}
		} while (totalNumeros > 0);        
    }    
}
```

<div class="ejercicio">
    <p><strong>Ejercicio 5:</strong></p>
    <p>Trata de resolver este reto en C++ y comprueba que la plataforma lo acepta. Aquí tienes algunas pistas para poder resolverlo en este lenguaje:</p>
    <ul>
        <li>Para poder ordenar automáticamente un array de menor a mayor en C++ tienes la instrucción <code>sort(array, tamaño)</code>. Por ejemplo, si tenemos un array llamado <code>datos</code> de tamaño <code>n</code>, lo ordenamos con <code>sort(datos, datos + n)</code>. Además, necesitarás añadir una directiva <code>#include</code> que incluya la librería <code>algorithm</code>, junto a la de <code>iostream</code> que se incluye habitualmente</li>
        <li>Para obtener el máximo entre dos valores tienes la instrucción <code>max</code> disponible, que se usa igual que la instrucción <em>Math.max</em> del ejemplo anterior.</li>
        <li>Recuerda que el tipo <em>long</em> en C++ se define como <code>long long int</code>.</li>
    </ul>
</div>

### 3.1. El número que más veces se repite

En <a href="https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004" target="_blank">este reto</a> de *CodeWars* nos van a dar como entrada un array de números (ya relleno) y tenemos que determinar cuál es el número que más veces se repite. Por ejemplo, para este array:

```
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]
```

Tendremos que decir que el número que más se repite es el 12. En el caso de que haya más de un número que se repita el máximo de veces (como el 10 y el 12 en el caso anterior) elegiremos el mayor de ellos.

Una forma de resolver el reto consiste en ordenar los números de menor a mayor, e ir contando cuántas veces aparece de forma consecutiva un número. Cuando pasemos a un número distinto, vemos cuántas veces hemos contado el anterior y, si supera (o iguala) las veces del máximo que llevamos hasta ahora, actualizamos a este nuevo número.

Notar que al ordenar de menor a mayor, si encontramos un número que iguale las veces de uno anterior, como será mayor, nos quedaremos con este nuevo número.

<div class="ejercicio">
    <p><strong>Ejercicio 5:</strong></p>
    <p>Trata de resolver este reto en C# y comprueba que la plataforma lo acepta.</p>
</div>
