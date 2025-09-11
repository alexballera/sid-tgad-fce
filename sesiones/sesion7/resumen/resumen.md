# 💻 Fundamentos de Programación

## 🎯 Guía de Estudio Detallada: Conceptos de Programación

> **Objetivo:** Esta guía está diseñada para comprender los conceptos fundamentales de programación, los tipos de lenguajes, procesos de traducción y la evolución histórica de la programación de computadoras.

---

## 🏗️ I. Conceptos Fundamentales de Programación

### 🔄 A. El Proceso de Programación

#### 📋 Etapas del Desarrollo de Software

1. **🎯 Problema:** Identificación y comprensión del problema a resolver.

2. **⚙️ Algoritmo:** Diseño de la secuencia lógica de pasos para resolver el problema. Se puede representar en pseudocódigo.

3. **📝 Programa Fuente (código fuente):** El algoritmo traducido a un lenguaje de programación específico.

4. **✏️ Edición:** Creación y modificación del código fuente utilizando un editor de texto o un Entorno de Desarrollo Integrado (IDE).

5. **🔄 Compilación/Interpretación:** Transformación del programa fuente en un formato ejecutable por la computadora.

6. **🗂️ Programa Objeto:** Resultado de la compilación, un archivo en código máquina o un formato intermedio.

7. **🔗 Enlazado (linking):** Proceso de combinar el programa objeto con librerías y otros módulos para crear el programa ejecutable.

8. **▶️ Ejecución:** Carga y ejecución del programa ejecutable por la computadora para obtener un resultado.

9. **🔍 Verificación y Corrección de Errores:** Identificación y solución de errores (bugs) en el código.
B. El Procesador y el Proceso de Ejecución
• El procesador realiza operaciones lógicas y aritméticas para ejecutar un algoritmo.
• Un programa se escribe en un lenguaje de programación y debe ser traducido a lenguaje máquina para que el procesador lo entienda.
• Lenguaje máquina: El único lenguaje que la computadora entiende directamente, compuesto por secuencias binarias (0s y 1s).
• Código objeto: Una representación del programa en lenguaje máquina.
• Código ejecutable: El programa en formato binario listo para ser ejecutado por la computadora.
II. Lenguajes de Programación
A. Tipos de Lenguajes
• Lenguajes de bajo nivel:
    ◦ Lenguaje máquina: Secuencias de 0s y 1s directamente ejecutables por el hardware. Difíciles de leer y escribir para humanos.
    ◦ Lenguaje ensamblador (nemotécnicos): Utiliza abreviaturas mnemotécnicas para representar instrucciones de máquina. Requiere un ensamblador para traducirse a lenguaje máquina.
• Lenguajes de alto nivel:
    ◦ Diseñados para ser más cercanos al lenguaje humano, facilitando la programación.
    ◦ Permiten escribir programas de manera más abstracta, sin preocuparse por los detalles del hardware.
    ◦ Ejemplos: FORTRAN, COBOL, Pascal, C, C++, Java, Python, JavaScript.
B. Traductores de Lenguaje
• Programas que convierten el código fuente de un lenguaje de programación a otro formato que la computadora pueda entender.
• Compiladores:
    ◦ Traducen el programa fuente completo a un programa objeto (código máquina) antes de su ejecución.
    ◦ Generan un archivo ejecutable que puede correrse múltiples veces sin necesidad de recompilación (a menos que el código fuente cambie).
    ◦ Ejemplos: Compiladores de C++, Java, Pascal, FORTRAN, COBOL.
• Intérpretes:
    ◦ Traducen y ejecutan el programa línea por línea.
    ◦ No generan un archivo ejecutable independiente; el programa se traduce cada vez que se ejecuta.
    ◦ Ejemplos: Intérpretes de BASIC, JavaScript, Python.
