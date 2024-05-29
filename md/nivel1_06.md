# Algoritmos con tipos simples

En este documento vamos a ver algoritmos donde, para resolver el problema a plantear, será necesario utilizar un tipo de dato simple en concreto (por ejemplo, números reales), o mostrar la salida con un formato determinado. Incluiremos aquí también problemas donde se tengan que manipular o procesar textos de una forma más o menos sencilla, como por ejemplo recorriendo sus letras buscando alguna en concreto.

## 1. Trabajando el desbordamiento: los orígenes del ajedrez

En <a href="https://aceptaelreto.com/problem/statement.php?id=236" target="_blank">este reto</a> de *Acepta el Reto* se nos plantea un problema de cálculo: dado un tablero de ajedrez, si pedimos un grano de trigo por la primera casilla del tablero, dos granos por la segunda, cuatro por la tercera, ocho por la cuarta... y sucesivas potencias de dos por cada nueva casilla... ¿cuántos granos de trigo obtendremos?

Procesaremos distintos casos de prueba formados por tres números:

* Cuántos granos de trigo ganamos en la primera casilla
* Por qué número hay que multiplicar la cantidad de granos de trigo para pasar a la siguiente casilla
* Cuántas casillas tiene el tablero
* El reto terminará cuando leamos tres ceros como entrada

Por ejemplo, para el siguiente caso de entrada:

```
1 1 10
```

Comenzamos con 1 grano de trigo, debemos multiplicar la cantidad por 1 en cada siguiente casilla y hay 10 casillas. Así que tendremos:

* 1 grano en la primera casilla
* 1 * 1 = 1 grano en la segunda casilla
* ...
* 1 * 1 = 1 grano en la décima casilla
* Total: 10 granos de trigo

En cambio, en este otro caso:

```
3 2 3
```

Comenzamos con 3 granos en la primera casilla, debemos multiplicar por 2 en cada cambio de casilla y hay 3 casillas:

* Partimos de 3 granos en la primera casilla
* Segunda casilla = 3 * 2 = 6 granos
* Tercera casilla = 6 * 2 = 12 granos
* Total: 3 + 6 + 12 = 21 granos

Hay que tener en cuenta que, según los requisitos de los datos de entrada que nos dan, los números pueden llegar a ser del orden de 10<sup>6</sup>. Por lo tanto, multiplicar y sumar magnitudes de ese calibre puede hacer que nos excedamos del rango que habitualmente tiene el tipo de datos entero estándar (`int`). En este problema debemos usar el tipo largo (`long`, o `long long int` en C++) para asegurarnos de que todas esas multiplicaciones y sumas no van a desbordar el límite.

Así podríamos resolver el reto en C++:

* Comenzamos con el número de granos de trigo inicial
* Cada vez que pasemos a una nueva casilla, tomamos el número de granos de la casilla anterior y lo multiplicamos por el incremento dado
* Debemos ir sumando todos estos granos por el camino

```cpp
#include <iostream>

using namespace std;

int main()
{
    long long int granosIniciales, incremento, casillas, granosCasilla, suma;

    do
    {
        cin >> granosIniciales >> incremento >> casillas;
        
        if (granosIniciales != 0 || incremento != 0 || casillas != 0)
        {
            // Contamos al inicio los granos de la primera casilla
            suma = granosCasilla = granosIniciales;

            // Recorremos el resto de casillas (desde la segunda)
            for (int i = 2; i <= casillas; i++)
            {
                // Calculamos los granos que van a esa casilla según los
                // de la casilla anterior (por el incremento)
                granosCasilla = granosCasilla * incremento;
                // Acumulamos los granos de esa casilla en la suma total
                suma += granosCasilla;
            }
            
            cout << suma << endl;
        }
    } while (granosIniciales != 0 || incremento != 0 || casillas != 0);

	return 0;
}
```

<div class="ejercicio">
    <p><strong>Ejercicio 1:</strong></p>
    <p>Trata de resolver este mismo reto en Java y comprueba que la plataforma lo acepta.</p>
</div>

## 2. Practicando el formateo de números reales: el triángulo de mayor área

