# Algoritmos de manejo avanzado de textos

En este apartado veremos algunos algoritmos que exigen una manipulación algo avanzada de cadenas de texto. No nos limitaremos a leer un texto y recorrerlo secuencialmente o hacer comprobaciones simples, como los que hemos hecho en los retos de nivel básico. Procesaremos textos donde tengamos que hacer búsquedas o transformaciones más complejas.

## 1. Búsqueda de mensajes: cameos de Stan Lee

Un tipo de retos relacionados con textos que podemos resolver es el intentar buscar mensajes ocultos dentro de un texto. Comenzaremos con <a href="https://aceptaelreto.com/problem/statement.php?id=475" target="_blank">este reto</a> de *Acepta el Reto* en el que debemos averiguar cuántas veces aparece el nombre de "Stan Lee" oculto en un texto, teniendo en cuenta que las letras del nombre pueden estar separadas, pero debemos encontrarlas en el mismo orden que el nombre.

Por ejemplo, en el texto "E**st**o es c**an**e**l**a, v**e**rdad qu**e** si?", el texto aparece una vez (observad las letras marcadas en negrita).

El problema comenzará diciéndonos cuántos textos o casos de prueba nos van a pasar, y luego leeremos cada caso de prueba (un texto en cada línea). Para cada uno deberemos indicar cuántas veces hemos encontrado el nombre de "Stan Lee", ignorando mayúsculas y espacios.

Una posible solución al reto sería esta:

```java
// Reto 475: Cameos de Stan Lee

import java.util.Scanner;

public class Reto475 
{		
    // Guardamos en una constante el texto a buscar
	public static final String STANLEE = "stanlee";
	
    public static void main(String[] args) 
    {
        Scanner sc = new Scanner(System.in);
		int casos, pos, cont;
		String texto;
        
        casos = sc.nextInt();
        // Leemos el salto de línea tras el número de casos
        sc.nextLine();
        
        for (int i = 0; i < casos; i++)
        {
			texto = sc.nextLine().toLowerCase();
			cont = 0;
			pos = 0;
			
			for (int j = 0; j < texto.length(); j++)
			{
				if (texto.charAt(j) == STANLEE.charAt(pos))
				{
                    // Hemos encontrado una letra. Pasamos a la siguiente
					pos++;
					if (pos == STANLEE.length())
					{
                        // Hemos encontrado una ocurrencia completa
						cont++;
						pos = 0;
					}
				}				
			}
			
			System.out.println(cont);
		}		
    }    
}
```

Como vemos, usamos un contador `pos` para ir pasando de letra en letra por el nombre de *Stan Lee*, cada vez que encontramos una letra en el texto de la prueba. Cada vez que llegamos al final del nombre, incrementamos en uno el contador y volvemos a buscar desde el inicio de *Stan Lee*.

### 1.1. Quinto milenio

En <a href="https://aceptaelreto.com/problem/statement.php?id=178" target="_blank">este reto</a> de *Acepta el Reto* debemos hacer algo similar. En este caso debemos averiguar si un mensaje secreto está escrito dentro de un texto.

Primero nos dirán cuántos casos de prueba nos van a pasar, y cada caso está compuesto por dos líneas: una con un texto y la segunda con el mensaje secreto que tenemos que buscar. Debemos ignorar las mayúsculas/minúsculas, y los espacios en blanco que pueda haber en el mensaje secreto (aunque sí debemos contar los signos de puntuación), y decir SI o NO en función de si está oculto o no lo está.

Por ejemplo, dado este texto:

```
...dente ...somete ... de varios periodistas ...
```

El mensaje secreto `Te odio.` SI que está incluido, lo podemos ver resaltado en negrita aquí:

...den**te** ...s**o**mete ... **d**e var**io**s periodistas **.**..

<div class="ejercicio">
    <p><strong>Ejercicio 1:</strong></p>
    <p>Trata de resolver este reto en Java y comprueba que la plataforma lo acepta.</p>
</div>

## 2. Recorrido por caracteres: multiplicando mal

En <a href="https://aceptaelreto.com/problem/statement.php?id=466" target="_blank">este reto</a> de *Acepta el Reto* debemos realizar la multiplicación de dos números como si los estuviéramos sumando: tomamos las unidades, las multiplicamos entre sí y lo que nos llevamos lo pasamos a las decenas... y así sucesivamente.

Primero nos dirán el número de casos que tenemos que resolver, y cada caso viene en una sola línea, con los dos números a multiplicar separados por un espacio. Lo que haremos será leer la línea, hacer un `split` para quedarnos con los dos números por separados y con ello iniciar el proceso. Además, para nivelar los *strings* de los dos números si uno es más largo que otro, rellenaremos con ceros por la izquierda el número más corto.

Así, por ejemplo, si los números a multiplicar son 12 y 123, el resultado sería este:

```
  012
x 123
-----
  026
```

Como vemos, multiplicamos en columnas y, en el caso de que sobre algo lo sumamos al resultado de la columna siguiente (la de la izquierda de donde estemos).