• Ensambladores: Traducen programas escritos en lenguaje ensamblador a lenguaje máquina.
C. Fases de la Compilación
1. Edición: Se escribe el programa fuente con un editor.
2. Compilación: El compilador traduce el programa fuente a programa objeto.
3. Verificación y Corrección de Errores: Se identifican y resuelven errores de compilación.
4. Enlazado: Se combinan el programa objeto con librerías para crear el programa ejecutable.
5. Ejecución: El programa ejecutable se ejecuta.
III. Evolución de los Lenguajes de Programación
A. Hitos Históricos
• Años 40: Lenguaje máquina como la única forma de programar.
• Años 50: Introducción de lenguajes ensambladores.
• Años 50-60: Primeros lenguajes de alto nivel como FORTRAN (cálculo científico) y COBOL (negocios).
• Años 60-70: Algol, LISP, Pascal (enseñanza), Simula (conceptos OO).
• Años 70-80: C (sistemas operativos), Smalltalk (OO puro).
• Años 80-90: C++ (extensión de C con OO), Ada (sistemas embebidos).
• Años 90-2000s: Java (programación orientada a internet), Python, C# (Microsoft).
B. Paradigmas de Programación
• Paradigma Imperativo/Procedimental:
    ◦ Enfocado en describir cómo realizar una tarea mediante una secuencia de instrucciones que modifican el estado del programa.
    ◦ Se basa en el concepto de "ordenar" a la computadora qué hacer paso a paso.
    ◦ Ejemplos: FORTRAN, COBOL, Pascal, C, Ada.
• Paradigma Declarativo:
    ◦ Enfocado en describir qué se quiere lograr, sin especificar cómo hacerlo.
    ◦ El sistema se encarga de determinar los pasos para alcanzar el resultado.
    ◦ Se basa en la lógica formal y deducción.
    ◦ Ejemplo: Prolog.
• Paradigma Orientado a Objetos (POO):
    ◦ Organiza el diseño del software alrededor de "objetos" que combinan datos (atributos) y funciones (métodos).
    ◦ Principios clave: encapsulamiento, herencia, polimorfismo.
    ◦ Facilita la modularidad y la reutilización del código.
    ◦ Ejemplos: C++, Java, C#, Smalltalk, Python.
IV. Componentes de una Computadora y Tipos de Software
A. Hardware
• Dispositivos de Entrada/Salida (E/S): Teclado, monitor, mouse, impresora.
• Unidad Central de Proceso (UCP): El cerebro de la computadora, incluye la Unidad de Control y la Unidad Aritmético-Lógica.
• Memoria Central: Almacena temporalmente datos y programas en ejecución (RAM).
• Dispositivos de Almacenamiento Masivo: Discos duros, SSDs, USB (almacenamiento persistente).
B. Software
• Software de Sistema:
    ◦ Sistema Operativo: Gestiona los recursos de hardware y software (Windows, Linux, macOS).
    ◦ Traductores de Lenguaje: Compiladores, intérpretes, ensambladores.
