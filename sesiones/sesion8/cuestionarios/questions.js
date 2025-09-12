
// Banco de preguntas para la Sesión 8: Fundamentos de Bases de Datos

const questions = [
  {
    question: "¿Cuál es la definición de una base de datos?",
    options: [
      "Una colección de programas para gestionar datos.",
      "Una colección de datos lógicamente coherentes con un significado inherente.",
      "Un único archivo que contiene todo tipo de información sin estructura.",
      "El hardware utilizado para almacenar archivos de una empresa."
    ],
    answer: 1,
    explanation: "Una base de datos es una colección estructurada de datos que están lógicamente relacionados y tienen un significado propio, diseñada para un propósito específico."
  },
  {
    question: "¿Qué es un Sistema de Gestión de Bases de Datos (SGBD o DBMS)?",
    options: [
      "La base de datos en sí misma.",
      "Un conjunto de programas que permite a los usuarios crear y mantener una base de datos.",
      "Una aplicación de hoja de cálculo como Excel.",
      "El lenguaje de programación utilizado para escribir aplicaciones."
    ],
    answer: 1,
    explanation: "Un SGBD es el software que facilita la definición, construcción, manipulación y compartición de bases de datos entre diversos usuarios y aplicaciones."
  },
  {
    question: "¿Cuáles son las cuatro acciones principales que involucra el proceso de una base de datos?",
    options: [
      "Instalar, configurar, actualizar y eliminar.",
      "Definir, construir, manipular y compartir.",
      "Programar, compilar, ejecutar y depurar.",
      "Diseñar, imprimir, escanear y archivar."
    ],
    answer: 1,
    explanation: "El proceso completo de una base de datos incluye: 1) Definir los tipos de datos y estructuras, 2) Construir almacenando los datos, 3) Manipular con consultas y actualizaciones, y 4) Compartir el acceso."
  },
  {
    question: "¿Qué implica la 'definición' de una base de datos?",
    options: [
      "Introducir datos de ejemplo en la base de datos.",
      "Especificar los tipos de datos, las estructuras y las restricciones de los datos a almacenar.",
      "Realizar consultas para obtener información.",
      "Crear una copia de seguridad de la base de datos."
    ],
    answer: 1,
    explanation: "La definición de una base de datos implica la creación de su catálogo (metadatos), donde se especifican los tipos, estructuras y restricciones de los datos."
  },
  {
    question: "El enfoque de base de datos elimina gran parte de la redundancia de datos presente en el enfoque de procesamiento de archivos. ¿Verdadero o Falso?",
    options: [
      "Verdadero",
      "Falso"
    ],
    answer: 0,
    explanation: "Verdadero. Una de las principales ventajas del enfoque de base de datos es que permite controlar la redundancia al integrar los archivos para que múltiples aplicaciones puedan acceder a los mismos datos."
  },
  {
    question: "¿Quién es el responsable principal de autorizar el acceso a la base de datos y coordinar su uso?",
    options: [
      "El programador de aplicaciones.",
      "El usuario final.",
      "El administrador de la base de datos (DBA).",
      "El diseñador de la base de datos."
    ],
    answer: 2,
    explanation: "El Administrador de la Base de Datos (DBA) es la persona o equipo encargado de la administración general del SGBD, incluyendo el control de acceso, monitoreo y adquisición de recursos."
  },
  {
    question: "¿Cuál es la principal función de un diseñador de bases de datos?",
    options: [
      "Escribir programas de aplicación que usan la base de datos.",
      "Identificar los datos a almacenar y elegir las estructuras apropiadas para representarlos.",
      "Realizar consultas y generar informes para su propio uso.",
      "Instalar y actualizar el software del SGBD."
    ],
    answer: 1,
    explanation: "Los diseñadores de bases de datos son responsables de la estructura de la base de datos. Deben entender los requisitos de los usuarios y diseñar la base de datos para satisfacerlos."
  },
  {
    question: "¿Qué es una de las principales desventajas del enfoque de procesamiento de archivos tradicional?",
    options: [
      "Los datos son compartidos fácilmente entre aplicaciones.",
      "Existe un control centralizado de los datos.",
      "Cada aplicación tiene sus propios archivos privados, lo que lleva a la redundancia y la inconsistencia.",
      "Es muy seguro y restringe bien el acceso no autorizado."
    ],
    answer: 2,
    explanation: "En el procesamiento de archivos, cada aplicación mantiene sus propios datos, lo que duplica la información (redundancia) y puede causar inconsistencias si un dato se actualiza en un archivo pero no en otro."
  },
  {
    question: "La capacidad de cambiar el esquema físico sin tener que modificar los programas de aplicación se conoce como:",
    options: [
      "Aislamiento de datos.",
      "Abstracción de datos.",
      "Independencia físico-lógica de los datos.",
      "Control de concurrencia."
    ],
    answer: 2,
    explanation: "La independencia físico-lógica de los datos es una característica clave de los SGBD que permite modificar la organización física de los datos sin afectar a los esquemas de nivel superior ni a las aplicaciones."
  },
  {
    question: "¿Qué tipo de usuario de base de datos es un analista de negocios o un ingeniero que utiliza la base de datos para su trabajo?",
    options: [
      "Usuario final ingenuo o paramétrico.",
      "Usuario final sofisticado.",
      "Desarrollador de SGBD.",
      "Administrador de la base de datos (DBA)."
    ],
    answer: 1,
    explanation: "Los usuarios finales sofisticados, como ingenieros o científicos, conocen las funcionalidades del SGBD y utilizan sus herramientas para realizar consultas complejas que satisfagan sus propias necesidades."
  },
  {
    question: "¿Cuál de las siguientes es una ventaja de usar un SGBD?",
    options: [
      "Costos iniciales de hardware y software muy bajos.",
      "Simplicidad en la gestión de copias de seguridad y recuperación.",
      "Restricción del acceso no autorizado y provisión de almacenamiento persistente.",
      "No requiere personal especializado para su administración."
    ],
    answer: 2,
    explanation: "Entre las múltiples ventajas de un SGBD se encuentran su capacidad para implementar seguridad y autorizaciones de acceso, y proporcionar almacenamiento persistente para los objetos y estructuras de datos del programa."
  },
  {
    question: "¿Qué son los 'metadatos' en el contexto de una base de datos?",
    options: [
      "Los datos de los usuarios finales.",
      "La información sobre la estructura de la base de datos, como los tipos de datos y las restricciones.",
      "Las consultas SQL que se ejecutan con más frecuencia.",
      "Los archivos de registro de transacciones del SGBD."
    ],
    answer: 1,
    explanation: "Los metadatos son los 'datos acerca de los datos'. Describen la estructura de la base de datos y se almacenan en el catálogo del SGBD."
  },
  {
    question: "El control de la concurrencia en un SGBD asegura que:",
    options: [
      "Solo un usuario pueda acceder a la base de datos a la vez.",
      "Las interacciones de múltiples usuarios que acceden simultáneamente a la base de datos no generen inconsistencias.",
      "La base de datos se ejecute más rápido.",
      "Todos los datos estén encriptados."
    ],
    answer: 1,
    explanation: "El control de concurrencia es crucial en sistemas multiusuario para garantizar que las actualizaciones y consultas concurrentes se realicen de manera controlada y no dejen la base de datos en un estado inconsistente."
  },
  {
    question: "¿Cuándo podría NO ser recomendable utilizar un SGBD?",
    options: [
      "Cuando los datos deben ser compartidos por múltiples usuarios.",
      "Cuando se necesita un control de acceso complejo.",
      "Para una base de datos simple, con pocos usuarios y requisitos de rendimiento no rigurosos.",
      "Cuando se requiere integridad de los datos."
    ],
    answer: 2,
    explanation: "Si la base de datos y las aplicaciones son simples, bien definidas y no se espera que cambien, y no hay necesidad de acceso multiusuario, la sobrecarga de un SGBD puede no ser necesaria."
  },
  {
    question: "¿Qué es la 'abstracción de datos' en el contexto de los SGBD?",
    options: [
      "El proceso de eliminar datos innecesarios de la base de datos.",
      "La característica que permite ocultar los detalles de cómo se almacenan y mantienen los datos.",
      "La creación de resúmenes y agregaciones de datos.",
      "La encriptación de todos los datos almacenados."
    ],
    answer: 1,
    explanation: "La abstracción de datos permite a los usuarios interactuar con un modelo de datos conceptual sin preocuparse por los detalles de bajo nivel del almacenamiento físico, simplificando la interacción."
  }
];
