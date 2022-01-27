#
# JavaScript: Understanding the weird parts

**Syntax parsers** : Evalúa la sintaxis de tu código antes de procesarlo. Es decir, lee el código y determina si lo ejecuta y si su gramática es válida.

**Execution context** : Un contenedor para ayudar a administrar el código que se está ejecutando. Existen muchos lexical environments, el que maneja cuál de ellos está corriendo ahora es el execution context. Contiene elementos que no están escritos en tu código.

**Lexical environments** : Relacionado con la gramática, existe en lenguajes de programación donde importa la ubicación de lo que escribes en tu código. Donde algo se encuentra físicamente en el código que escribes, es decir, dónde está escrito y que lo rodea.

**Objeto** : En JavaScript son colecciones de parejas name/value.

![](RackMultipart20220127-4-netrgs_html_d0c3600020bdf045.png)

**Global Execution Context GEC** : Es el que corre js y tu código, crea 2 elementos, el objeto global GO el &#39;this&#39;

![](RackMultipart20220127-4-netrgs_html_2334eb52c1de0e04.png)

Diferencia entre window y this? El contexto(?)

A nivel global son iguales, al decir global decimos &quot;Cuando no está dentro de una función&quot;.

![](RackMultipart20220127-4-netrgs_html_7c36b4812323bad9.png)

![](RackMultipart20220127-4-netrgs_html_de72c852a240b238.png)

En JS cuando declaramos una variable por fuera de una función, esta queda embebida al global object/window.

![](RackMultipart20220127-4-netrgs_html_d73e524384511a50.png)

Cuando escribimos código existe el outer environment, que es el enlace a lo que está fuera de una función.

![](RackMultipart20220127-4-netrgs_html_3dbaaf5bb2f29b9.png)

**Execution Context Creation Phase** : GO, &#39;this&#39;, el entorno exterior está creado. Se crea espacio de memoria para variables (variables y undefined) y funciones (función completa).

![](RackMultipart20220127-4-netrgs_html_5d003ba840ed1ad0.png)

**Hoisting** : Conceptualmente, por ejemplo, una estricta definición de hoisting sugiere que las declaraciones de variables y funciones son físicamente movidas al comienzo del código, pero esto no es lo que ocurre en realidad. Lo que sucede es que las declaraciones de variables y funciones son asignadas en memoria durante la fase de compilación, pero quedan exactamente en dónde las has escrito en el código.

Las funciones son almacenadas completamente y las variables son inicializadas como &quot;undefined&quot;.