• Software de Aplicación: Programas diseñados para tareas específicas del usuario (procesadores de texto, navegadores web, juegos).
--------------------------------------------------------------------------------
Quiz: Fundamentos de Programación
Instrucciones: Responda las siguientes preguntas con 2-3 oraciones cada una.
1. Explique brevemente la diferencia fundamental entre un lenguaje de bajo nivel y uno de alto nivel.
2. ¿Cuál es el propósito principal de un algoritmo en el proceso de programación y cómo se relaciona con el pseudocódigo?
3. Describa la función de un compilador y mencione una ventaja clave de su uso en comparación con un intérprete.
4. ¿Qué es un programa fuente y cuál es su rol antes de la compilación o interpretación?
5. Explique por qué el lenguaje máquina es fundamental para la ejecución de cualquier programa.
6. ¿En qué consiste el proceso de "enlazado" (linking) y por qué es necesario en la fase de compilación?
7. Mencione dos características distintivas del paradigma de programación imperativo/procedimental.
8. ¿Qué es un ensamblador y cómo se diferencia de un compilador en términos del tipo de lenguaje que traduce?
9. Describa brevemente el concepto de "programa ejecutable" y cómo se obtiene.
10. ¿Cuál es el papel del sistema operativo en la relación entre un programa y el hardware de la computadora?
--------------------------------------------------------------------------------
Clave de Respuestas del Quiz
1. Los lenguajes de bajo nivel, como el lenguaje máquina o ensamblador, están cerca del hardware y son difíciles para los humanos. Los lenguajes de alto nivel, como Python o Java, son más cercanos al lenguaje natural, facilitando la escritura y comprensión del código.
2. El propósito principal de un algoritmo es definir la secuencia lógica de pasos para resolver un problema de manera precisa. El pseudocódigo es una forma de representar este algoritmo de manera informal, antes de traducirlo a un lenguaje de programación específico.
3. Un compilador traduce todo el programa fuente a código máquina (programa objeto) antes de la ejecución. Una ventaja clave es que, una vez compilado, el programa ejecutable puede correrse directamente y más rápido sin necesidad de retraducción, a diferencia de un intérprete.
4. Un programa fuente es el código que el programador escribe en un lenguaje de programación de alto nivel. Su rol antes de la compilación o interpretación es ser la entrada principal para los traductores, quienes lo convertirán en un formato que la máquina pueda entender y ejecutar.
5. El lenguaje máquina es fundamental porque es el único lenguaje que la Unidad Central de Proceso (UCP) de la computadora puede entender y ejecutar directamente. Todos los programas, sin importar el lenguaje en que fueron escritos, deben eventualmente traducirse a este formato binario.
6. El proceso de enlazado consiste en combinar el programa objeto (generado por el compilador) con librerías de funciones ya existentes y otros módulos de código. Esto es necesario para crear un programa ejecutable completo y autocontenido que pueda funcionar correctamente en el sistema operativo.
7. El paradigma imperativo/procedimental se enfoca en describir "cómo" realizar una tarea mediante una secuencia explícita de instrucciones. Además, organiza el código en procedimientos o funciones que realizan pasos específicos para modificar el estado del programa.
8. Un ensamblador es un programa traductor que convierte código escrito en lenguaje ensamblador (nemotécnicos) a lenguaje máquina. Se diferencia de un compilador porque un compilador traduce lenguajes de alto nivel, mientras que un ensamblador trabaja con un lenguaje de bajo nivel más cercano a la arquitectura del procesador.
9. Un programa ejecutable es la versión final de un programa que está lista para ser cargada y ejecutada directamente por el sistema operativo de una computadora. Se obtiene después de que el programa fuente ha sido compilado (si aplica) y enlazado, resultando en código máquina listo para su ejecución.
10. El sistema operativo actúa como intermediario entre los programas de aplicación y el hardware de la computadora. Gestiona los recursos (memoria, procesador, E/S) y proporciona un entorno para que los programas se ejecuten de manera eficiente y segura.
--------------------------------------------------------------------------------
Preguntas de Ensayo
1. Compare y contraste los paradigmas de programación imperativo/procedimental y orientado a objetos, discutiendo sus enfoques principales, ventajas y desventajas en el diseño de software.
2. Analice la importancia histórica y técnica de los lenguajes de bajo nivel (ensamblador y máquina) en el desarrollo de la programación. ¿Por qué, a pesar de la aparición de lenguajes de alto nivel, siguen siendo relevantes en ciertos contextos?
3. Describa en detalle el ciclo completo de vida de un programa, desde la concepción de un problema hasta su ejecución, enfatizando las interacciones entre el programador, el lenguaje de programación y las herramientas de traducción (compiladores/intérpretes).
4. Explique cómo la evolución de los lenguajes de programación ha influido en la complejidad y eficiencia del desarrollo de software a lo largo de las décadas. Incluya ejemplos de lenguajes clave en diferentes eras.
5. Diferencie claramente entre compiladores e intérpretes, incluyendo sus mecanismos de funcionamiento, cuándo es más apropiado usar cada uno y cómo estas decisiones afectan el rendimiento y la flexibilidad de un programa.
--------------------------------------------------------------------------------
Glosario de Términos Clave
• Algoritmo: Conjunto finito y ordenado de pasos lógicos y no ambiguos para resolver un problema o realizar una tarea específica.
• Lenguaje de Programación: Lenguaje formal, compuesto por un conjunto de palabras, símbolos y reglas sintácticas, utilizado para escribir programas que controlan el comportamiento de una máquina.
• Lenguaje Máquina: El lenguaje de programación de más bajo nivel, compuesto por secuencias binarias (0s y 1s) que el procesador de una computadora puede ejecutar directamente.
• Lenguaje Ensamblador: Lenguaje de bajo nivel que utiliza nemotécnicos (abreviaturas) para representar instrucciones de máquina, más legible que el lenguaje máquina puro.
• Lenguaje de Alto Nivel: Lenguaje de programación diseñado para ser más cercano al lenguaje humano y más fácil de entender para los programadores, permitiendo mayor abstracción del hardware.
• Programa Fuente (Código Fuente): El conjunto de instrucciones escritas por el programador en un lenguaje de programación de alto o bajo nivel, antes de ser traducido.
• Programa Objeto (Código Objeto): Archivo generado por un compilador, que contiene el código fuente traducido a lenguaje máquina o a un formato intermedio, pero aún no ejecutable directamente.
• Programa Ejecutable: La versión final de un programa en lenguaje máquina, lista para ser cargada y ejecutada por el sistema operativo de la computadora.
• Compilador: Programa traductor que convierte todo un programa fuente escrito en un lenguaje de alto nivel a un programa objeto (código máquina) antes de su ejecución.
• Intérprete: Programa traductor que ejecuta un programa fuente línea por línea, traduciendo y ejecutando cada instrucción al momento, sin generar un archivo ejecutable independiente.
• Ensamblador: Programa traductor que convierte un programa escrito en lenguaje ensamblador a lenguaje máquina.
• Enlazador (Linker): Herramienta que combina uno o más programas objeto con librerías y otros módulos para crear un programa ejecutable final.
• Pseudocódigo: Descripción de un algoritmo de manera informal, utilizando una mezcla de lenguaje natural y convenciones de programación, sin adherirse a la sintaxis de un lenguaje específico.
• Paradigma de Programación: Estilo fundamental de programación que proporciona una forma de estructurar y organizar los programas.
• Paradigma Imperativo/Procedimental: Paradigma enfocado en describir cómo un programa debe realizar una tarea mediante una secuencia explícita de instrucciones y procedimientos.
• Paradigma Orientado a Objetos (POO): Paradigma que organiza el diseño de software alrededor de objetos, que son instancias de clases y combinan datos y comportamientos.
• Hardware: Los componentes físicos y tangibles de una computadora, como la CPU, memoria, disco duro y periféricos.
• Software: Los programas, datos, reglas y documentación asociados con el funcionamiento de un sistema informático, la parte no física.
• Sistema Operativo: Software principal que gestiona los recursos de hardware y software de una computadora, proporcionando servicios comunes para los programas de aplicación.
• UCP (Unidad Central de Proceso): El "cerebro" de la computadora, responsable de ejecutar instrucciones de programas y procesar datos.
--------------------------------------------------------------------------------
Fundamentos y Evolución de la Programación
¿Qué es un algoritmo y cómo se relaciona con la programación?
Un algoritmo es una secuencia organizada y finita de pasos que un procesador debe seguir para resolver un problema o realizar una tarea específica. En el contexto de la programación, los algoritmos son la base de los programas de computadora. Primero se concibe el algoritmo para entender y describir el proceso que la computadora debe realizar, y luego este algoritmo se traduce a un lenguaje de programación para que la computadora pueda ejecutar las operaciones correspondientes. Un algoritmo bien diseñado es esencial para crear programas eficientes y correctos.
¿Cuáles son las diferencias entre los lenguajes de bajo nivel y los lenguajes de alto nivel?
Los lenguajes de bajo nivel están más cerca del lenguaje de máquina que entiende directamente la computadora, como el código binario o los lenguajes ensambladores. Son difíciles de leer y escribir para los humanos, pero ofrecen un control muy preciso sobre el hardware y suelen ser muy rápidos. Los lenguajes de alto nivel, en cambio, utilizan palabras y estructuras sintácticas más cercanas al lenguaje humano (inglés, español, portugués, etc.), lo que los hace más fáciles de aprender, leer y mantener. Aunque requieren un proceso de traducción (compilación o interpretación) para ser ejecutados por la máquina, permiten desarrollar programas de manera más eficiente y portable.
¿Qué es la compilación y la interpretación en la programación?
La compilación y la interpretación son dos procesos fundamentales para traducir programas escritos en lenguajes de alto nivel a código que la computadora pueda ejecutar. La compilación implica el uso de un programa llamado "compilador" que traduce el código fuente completo de un programa a un "programa objeto" (código máquina o intermedio) antes de su ejecución. Si hay errores, el compilador los detecta y no genera el programa objeto. Una vez compilado, el programa se puede ejecutar muchas veces sin necesidad de recompilación. La interpretación, por otro lado, utiliza un "intérprete" que traduce y ejecuta el código fuente línea por línea, en tiempo real. Si encuentra un error, se detiene en esa línea. Los programas interpretados son más flexibles y fáciles de depurar, pero suelen ser más lentos que los compilados.
¿Cómo han evolucionado los lenguajes de programación desde sus inicios?
La evolución de los lenguajes de programación ha sido un viaje desde las primeras computadoras en la década de 1940, donde la programación se hacía directamente en lenguaje de máquina (código binario), extremadamente tedioso y propenso a errores. En la década de 1950, surgieron los lenguajes ensambladores, que utilizaban nemotécnicos para representar las instrucciones, facilitando un poco la tarea. Luego vinieron los lenguajes de alto nivel como FORTRAN (1957) y COBOL (1959), que permitieron una programación más abstracta y centrada en problemas. Con el tiempo, han surgido paradigmas de programación como el imperativo (Pascal, C), el declarativo (Prolog) y, más recientemente, el orientado a objetos (Smalltalk, C++, Java), cada uno buscando hacer la programación más eficiente, legible y robusta.
¿Qué son los paradigmas de programación y cuáles son algunos ejemplos?
Los paradigmas de programación son enfoques o estilos fundamentales para estructurar y organizar la solución de problemas mediante programas. Representan una forma particular de concebir y desarrollar la lógica del software. Algunos de los paradigmas principales incluyen:
• Programación Imperativa/Procedimental: Se enfoca en describir cómo lograr un resultado mediante una secuencia de instrucciones o comandos que modifican el estado del programa. Ejemplos: FORTRAN, COBOL, Pascal, C.
• Programación Declarativa: Se enfoca en qué se debe lograr, sin especificar cómo. Se basa en la lógica formal y el razonamiento. Un subconjunto es la Programación Lógica (Prolog).
• Programación Orientada a Objetos (POO): Se basa en el concepto de "objetos" que encapsulan datos y comportamientos. Promueve la modularidad, la reutilización del código y la abstracción. Ejemplos: Smalltalk, C++, Java, C#.
¿Qué es la Programación Orientada a Objetos (POO) y cuáles son sus principios clave?
La Programación Orientada a Objetos (POO) es un paradigma que se centra en la organización del software alrededor de "objetos", que son instancias de "clases". Cada objeto es una unidad que combina datos (atributos) y el código que opera sobre esos datos (métodos). Los principios clave de la POO son:
• Encapsulamiento: Ocultar los detalles internos de un objeto y exponer solo una interfaz controlada para interactuar con él.
• Herencia: Permite que nuevas clases (clases derivadas o hijas) adquieran propiedades y comportamientos de clases existentes (clases base o padres), promoviendo la reutilización del código.
• Polimorfismo: La capacidad de que un objeto tome muchas formas o que un mismo método actúe de manera diferente según el contexto o el tipo de objeto que lo invoca. Estos principios ayudan a crear sistemas más modulares, flexibles y fáciles de mantener.
¿Qué papel juega un "traductor" en el proceso de transformar un programa a código ejecutable?
Un "traductor" es un programa que convierte el código fuente escrito en un lenguaje de programación a un formato que la computadora puede entender y ejecutar. Los traductores se dividen principalmente en compiladores e intérpretes. Los compiladores realizan una traducción completa del código fuente a código máquina (o un código intermedio) antes de la ejecución, creando un archivo ejecutable. Los intérpretes, por otro lado, traducen y ejecutan el código línea por línea en tiempo de ejecución. Ambos cumplen la función esencial de cerrar la brecha entre el lenguaje humano de la programación y el lenguaje binario de la máquina.
¿Cuáles son algunos de los lenguajes de programación más utilizados y por qué son importantes?
A lo largo de la historia, muchos lenguajes han sido influyentes. Algunos de los más utilizados y que han dejado una huella significativa son:
• FORTRAN: Uno de los primeros y más importantes, utilizado para cálculos científicos y de ingeniería.
• COBOL: Dominante en aplicaciones empresariales y de gestión de datos.
• BASIC: Diseñado para la enseñanza, fácil de aprender para principiantes.
• C y C++: Lenguajes potentes para sistemas operativos, desarrollo de juegos y aplicaciones de alto rendimiento. C++ introdujo la programación orientada a objetos.
• Java: Un lenguaje multiplataforma y orientado a objetos, muy popular para aplicaciones empresariales, móviles y web.
• Python: Un lenguaje de propósito general, muy legible, utilizado en desarrollo web, ciencia de datos, inteligencia artificial y automatización.
• JavaScript: Esencial para el desarrollo web front-end, permitiendo interactividad en los navegadores. Estos lenguajes son importantes porque cada uno ha abordado diferentes necesidades de desarrollo, impulsando la innovación y la eficiencia en la creación de software.
--------------------------------------------------------------------------------
Fundamentos de Programación: Algoritmos y Lenguajes
Documento de Sesión Informativa: Fundamentos de Programación - Algoritmos, Estructura de Datos y Objetos
Fecha: 26 de mayo de 2024Fuentes: Excerpts from "cap1-Fundamentos de programación_ Algoritmos, estructura de datos y objetos, 4ta Edición.pdf"
--------------------------------------------------------------------------------
1. Introducción a la Programación y Algoritmos
El proceso de programación comienza con la necesidad de que una computadora realice una tarea específica. Para ello, un procesador debe interpretar un algoritmo, que se define como un conjunto de pasos para comprender y resolver un problema, así como para realizar las operaciones correspondientes.
• Definición de Algoritmo: Un algoritmo es "un conjunto de pasos para comprender las instrucciones de cada paso y realizar las operaciones correspondientes." (p. 36)
• Procesador y Algoritmos: Cuando el procesador es una computadora, el algoritmo se expresa en un programa que la máquina puede entender y ejecutar. Los algoritmos pueden ser expresados en pseudocódigo o diagramas de flujo antes de ser codificados en un lenguaje de programación.
2. Lenguajes de Programación
Los lenguajes de programación son los medios para escribir las instrucciones que el procesador ejecutará. Se clasifican principalmente en lenguajes de bajo nivel y lenguajes de alto nivel.
2.1. Clasificación de Lenguajes
• Lenguajes de Máquina (Bajo Nivel):
    ◦ Son el lenguaje que la computadora entiende directamente, compuesto por secuencias binarias (0 y 1). "Desgraciadamente la escritura de programas en lenguaje máquina es una tarea tediosa y fatídica ya que sus instrucciones son secuencias de 0 y 1..." (p. 36)
    ◦ Este fue el primer tipo de lenguaje utilizado y es específico de cada máquina.