En <a href="https://aceptaelreto.com/problem/statement.php?id=350" target="_blank">este reto</a> de *Acepta el Reto* tenemos que calcular cuál es el área del mayor triángulo que se puede formar sabiendo cuánto miden dos de sus lados.

<div align="center">
    <img src="https://aceptaelreto.com/pub/problems/v003/50/st/statements/Spanish/Triangulos.svg" width="60%">
    <p><em>Fuente: Acepta el Reto</em></p>
</div>

Nos irán dando parejas de lados para calcular el área máxima, hasta que nos den dos lados que valen 0.

Para conocer cuál es el área mayor que se puede formar, todo depende del ángulo que formemos con esos dos segmentos, como puede verse en la imagen anterior. Intuitivamente puede verse que ese área será mayor cuanto más perpendiculares pongamos entre sí los segmentos, aunque también se puede demostrar matemáticamente. 

<div class="demostracion">

    <p>Llamaremos <strong>a</strong> y <strong>b</strong> a los dos segmentos que tenemos, y <strong>A</strong> al ángulo que forman.</p>

    <div align="center">
        <img src="/algoritmia/img/reto350_1.png" width="30%">
    </div>

    <p>El área la calcularíamos como <strong>base · altura / 2</strong>, siendo la base el lado <strong>a</strong> y la altura la cantidad <strong>h</strong> que no conocemos. Sin embargo, aplicando trigonometría se tiene que el seno del ángulo <strong>A</strong> que forman <strong>a</strong> y <strong>b</strong> se calcula dividiendo <strong>h / b</strong>. Despejando <strong>h</strong> en esa fórmula, se tiene que <strong>h = b · sen A</strong>.</p>

    <p>Con esto, el área del triángulo la podemos calcular en cualquier caso como <strong>(a · b · sen A) / 2</strong>. Como <strong>a</strong> y <strong>b</strong> ya sabemos lo que valen, este área será máxima cuanto mayor sea el seno del ángulo que forman <strong>A</strong>. El ángulo que tiene el mayor valor del seno es el de 90º, cuyo seno vale 1 y, por tanto, obtendremos la mayor área poniendo los lados en ángulo recto, y el área quedaría como <strong>a · b (· 1) / 2</strong>.</p>

</div>

Aplicando este razonamiento, sean cuales sean los dos lados *a* y *b* que nos den calcularemos el área máxima como `a * b / 2`. Una de las peculiaridades de este problema es que tenemos que sacar el resultado formateado con 1 decimal (ya que puede que no sea exacto). Veamos cómo hacer esto en distintos lenguajes:

* En el caso de **Java**, disponemos de una instrucción llamada `System.out.printf`. Entre comillas, con el símbolo `%f` indicamos que queremos intercalar un número real. Entre el porcentaje y la *f* podemos especificar cuántas cifras decimales queremos. Por ejemplo, de este modo sacaríamos la variable `numero` con 2 decimales (ponemos al final `\n` para pasar a la siguiente línea):

```java
float numero;
...
System.out.printf("El número vale %.2f\n", numero);
```

* En el caso de **C++** el funcionamiento es similar, pero con la instrucción `printf` (que también tiene el lenguaje C):

```cpp
float numero;
...
printf("El número vale %.2f\n", numero);
```

* En el caso de **C#** (aunque *Acepta el Reto* no admite este lenguaje) podemos usar la instrucción `ToString` de la variable a mostrar, indicando entre comillas el número de decimales, tras la letra *N*. Así quedaría el ejemplo anterior:

```cs
float numero;
...
System.Console.WriteLine("El número vale" + numero.ToString("N2"));
```

* Finalmente, en **Python** (aunque *Acepta el Reto* tampoco lo acepta como lenguaje a utilizar), tenemos una sintaxis similar a la instrucción *printf* anterior, pero usando la instrucción `print` de Python:

```py
print(f'El número vale {numero:.2f}')
```

Con todo lo anterior, el reto del triángulo de mayor área se resolvería así en Java:

```java
import java.util.Scanner;

public class Reto350
{
    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);
        float a, b, area;
        
        do
        {
            a = sc.nextFloat();
            b = sc.nextFloat();
            if(a != 0 || b != 0)
            {
                area = a * b / 2;
                System.out.printf("%.1f\n", area);
            }
        }
        while(a != 0 || b != 0);
    }
}
```

