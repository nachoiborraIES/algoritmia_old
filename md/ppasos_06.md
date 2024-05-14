# Java en 10 minutos

En este documento vamos a dar unas rápidas pinceladas para empezar a trabajar con Java y comprender los elementos más básicos del lenguaje.

## 1. Ejemplo introductorio

Para verlo todo de un vistazo usaremos el mismo ejemplo que hemos visto en documentos anteriores: en este programa le pedimos al usuario que indique el número de perros y gatos que hay en una protectora, y mostramos por pantalla el porcentaje de perros y de gatos que hay.

```cs
import java.util.Scanner;

public class Ejemplo
{
    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);
        int perros, gatos, total, porcentajePerros, porcentajeGatos;

        System.out.println("Indica el número de perros:");
        perros = sc.nextInt();
        System.out.println("Indica el número de gatos:");
        gatos = sc.nextInt();

        total = perros + gatos;
        porcentajePerros = perros * 100 / total;
        porcentajeGatos = gatos * 100 / total;

        System.out.println("Hay un " + porcentajePerros + "% de perros");
        System.out.println("Hay un " + porcentajeGatos + "% de gatos");
    }
}
```

Analicemos las estructuras empleadas en el ejemplo, que guardan muchos parecidos con lo que hemos visto para C# en documentos anteriores:

* La instrucción `import java.util.Scanner` nos va a permitir utilizar en nuestro código el objeto de tipo `Scanner`, que se emplea en Java para leer datos que se introducen desde el teclado.
* Todo programa en Java, al igual que ocurre en C#, debe estar encapsulado dentro de una clase `class` seguida de un nombre (en nuestro caso hemos llamado a la clase *Ejemplo*). Esta clase en Java se exige que sea `public` si dispone de un programa principal o `main`. Además, el fichero fuente donde la guardemos se debe llamar igual que la clase (*Ejemplo.java* en nuestro caso).
* Dentro de la clase debe haber un bloque de código principal llamado `main`, que es el que se ejecuta al lanzar el programa. En el caso de Java el bloque se define como `public static void main(String[] args)`.
* Entre las llaves del bloque *main* definimos la secuencia de instrucciones que queremos que se ejecuten:
  * En primer lugar declaramos una variable de tipo `Scanner` para recoger los datos de teclado. Para ello, al crearla le indicamos que tome los datos de `System.in`, que es la entrada estándar de datos del sistema (es decir, el teclado).
  * También declaramos las variables que vamos a usar: emplearemos las variables `perros` y `gatos` para guardar el total de perros y gatos por separado que diga el usuario, la variable `total` para sumar ambas cantidades y las variables `porcentajePerros` y `porcentajeGatos` para calcular los porcentajes
  * Después le pedimos al usuario con dos mensajes `System.out.println` que escriba la cantidad de perros y de gatos. Recogemos lo que escribe el usuario con la instrucción `sc.nextInt` que permite leer números enteros del teclado, y los guardamos en las variables correspondientes para perros y gatos.
  * Tras este bloque hacemos las operaciones matemáticas: calculamos el `total` de animales de la protectora sumando perros y gatos, y los respectivos porcentajes de perros y gatos. Es IMPORTANTE recalcar que, a la hora de calcular los porcentajes, primero conviene multiplicar el dato por 100 y luego dividir entre el total porque, si lo hacemos al revés (primero dividir y luego multiplicar) la división dará 0 al ser entera, y el porcentaje siempre saldrá 0.
  * Finalmente mostramos por pantalla los datos de porcentajes calculados

## 2. Software para programar

¿Qué software necesitamos para programar en Java? Ofreceremos aquí dos alternativas.

### 2.1. Compilador online

Podemos utilizar un compilador online si queremos hacer pruebas rápidas y sencillas, sin necesidad de tener nada instalado en el sistema. Aquí indicamos un par de herramientas que os pueden venir bien:

<ul>
    <li><a href="https://www.programiz.com/java-programming/online-compiler" target="_blank">Editor online de <em>Programiz</em> para Java</a></li>
    <li><a href="https://www.tutorialspoint.com/online_java_compiler.php" target="_blank">Editor online de <em>TutorialsPoint</em> para Java</a></li>
</ul>

