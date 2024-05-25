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

En <a href="https://aceptaelreto.com/problem/statement.php?id=236" target="_blank">este reto</a> de *Acepta el Reto* tenemos que calcular cuál es el área del mayor triángulo que se puede formar sabiendo cuánto miden dos de sus lados.

<div align="center">
    <img src="https://aceptaelreto.com/pub/problems/v003/50/st/statements/Spanish/Triangulos.svg" width="60%">
    <p><em>Fuente: Acepta el Reto</em></p>
</div>

Para conocer cuál es el área mayor que se puede formar, todo depende del ángulo que formemos con esos dos segmentos, como puede verse en la imagen anterior. Intuitivamente puede verse que ese área será mayor cuanto más perpendiculares pongamos entre sí los segmentos, aunque también se puede demostrar matemáticamente. 

<div class="demostracion">

    <p>Llamaremos <code>a</code> y <code>b</code> a los dos segmentos que tenemos, y <code>A</code> al ángulo que forman.</p>

    <div align="center">
        <img src="/algoritmia/img/reto350_1.png" width="30%">
    </div>

    <p>El área la calcularíamos como <code>base · altura / 2</code>, siendo la base el lado <code>a</code> y la altura la cantidad <code>h</code> que no conocemos. Sin embargo, aplicando trigonometría se tiene que el seno del ángulo <code>A</code> que forman <code>a</code> y <code>b</code> se calcula dividiendo <code>h / b</code>. Despejando <code>h</code> en esa fórmula, se tiene que <code>h = b · sen A</code>.</p>

    <p>Con esto, el área del triángulo la podemos calcular en cualquier caso como <code>(a · b · sen A) / 2</code>. Como <code>a</code> y <code>b</code> ya sabemos lo que valen, este área será máxima cuanto mayor sea el seno del ángulo que forman <code>A</code>. El ángulo que tiene el mayor valor del seno es el de 90º, cuyo seno vale 1 y, por tanto, obtendremos la mayor área poniendo los lados en ángulo recto, y el área quedaría como <code>(a · b · 1) / 2</code>.</p>

</div>