<div class="ejercicio">
    <p><strong>Ejercicio 2:</strong></p>
    <p>Trata de resolver este mismo reto en C++ y comprueba que la plataforma lo acepta.</p>
</div>

### 2.1. Metrónomo

En <a href="https://open.kattis.com/problems/metronome" target="_blank">este reto</a> de *Kattis* nos piden que calculemos el número de revoluciones de un metrónomo. Los metrónomos se utilizan en música para mantener el ritmo de una canción o pieza musical. En el enunciado se explica que, para cada vuelta o revolución completa del metrónomo, se producen 4 *ticks*. Con esto, y dada la longitud de una canción en *ticks* del metrónomo, ¿a cuántas revoluciones o vueltas se debe ajustar el metrónomo para que termine justo cuando termina la canción? La cantidad la debemos dar ajustada a 2 cifras decimales

Por ejemplo, si la longitud de la canción es de 16 *ticks*, a 4 *ticks* por vuelta tendremos que ajustarlo a *4.00* vueltas. En cambio, si la longitud es de 99 *ticks*, a 4 *ticks* por vuelta la tendremos que ajustar a *24.75* vueltas o revoluciones.

<div class="ejercicio">
    <p><strong>Ejercicio 3:</strong></p>
    <p>Trata de resolver este reto en C# y comprueba que la plataforma lo acepta. <strong>CUIDADO!</strong> En este caso, si el resultado tiene menos de 2 decimales no tendrás que mostrarlos todos. Para ello, en la instrucción <em>ToString</em> te será de utilidad el símbolo de la almohadilla #, en lugar de especificar con N directamente el número de decimales.</p>
</div>

## 3. Formateo de otros datos numéricos: leyendo el diccionario

En <a href="https://aceptaelreto.com/problem/statement.php?id=576" target="_blank">este reto</a> de *Acepta el Reto* nos pide que calculemos cuánto tiempo se tarda en leer un diccionario. Para cada caso de prueba nos dan:

* En una línea, cuántos segundos se necesitan para leer cada entrada del diccionario. El reto termina cuando leamos 0 como cantidad.
* En la siguiente línea vienen varios números. Cada uno indica el número de entradas que hay en cada página del diccionario. Esta secuencia termina con un 0, para indicar que ya no hay más páginas en el diccionario.

La peculiaridad de este reto es que debemos mostrar el tiempo total en el formato *hh:mm:ss** (*horas:minutos:segundos*, con dos dígitos en cada parte). 

* Como primer paso, tendremos que calcular los segundos que tardaremos en total en procesar el diccionario. Para ello sumaremos el total de entradas de todas las páginas (números de la segunda línea del caso de prueba), y multiplicaremos ese total por los segundos que tardamos en leer cada entrada (número de la primera línea del caso de prueba)
* Ahora tenemos que pasar esa cantidad en segundos a horas, minutos y segundos. Para ello debemos hacerlo de esta manera:
  * Primero calculamos el número de horas que son esos segundos, dividiendo los segundos entre 3600 segundos que tiene una hora
  * El resto de la división anterior son los segundos restantes, que deberemos convertir en minutos dividiendo entre 60 segundos que tiene un minuto
  * El resto de esta segunda división son los segundos que nos quedan al final

Una vez tengamos los cálculos hechos debemos mostrar la salida. En este caso, cada dato numérico entero debemos mostrarlo con dos dígitos. Veremos cómo se hace eso en los distintos lenguajes...

* En el caso de **Java**, la misma instrucción `System.out.printf` vista antes admite un símbolo `%d` para indicar que queremos intercalar un número entero. Entre el porcentaje y la *d* podemos indicar cuánto espaciado o ceros queremos añadir para completar. Por ejemplo, de este modo sacaríamos la variable `numero` con 2 dígitos, rellenando con ceros (el *0* delante del *2* indica el carácter de relleno para los espacios que queden):

```java
int numero;
...
System.out.printf("El número vale %02d\n", numero);
```

* En el caso de **C++** el funcionamiento es similar, pero con la instrucción `printf` (que también tiene el lenguaje C):

