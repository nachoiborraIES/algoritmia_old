# Complejidad de un algoritmo

Llegados a este punto, vamos a hablar de cómo de complejo es un algoritmo, y de cómo determinar algunas complejidades habituales.

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
