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

Mostraremos como resultado:

```
4 2
```

Aquí vemos cómo resolver el problema en Java:

```java
```