```cpp
int numero;
...
printf("El número vale %02d\n", numero);
```

* En el caso de **C#** (aunque *Acepta el Reto* no admite este lenguaje) podemos usar la instrucción `ToString` de la variable a mostrar, indicando entre comillas tantos ceros como cifras queramos mostrar. Así quedaría el ejemplo anterior:

```cs
int numero;
...
System.Console.WriteLine("El número vale" + numero.ToString("00"));
```

* Finalmente, en **Python** (aunque *Acepta el Reto* tampoco lo acepta como lenguaje a utilizar), tenemos una sintaxis similar a la instrucción *printf* anterior, pero usando la instrucción `print` de Python:

```py
print(f'El número vale {numero:02d}')
```

Con todo esto, la solución al reto en C++ podría quedar así:

```cpp
#include <iostream>

using namespace std;

int main() {

    int segundosPalabra, numEntradas, totalEntradas, horas, minutos, segundos;
    
    do
    {
        cin >> segundosPalabra;
        if(segundosPalabra != 0)
        {
            // Procesamos la línea con las entradas por página
            totalEntradas = 0;
            do
            {
                // Vamos leyendo hasta encontrar un 0
                // y acumulando en el total de entradas
                cin >> numEntradas;
                if(numEntradas != 0)
                {
                    totalEntradas += numEntradas;
                }
            }
            while(numEntradas != 0);
            
            // Calculamos tiempo total en segundos
            segundos = totalEntradas * segundosPalabra;
            // Calculamos horas
            horas = segundos / 3600;
            // Calculamos minutos
            minutos = (segundos % 3600) / 60;
            // Calculamos segundos
            segundos = (segundos % 3600) % 60;
            
            // Mostramos resultado
            printf("%02d:%02d:%02d\n", horas, minutos, segundos);
        }
    }
    while(segundosPalabra != 0);

    return 0;
}
```

<div class="ejercicio">
    <p><strong>Ejercicio 4:</strong></p>
    <p>Trata de resolver este mismo reto en Java y comprueba que la plataforma lo acepta.</p>
</div>

### 3.1 Señales horarias

En <a href="https://aceptaelreto.com/problem/statement.php?id=239" target="_blank">este reto</a> de *Acepta el Reto* debemos calcular cuánto tiempo han estado sonando señales horarias en emisoras de radio. Estas señales se producen cada hora, y consisten en una serie de pitidos consecutivos. En concreto, el tiempo que dura la emisión de esos pitidos es de 6 segundos, según el enunciado, pero si eso lo multiplicamos por varias emisoras y días de emisión, se puede convertir en mucho tiempo.

Cada caso de prueba estará compuesto de dos números en una sola línea, separados por espacios:

* El primero de ellos es el número de días en que se está contabilizando la emisión
* El segundo es el número de emisoras que se tienen en cuenta durante esos días
* El problema finaliza al recibir dos ceros como entrada

Como salida debemos mostrar el tiempo total que han estado emitiendo señales horarias todas las emisoras todos esos días. Igual que en el reto anterior, mostraremos el resultado con el formato *hh:mm:ss*.

Por ejemplo, si nos dan este caso de entrada:

```
3 9
```

Quiere decir que contabilizamos 3 días y 9 emisoras. Cada día tendrá 24 horas, multiplicado por 3 días son 72, y multiplicado por 9 emisoras son 648 veces que se emite la señal horaria en ese período de estudio. Como cada emisión son 6 segundos, se ha estado emitiendo un total de 648 · 6 = 3888 segundos. Esta cantidad es la que tenemos que pasar al formato *hh:mm:ss*, quedando en este caso *01:04:48*.

<div class="ejercicio">
    <p><strong>Ejercicio 5:</strong></p>
    <p>Trata de resolver este reto en Java y comprueba que la plataforma lo acepta.</p>
</div>

## 4. Procesamiento sencillo de textos: Bandurria Hero

En <a href="https://aceptaelreto.com/problem/statement.php?id=634" target="_blank">este reto</a> de *Acepta el Reto* nos proponen un videojuego llamado *Bandurria Hero* en el que tenemos que sumar puntos con notas correctas tocadas con la bandurria, al estilo de videojuegos como *Guitar Hero*.