• Lenguajes Ensambladores (Bajo Nivel):
    ◦ Surgieron para facilitar la programación, permitiendo escribir instrucciones en formatos nemotécnicos (códigos simbólicos) en lugar de códigos binarios. "Estos programas de traducción se llaman ensambladores porque su tarea es ensamblar las instrucciones reales de la máquina." (p. 39)
    ◦ Requieren un programa ensamblador para traducir el código nemotécnico a lenguaje máquina.
• Lenguajes de Alto Nivel:
    ◦ Están diseñados para que el programador escriba programas de manera más cercana al lenguaje humano, utilizando una sintaxis más abstracta y comprensible.
    ◦ Son independientes de la máquina, lo que significa que el mismo programa puede ejecutarse en diferentes arquitecturas de hardware.
    ◦ "La mayoría de los lenguajes de programación de alto nivel son los que no se dependen del hardware de la máquina sino de la capacidad de abstracción del programador." (p. 42)
    ◦ Ejemplos modernos incluyen C++, Java, Python, C#, etc.
2.2. Traducción de Programas (Compiladores e Intérpretes)
Los programas escritos en lenguajes de alto nivel deben ser traducidos a lenguaje máquina para que la computadora pueda ejecutarlos. Esto se realiza mediante dos tipos de traductores:
• Compiladores:
    ◦ Traducen el programa fuente (escrito en un lenguaje de alto nivel) completo a un programa objeto (código máquina ejecutable) antes de su ejecución.
    ◦ "Un compilador es un programa que traduce los programas fuente escritos en lenguaje de alto nivel a lenguaje máquina. La traducción del programa completo se realiza en una sola operación denominada compilación del programa" (p. 38).
    ◦ Si hay errores, el compilador los detecta y no genera el programa objeto hasta que se corrijan. El programa compilado se puede ejecutar múltiples veces sin necesidad de recompilarse.
    ◦ Fases de la compilación: Edición del programa fuente, compilación (traducción y detección de errores), obtención del programa objeto y enlace (linker) para obtener el programa ejecutable.
