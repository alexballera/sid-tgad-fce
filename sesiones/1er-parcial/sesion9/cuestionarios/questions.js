
// Banco de preguntas para la Sesión 9: El Modelo Relacional de Bases de Datos

const questions = [
  {
    question: "¿Quién propuso originalmente el modelo relacional para las bases de datos?",
    options: [
      "Bill Gates",
      "Charles Babbage",
      "E. F. Codd",
      "Alan Turing"
    ],
    answer: 2,
    explanation: "El modelo relacional fue propuesto originalmente por E. F. Codd de IBM en 1970, sentando las bases para la mayoría de los sistemas de bases de datos modernos."
  },
  {
    question: "En el modelo relacional, ¿a qué corresponde el término 'relación'?",
    options: [
      "A una fila o registro.",
      "A una tabla bidimensional que contiene los datos.",
      "A una columna o campo.",
      "A la conexión entre dos bases de datos."
    ],
    answer: 1,
    explanation: "En la terminología formal del modelo relacional, una 'relación' es una tabla. Informalmente, se le llama tabla."
  },
  {
    question: "¿Cómo se denomina a una fila en una relación (tabla)?",
    options: [
      "Atributo",
      "Tupla",
      "Dominio",
      "Clave"
    ],
    answer: 1,
    explanation: "Cada fila de una tabla se denomina formalmente 'tupla'. Representa un registro o un conjunto de datos relacionados sobre una entidad específica."
  },
  {
    question: "Un 'atributo' en el modelo relacional es el nombre de:",
    options: [
      "Una tabla.",
      "Una base de datos completa.",
      "Una columna de una tabla.",
      "Una restricción de integridad."
    ],
    answer: 2,
    explanation: "Un 'atributo' es el nombre de una columna en una tabla (relación). Define una propiedad o característica de la entidad que la tabla representa."
  },
  {
    question: "¿Qué es el 'dominio' de un atributo?",
    options: [
      "El nombre del atributo.",
      "El conjunto de valores permitidos para ese atributo.",
      "El valor por defecto del atributo.",
      "La clave primaria de la tabla."
    ],
    answer: 1,
    explanation: "El dominio de un atributo es el conjunto de todos los valores atómicos (indivisibles) que puede tomar. Por ejemplo, el dominio de 'Edad' podría ser números enteros entre 0 y 120."
  },
  {
    question: "¿Cuál de las siguientes afirmaciones sobre las tuplas en una relación es CIERTA?",
    options: [
      "El orden de las tuplas es muy importante y está fijo.",
      "Las tuplas en una relación no tienen un orden particular.",
      "Una relación puede contener múltiples tuplas idénticas.",
      "Todas las tuplas deben contener al menos un valor nulo."
    ],
    answer: 1,
    explanation: "Formalmente, una relación es un conjunto de tuplas, y en un conjunto, los elementos no tienen un orden específico. Por lo tanto, el orden de las filas no importa."
  },
  {
    question: "¿Qué es una 'superclave' (superkey)?",
    options: [
      "Una clave que contiene todos los atributos de la tabla.",
      "Un subconjunto de atributos que no puede identificar unívocamente una tupla.",
      "Un conjunto de uno o más atributos que, en conjunto, permiten identificar unívocamente una tupla en una relación.",
      "Una clave que siempre es un único atributo."
    ],
    answer: 2,
    explanation: "Una superclave es cualquier conjunto de atributos que identifica de forma única a una tupla. Puede contener atributos adicionales que no son estrictamente necesarios para la identificación única."
  },
  {
    question: "¿Qué es una 'clave candidata' (candidate key)?",
    options: [
      "Cualquier atributo de la tabla.",
      "Una superclave que no contiene atributos redundantes; es decir, es una superclave mínima.",
      "Una clave que se propone pero aún no se ha aprobado.",
      "El conjunto de todas las claves de una tabla."
    ],
    answer: 1,
    explanation: "Una clave candidata es una superclave mínima. Si se elimina cualquier atributo de una clave candidata, deja de ser una superclave. Una relación puede tener varias claves candidatas."
  },
  {
    question: "La 'clave primaria' (primary key) es:",
    options: [
      "La clave candidata más larga.",
      "La clave candidata que se elige para identificar unívocamente las tuplas dentro de la relación.",
      "La única clave que puede tener valores nulos.",
      "Una clave que no puede usarse para búsquedas."
    ],
    answer: 1,
    explanation: "De entre todas las claves candidatas, el diseñador de la base de datos elige una para que sea la clave primaria. Su propósito principal es ser el identificador único de cada registro."
  },
  {
    question: "La restricción de integridad de entidad establece que:",
    options: [
      "Todos los atributos deben tener un valor.",
      "Ningún atributo de una clave primaria puede tener un valor nulo.",
      "Las claves foráneas siempre deben tener un valor.",
      "La base de datos no puede estar vacía."
    ],
    answer: 1,
    explanation: "La integridad de entidad es una regla fundamental que garantiza que cada tupla tenga un identificador único y no nulo, al prohibir valores nulos en cualquier parte de la clave primaria."
  },
  {
    question: "¿Qué es una 'clave foránea' (foreign key)?",
    options: [
      "Una clave primaria de otra tabla.",
      "Un atributo o conjunto de atributos en una relación cuyos valores deben coincidir con la clave primaria de otra relación (o ser nulos).",
      "Una clave que no está indexada y ralentiza las consultas.",
      "Una copia de la clave primaria en la misma tabla."
    ],
    answer: 1,
    explanation: "Una clave foránea se utiliza para establecer y reforzar un vínculo entre los datos de dos tablas. Impone la restricción de integridad referencial."
  },
  {
    question: "La restricción de integridad referencial asegura que:",
    options: [
      "No se puedan insertar tuplas duplicadas.",
      "Un valor de una clave foránea debe tener una tupla correspondiente en la relación referenciada o ser nulo.",
      "La clave primaria nunca pueda cambiar.",
      "Todos los atributos de texto estén en mayúsculas."
    ],
    answer: 1,
    explanation: "Esta restricción mantiene la consistencia entre las tuplas de dos relaciones. Evita que existan registros 'huérfanos' (un registro que hace referencia a otro que ya no existe)."
  },
  {
    question: "¿Qué representa el 'esquema de una relación'?",
    options: [
      "El conjunto de tuplas (datos) en un momento dado.",
      "El nombre de la relación seguido de los nombres de sus atributos y sus dominios.",
      "Una consulta para recuperar datos de la relación.",
      "El número de filas que contiene la tabla."
    ],
    answer: 1,
    explanation: "El esquema (o intensión) define la estructura de la relación, incluyendo su nombre y sus atributos. Por ejemplo: CLIENTE(IdCliente, Nombre, Apellido)."
  },
  {
    question: "¿Qué es una 'instancia' o 'estado' de una relación?",
    options: [
      "La estructura y los nombres de las columnas.",
      "Una tabla específica en un momento dado, con su conjunto particular de tuplas (datos).",
      "La clave primaria de la tabla.",
      "Las reglas de integridad de la relación."
    ],
    answer: 1,
    explanation: "La instancia (o extensión) de una relación es el contenido de la tabla en un momento específico. Mientras el esquema es constante, la instancia cambia con el tiempo a medida que se insertan, modifican o eliminan tuplas."
  },
  {
    question: "¿Por qué los valores de los atributos en una relación deben ser atómicos?",
    options: [
      "Porque es más fácil de programar.",
      "Porque la primera forma normal (1FN) del modelo relacional lo exige; cada celda debe tener un solo valor.",
      "Porque ahorra más espacio en disco.",
      "Porque los valores no atómicos no pueden ser nulos."
    ],
    answer: 1,
    explanation: "La atomicidad de los valores es una propiedad fundamental del modelo relacional. Significa que cada atributo en una tupla debe tener un único valor indivisible, lo cual es la base de la Primera Forma Normal (1FN)."
  }
];