[Mas info](https://developer.mozilla.org/es/docs/Glossary/Hoisting)

**Undefined** : Es un tipo de valor que asigna JavaScript a una variable para indicar que fue inicializada pero que todavía no posee valor. Es una palabra reservada.

**Single Threaded** : Un comando se ejecuta a la vez.

**Synchronous** : Uno a la vez, una línea de código se ejecuta una por una en el orden que están escritas.

**Invocation** : Llamar una función usando paréntesis, ej: miFuncion()

![](RackMultipart20220127-4-netrgs_html_886aefa41d3effad.png)

Primero se crea el GEC, luego el EC de a() y finalmente el EC de b(), después sale b() del stack y luego a()

![](RackMultipart20220127-4-netrgs_html_ef6ba77948117143.png)

Primero se ejecuta a() y crea su EC, antes de que llegue a var d, ese EC se pone arriba en de GEC, luego se ejecuta b() y crea otro EC que va arriba del EC de a(), finalmente cuando se termine la ejecución de b(), sale del stack, y luego a() ejecuta la siguiente línea de código de EC que sería var d, después de eso sale del stack dejando solamente el GEC.

![](RackMultipart20220127-4-netrgs_html_10bfd7f5b3cbf4c1.png) ![](RackMultipart20220127-4-netrgs_html_6b112265e5588854.png)

**Variable environment** : Donde están localizadas las variables en memoria y cómo se relacionan entre ellas.

![](RackMultipart20220127-4-netrgs_html_f2f181ba372cdb03.png)

![](RackMultipart20220127-4-netrgs_html_5f38f87d16b520ee.png) ![](RackMultipart20220127-4-netrgs_html_74c158410893aa94.png)

![](RackMultipart20220127-4-netrgs_html_4ffb9de85ae9b064.png)

Cada función está enlazada al GEC, en el caso de EC de b() va ata el GEC para buscar el valor de myVar.

**Outer Environment** : Lo que está fuera del lexical environment de la ejecución actual.

**Scope** : Donde se aloja una variable dentro del código y si es realmente la misma variable o una nueva copia. En este caso myBar dentro de a() y b() nunca van a pisar el valor declarado en el GEC porque están declaradas dentro de su respectiva función. Scope es donde puedo acceder a una variable y la cadena son los enlaces a las referencias del Outer Environment, léxicamente donde se escribió físicamente en su código.

![](RackMultipart20220127-4-netrgs_html_bc76cc087d07f0e5.png)
 ![](RackMultipart20220127-4-netrgs_html_795e090605f627ff.png)

En el ejemplo 1, si cambiamos el LE (Lexical Environment) de b() myVar va a ser 2 porque léxicamente su ubicación cambió, por ende su enlace al OE (Outer Environment) va a ser a().

Ahora en el ejemplo 2 b() no puede ser ejecutada en el GEC porque no existe, solo existe en el LE de a()

![](RackMultipart20220127-4-netrgs_html_f57006dbf8ef0162.png) ![](RackMultipart20220127-4-netrgs_html_65dbf496c4a4cee7.png)

Ahora en el ejemplo 2 b() no puede ser ejecutada en el GEC porque no existe, solo existe en el LE de a()

**ES6 let** :Permite que JS declare una var, pero no se puede usar hasta que se defina. También se utiliza para block scoping. Si por ejemplo es usada dentro de un for loop, let i = 0; i \&lt; cars.length; i++ el valor de i va a ocupar un espacio distinto en memoria para cada iteración.

**Block scoping** : Una variable para ser usada únicamente dentro de un bloque de código.

**JavaScript Síncrono** : Cada operación se hace de una vez, bloqueando el flujo de ejecución, el hilo es bloqueado mientras espera la respuesta, cuando esta se procesa pasa a la siguiente operación y así sucesivamente al terminar todas las operaciones.

![](RackMultipart20220127-4-netrgs_html_9dab3905c26b0d11.png) ![](RackMultipart20220127-4-netrgs_html_4463323e274695f6.png)

**JavaScript Asíncrono** : Cada operación se ejecuta y devuelve inmediatamente el control al hilo, evitando el bloqueo, cuando cada operación termine se enviará una notificación de que ha terminado, es entonces cuando la respuesta se encolará para ser procesada.

![](RackMultipart20220127-4-netrgs_html_94a8b4aa16f2a269.png)
 ![](RackMultipart20220127-4-netrgs_html_2fd5ea067004544.png)

[Más Info](https://jonmircha.com/javascript-asincrono)

![](RackMultipart20220127-4-netrgs_html_36476bb51c6b708f.png)

Se arma el stack de contextos de ejecución y se va vaciando en orden, mientras que paralelamente se crea una cola de eventos.

![](RackMultipart20220127-4-netrgs_html_d5e0ad988c2b4378.png)

En el momento en que este stack se vacía, (se ejecutó el EC de b(), luego el de a() y luego lo que sea que esté en el GEC, siguiendo el orden del stack o pila) JavaScript escucha los eventos en la cola de eventos y por cada uno crea un EC de ser necesario, es decir, si hay un evento click que este dispara una función, se crearía un EC para este evento.

![](RackMultipart20220127-4-netrgs_html_2f552a805bf4f6ac.png)

**Dynamic Typing** : no se le dice al motor de JS qué tipo de dato tiene una variable, él lo descifra a medida que lo va leyendo en el código. Las variables pueden almacenar distintos tipos de datos que son entendidos o descifrados durante la ejecución.

![](RackMultipart20220127-4-netrgs_html_aeb56c71a3a36e44.png)

**Primitive Type** : un tipo de dato que representa un único valor. Algo que no es un objeto.

1. **Undefined** : representa un dato que aún no existe. Nunca debes declarar una variable con este tipo de dato.
2. **Null** : representa también algo que no existe, literalmente significa &#39;nada&#39; y puedes declarar una variable como null.
3. Boolean: true o false.
4. **Number** : número o floating point number. A diferencia de otros lenguajes, en JS solo existe un tipo de &#39;number&#39;.
5. **String** : una cadena de caracteres donde &#39;&#39; y &quot;&quot; pueden usarse.
6. **Symbol** : Se usa en ES6. Según MDN es un tipo de datos cuyos valores son únicos e immutables. Dichos valores pueden ser utilizados como identificadores (claves) de las propiedades de los objetos. Cada valor del tipo Symbol tiene asociado un valor del tipo String o Undefined que sirve únicamente como descripción del símbolo.

**Operator** : Una función especial que es sintácticamente diferente; generalmente toma dos parámetros y devuelve un resultado.

![](RackMultipart20220127-4-netrgs_html_c35fafd7f687a81e.png)

Para el syntax parser de JavaScript el signo &quot;+&quot; es como tener una función llamada &quot;+&quot; que devuelve la suma de los 2 parámetros. Infix notation.

&quot;_ **Los operators son funciones** _&quot;

**Operator precedence** : Que función operator es llamada primero. Las funciones son llamadas por orden de precedencia, mayor precedencia o prioridad gana.

**Associativity** : Es el orden en que un operator es llamado, de izquierda a derecha o de derecha a izquierda cuando tienen la misma precedencia en una función o en una línea de código.

![](RackMultipart20220127-4-netrgs_html_d3976302348b3452.png) ![](RackMultipart20220127-4-netrgs_html_620608afeefb0a7f.png)

![](RackMultipart20220127-4-netrgs_html_432c4c4ec940f48c.png) ![](RackMultipart20220127-4-netrgs_html_167224473a9cb3ec.png)

La precedencia es de izquierda a derecha pero matemáticamente la operación de multiplicación tiene precedencia ante la suma y esto JS lo sabe. En la siguiente tabla tabla tenemos varios ejemplos, recuerda el mayor número de precedencia indica cual función u operator será llamado primero. En el último ejemplo tiene precedencia el paréntesis, tal y como lo indica la tabla.

**Javascript Operator Precedence --\&gt;** [Operator Precedence ‐ Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)by Mozilla Contributors is licensed under CC‐BY‐SA 2.5.

**Coercion** : Convertir un tipo de valor a otro. Esto pasa en JS porque es de tipado dinámico.

![](RackMultipart20220127-4-netrgs_html_5b9be3e6f135d3ed.png) ![](RackMultipart20220127-4-netrgs_html_fe8166482f466389.png)

Lo que sucede es que al tener un número y un string los concatena y devuelve un string porque no puede sumar ambos tipos de datos.

**Comparison Operators --\&gt;** [Equality comparisons and sameness](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)by Mozilla Contributors is licensed under CC‐BY‐SA 2.5.

![](RackMultipart20220127-4-netrgs_html_b2368da663cb2e0a.png) ![](RackMultipart20220127-4-netrgs_html_fc74b8fde38a9e79.png)

La doble igualdad coerciona los tipos de dato para hacer la comparación

![](RackMultipart20220127-4-netrgs_html_5c9d0793aabfa940.png)

![](RackMultipart20220127-4-netrgs_html_7206341877cf889c.png) ![](RackMultipart20220127-4-netrgs_html_a83b566d7e6b9bec.png)

La coerción puede ser útil a la hora de setear valores por defecto, tal y como se demuestra en el segundo ejemplo. Si no existe el parámetro name entonces este tendrá un string por defecto. En el caso de que tengamos undefined || &#39;string&#39; el retorno será &#39;string&#39; porque por coerción tendríamos una evaluación false || true, donde true será el valor de &#39;string&#39;.

![](RackMultipart20220127-4-netrgs_html_435dc5f257948fe0.png) ![](RackMultipart20220127-4-netrgs_html_d627d64bf15f8ed9.png) ![](RackMultipart20220127-4-netrgs_html_9d7bc1bf4be3af90.png) ![](RackMultipart20220127-4-netrgs_html_ab73e7b5dc48a5ef.png)

El tener varios archivos JS importados no crea EC para cada archivo.

![](RackMultipart20220127-4-netrgs_html_2b8331ad441250e2.png)

![](RackMultipart20220127-4-netrgs_html_edd585db769536a5.png)

![](RackMultipart20220127-4-netrgs_html_135eb756b2df3993.png)

Cada variable queda vinculada al GO (window) por ende podemos fijarnos si ya tiene un valor y si este no es el caso podemos asignarle un valor default aprovechandonos de la coerción.

Estructura de un objeto en JS

![](RackMultipart20220127-4-netrgs_html_a83f87f82b3e01d0.png)

![](RackMultipart20220127-4-netrgs_html_cba4c7889131ccf8.png)

**Namespace** : Un contenedor de variables y funciones, normalmente para mantener las var y las funciones con el mismo nombre por separado, no en JS; los objetos se encargan de eso.

![](RackMultipart20220127-4-netrgs_html_439d6419cb2a8a59.png)

Podemos imitar un namespace creando objetos contenedores para que las variables no se pisen.

![](RackMultipart20220127-4-netrgs_html_b8469722ee72fb27.png) ![](RackMultipart20220127-4-netrgs_html_eb1d776863293d69.png)

En este ejemplo obtenemos un error porque no podemos crear propiedades al vuelo, es decir, asumiendo que ya existe el contenedor para italian pero que este no tiene la propiedad greetings y que a su vez esta contenga una propiedad greet, no podemos asignarla de otra forma que no sea inicializandolo el primer contenedor, de lo contrario sería como asignar la propiedad greet a undefined.

**JSON y Objetos Literales:** JSON Es un subset de JavaScript Object Notation donde puede almacenarse información en un &quot;objeto&quot; cuyas propiedades están encerradas en comillas dobles.

![](RackMultipart20220127-4-netrgs_html_9839f754183a5d8.png)

Esto nos permite convertir un objeto en formato JSON

![](RackMultipart20220127-4-netrgs_html_37449dd91272b6fb.png)

Mientras que este otro ejemplo hace lo contrario, convierte JSON en un objeto literal

![](RackMultipart20220127-4-netrgs_html_8560aeedabdc1d72.png)

**First Class Functions** : Son funciones almacenadas en una variable, creadas al vuelo, pasadas como argumento o retornadas por otra función. Todo lo que puede hacer con otros tipos lo puedes hacer con funciones, es decir, puedes asignarlas a var, pasarlas, o crearlas sobre la marcha.

![](RackMultipart20220127-4-netrgs_html_8257cc57032f6b44.png)

![](RackMultipart20220127-4-netrgs_html_d0b2be9f4e8b602e.png)

![](RackMultipart20220127-4-netrgs_html_3603d2d66d763692.png)

Esto es posible porque para JS las funciones son objetos.

**Function**** Expression**: Una porción de código que resulta en una variable, no tiene que guardarse en una variable.

![](RackMultipart20220127-4-netrgs_html_644b1621acf7702c.png)

![](RackMultipart20220127-4-netrgs_html_6c0aebf0f29cdd40.png)

![](RackMultipart20220127-4-netrgs_html_8f97e10e8714fa37.png)

En JS las funciones y las variables hoisteadas de forma distinta, la función es un objeto especial, por ende es almacenada en su totalidad, mientras que las variables son declaradas como undefined al momento de su creación, por eso en la primera ejecución retornamos el console.log y en la segunda ejecución un error. Porque en la fase de ejecución todavía no contiene un objeto sino undefined.

**By value** : Cuando se pasa un valor de una variable a otra, copiando el valor a dos espacios de memoria separados. Usado por valores primitivos.

![](RackMultipart20220127-4-netrgs_html_1737334df22b72da.png)

![](RackMultipart20220127-4-netrgs_html_744ce2256d50c967.png)

**By reference** : Cuando se pasa un valor que apuntan al mismo espacio de memoria, de esta forma trabajan los objetos (objetos, dunciones, arrays).

![](RackMultipart20220127-4-netrgs_html_609b98a46c18f47a.png)

**Mutate** : Cambiar el valor.

**Inmutable** : No puede ser cambiado.

![](RackMultipart20220127-4-netrgs_html_7640bd8dc770ab45.png)

En la línea 29 vemos un caso especial donde by reference no aplica porque no apunta al mismo espacio de memoria sino a un objeto nuevo creado al vuelo.

&quot;_ **Cuando una función se ejecuta un nuevo Execution Context o Contexto de Ejecución es creado&quot;** _

![](RackMultipart20220127-4-netrgs_html_ca219f21e3e3dfa2.png)

![](RackMultipart20220127-4-netrgs_html_4495875339abeb04.png)

![](RackMultipart20220127-4-netrgs_html_6a37532d590567c1.png)

Por alguna razón el this dentro de una función declarativa que está dentro de un método, apunta al objeto global 🤷... Pero puede solucionarse, creando una variable cuya referencia sea el this de este contexto. Ej:

![](RackMultipart20220127-4-netrgs_html_d908121c836f76eb.png)

De esta manera estamos completamente seguros que estamos apuntando al objeto deseado.

**Arguments** : creados cuando el contexto de ejecución de una función es creado. Alberga los parámetros pasados a dicha función en forma de array. Por otra parte podemos decir que los argumentos son los parámetros pasados a una función, sin embargo, javascript tiene la palabra reservada o keyword con el mismo nombre y como se expresa anteriormente, los contiene todos.

![](RackMultipart20220127-4-netrgs_html_eff13b4033d00837.png)

![](RackMultipart20220127-4-netrgs_html_b19a30050031700a.png)

En la línea 2 se puede ver que se asigna un valor por defecto, y no es remplazado hasta que nos llega como parámetro en la ejecución de la línea 21.

![](RackMultipart20220127-4-netrgs_html_a12972c4a9b834a0.png)

![](RackMultipart20220127-4-netrgs_html_f17c70de97f9fae8.png)

![](RackMultipart20220127-4-netrgs_html_617e52de92dbaff5.png)

![](RackMultipart20220127-4-netrgs_html_8814c8a32a02d7ff.png)

Al ser los argumentos interpretados como un array validarlos y tratarlos de la misma manera para ejecutar nuestro código en concordancia.

Teniendo esto en cuenta podemos usar el spread operator de la misma forma en que lo haríamos con un array para agregar otros parámetros

![](RackMultipart20220127-4-netrgs_html_fa56650acfe4fda0.png)

![](RackMultipart20220127-4-netrgs_html_87532ae059626e9d.png)

![](RackMultipart20220127-4-netrgs_html_906c98b52beb3025.png)

**Function Overloading** : No existe en JS, lo que significa que no puede tener funciones con el mismo nombre y diferentes parámetros porque son objetos Si se necesita llamar una función con usos distintos, foo(x) y foo(x,y,z) podemos seguir el siguiente approach:

![](RackMultipart20220127-4-netrgs_html_2224fb5de48f8920.png)

**Automatic Semicolon Insertion** : Aunque son opcionales, si hay un retorno de carro o salto de línea (enter) en tu código, el syntax parser puede insertar un punto y coma. Siempre agrega una llave rizada en la misma línea para evitar esto. Ej:

![](RackMultipart20220127-4-netrgs_html_44661cba38a645ef.png)

![](RackMultipart20220127-4-netrgs_html_aff56307d1b0f036.png)

**Whitespace** : Caracteres invisibles que crean un &quot;espacio&quot; literal en su código escrito. Retornos de carro, tabulaciones, espacios.

![](RackMultipart20220127-4-netrgs_html_cc2a7c89f46e49a9.png)

**Imediately Invoked Function Expressions (IIFEs)**: Expresión de función que se invoca inmediatamente cuando se crea. La var será el valor devuelto, no la función. Se utiliza para eliminar cosas del contexto global.

![](RackMultipart20220127-4-netrgs_html_451574f2d325d49c.png)

![](RackMultipart20220127-4-netrgs_html_3f09efcd32b42c09.png)

**Closures** : Donde un contexto de ejecución todavía tiene acceso a variables / referencias al espacio de memoria en un contexto de ejecución más grande, incluso si el contexto de ejecución principal ha salido de la pila. El scope está intacto, dicho de otra forma, sería cuando una función es capaz de recordar y acceder a un lexical scope, incluso cuando la función es ejecutada por fuera del lexical scope.

![](RackMultipart20220127-4-netrgs_html_1892c185f6cab7a6.png)

![](RackMultipart20220127-4-netrgs_html_dec5ae334286c0de.png)

El segundo paréntesis accede a la función anónima dentro de greet, esto puede hacerse de otra manera, en la ejecución de la variable sayHi, pasamos el parámetro &#39;Tony&#39;, que corresponde de igual forma al contexto de ejecución de la función anidada en greet.

[Closure info mozilla dev](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

**Lexical scope** : Significa que en un grupo anidado de funciones, las funciones internas tienen acceso a las variables y otros recursos de su scope principal. Esto significa que las funciones hijas están ligadas léxicamente al contexto de ejecución de sus padres. El lexical scope a veces también se denomina scope estático.

![](RackMultipart20220127-4-netrgs_html_d9ce66bef4c162f9.png) ![](RackMultipart20220127-4-netrgs_html_29d80e2537878f88.png)

Al momento en que se ejecuta fs, se ejecutó el ciclo for, donde se reescribió el valor de i hasta el momento de en que la expresión era false, en ese momento i = 3, y en cada contexto de ejecución va a ser igual, porque apunta a la misma referencia externa y nos devolverá el valor de i en el momento en que se ejecutó la función, si esperábamos que el valor de i en cada iteración fuese 0,1 y 2 podemos lograrlo usando let en lugar de var, creando una nueva referencia externa en cada iteración.

![](RackMultipart20220127-4-netrgs_html_75f6477dae642138.png)

Otro método alternativo, donde no usamos let sería:

![](RackMultipart20220127-4-netrgs_html_2b25bac8134e21ef.png)

En este caso estamos creando una IIFE que retorna una función que imprime el valor de i en cada contexto de ejecución.

**Function factories** : Son funciones que retornan funciones, generalmente haciendo uso de closures.

![](RackMultipart20220127-4-netrgs_html_1d8407592404036b.png)

En este ejemplo, se generan 2 contextos de ejecución, con 2 parámetros distintos, en cada contexto se almacena language, en y es, apuntando a 2 espacios de memoria distinto y se retornará una función en concordancia a dichos parámetros, esto sucede cuando las variables greetEnglish y greetSpanish son igualadas a la ejecución de makeGreetings, después al ejecutar greetEnglish y greetSpanish con parámetros distintos sucede lo mismo, creamos 2 contextos de ejecución distintos que apuntan al closure correspondiente

![](RackMultipart20220127-4-netrgs_html_c708b1b00ff12294.png)

**Callbacks** : una función que tiene a otra función, que se ejecutará cuando la otra función haya finalizado.

![](RackMultipart20220127-4-netrgs_html_525ebe71ac087b63.png)

**call(), apply() y bind() --\&gt; vinculados al objeto this**

![](RackMultipart20220127-4-netrgs_html_50af9683edcf2429.png)

**bind()**: crea una copia de una función y le pasa cualquier objeto que se le quiera vincular a la variable &quot;this&quot;.

![](RackMultipart20220127-4-netrgs_html_c664fff177f6da8e.png)

Si se intentara ejecutar logName obtendríamos un error, ya que el this al que hace referencia es el objeto window y getFullName no existe en ese scope. Al utilizar la función bind con logName y person, el &quot;this&quot; ahora apunta al objeto person. También puede hacerse al vuelo, vinculándo person directamente a la función logName:

![](RackMultipart20220127-4-netrgs_html_f2b65c939f0c50a2.png)

**call()**: es directamente un llamado o invocacipon a una función y recibe parámetros para su ejecución.

![](RackMultipart20220127-4-netrgs_html_f8c6106980c14b61.png)

![](RackMultipart20220127-4-netrgs_html_1333396321a29ab0.png)

Al igual que bind() vincula this.getFullname a person pero en este caso no es una copia de logName, es la ejecución de dicha función pasándole también los argumentos lang1 y lang2

**apply():** funciona igual que call, la diferencia es que recibe como segundo parámetro un array de parámetros.

![](RackMultipart20220127-4-netrgs_html_5cb6dcf5f07c62cd.png)

![](RackMultipart20220127-4-netrgs_html_a037603909d899bd.png)

Incluso puede usarse con IIFEs

**Function/Method borrowing** : aplicar métodos de un objeto en otro, sin necesidad de copiar todo el objeto anterior. Mientras que tengan propiedades similares.

![](RackMultipart20220127-4-netrgs_html_3f3f766d3a261dde.png)

![](RackMultipart20220127-4-netrgs_html_b3160a2a76e3542b.png)

**Function currying** : Curry es poder llamar una función con menos parámetros de los que espera, esta devuelve una función que espera los parámetros restantes y retorna el resultado. Podría decirse que consiste en transformar una función que utiliza múltiples argumentos en una secuencia de funciones que utilizan un único argumento.

![](RackMultipart20220127-4-netrgs_html_5d22f0d0a1e37b.png)

En este ejemplo, bind crea una copia de multiply y convierte 2 en el valor por defecto de &quot;a&quot; y luego al invocar multiplyByTwo con cualquier parámetro, este seconvierte automaticamente en el segundo parámetro o &quot;b&quot; de la copia de multiply, sería lo mismo que hacer esto:

![](RackMultipart20220127-4-netrgs_html_86fbdb661ba54deb.png)

**Function programming** :

![](RackMultipart20220127-4-netrgs_html_3f1cdeddc46880b3.png)

Podemos refactorizar el contenido de ese for en una función que pueda reutilizarse para iterar con el contenido de arr1 de distintas maneras:

![](RackMultipart20220127-4-netrgs_html_37de1d76d0dd6800.png)

Esta función recibe un array y una función como parámetros, crea un nuevo array e itera con su contenido con cualquier función que le pasemos como parámetro.

![](RackMultipart20220127-4-netrgs_html_d6356fde0bd2276a.png)

Puede realizar operaciones matemáticas o comparaciones, de esta forma creamos código limpio y reutilizable.

![](RackMultipart20220127-4-netrgs_html_ca43dbcee846650f.png)

Incluso utilizando [currying](https://javascript.info/currying-partials) se pueden simplificar argumentos

![](RackMultipart20220127-4-netrgs_html_e667d1364e7ae6e7.png)

Utilizando librerías --\&gt; [underscorejs](https://underscorejs.org/)

**Inheritance** : Cuando un objeto tiene acceso a propiedades y métodos de otro objeto.

Prototype: Es un objeto escondido, puede accederse con &quot;.\_\_proto\_\_&quot;

**Classical Inheritance vs Prototypal Inheritance** : La forma más popular y más antigua, muy detallada. VS. Una forma simple, flexible, extensible y fácil de entender.

![](RackMultipart20220127-4-netrgs_html_cb1ea48e91b6afb.png)

![](RackMultipart20220127-4-netrgs_html_90291dacc6f1d1aa.png)

Solo para efectos académicos se usa &quot;\_\_proto\_\_&quot; para acceder al prototipo de persona desde el objeto &quot;john&quot; y acceder al método &quot;getFullName&quot;.

Esto solo se puede lograr utilizando funciones tradicionales, ya que el entorno de &quot;this&quot; en una función de flecha apunta al lexical scope de su padre, que en este caso sería window.

![](RackMultipart20220127-4-netrgs_html_b4ceb23240f2787a.png)

![](RackMultipart20220127-4-netrgs_html_ff28637bfb5287f3.png) ![](RackMultipart20220127-4-netrgs_html_704267db5c284f6a.png)

![](RackMultipart20220127-4-netrgs_html_7ac49bcbe0b0fcf6.png)

![](RackMultipart20220127-4-netrgs_html_df7da47c99c722a7.png)

![](RackMultipart20220127-4-netrgs_html_8468150d0c67c358.png)

¿Por qué John y no default? Porque en la cadena de prototipo, firstname existe dentro del objeto &quot;john&quot;.

![](RackMultipart20220127-4-netrgs_html_4e633edd74873dbd.png)

Si esa propiedad no existiese en el objeto &quot;john&quot;, al imprimir &quot;getFullName&quot; obtendríamos &quot;Default Doe&quot; porque buscaría la propiedad firstname en el objeto vinculado al &quot;\_\_proto\_\_&quot; que sería &quot;person&quot;

[Arrow functions vs Regular functions](https://levelup.gitconnected.com/arrow-function-vs-regular-function-in-javascript-b6337fb87032)

[Differences between Arrow functions and Regular functions](https://dmitripavlutin.com/differences-between-arrow-and-regular-functions/)

_ **¿Cuál es el fin de la cadena de prototipo? --\&gt; El objeto base.** _

_ **¿Cómo acceder a las funciones de JavaScript? --\&gt; Existen en el prototipo.** _

**Reflection** : Un objeto puede mirarse a si mismo, listando y cambiando sus propiedades y métodos.

**Extend** : a través de reflection, un objeto puede extender o agregar propiedades y métodos en otros objetos.

![](RackMultipart20220127-4-netrgs_html_e0c7ff1e7bc1e9f1.png)

![](RackMultipart20220127-4-netrgs_html_f73f4c6fe588f274.png)

**Function contructors** : Una función utilizada para crear un nuevo objeto vacío. Y este objeto es retornado de la función automáticamente.

**Building objects** :

![](RackMultipart20220127-4-netrgs_html_1b88a59375d24c3.png)

Creamos una función, con propiedades, a través de new creamos un objeto vacío y ejecutamos la función Person() para asignarle sus propiedades. Esto fue hecho para atraer a desarrolladores de otros lenguajes como Java, creando una sintaxis similar a la que se usa para crear clases en dicho lenguaje. De esta forma el contexto de &quot;this&quot; cambia con la ejecución de new Person(), this ahora es el objeto &quot;john&quot;.

![](RackMultipart20220127-4-netrgs_html_3c09a0d9627c19d5.png) ![](RackMultipart20220127-4-netrgs_html_284f8a9c36b42ea4.jpg)

![](RackMultipart20220127-4-netrgs_html_e442e00a43d836d6.png)

![](RackMultipart20220127-4-netrgs_html_f37690b107d3fde1.png)

De igual forma el objeto Person sigue siendo una función y por eso es invocable.

![](RackMultipart20220127-4-netrgs_html_b7704425bdba86a5.png)

![](RackMultipart20220127-4-netrgs_html_6e0d34f979c14c02.png)

Como es de suponer, la variable &quot;jane&quot; apunta al mismo lugar de memoria de Person, por ende, firstname y lastname nunca van a cambiar, pero podemos usar una función para crear un objeto donde el valor de sus propiedades sean parámetros, para que de esta forma cada propiedad tenga su valor único.

![](RackMultipart20220127-4-netrgs_html_679d1f09219ca8ea.png)

**Function Constructors y prototype** :

![](RackMultipart20220127-4-netrgs_html_666d2ff660faa774.png)

Este &quot;prototype&quot; no es el mismo prototipo de todos los objetos al que podemos acceder a través de dot notation y &quot;\_\_proto\_\_&quot;, este &quot;prototype&quot; vive dentro de todas las funciones y no se utiliza a menos que se ejecute esa función para construir un objeto.

![](RackMultipart20220127-4-netrgs_html_cf4f70fbb1ecabd6.png)

La ventaja del uso de prototype es el uso de memoria, ya que al crear métodos en prototype, no es una copia de dicho método para cada objeto creado por la ejecución de la función constructor, es el mismo método como propiedad para todos los objetos creados por Person o Student en el ejemplo. Si agregáramos un método directamente en el objeto Person, vamos a tener 1000 copias de dicho método si creáramos mil objetos a partir de Person en cambio si los creamos en el prototype, ahorramos espacio asignándole a los 1000 objetos, el mismo método.

**Function Constructors y new:**

IMPORTANTE SOBRE EL USO DE &quot;new&quot;:

Cuando ejecutemos una function constructor nunca olvidemos el new, de lo contrario se ejecutará como una función tradicional y no creará el objeto deseado.

![](RackMultipart20220127-4-netrgs_html_3a45ca5fdf26ab32.png)

Consejo, como convención utiliza letra capitular en function constructor, eso te ayudará a identificar errores en el caso de que hayas olvidado agregar el operador &quot;new&quot; y aún mejor a un linter (si está instalado en tu IDE) a identificar el error.

**Function Constructors Built-in function constructors** :

![](RackMultipart20220127-4-netrgs_html_cb9f002b50fef95e.png)

El valor de &quot;a&quot; como puede verse, no es un primitivo, es un objeto Number generado por el operador new en conjunto con la función Number, lo que nos devuelve un objeto con un primitivo. Este objeto number tiene un prototipo y como tal tiene todas sus propiedades y métodos.

![](RackMultipart20220127-4-netrgs_html_8675b36e7a429a0a.png)

Lo mismo con la función String

![](RackMultipart20220127-4-netrgs_html_28f7634155e09316.png)

![](RackMultipart20220127-4-netrgs_html_119a37529d0a21aa.png)

![](RackMultipart20220127-4-netrgs_html_74c5a00a2f4fefec.png)

![](RackMultipart20220127-4-netrgs_html_a293894ac09c5c9b.png)

En el ejemplo anterior &quot;Tony&quot; es un primitivo pero se le puede aplicar la propiedad .length porque el motor de JavaScript lo envuelve en un objeto para poder aplicarle dicho método.

![](RackMultipart20220127-4-netrgs_html_95597105e7f8f6e4.png)

Esto es posible ya que por herencia todos los strings tienen acceso al método isGreatherThan, además como indicamos en ejemplo anteriores el string &#39;Tony&#39; es interpretado como un objeto que contiene el primitivo con el valor antes mencionado.

![](RackMultipart20220127-4-netrgs_html_98df463fffa1528c.png)

Sin embargo, lo mismo no es posible trabajando con números directamente, porque con los strings JavaScript tiene la gentileza de convertirlos en objetos automáticamente.

![](RackMultipart20220127-4-netrgs_html_7a9368778f6deb4c.png)

Tomando en cuenta lo aprendido, creamos una variable Number que contiene el primitivo 15 entonces si podemos aplicarle el método isPositive.

String y Number son objetos, &#39;Tony&#39; es interpretado como un objeto pero 15 no es interpretado de esta manera a menos que lo pasemos como valor del objeto Number.

IMPORTANTE

![](RackMultipart20220127-4-netrgs_html_10ddbf08243bbfd0.png)

Esto es posible porque la doble igualdad no evalúa tipo y el valor de numB es cohersionado a 3 por el operador ==