• Intérpretes:
    ◦ Traducen y ejecutan el programa fuente línea por línea. "Un intérprete clásico como BASIC, prácticamente ya no se utiliza, más que en circunstancias especiales; sin embargo, está muy extendida la versión interpretada del lenguaje Smalltalk, un lenguaje orientado a objetos puro." (p. 37)
    ◦ No generan un programa objeto permanente; la traducción y ejecución ocurren simultáneamente.
    ◦ Suelen ser más lentos que los compiladores, pero facilitan la depuración interactiva.
3. Paradigmas de Programación
Los paradigmas de programación son estilos fundamentales para estructurar y organizar el código.
• Programación Imperativa/Procedimental:
    ◦ Se enfoca en "cómo" resolver un problema, especificando una secuencia de comandos (órdenes) que manipulan datos y modifican el estado del programa.
    ◦ Los programas se organizan en subrutinas o funciones.
    ◦ "El paradigma imperativo señala el enfoque del proceso de programación mediante la realización de un algoritmo que resuelve de modo manual el problema y a continuación expresa ese algoritmo como una secuencia de órdenes." (p. 40)
    ◦ Ejemplos: FORTRAN, COBOL, BASIC, C, Pascal.
• Programación Declarativa:
    ◦ Se enfoca en "qué" se quiere lograr, describiendo la lógica sin especificar el flujo de control exacto. El sistema se encarga de determinar cómo llegar al resultado.
    ◦ "El paradigma declarativo solicita al programador que describa el problema en lugar de encontrar una solución algorítmica al problema; es decir, un lenguaje declarativo utiliza el principio del razonamiento lógico para responder a las preguntas o cuestiones consultadas." (p. 41)
    ◦ Ejemplo: Prolog.