Como entrada primero leeremos el número de casos de prueba. Cada entrada estará formada por un texto (una línea) formada por símbolos de *O* mayúsculas y puntos. Cada *O* mayúscula supone una nota tocada correctamente, y cada punto una nota incorrecta. Cada nota correcta supone 10 puntos, y si encadenamos varias seguidas, cada una supone 10 puntos más que la anterior.

Por ejemplo, para este caso de prueba:

```
OO.OO..
```

* La primera *O* daría 10 puntos
* La segunda *O*, al ser consecutiva con la anterior, serían 10+10 = 20
* Luego viene un punto (nota incorrecta)
* Luego viene otra *O* que vuelve a sumar 10 puntos (no es consecutiva con ningún acierto anterior)
* A continuación llega otra *O* que suma 10+10 = 20 puntos
* Finalmente llegan dos notas incorrectas que no suman
* En total, la puntuación será de 10 + 20 + 10 + 20 = 60 puntos.

Para resolver el reto, primero leeremos el número de casos de prueba y con ello construiremos un bucle *for* para procesar cada caso. Internamente leeremos el caso en un *string* y lo recorreremos letra a letra hasta el final. Para cada letra:

* Si es una O, tendremos que distinguir si había una O previa (en cuyo caso sumamos 10 a la puntuación del símbolo anterior) o no (en cuyo caso sumamos 10 puntos nada más)
* Si es un punto, no sumamos nada.

Así podríamos resolver el reto en Java. Observa cómo leemos los datos de entrada: primero leemos el *int* con los casos de prueba y pasamos a la siguiente línea (*nextLine*), para leer uno a uno los casos de prueba dentro del *for*:

```java
import java.util.Scanner;

public class Reto634
{
    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);
        int casos, totalPuntos, puntosActuales;    
        String linea;
        
        // Leemos el número de casos y el salto de línea posterior
        casos = sc.nextInt();
        sc.nextLine();
        
        for(int i = 0; i < casos; i++)
        {
            // Leemos el caso de prueba
            linea = sc.nextLine();
            // Inicializamos contadores de puntos para este caso
            totalPuntos = puntosActuales = 0;

            // Leemos del inicio al fin del string
            for(int j = 0; j < linea.length(); j++)
            {
                // Con charAt(j) accedemos a cada carácter
                if(linea.charAt(j) == 'O')
                {
                    // Si es una O incrementamos el 10 los puntos
                    // de la nota actual
                    puntosActuales += 10;
                    // Acumulamos los puntos
                    totalPuntos += puntosActuales;
                }
                else
                {
                    // Si es un punto reseteamos la puntuación acumulada a 0
                    puntosActuales = 0;
                }
            }
            
            System.out.println(totalPuntos);
        }
    }
}
```

<div class="ejercicio">
    <p><strong>Ejercicio 6:</strong></p>
    <p>Trata de resolver este reto en C++ y comprueba que la plataforma lo acepta.</p>
</div>

### 4.1. El ojo de Sauron

En <a href="https://open.kattis.com/problems/eyeofsauron" target="_blank">este reto</a> de *Kattis* debemos comprobar si un dibujo del ojo de Sauron (personaje de la saga de El Señor de los Anillos) es correcto. Este ojo está formado por una zona central compuesta por una llama (representada con dos paréntesis `()`), y a ambos lados la flanquean varias barras verticales. Por ejemplo:

```
|||||()|||||
```

Tenemos que determinar si el dibujo que hemos leído es correcto (*correct*) o necesita arreglarse (*fix*). Un dibujo es correcto si tiene el mismo número de barras verticales a ambos lados de la llama. Por ejemplo, el dibujo del ejemplo anterior sería correcto, y este otro necesita arreglarse:

```
||()||||
```

Se garantiza que siempre habrá una pareja de paréntesis en el dibujo, así que sólo tenemos que preocuparnos de determinar si el número de barras es igual a ambos lados.

<div class="ejercicio">
    <p><strong>Ejercicio 7:</strong></p>
    <p>Trata de resolver este reto en C# y comprueba que la plataforma lo acepta.</p>
</div>