Aquí vemos cómo podríamos resolver este reto en Java:

```java
// Acepta el Reto 466: Multiplicando mal

import java.util.*;

public class MultiplicandoMal
{
    public static void main(String[] args) 
    {
		Scanner sc = new Scanner(System.in);
        int casos, indice, maxLongitud, acarreo, resultParcial;
        String[] numeros;
        String resultado;
		
		casos = sc.nextInt();
        // Leemos salto de línea tras el número de casos
		sc.nextLine();

		for (int i = 0; i < casos; i++)
		{
            // Leemos los dos números en una línea
			numeros = sc.nextLine().split(" ");
		
            // Nos quedamos con la longitud más larga de los dos y 
            // rellenamos el otro número con ceros por la izquierda
			maxLongitud = Math.max(numeros[0].length(), numeros[1].length());
            while(numeros[0].length() < maxLongitud)
                numeros[0] = "0" + numeros[0];
            while(numeros[1].length() < maxLongitud)
                numeros[1] = "0" + numeros[1];
			
            // Comenzamos multiplicando por el límite derecho
			indice = maxLongitud - 1;
			acarreo = 0;
			resultado = "";
			
			while (indice >= 0)
			{
                // Para obtener el valor numérico de cada "char" le restamos
                // el código ASCII del 0
				resultParcial = (numeros[0].charAt(indice) - '0') * 
                    (numeros[1].charAt(indice) - '0');
				resultParcial += acarreo;
				resultado = (resultParcial % 10) + resultado;
				acarreo = resultParcial / 10;
				indice--;
			}
			
			if (acarreo > 0)
				resultado = acarreo + resultado;
			
			System.out.println(resultado);
		}
	}    
}
```

### 2.1. Code to Save Lives

En <a href="https://open.kattis.com/problems/codetosavelives" target="_blank">este reto</a> de Kattis nos piden algo similar, pero para sumar números. Primero nos dirán el número de casos a resolver, y cada caso son dos líneas, con los dos números a sumar. En este caso, cada cifra del número está separada de las otras por espacios, y debemos hacer la suma como se hace en el colegio, anotando lo que nos "llevamos" para la siguiente columna.

Un ejemplo:

```
  3 4 5
+ 5 6 7
-------
  9 1 2
```

Sólo debemos sacar el resultado final (separando también los dígitos por espacios).

<div class="ejercicio">
    <p><strong>Ejercicio 2:</strong></p>
    <p>Trata de resolver este reto en C# y comprueba que la plataforma lo acepta.</p>
</div>

## 3. Búsquedas y subcadenas: Simón dice

En <a href="https://open.kattis.com/problems/simonsays" target="_blank">este reto</a> de Kattis debemos jugar al juego de "Simón dice" (*Simon says*) y repetir todas las cosas que dice Simon. 

Como entrada nos dirán el número de casos de prueba, y cada caso es una frase. Si la frase comienza con el texto "Simon says", debemos repetir el resto de la frase. En caso contrario, debemos ignorarla. Por ejemplo, si la frase es *Simon says smile.*, tendremos que mostrar por pantalla *smile.* (incluyendo el punto final). En cambio, si la frase es *Lower your right hand.* no debemos mostrar nada, ya que la frase no comienza con *Simon says*.

Aquí vemos cómo podemos resolverlo en Python:

```py
# Texto por el que debe empezar la frase para repetirla
INICIO = "Simon says "

casos = int(input())

for i in range(casos):
    frase = input()
    if frase.startswith(INICIO):
        # Mostramos la frase quitándole el texto inicial "Simon says"
        print(frase[len(INICIO):])
```

### 3.1. Honrar al pariente apaxiano

En <a href="https://open.kattis.com/problems/apaxianparent" target="_blank">este otro reto</a> de Kattis debemos leer nombres de la civilización de los apaxianos y construir los nombres de los descendientes usando los nombres de sus ancestros, de la siguiente forma: en general, al nombre del descendiente añadiremos la palabra `ex` seguida del nombre del ancestro. Por ejemplo, si el descendiente es *menolaxios* y el ancestro es *mox*, entonces el nombre del descendiente será *menolaxiosexmox*.

Sobre esta norma existe algunas excepciones:

* Si el nombre del descendiente termina en `e`, entonces el nombre extendido se construye añadiendo una `x` más el nombre del ancestro (es decir, no añadimos `ex`, sino `x`, ya que termina ya en `e`).
* Si el nombre del descendiente termina en cualquier otra vocal, la quitamos y concatenamos el resto con `ex` seguido del nombre del ancestro.
* Si el nombre del descendiente ya termina en `ex`, no le concatenamos de nuevo `ex`, sino sólo el nombre del ancestro.

Como entrada nos darán, separados por espacios, el nombre del descendiente y del ancestro, y debemos construir el nombre extendido siguiendo las reglas anteriores.

<div class="ejercicio">
    <p><strong>Ejercicio 3:</strong></p>
    <p>Trata de resolver este reto en C# y comprueba que la plataforma lo acepta.</p>
</div>