• Programación Orientada a Objetos (POO):
    ◦ Se enfoca en organizar el software en "objetos", que son entidades que combinan datos (atributos) y el comportamiento (métodos) que opera sobre esos datos.
    ◦ "El paradigma orientado a objetos se asocia con el proceso de programación llamado programación orientada a objetos (POO) consistente en un enfoque totalmente distinto al proceso procedimental." (p. 41)
    ◦ Principios clave: encapsulamiento, herencia y polimorfismo.
    ◦ Ejemplos: C++, Java, Smalltalk, Python.
4. Breve Historia de los Lenguajes de Programación
La evolución de los lenguajes de programación ha sido constante, impulsada por la necesidad de simplificar la escritura de programas y hacerlos más potentes.
• Década de los 50: Lenguajes de máquina y ensambladores. Inicio de FORTRAN (1954) y ALGOL (1958).
• Década de los 60: COBOL (1959), LISP (1958) y BASIC (1964) ganan popularidad.
• Década de los 70: Pascal (1970) y C (1971) emergen, destacando por su estructura y eficiencia.
• Década de los 80: Proliferación de lenguajes como C++ (1983), que introdujo la orientación a objetos.
• Década de los 90 y 2000s: Auge de lenguajes orientados a objetos como Java (1995), C# (2000), JavaScript y Python, dominando el desarrollo de software y aplicaciones web.
• Lenguajes para desarrollo web: HTML, XML, PHP, JavaScript, CSS, etc., se han vuelto fundamentales.
5. Componentes de una Computadora
Una computadora es una máquina para procesar información. Se compone de:
• Hardware: Parte física (dispositivos electrónicos).
    ◦ Dispositivos de Entrada/Salida (E/S).
    ◦ Unidad Central de Proceso (UCP).
    ◦ Memoria Central.
    ◦ Dispositivos de Almacenamiento Masivo.
• Software: Parte lógica (programas).
    ◦ Sistema Operativo: Gestiona los recursos del hardware y software, permitiendo la interacción con el usuario (ej. Windows, Linux).
    ◦ Lenguajes de Programación: Herramientas para crear programas.
    ◦ Programas Traductores: Compiladores e Intérpretes.
--------------------------------------------------------------------------------
Este documento de sesión informativa resume los puntos clave de las fuentes proporcionadas, cubriendo los fundamentos de la programación, la clasificación y traducción de lenguajes, los paradigmas principales y un breve recorrido histórico.