En cualquiera de estas opciones podemos editar nuestro código en una ventana de edición y luego ejecutarlo en un terminal adjunto a la derecha, con el que podemos interactuar e introducir datos por teclado.

### 2.2. Compilación y ejecución local

Si queremos compilar y ejecutar programas en Java de forma local, debemos instalar el compilador y ejecutor, paquete conocido como JDK (*Java Development Kit*, kit de desarrollo Java). Podemos descargar la versión que prefiramos de <a href="https://jdk.java.net/archive/" target="_blank">esta web</a> y descomprimirla en la carpeta que queramos. Por ejemplo, dentro de *C:\openjdk* en Windows, o dentro de */home/usuario/openjdk* en Linux o Mac (donde *usuario* será el nombre de nuestro usuario en el sistema).

Después debemos configurar la variable *PATH* del sistema para que incluya la subcarpeta *bin* dentro de la carpeta de instalación. En esta subcarpeta se encuentran los comandos `javac` y `java`, que nos permitirán compilar y ejecutar nuestros programas, respectivamente.

En el caso de **Windows** podría quedar algo así:

<div align="center">
    <img src="https://nachoiborraies.github.io/entornos/img/ED_b1_tema01-02-variables_entorno_2.png" width="80%">
</div>

En el caso de **Linux** escribiremos estos comandos desde un terminal:

```
echo "export PATH=$PATH:/home/usuario/openjdk/bin" >> ~/.bashrc
source ~/.bashrc
```

En el caso de **Mac** también escribimos estos comandos desde terminal, similares a los anteriores (aunque algo diferentes):

```
echo "export PATH=$PATH:/home/usuario/openjdk/Contents/Home/bin" >> ~/.bash_profile
source ~/.bash_profile
```

También puede ser necesario configurar una nueva variable de entorno llamada *JAVA_HOME* que indique en qué carpeta hemos descomprimido o instalado JDK. Aquí lo vemos para el caso de **Windows**:

<div align="center">
    <img src="https://nachoiborraies.github.io/entornos/img/ED_b1_tema01-04-java_home.png" width="80%">
</div>

Aquí tenemos los comandos correspondientes para **Linux**:

```
echo "export JAVA_HOME=/home/usuario/openjdk" >> ~/.bashrc
source ~/.bashrc
``` 

Y estos comandos serían para **Mac**:

```
echo "export JAVA_HOME=/home/usuario/openjdk/Contents/Home" >> ~/.bash_profile
source ~/.bash_profile
```

Como editor simple para hacer nuestros programas podemos usar **Geany**, que se puede descargar desde su <a href="https://www.geany.org/" target="_blank">web oficial</a>. Una vez lo tengamos instalado debemos seguir estos pasos:

1. Crear un archivo nuevo y guardarlo como un programa Java. Por ejemplo, podemos copiar el código del ejemplo anterior y guardarlo como *Ejemplo.java*. Esto lo identificará como un archivo de tipo Java, y hará que Geany le asocie el compilador por defecto.
2. Para compilar nuestros programas podemos ir al menú *Construir > Compilar*, y una vez compilado ejecutamos con *Construir > Ejecutar*. También podemos usar los botones correspondientes de la barra de herramientas superior.

<div class="ejercicio">
    <p><strong>Ejercicio 1:</strong></p>
    <p>Prueba a compilar y ejecutar el ejemplo anterior de los perros y gatos, y comprueba el resultado que se muestra por pantalla al indicar 30 perros y 20 gatos.</p>
</div>

<div class="ejercicio">
    <p><strong>Ejercicio 2:</strong></p>
    <p>Ahora nuestra protectora añade un tercer tipo de animal: los pájaros. Pide al usuario este nuevo dato y calcula ahora los tres porcentajes.</p>
</div>

<div class="ejercicio">
    <p><strong>Ejercicio 3:</strong></p>
    <p>Escribe un programa que le pida al usuario la nota de 3 exámenes y calcule por pantalla su media (entera).</p>
</div>

<div class="ejercicio">
    <p><strong>Ejercicio 4:</strong></p>
    <p>Escribe un programa que le pida al usuario su nombre y su edad y muestre el mensaje *Hola XXXX, tienes YYYY años*. Observa los problemas que puedes tener para leer datos de tipo texto y entero por teclado en Java.</p>
</div>