
// Banco de preguntas para la Sesión 7: Fundamentos de Programación, Algoritmos y Lenguajes

const questions = [
  {
    question: "¿Qué es un 'programa' en el contexto de la computación?",
    options: [
      "Un diagrama de flujo o pseudocódigo.",
      "Un formato en el que se expresa un algoritmo para que una computadora pueda entenderlo.",
      "Un dispositivo de hardware que ejecuta instrucciones.",
      "El proceso de traducir un algoritmo a un lenguaje natural."
    ],
    answer: 1,
    explanation: "Un algoritmo debe expresarse en un formato que la computadora comprenda. Este formato se denomina programa, y se escribe en un lenguaje de programación."
  },
  {
    question: "¿Cómo se denomina el proceso de traducir un algoritmo a un lenguaje de programación?",
    options: [
      "Compilación",
      "Interpretación",
      "Codificación",
      "Ejecución"
    ],
    answer: 2,
    explanation: "La codificación es el proceso de escribir un programa, es decir, de traducir las instrucciones de un algoritmo a un lenguaje de programación específico. El resultado es el código fuente."
  },
  {
    question: "¿Qué es el 'lenguaje máquina'?",
    options: [
      "Un lenguaje de alto nivel como C++ o Java.",
      "El lenguaje nativo de una computadora, compuesto por secuencias de dígitos binarios (0 y 1).",
      "Un lenguaje de programación que es fácil de leer y escribir para los humanos.",
      "Un tipo de pseudocódigo utilizado para diseñar algoritmos."
    ],
    answer: 1,
    explanation: "El lenguaje máquina es el sistema de codificación nativo de la computadora. Es difícil de manipular para las personas, por lo que se necesitan lenguajes de programación más amigables."
  },
  {
    question: "¿Cuál es la función de un 'traductor' (compilador o intérprete)?",
    options: [
      "Ejecutar directamente el pseudocódigo en la computadora.",
      "Traducir el código fuente escrito en un lenguaje de programación a código máquina.",
      "Convertir el código máquina en un lenguaje de alto nivel para que sea más legible.",
      "Diseñar la interfaz gráfica de un programa."
    ],
    answer: 1,
    explanation: "Dado que las computadoras solo entienden lenguaje máquina, se requiere un programa traductor que convierta el código fuente (escrito en un lenguaje de alto nivel) a código máquina."
  },
  {
    question: "¿Cuál es la diferencia principal entre un compilador y un intérprete?",
    options: [
      "El compilador es para lenguajes antiguos y el intérprete para lenguajes modernos.",
      "El compilador traduce todo el programa en un solo bloque (creando un ejecutable), mientras que el intérprete traduce y ejecuta línea por línea.",
      "El compilador se usa en Windows y el intérprete en Linux.",
      "No hay diferencia, son dos nombres para el mismo tipo de programa."
    ],
    answer: 1,
    explanation: "Un compilador realiza la traducción completa en una sola operación, generando un programa objeto. Un intérprete, en cambio, traduce la primera sentencia, la ejecuta, luego la segunda, la ejecuta, y así sucesivamente."
  },
  {
    question: "El programa obtenido tras la compilación, que ya no necesita del compilador para su ejecución, se denomina:",
    options: [
      "Programa fuente",
      "Programa objeto",
      "Programa ejecutable",
      "Programa interpretado"
    ],
    answer: 2,
    explanation: "El programa compilado y depurado se denomina programa ejecutable porque puede ejecutarse directamente cuantas veces se desee sin necesidad del compilador."
  },
  {
    question: "¿Qué función cumple el programa 'enlazador' (linker)?",
    options: [
      "Escribir el código fuente en un editor de texto.",
      "Corregir los errores de sintaxis del programador.",
      "Convertir el programa objeto en el programa máquina real directamente ejecutable.",
      "Interpretar el código línea por línea."
    ],
    answer: 2,
    explanation: "Después de la compilación (que genera el programa objeto), el enlazador o montador se encarga de generar el programa máquina final que la computadora puede ejecutar."
  },
  {
    question: "Los lenguajes como FORTRAN, COBOL y Pascal pertenecen a la categoría de:",
    options: [
      "Lenguajes de primera generación (lenguaje máquina).",
      "Lenguajes de segunda generación (ensamblador).",
      "Lenguajes de tercera generación (lenguajes de alto nivel).",
      "Lenguajes de cuarta generación (orientados a la web)."
    ],
    answer: 2,
    explanation: "Estos lenguajes se consideran de tercera generación o de alto nivel porque sus instrucciones son más comprensibles para el programador e independientes de la máquina."
  },
  {
    question: "¿Qué es un 'paradigma de programación'?",
    options: [
      "Un error común que cometen los programadores novatos.",
      "Un tipo específico de lenguaje de programación, como Java o Python.",
      "Un enfoque o estilo fundamental para la construcción de soluciones a problemas de software.",
      "La sintaxis y las reglas gramaticales de un lenguaje de programación."
    ],
    answer: 2,
    explanation: "Un paradigma de programación representa un enfoque diferente para el proceso de programación y la resolución de problemas, afectando el desarrollo completo del software."
  },
  {
    question: "El paradigma imperativo o procedimental se caracteriza por:",
    options: [
      "Describir el problema en lugar de la solución algorítmica.",
      "Basarse en el diseño y construcción de objetos que contienen datos y operaciones.",
      "Definir la programación como una secuencia de órdenes (comandos) que se ejecutan una por una y manipulan datos.",
      "Utilizar el razonamiento lógico y la deducción para responder a preguntas."
    ],
    answer: 2,
    explanation: "El paradigma imperativo es el enfoque tradicional, donde un programa es un conjunto de instrucciones que se ejecutan de modo secuencial para cambiar el estado del programa y producir un resultado."
  },
  {
    question: "¿Cuál es el lenguaje declarativo por excelencia mencionado en el texto?",
    options: [
      "C++",
      "Java",
      "Prolog",
      "BASIC"
    ],
    answer: 2,
    explanation: "El paradigma declarativo se enfoca en describir el problema y la lógica para resolverlo. Prolog es el ejemplo clásico, basado en la lógica formal."
  },
  {
    question: "La Programación Orientada a Objetos (POO) se basa en:",
    options: [
      "Una secuencia de comandos ejecutados de principio a fin.",
      "El diseño y construcción de objetos, que se componen de datos y las operaciones que los manipulan.",
      "La traducción de código línea por línea en tiempo de ejecución.",
      "El uso exclusivo de lenguajes de bajo nivel para mayor eficiencia."
    ],
    answer: 1,
    explanation: "La POO modela el mundo real mediante 'objetos'. El programador define los objetos del problema, sus datos (atributos) y las operaciones que pueden actuar sobre esos datos (métodos)."
  },
  {
    question: "Lenguajes como Java y C# son herederos directos de C++ y se consideran lenguajes:",
    options: [
      "Puramente procedimentales.",
      "Orientados a objetos.",
      "Declarativos.",
      "De bajo nivel."
    ],
    answer: 1,
    explanation: "Java y C# son los lenguajes orientados a objetos más utilizados en la industria del software del siglo XXI, siendo herederos directos de C y C++."
  },
  {
    question: "¿Qué lenguaje fue diseñado por IBM en la década de los cincuenta para resolver problemas científicos y de ingeniería?",
    options: [
      "COBOL",
      "FORTRAN",
      "LISP",
      "BASIC"
    ],
    answer: 1,
    explanation: "FORTRAN (FORmula TRANslator) fue diseñado por IBM en 1954 y fue el primer lenguaje de programación comercial de alto nivel, concebido para aplicaciones científicas y de ingeniería."
  },
  {
    question: "El lenguaje COBOL fue desarrollado para aplicaciones de:",
    options: [
      "Inteligencia artificial y robótica.",
      "Gestión y administración de negocios.",
      "Desarrollo de sistemas operativos.",
      "Programación web y diseño de páginas."
    ],
    answer: 1,
    explanation: "COBOL (COmmon Business-Oriented Language) fue desarrollado para aplicaciones de gestión y negocios, y fue el lenguaje por excelencia en ese ámbito durante mucho tiempo."
  },
  {
    question: "¿Qué es JavaScript en el contexto de la programación web?",
    options: [
      "Un lenguaje de programación compilado, competidor directo de C++.",
      "Un lenguaje de marcación para estructurar el contenido de una página web.",
      "Un lenguaje interpretado de guionado (scripting) que añade interactividad a las páginas web.",
      "Una versión de Java que se ejecuta exclusivamente en servidores."
    ],
    answer: 2,
    explanation: "JavaScript es un lenguaje de scripting que se ejecuta en el navegador del cliente y permite crear páginas web dinámicas e interactivas."
  },
  {
    question: "Las instrucciones que se representan en formatos nemotécnicos en lugar de números pertenecen al lenguaje:",
    options: [
      "Máquina",
      "De alto nivel",
      "Ensamblador",
      "Orientado a objetos"
    ],
    answer: 2,
    explanation: "El lenguaje ensamblador utiliza nemotécnicos (como 'MOV' para mover) para representar las instrucciones máquina, simplificando el proceso de programación en comparación con escribir secuencias de ceros y unos."
  },
  {
    question: "¿Cuáles son las tres propiedades más importantes de C++ como lenguaje orientado a objetos mencionadas en el texto?",
    options: [
      "Velocidad, eficiencia y bajo costo.",
      "Encapsulamiento, herencia y polimorfismo.",
      "Sintaxis, semántica y compilación.",
      "Compatibilidad, portabilidad y seguridad."
    ],
    answer: 1,
    explanation: "El texto menciona que C++, como lenguaje orientado a objetos por excelencia, contiene las tres propiedades fundamentales de la POO: encapsulamiento, herencia y polimorfismo."
  },
  {
    question: "AJAX, definido como 'el futuro de la Web', es una mezcla de:",
    options: [
      "HTML y CSS.",
      "Java y C#.",
      "JavaScript y XML.",
      "Perl y PHP."
    ],
    answer: 2,
    explanation: "AJAX (Asynchronous JavaScript and XML) es una técnica de desarrollo web que permite a las aplicaciones web funcionar de manera más rápida e interactiva, combinando JavaScript y XML."
  },
  {
    question: "¿Cuál de las siguientes es una instrucción básica común en casi todos los lenguajes de programación?",
    options: [
      "Instrucción de conexión a redes sociales.",
      "Instrucción de entrada/salida (leer/escribir).",
      "Instrucción de creación de inteligencia artificial.",
      "Instrucción de diseño de interfaz 3D."
    ],
    answer: 1,
    explanation: "El texto enumera tres tipos de instrucciones básicas y comunes: de entrada/salida (transferencia de información), de cálculo (operaciones aritméticas) y de control (modifican la secuencia de ejecución)."
  }
];
