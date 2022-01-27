S2 - Conceptual Aside

**Syntax parsers**: Evalúa la sintaxis de tu código antes de procesarlo.
Es decir, lee el código y determina si lo ejecuta y si su gramática es
válida.

**Execution context**: Un contenedor para ayudar a administrar el código
que se está ejecutando. Existen muchos lexical environments, el que
maneja cuál de ellos está corriendo ahora es el execution context.
Contiene elementos que no están escritos en tu código.

**Lexical environments**: Relacionado con la gramática, existe en
lenguajes de programación donde importa la ubicación de lo que escribes
en tu código. Donde algo se encuentra físicamente en el código que
escribes, es decir, dónde está escrito y que lo rodea.

**Objeto**: En JavaScript son colecciones de parejas name/value.

![](./images//media/image1.png){width="2.6307360017497814in"
height="1.8162893700787401in"}

**Global Execution Context GEC**: Es el que corre js y tu código, crea 2
elementos, el objeto global GO el 'this'

![](./images//media/image2.png){width="3.2031255468066493in"
height="1.7452471566054244in"}

Diferencia entre window y this? El contexto(?)

A nivel global son iguales, al decir global decimos "Cuando no está
dentro de una función".

![](./images//media/image3.png){width="4.40625in"
height="0.9270833333333334in"}

![](./images//media/image4.png){width="5.619792213473316in"
height="0.9096139545056868in"}

En JS cuando declaramos una variable por fuera de una función, esta
queda embebida al global object/window.

![](./images//media/image5.png){width="1.4895833333333333in"
height="0.8854166666666666in"}

Cuando escribimos código existe el outer environment, que es el enlace a
lo que está fuera de una función.

![](./images//media/image6.png){width="3.494792213473316in"
height="1.8986132983377078in"}

**Execution Context Creation Phase**: GO, \'this\', el entorno exterior
está creado. Se crea espacio de memoria para variables (variables y
undefined) y funciones (función completa).

![](./images//media/image7.png){width="3.629050743657043in"
height="2.041340769903762in"}

**Hoisting**: Conceptualmente, por ejemplo, una estricta definición de
hoisting sugiere que las declaraciones de variables y funciones son
físicamente movidas al comienzo del código, pero esto no es lo que
ocurre en realidad. Lo que sucede es que las declaraciones de variables
y funciones son asignadas en memoria durante la fase de compilación,
pero quedan exactamente en dónde las has escrito en el código.

Las funciones son almacenadas completamente y las variables son
inicializadas como "undefined".

[[Mas
info]{.underline}](https://developer.mozilla.org/es/docs/Glossary/Hoisting)

**Undefined**: Es un tipo de valor que asigna JavaScript a una variable
para indicar que fue inicializada pero que todavía no posee valor. Es
una palabra reservada.

**Single Threaded**: Un comando se ejecuta a la vez.

**Synchronous**: Uno a la vez, una línea de código se ejecuta una por
una en el orden que están escritas.

**Invocation**: Llamar una función usando paréntesis, ej: miFuncion()

![](./images//media/image8.png){width="4.692708880139983in"
height="2.718480971128609in"}

Primero se crea el GEC, luego el EC de a() y finalmente el EC de b(),
después sale b() del stack y luego a()

![](./images//media/image9.png){width="4.255208880139983in"
height="2.584507874015748in"}

Primero se ejecuta a() y crea su EC, antes de que llegue a var d, ese EC
se pone arriba en de GEC, luego se ejecuta b() y crea otro EC que va
arriba del EC de a(), finalmente cuando se termine la ejecución de b(),
sale del stack, y luego a() ejecuta la siguiente línea de código de EC
que sería var d, después de eso sale del stack dejando solamente el GEC.

![](./images//media/image10.png){width="2.28125in"
height="0.9270833333333334in"}![](./images//media/image11.png){width="1.8958333333333333in"
height="2.0729166666666665in"}

**Variable environment**: Donde están localizadas las variables en
memoria y cómo se relacionan entre ellas.

![](./images//media/image12.png){width="3.9856977252843393in"
height="2.6486154855643043in"}

![](./images//media/image13.png){width="2.483584864391951in"
height="3.2277307524059493in"}![](./images//media/image14.png){width="2.2968755468066493in"
height="2.427379702537183in"}

![](./images//media/image15.png){width="4.5171128608923885in"
height="2.6406255468066493in"}

Cada función está enlazada al GEC, en el caso de EC de b() va ata el GEC
para buscar el valor de myVar.

**Outer Environment**: Lo que está fuera del lexical environment de la
ejecución actual.

**Scope**: Donde se aloja una variable dentro del código y si es
realmente la misma variable o una nueva copia. En este caso myBar dentro
de a() y b() nunca van a pisar el valor declarado en el GEC porque están
declaradas dentro de su respectiva función. Scope es donde puedo acceder
a una variable y la cadena son los enlaces a las referencias del Outer
Environment, léxicamente donde se escribió físicamente en su código.

![](./images//media/image16.png){width="1.8591021434820647in"
height="2.1095516185476817in"}![](./images//media/image17.png){width="4.109375546806649in"
height="2.3905500874890637in"}

En el ejemplo 1, si cambiamos el LE (Lexical Environment) de b() myVar
va a ser 2 porque léxicamente su ubicación cambió, por ende su enlace al
OE (Outer Environment) va a ser a().

Ahora en el ejemplo 2 b() no puede ser ejecutada en el GEC porque no
existe, solo existe en el LE de a()

![](./images//media/image18.png){width="2.15625in"
height="2.0520833333333335in"}![](./images//media/image19.png){width="3.53125in"
height="0.6041666666666666in"}

Ahora en el ejemplo 2 b() no puede ser ejecutada en el GEC porque no
existe, solo existe en el LE de a()

**ES6 let**:Permite que JS declare una var, pero no se puede usar hasta
que se defina. También se utiliza para block scoping. Si por ejemplo es
usada dentro de un for loop, let i = 0; i \< cars.length; i++ el valor
de i va a ocupar un espacio distinto en memoria para cada iteración.

**Block scoping**: Una variable para ser usada únicamente dentro de un
bloque de código.

**JavaScript Síncrono**: Cada operación se hace de una vez, bloqueando
el flujo de ejecución, el hilo es bloqueado mientras espera la
respuesta, cuando esta se procesa pasa a la siguiente operación y así
sucesivamente al terminar todas las operaciones.

![](./images//media/image20.png){width="1.5585050306211723in"
height="2.9739588801399823in"}![](./images//media/image21.png){width="3.8958333333333335in"
height="2.53125in"}

**JavaScript Asíncrono**: Cada operación se ejecuta y devuelve
inmediatamente el control al hilo, evitando el bloqueo, cuando cada
operación termine se enviará una notificación de que ha terminado, es
entonces cuando la respuesta se encolará para ser procesada.

![](./images//media/image22.png){width="3.4583333333333335in"
height="2.2708333333333335in"}![](./images//media/image23.png){width="1.9622714348206474in"
height="4.072082239720035in"}

[[Más Info]{.underline}](https://jonmircha.com/javascript-asincrono)

![](./images//media/image24.png){width="4.776042213473316in"
height="2.7403521434820646in"}

Se arma el stack de contextos de ejecución y se va vaciando en orden,
mientras que paralelamente se crea una cola de eventos.

![](./images//media/image25.png){width="6.5in"
height="1.5555555555555556in"}

En el momento en que este stack se vacía, (se ejecutó el EC de b(),
luego el de a() y luego lo que sea que esté en el GEC, siguiendo el
orden del stack o pila) JavaScript escucha los eventos en la cola de
eventos y por cada uno crea un EC de ser necesario, es decir, si hay un
evento click que este dispara una función, se crearía un EC para este
evento.

![](./images//media/image26.png){width="3.0038112423447068in"
height="2.9947090988626424in"}

**Dynamic Typing**: no se le dice al motor de JS qué tipo de dato tiene
una variable, él lo descifra a medida que lo va leyendo en el código.
Las variables pueden almacenar distintos tipos de datos que son
entendidos o descifrados durante la ejecución.

![](./images//media/image27.png){width="2.8328554243219597in"
height="1.8385422134733158in"}

**Primitive Type**: un tipo de dato que representa un único valor. Algo
que no es un objeto.

1.  **Undefined**: representa un dato que aún no existe. Nunca debes
    declarar una variable con este tipo de dato.

2.  **Null**: representa también algo que no existe, literalmente
    significa 'nada' y puedes declarar una variable como null.

3.  Boolean: true o false.

4.  **Number**: número o floating point number. A diferencia de otros
    lenguajes, en JS solo existe un tipo de 'number'.

5.  **String**: una cadena de caracteres donde '' y "" pueden usarse.

6.  **Symbol**: Se usa en ES6. Según MDN es un tipo de datos cuyos
    valores son únicos e immutables. Dichos valores pueden ser
    utilizados como identificadores (claves) de las propiedades de los
    objetos. Cada valor del tipo Symbol tiene asociado un valor del tipo
    String o Undefined que sirve únicamente como descripción del
    símbolo.

**Operator**: Una función especial que es sintácticamente diferente;
generalmente toma dos parámetros y devuelve un resultado.

![](./images//media/image28.png){width="1.59375in"
height="0.9791666666666666in"}

Para el syntax parser de JavaScript el signo "+" es como tener una
función llamada "+" que devuelve la suma de los 2 parámetros. Infix
notation.

"***Los operators son funciones***"

**Operator precedence**: Que función operator es llamada primero. Las
funciones son llamadas por orden de precedencia, mayor precedencia o
prioridad gana.

**Associativity**: Es el orden en que un operator es llamado, de
izquierda a derecha o de derecha a izquierda cuando tienen la misma
precedencia en una función o en una línea de código.

![](./images//media/image29.png){width="2.0729166666666665in"
height="0.8383114610673665in"}
![](./images//media/image30.png){width="2.1405227471566053in"
height="0.8333333333333334in"}

![](./images//media/image31.png){width="1.6010804899387576in"
height="0.78125in"}![](./images//media/image32.png){width="1.5833333333333333in"
height="0.59375in"}

La precedencia es de izquierda a derecha pero matemáticamente la
operación de multiplicación tiene precedencia ante la suma y esto JS lo
sabe. En la siguiente tabla tabla tenemos varios ejemplos, recuerda el
mayor número de precedencia indica cual función u operator será llamado
primero. En el último ejemplo tiene precedencia el paréntesis, tal y
como lo indica la tabla.

**Javascript Operator Precedence \--\>** Operator Precedence ‐
Javascript by Mozilla Contributors is licensed under CC‐BY‐SA 2.5.

**Coercion**: Convertir un tipo de valor a otro. Esto pasa en JS porque
es de tipado dinámico.

![](./images//media/image33.png){width="1.2708333333333333in"
height="0.5104166666666666in"}![](./images//media/image34.png){width="3.9895833333333335in"
height="0.5208333333333334in"}

Lo que sucede es que al tener un número y un string los concatena y
devuelve un string porque no puede sumar ambos tipos de datos.

**Comparison Operators \--\>** Equality comparisons and sameness by
Mozilla Contributors is licensed under CC‐BY‐SA 2.5.

![](./images//media/image35.png){width="3.09375in"
height="1.6954035433070866in"}![](./images//media/image36.png){width="2.4583333333333335in"
height="1.6145833333333333in"}

La doble igualdad coerciona los tipos de dato para hacer la comparación

![](./images//media/image37.png){width="3.7708333333333335in"
height="0.9583333333333334in"}

![](./images//media/image38.png){width="3.11701334208224in"
height="2.9375in"}![](./images//media/image39.png){width="2.4270833333333335in"
height="2.9536373578302713in"}

La coerción puede ser útil a la hora de setear valores por defecto, tal
y como se demuestra en el segundo ejemplo. Si no existe el parámetro
name entonces este tendrá un string por defecto. En el caso de que
tengamos undefined \|\| 'string' el retorno será 'string' porque por
coerción tendríamos una evaluación false \|\| true, donde true será el
valor de 'string'.

![](./images//media/image40.png){width="1.9799923447069117in"
height="1.139364610673666in"}![](./images//media/image41.png){width="2.3020833333333335in"
height="0.8854166666666666in"}![](./images//media/image42.png){width="4.9375in"
height="0.65625in"}![](./images//media/image43.png){width="5.0in"
height="0.8333333333333334in"}

El tener varios archivos JS importados no crea EC para cada archivo.

![](./images//media/image44.png){width="3.3229166666666665in"
height="0.71875in"}

![](./images//media/image45.png){width="4.927083333333333in"
height="0.8854166666666666in"}

![](./images//media/image46.png){width="3.8541666666666665in"
height="1.2083333333333333in"}

Cada variable queda vinculada al GO (window) por ende podemos fijarnos
si ya tiene un valor y si este no es el caso podemos asignarle un valor
default aprovechandonos de la coerción.

Estructura de un objeto en JS

![](./images//media/image47.png){width="4.229166666666667in"
height="2.387716535433071in"}

![](./images//media/image48.png){width="3.4270833333333335in"
height="2.864887357830271in"}

**Namespace**: Un contenedor de variables y funciones, normalmente para
mantener las var y las funciones con el mismo nombre por separado, no en
JS; los objetos se encargan de eso.

![](./images//media/image49.png){width="2.8337620297462816in"
height="1.7988221784776903in"}

Podemos imitar un namespace creando objetos contenedores para que las
variables no se pisen.

![](./images//media/image50.png){width="2.5520833333333335in"
height="0.7291666666666666in"}![](./images//media/image51.png){width="1.71875in"
height="1.0625in"}

En este ejemplo obtenemos un error porque no podemos crear propiedades
al vuelo, es decir, asumiendo que ya existe el contenedor para italian
pero que este no tiene la propiedad greetings y que a su vez esta
contenga una propiedad greet, no podemos asignarla de otra forma que no
sea inicializandolo el primer contenedor, de lo contrario sería como
asignar la propiedad greet a undefined.

**JSON y Objetos Literales:** JSON Es un subset de JavaScript Object
Notation donde puede almacenarse información en un "objeto" cuyas
propiedades están encerradas en comillas dobles.

![](./images//media/image52.png){width="3.1666666666666665in"
height="1.0104166666666667in"}

Esto nos permite convertir un objeto en formato JSON

![](./images//media/image53.png){width="5.0in" height="0.71875in"}

Mientras que este otro ejemplo hace lo contrario, convierte JSON en un
objeto literal

![](./images//media/image54.png){width="3.3958333333333335in"
height="0.5208333333333334in"}

**First Class Functions**: Son funciones almacenadas en una variable,
creadas al vuelo, pasadas como argumento o retornadas por otra función.
Todo lo que puede hacer con otros tipos lo puedes hacer con funciones,
es decir, puedes asignarlas a var, pasarlas, o crearlas sobre la marcha.

![](./images//media/image55.png){width="5.0in" height="2.78125in"}

![](./images//media/image56.png){width="5.0in" height="2.53125in"}

![](./images//media/image57.png){width="2.71875in"
height="1.1145833333333333in"}

Esto es posible porque para JS las funciones son objetos.

**Function Expression**: Una porción de código que resulta en una
variable, no tiene que guardarse en una variable.

![](./images//media/image58.png){width="5.0in"
height="2.6145833333333335in"}

![](./images//media/image59.png){width="5.0in" height="2.53125in"}

![](./images//media/image60.png){width="3.3958333333333335in"
height="1.6875in"}

En JS las funciones y las variables hoisteadas de forma distinta, la
función es un objeto especial, por ende es almacenada en su totalidad,
mientras que las variables son declaradas como undefined al momento de
su creación, por eso en la primera ejecución retornamos el console.log y
en la segunda ejecución un error. Porque en la fase de ejecución todavía
no contiene un objeto sino undefined.

**By value**: Cuando se pasa un valor de una variable a otra, copiando
el valor a dos espacios de memoria separados. Usado por valores
primitivos.

![](./images//media/image61.png){width="5.0in"
height="2.7604166666666665in"}

![](./images//media/image62.png){width="1.9270833333333333in"
height="1.3645833333333333in"}

**By reference**: Cuando se pasa un valor que apuntan al mismo espacio
de memoria, de esta forma trabajan los objetos (objetos, dunciones,
arrays).

![](./images//media/image63.png){width="5.0in" height="4.28125in"}

**Mutate**: Cambiar el valor.

**Inmutable**: No puede ser cambiado.

![](./images//media/image64.png){width="4.4375in"
height="3.9479166666666665in"}

En la línea 29 vemos un caso especial donde by reference no aplica
porque no apunta al mismo espacio de memoria sino a un objeto nuevo
creado al vuelo.

***"Cuando una función se ejecuta un nuevo Execution Context o Contexto
de Ejecución es creado"***

![](./images//media/image65.png){width="5.0in"
height="2.7604166666666665in"}

![](./images//media/image66.png){width="5.0in"
height="2.6770833333333335in"}

![](./images//media/image67.png){width="5.0in"
height="3.0520833333333335in"}

Por alguna razón el this dentro de una función declarativa que está
dentro de un método, apunta al objeto global 🤷\... Pero puede
solucionarse, creando una variable cuya referencia sea el this de este
contexto. Ej:

![](./images//media/image68.png){width="3.1875in"
height="2.8645833333333335in"}

De esta manera estamos completamente seguros que estamos apuntando al
objeto deseado.

**Arguments**: creados cuando el contexto de ejecución de una función es
creado. Alberga los parámetros pasados a dicha función en forma de
array. Por otra parte podemos decir que los argumentos son los
parámetros pasados a una función, sin embargo, javascript tiene la
palabra reservada o keyword con el mismo nombre y como se expresa
anteriormente, los contiene todos.

![](./images///media/image46.png){width="5.0in" height="2.78125in"}

![](./images///media/image47.png){width="4.1875in"
height="3.8958333333333335in"}

En la línea 2 se puede ver que se asigna un valor por defecto, y no es
remplazado hasta que nos llega como parámetro en la ejecución de la
línea 21.

![](./images///media/image48.png){width="5.0in"
height="3.1145833333333335in"}

![](./images///media/image49.png){width="4.385416666666667in"
height="0.9791666666666666in"}

![](./images///media/image4a.png){width="5.0in"
height="1.4479166666666667in"}

![](./images///media/image4b.png){width="2.6770833333333335in"
height="0.9166666666666666in"}

Al ser los argumentos interpretados como un array validarlos y tratarlos
de la misma manera para ejecutar nuestro código en concordancia.

Teniendo esto en cuenta podemos usar el spread operator de la misma
forma en que lo haríamos con un array para agregar otros parámetros

![](./images///media/image4c.png){width="3.8125in"
height="0.19791666666666666in"}

![](./images///media/image4d.png){width="4.09375in"
height="0.7708333333333334in"}

![](./images///media/image4e.png){width="5.0in"
height="1.6666666666666667in"}

**Function Overloading**: No existe en JS, lo que significa que no puede
tener funciones con el mismo nombre y diferentes parámetros porque son
objetos Si se necesita llamar una función con usos distintos, foo(x) y
foo(x,y,z) podemos seguir el siguiente approach:

![](./images///media/image4f.png){width="5.0in"
height="3.1354166666666665in"}

**Automatic Semicolon Insertion**: Aunque son opcionales, si hay un
retorno de carro o salto de línea (enter) en tu código, el syntax parser
puede insertar un punto y coma. Siempre agrega una llave rizada en la
misma línea para evitar esto. Ej:

![](./images///media/image50.png){width="3.4166666666666665in"
height="1.5729166666666667in"}

![](./images///media/image51.png){width="3.96875in"
height="1.4895833333333333in"}

**Whitespace**: Caracteres invisibles que crean un \"espacio\" literal
en su código escrito. Retornos de carro, tabulaciones, espacios.

![](./images///media/image52.png){width="3.4166666666666665in"
height="3.71875in"}

**Imediately Invoked Function Expressions (IIFEs)**: Expresión de
función que se invoca inmediatamente cuando se crea. La var será el
valor devuelto, no la función. Se utiliza para eliminar cosas del
contexto global.

![](./images///media/image54.png){width="4.635416666666667in"
height="5.0in"}

![](./images///media/image55.png){width="5.0in" height="1.90625in"}

**Closures**: Donde un contexto de ejecución todavía tiene acceso a
variables / referencias al espacio de memoria en un contexto de
ejecución más grande, incluso si el contexto de ejecución principal ha
salido de la pila. El scope está intacto, dicho de otra forma, sería
cuando una función es capaz de recordar y acceder a un lexical scope,
incluso cuando la función es ejecutada por fuera del lexical scope.

![](./images///media/image58.png){width="2.8854166666666665in"
height="1.7083333333333333in"}

![](./images///media/image59.png){width="5.0in" height="2.5625in"}

El segundo paréntesis accede a la función anónima dentro de greet, esto
puede hacerse de otra manera, en la ejecución de la variable sayHi,
pasamos el parámetro 'Tony', que corresponde de igual forma al contexto
de ejecución de la función anidada en greet.

[Closure info mozilla
dev](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

**Lexical scope**: Significa que en un grupo anidado de funciones, las
funciones internas tienen acceso a las variables y otros recursos de su
scope principal. Esto significa que las funciones hijas están ligadas
léxicamente al contexto de ejecución de sus padres. El lexical scope a
veces también se denomina scope estático.

![](./images///media/image5a.png){width="2.710106080489939in"
height="2.734595363079615in"}![](./images///media/image5b.png){width="2.9791666666666665in"
height="2.159896106736658in"}

Al momento en que se ejecuta fs, se ejecutó el ciclo for, donde se
reescribió el valor de i hasta el momento de en que la expresión era
false, en ese momento i = 3, y en cada contexto de ejecución va a ser
igual, porque apunta a la misma referencia externa y nos devolverá el
valor de i en el momento en que se ejecutó la función, si esperábamos
que el valor de i en cada iteración fuese 0,1 y 2 podemos lograrlo
usando let en lugar de var, creando una nueva referencia externa en cada
iteración.

![](./images///media/image5d.png){width="2.1875in"
height="3.1979166666666665in"}

Otro método alternativo, donde no usamos let sería:

![](./images///media/image5e.png){width="2.4583333333333335in"
height="3.7708333333333335in"}

En este caso estamos creando una IIFE que retorna una función que
imprime el valor de i en cada contexto de ejecución.

**Function factories**: Son funciones que retornan funciones,
generalmente haciendo uso de closures.

![](./images///media/image5c.png){width="4.09375in"
height="2.8958333333333335in"}

En este ejemplo, se generan 2 contextos de ejecución, con 2 parámetros
distintos, en cada contexto se almacena language, en y es, apuntando a 2
espacios de memoria distinto y se retornará una función en concordancia
a dichos parámetros, esto sucede cuando las variables greetEnglish y
greetSpanish son igualadas a la ejecución de makeGreetings, después al
ejecutar greetEnglish y greetSpanish con parámetros distintos sucede lo
mismo, creamos 2 contextos de ejecución distintos que apuntan al closure
correspondiente

![](./images///media/image5f.png){width="5.0in"
height="2.8229166666666665in"}

**Callbacks**: una función que tiene a otra función, que se ejecutará
cuando la otra función haya finalizado.

![](./images///media/image60.png){width="4.25in"
height="4.666666666666667in"}

**call(), apply() y bind() \--\> vinculados al objeto this**

![](./images///media/image61.png){width="5.0in"
height="2.6979166666666665in"}

**bind()**: crea una copia de una función y le pasa cualquier objeto que
se le quiera vincular a la variable "this".

![](./images///media/image62.png){width="3.9479166666666665in"
height="2.6875in"}

Si se intentara ejecutar logName obtendríamos un error, ya que el this
al que hace referencia es el objeto window y getFullName no existe en
ese scope. Al utilizar la función bind con logName y person, el "this"
ahora apunta al objeto person. También puede hacerse al vuelo,
vinculándo person directamente a la función logName:

![](./images///media/image63.png){width="3.2604166666666665in"
height="0.9583333333333334in"}

**call()**: es directamente un llamado o invocacipon a una función y
recibe parámetros para su ejecución.

![](./images///media/image64.png){width="3.1145833333333335in"
height="1.46875in"}

![](./images///media/image65.png){width="3.1458333333333335in"
height="0.46875in"}

Al igual que bind() vincula this.getFullname a person pero en este caso
no es una copia de logName, es la ejecución de dicha función pasándole
también los argumentos lang1 y lang2

**apply():** funciona igual que call, la diferencia es que recibe como
segundo parámetro un array de parámetros.

![](./images///media/image66.png){width="2.9270833333333335in"
height="0.46875in"}

![](./images///media/image67.png){width="3.09375in" height="1.5in"}

Incluso puede usarse con IIFEs

**Function/Method borrowing**: aplicar métodos de un objeto en otro, sin
necesidad de copiar todo el objeto anterior. Mientras que tengan
propiedades similares.

![](./images///media/image68.png){width="2.8020833333333335in"
height="1.5416666666666667in"}

![](./images///media/image69.png){width="2.7916666666666665in"
height="1.5in"}

**Function currying**: Curry es poder llamar una función con menos
parámetros de los que espera, esta devuelve una función que espera los
parámetros restantes y retorna el resultado. Podría decirse que consiste
en transformar una función que utiliza múltiples argumentos en una
secuencia de funciones que utilizan un único argumento.

![](./images///media/image6a.png){width="3.0625in"
height="1.6041666666666667in"}

En este ejemplo, bind crea una copia de multiply y convierte 2 en el
valor por defecto de "a" y luego al invocar multiplyByTwo con cualquier
parámetro, este seconvierte automaticamente en el segundo parámetro o
"b" de la copia de multiply, sería lo mismo que hacer esto:

![](./images///media/image6b.png){width="2.2708333333333335in"
height="1.15625in"}

**Function programming**:

![](./images///media/image6c.png){width="2.8958333333333335in"
height="1.8020833333333333in"}

Podemos refactorizar el contenido de ese for en una función que pueda
reutilizarse para iterar con el contenido de arr1 de distintas maneras:

![](./images///media/image6d.png){width="2.8020833333333335in"
height="1.8541666666666667in"}

Esta función recibe un array y una función como parámetros, crea un
nuevo array e itera con su contenido con cualquier función que le
pasemos como parámetro.

![](./images///media/image6e.png){width="3.4583333333333335in"
height="1.2395833333333333in"}

Puede realizar operaciones matemáticas o comparaciones, de esta forma
creamos código limpio y reutilizable.

![](./images///media/image6f.png){width="4.239583333333333in"
height="3.1041666666666665in"}

Incluso utilizando [currying](https://javascript.info/currying-partials)
se pueden simplificar argumentos

![](./images///media/image70.png){width="3.875in"
height="2.7916666666666665in"}

Utilizando librerías \--\> [underscorejs](https://underscorejs.org/)

**Inheritance**: Cuando un objeto tiene acceso a propiedades y métodos
de otro objeto.

Prototype: Es un objeto escondido, puede accederse con ".\_\_proto\_\_"

**Classical Inheritance vs Prototypal Inheritance**: La forma más
popular y más antigua, muy detallada. VS. Una forma simple, flexible,
extensible y fácil de entender.

![](./images///media/image71.png){width="5.0in" height="3.0625in"}

![](./images///media/image72.png){width="4.166666666666667in"
height="3.1979166666666665in"}

Solo para efectos académicos se usa "\_\_proto\_\_" para acceder al
prototipo de persona desde el objeto "john" y acceder al método
"getFullName".

Esto solo se puede lograr utilizando funciones tradicionales, ya que el
entorno de "this" en una función de flecha apunta al lexical scope de su
padre, que en este caso sería window.

![](./images///media/image73.png){width="4.0in" height="3.0in"}

![](./images///media/image74.png){width="1.9895833333333333in"
height="1.3229166666666667in"}![](./images///media/image75.png){width="5.0in"
height="0.5in"}

![](./images///media/image76.png){width="2.3020833333333335in"
height="1.3854166666666667in"}

![](./images///media/image77.png){width="3.9270833333333335in"
height="0.53125in"}

![](./images///media/image78.png){width="2.5208333333333335in"
height="0.16666666666666666in"}

¿Por qué John y no default? Porque en la cadena de prototipo, firstname
existe dentro del objeto "john".

![](./images///media/image79.png){width="1.8541666666666667in"
height="0.7708333333333334in"}

Si esa propiedad no existiese en el objeto "john", al imprimir
"getFullName" obtendríamos "Default Doe" porque buscaría la propiedad
firstname en el objeto vinculado al "\_\_proto\_\_" que sería "person"

[Arrow functions vs Regular
functions](https://levelup.gitconnected.com/arrow-function-vs-regular-function-in-javascript-b6337fb87032)

[Differences between Arrow functions and Regular
functions](https://dmitripavlutin.com/differences-between-arrow-and-regular-functions/)

***¿Cuál es el fin de la cadena de prototipo? \--\> El objeto base.***

***¿Cómo acceder a las funciones de JavaScript? \--\> Existen en el
prototipo.***

**Reflection**: Un objeto puede mirarse a si mismo, listando y cambiando
sus propiedades y métodos.

**Extend**: a través de reflection, un objeto puede extender o agregar
propiedades y métodos en otros objetos.

![](./images///media/image7a.png){width="4.9375in" height="3.375in"}

![](./images///media/image7b.png){width="5.0in"
height="0.8645833333333334in"}

**Function contructors**: Una función utilizada para crear un nuevo
objeto vacío. Y este objeto es retornado de la función automáticamente.

**Building objects**:

![](./images///media/image7c.png){width="4.458333333333333in"
height="1.2604166666666667in"}

Creamos una función, con propiedades, a través de new creamos un objeto
vacío y ejecutamos la función Person() para asignarle sus propiedades.
Esto fue hecho para atraer a desarrolladores de otros lenguajes como
Java, creando una sintaxis similar a la que se usa para crear clases en
dicho lenguaje. De esta forma el contexto de "this" cambia con la
ejecución de new Person(), this ahora es el objeto "john".

![](./images///media/image7d.png){width="3.1081080489938757in"
height="0.71875in"}![](./images///media/image.jpg){width="1.1145833333333333in"
height="1.131078302712161in"}

![](./images///media/image7e.png){width="4.385416666666667in"
height="1.5104166666666667in"}

![](./images///media/image7f.png){width="2.875in"
height="0.3958333333333333in"}

De igual forma el objeto Person sigue siendo una función y por eso es
invocable.

![](./images///media/image80.png){width="4.166666666666667in"
height="1.78125in"}

![](./images///media/image81.png){width="4.71875in"
height="1.0416666666666667in"}

Como es de suponer, la variable "jane" apunta al mismo lugar de memoria
de Person, por ende, firstname y lastname nunca van a cambiar, pero
podemos usar una función para crear un objeto donde el valor de sus
propiedades sean parámetros, para que de esta forma cada propiedad tenga
su valor único.

![](./images///media/image82.png){width="4.989583333333333in"
height="1.25in"}

**Function Constructors y prototype**:

![](./images///media/image83.png){width="5.0in"
height="2.6458333333333335in"}

Este "prototype" no es el mismo prototipo de todos los objetos al que
podemos acceder a través de dot notation y "\_\_proto\_\_", este
"prototype" vive dentro de todas las funciones y no se utiliza a menos
que se ejecute esa función para construir un objeto.

![](./images///media/image84.png){width="4.114583333333333in"
height="5.0in"}

La ventaja del uso de prototype es el uso de memoria, ya que al crear
métodos en prototype, no es una copia de dicho método para cada objeto
creado por la ejecución de la función constructor, es el mismo método
como propiedad para todos los objetos creados por Person o Student en el
ejemplo. Si agregáramos un método directamente en el objeto Person,
vamos a tener 1000 copias de dicho método si creáramos mil objetos a
partir de Person en cambio si los creamos en el prototype, ahorramos
espacio asignándole a los 1000 objetos, el mismo método.

**Function Constructors y new:**

IMPORTANTE SOBRE EL USO DE "new":

Cuando ejecutemos una function constructor nunca olvidemos el new, de lo
contrario se ejecutará como una función tradicional y no creará el
objeto deseado.

![](./images///media/image85.png){width="3.6979166666666665in"
height="5.0in"}

Consejo, como convención utiliza letra capitular en function
constructor, eso te ayudará a identificar errores en el caso de que
hayas olvidado agregar el operador "new" y aún mejor a un linter (si
está instalado en tu IDE) a identificar el error.

**Function Constructors Built-in function constructors**:

![](./images///media/image86.png){width="2.1145833333333335in"
height="0.3854166666666667in"}

El valor de "a" como puede verse, no es un primitivo, es un objeto
Number generado por el operador new en conjunto con la función Number,
lo que nos devuelve un objeto con un primitivo. Este objeto number tiene
un prototipo y como tal tiene todas sus propiedades y métodos.

![](./images///media/image87.png){width="3.4479166666666665in"
height="2.5520833333333335in"}

Lo mismo con la función String

![](./images///media/image88.png){width="2.34375in"
height="0.3645833333333333in"}

![](./images///media/image89.png){width="2.3645833333333335in"
height="1.7916666666666667in"}

![](./images///media/image8a.png){width="2.8125in" height="1.09375in"}

![](./images///media/image8b.png){width="1.625in"
height="0.7916666666666666in"}

En el ejemplo anterior \"Tony\" es un primitivo pero se le puede aplicar
la propiedad .length porque el motor de JavaScript lo envuelve en un
objeto para poder aplicarle dicho método.

![](./images///media/image8c.png){width="3.8854166666666665in"
height="1.1145833333333333in"}

Esto es posible ya que por herencia todos los strings tienen acceso al
método isGreatherThan, además como indicamos en ejemplo anteriores el
string 'Tony' es interpretado como un objeto que contiene el primitivo
con el valor antes mencionado.

![](./images///media/image8d.png){width="5.0in"
height="0.8541666666666666in"}

Sin embargo, lo mismo no es posible trabajando con números directamente,
porque con los strings JavaScript tiene la gentileza de convertirlos en
objetos automáticamente.

![](./images///media/image8e.png){width="2.5416666666666665in"
height="0.46875in"}

Tomando en cuenta lo aprendido, creamos una variable Number que contiene
el primitivo 15 entonces si podemos aplicarle el método isPositive.

String y Number son objetos, 'Tony' es interpretado como un objeto pero
15 no es interpretado de esta manera a menos que lo pasemos como valor
del objeto Number.

IMPORTANTE

![](./images///media/image8f.png){width="2.5104166666666665in"
height="0.9583333333333334in"}

Esto es posible porque la doble igualdad no evalúa tipo y el valor de
numB es cohersionado a 3 por el operador ==
