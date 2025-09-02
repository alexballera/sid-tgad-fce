const allQuestions = [
    // Sección: Guía Esencial de Infraestructura de TI (FAQ)
    {
        question: "¿Cuál es la definición más precisa de infraestructura de TI según el texto?",
        options: [
            "Solo el hardware y software de una empresa.",
            "Los recursos tecnológicos compartidos que proporcionan la plataforma para las aplicaciones de sistemas de información.",
            "Un conjunto de programas de computadora para la gestión de datos.",
            "La red de computadoras de una organización."
        ],
        answer: 1,
        explanation: "La infraestructura de TI se define como los recursos tecnológicos compartidos que proporcionan la plataforma para las aplicaciones de sistemas de información específicas de una empresa, abarcando hardware, software y servicios."
    },
    {
        question: "¿Cuál de los siguientes NO es un componente esencial de la infraestructura de TI mencionado en el texto?",
        options: [
            "Plataformas de hardware de computadora.",
            "Plataformas de sistemas operativos.",
            "Servicios de limpieza de centros de datos.",
            "Administración y almacenamiento de datos."
        ],
        answer: 2,
        explanation: "Los servicios de limpieza de centros de datos no son mencionados como un componente esencial de la infraestructura de TI. Los componentes incluyen hardware, sistemas operativos, aplicaciones empresariales, administración de datos, redes, plataformas de Internet y servicios de consultoría."
    },
    {
        question: "¿Qué etapa de la evolución de la infraestructura de TI se caracteriza por la computación centralizada con mainframes?",
        options: [
            "Era de la computadora personal.",
            "Era cliente/servidor.",
            "Era de las mainframes y minicomputadoras.",
            "Era de la computación en la nube y móvil."
        ],
        answer: 2,
        explanation: "La Era de las mainframes y minicomputadoras (1959-actualidad) se caracterizó por la computación centralizada con mainframes que soportaban miles de terminales."
    },
    {
        question: "¿Cuál de las siguientes leyes predice que el poder de los microprocesadores se duplica aproximadamente cada 18 meses?",
        options: [
            "Ley de Metcalfe.",
            "Ley de Moore.",
            "Ley del almacenamiento digital masivo.",
            "Ley de la economía de red."
        ],
        answer: 1,
        explanation: "La Ley de Moore predice que el poder de los microprocesadores se duplica aproximadamente cada 18 meses, mientras que el precio de los componentes de cómputo se reduce a la mitad en el mismo período."
    },
    {
        question: "¿Qué tendencia de hardware contemporánea conecta computadoras separadas geográficamente para crear una supercomputadora virtual?",
        options: [
            "Virtualización.",
            "Computación en la nube.",
            "Computación en malla (Grid Computing).",
            "Computación autonómica."
        ],
        answer: 2,
        explanation: "La Computación en malla (Grid Computing) conecta computadoras separadas geográficamente en una única red para crear una supercomputadora virtual, aprovechando los recursos inactivos de las CPU."
    },
    {
        question: "¿Qué lenguaje de programación orientado a objetos es independiente del sistema operativo y se ha convertido en el entorno interactivo principal para la web?",
        options: [
            "Python.",
            "C++.",
            "Java.",
            "JavaScript."
        ],
        answer: 2,
        explanation: "Java es un lenguaje de programación orientado a objetos, independiente del sistema operativo y del procesador, que se ha convertido en el entorno interactivo principal para la web."
    },
    {
        question: "¿Cuál es el principal desafío al administrar la infraestructura de TI relacionado con la capacidad de un sistema para expandirse sin fallar?",
        options: [
            "Gerencia y gobernanza.",
            "Realizar inversiones inteligentes en infraestructura.",
            "Lidiar con el cambio de plataforma e infraestructura (escalabilidad).",
            "Costo Total de Propiedad (TCO)."
        ],
        answer: 2,
        explanation: "Lidiar con el cambio de plataforma e infraestructura implica planificar la escalabilidad, que es la capacidad de un sistema para expandirse sin fallar."
    },
    {
        question: "¿Qué tipo de servicio de computación en la nube permite a los clientes utilizar los recursos de procesamiento, almacenamiento y red del proveedor?",
        options: [
            "PaaS (Plataforma como un Servicio).",
            "SaaS (Software como un Servicio).",
            "IaaS (Infraestructura como un Servicio).",
            "DaaS (Datos como un Servicio)."
        ],
        answer: 2,
        explanation: "IaaS (Infraestructura como un Servicio) es el tipo de servicio en la nube donde los clientes utilizan los recursos de procesamiento, almacenamiento y red del proveedor."
    },
    {
        question: "¿Cuál es la principal razón por la que la computación verde es importante para las organizaciones?",
        options: [
            "Mejora la velocidad de procesamiento.",
            "Reduce los costos de energía y el impacto ambiental.",
            "Aumenta la complejidad de la administración de TI.",
            "Solo beneficia a las empresas de tecnología."
        ],
        answer: 1,
        explanation: "La computación verde es importante para las organizaciones porque reduce los costos de energía y el impacto ambiental, contribuyendo a la sostenibilidad y eficiencia operativa."
    },
    {
        question: "¿Qué componente de la infraestructura de TI incluye ERP, CRM y SCM?",
        options: [
            "Plataformas de hardware de computadora.",
            "Plataformas de sistemas operativos.",
            "Aplicaciones de software empresariales.",
            "Administración y almacenamiento de datos."
        ],
        answer: 2,
        explanation: "Las Aplicaciones de software empresariales incluyen software para funciones específicas y también aplicaciones a nivel empresarial como ERP, CRM y SCM."
    },
    {
        question: "¿Cuál de las siguientes NO es una etapa de la evolución de la infraestructura de TI?",
        options: [
            "Era de la computadora personal.",
            "Era de la inteligencia artificial.",
            "Era cliente/servidor.",
            "Era de la computación en la nube y móvil."
        ],
        answer: 1,
        explanation: "La 'Era de la inteligencia artificial' no es mencionada como una de las cinco etapas principales de la evolución de la infraestructura de TI. Las etapas son mainframes, computadora personal, cliente/servidor, computación empresarial y nube/móvil."
    },
    {
        question: "¿Qué ley tecnológica afirma que el valor de una red aumenta exponencialmente a medida que el número de sus miembros crece?",
        options: [
            "Ley de Moore.",
            "Ley del almacenamiento digital masivo.",
            "Ley de Metcalfe.",
            "Ley de la reducción de costos de comunicaciones."
        ],
        answer: 2,
        explanation: "La Ley de Metcalfe afirma que el valor o poder de una red aumenta exponencialmente a medida que el número de sus miembros crece."
    },
    {
        question: "¿Qué práctica de hardware permite que un solo recurso físico aparezca como múltiples recursos lógicos?",
        options: [
            "Computación en malla.",
            "Computación en la nube.",
            "Virtualización.",
            "Computación autonómica."
        ],
        answer: 2,
        explanation: "La virtualización permite que un solo recurso físico (servidor, almacenamiento) aparezca como múltiples recursos lógicos, aumentando la tasa de uso del equipo."
    },
    {
        question: "¿Qué técnica de desarrollo web permite a un cliente y un servidor intercambiar pequeñas piezas de datos en segundo plano sin recargar la página completa?",
        options: [
            "Java.",
            "XML.",
            "Ajax (JavaScript asíncrono y XML).",
            "HTML."
        ],
        answer: 2,
        explanation: "Ajax (JavaScript asíncrono y XML) es la técnica de desarrollo web que permite el intercambio de pequeñas piezas de datos en segundo plano, evitando la recarga completa de una página web."
    },
    {
        question: "¿Qué modelo de inversión en infraestructura de TI evalúa el costo real de poseer recursos tecnológicos, incluyendo costos directos e indirectos?",
        options: [
            "Modelo de fuerzas competitivas.",
            "Costo Total de Propiedad (TCO).",
            "Análisis de retorno de inversión (ROI).",
            "Análisis de costo-beneficio."
        ],
        answer: 1,
        explanation: "El Costo Total de Propiedad (TCO) es un modelo que analiza el costo real de poseer recursos tecnológicos, incluyendo no solo la adquisición sino también los costos administrativos continuos."
    },
    {
        question: "¿Cuál de las siguientes es una característica esencial de la computación en la nube?",
        options: [
            "Dependencia total del proveedor.",
            "Acceso ubicuo a la red.",
            "Altas inversiones iniciales en hardware.",
            "Control total sobre la ubicación física de los datos."
        ],
        answer: 1,
        explanation: "El acceso ubicuo a la red es una característica esencial de la computación en la nube, permitiendo acceder a los recursos desde cualquier dispositivo conectado a Internet."
    },
    {
        question: "¿Qué tipo de servicio en la nube permite a los clientes usar la infraestructura y herramientas de programación del proveedor para desarrollar sus propias aplicaciones?",
        options: [
            "IaaS.",
            "SaaS.",
            "PaaS.",
            "DaaS."
        ],
        answer: 2,
        explanation: "PaaS (Plataforma como un Servicio) es el tipo de servicio en la nube donde los clientes usan la infraestructura y herramientas de programación del proveedor para desarrollar sus propias aplicaciones."
    },
    {
        question: "¿Qué práctica de TI busca minimizar el impacto ambiental de la tecnología?",
        options: [
            "Computación en malla.",
            "Computación autonómica.",
            "Computación verde (Green Computing).",
            "Virtualización."
        ],
        answer: 2,
        explanation: "La Computación verde (Green Computing) se refiere a prácticas y tecnologías que minimizan el impacto ambiental de la TI, como la reducción del consumo de energía."
    },
    {
        question: "¿Qué componente de la infraestructura de TI incluye hardware de red como Cisco y servicios de telecomunicaciones como AT&T?",
        options: [
            "Plataformas de hardware de computadora.",
            "Plataformas de sistemas operativos.",
            "Plataformas de redes/telecomunicaciones.",
            "Plataformas de Internet."
        ],
        answer: 2,
        explanation: "Las Plataformas de redes/telecomunicaciones incluyen hardware de red y servicios de telecomunicaciones para conectividad de voz y datos."
    },
    {
        question: "¿Cuál fue la principal característica de la Era cliente/servidor en la evolución de la infraestructura de TI?",
        options: [
            "Computación centralizada con mainframes.",
            "Dominio de la plataforma Wintel.",
            "Procesamiento dividido entre clientes y servidores.",
            "Acceso a recursos virtualizados a través de Internet."
        ],
        answer: 2,
        explanation: "La Era cliente/servidor se caracterizó por el procesamiento dividido, donde las PC o laptops (clientes) se conectan en red a servidores potentes que proporcionan servicios y herramientas."
    },
    {
        question: "¿Qué ley tecnológica indica que el costo de almacenar información digital se reduce exponencialmente?",
        options: [
            "Ley de Moore.",
            "Ley del almacenamiento digital masivo.",
            "Ley de Metcalfe.",
            "Ley de la economía de red."
        ],
        answer: 1,
        explanation: "La Ley del almacenamiento digital masivo indica que el costo de almacenar información digital se reduce exponencialmente, duplicándose la cantidad de almacenamiento por cada dólar gastado aproximadamente cada 15 meses."
    },
    {
        question: "¿Qué tendencia de hardware permite que un solo recurso físico aparezca como múltiples recursos lógicos?",
        options: [
            "Computación en malla.",
            "Computación en la nube.",
            "Virtualización.",
            "Computación autonómica."
        ],
        answer: 2,
        explanation: "La virtualización permite que un solo recurso físico (servidor, almacenamiento) aparezca como múltiples recursos lógicos, o que varios recursos físicos se presenten como uno solo."
    },
    {
        question: "¿Qué es el software de código abierto?",
        options: [
            "Software que solo puede ser usado por empresas.",
            "Software producido por una comunidad global, gratuito, modificable y redistribuible.",
            "Software que requiere una licencia costosa.",
            "Software que solo funciona en sistemas operativos específicos."
        ],
        answer: 1,
        explanation: "El software de código abierto es producido por una comunidad global de programadores, es gratuito, modificable y redistribuible."
    },
    {
        question: "¿Qué son los Servicios Web?",
        options: [
            "Programas de software para navegar por internet.",
            "Componentes de software débilmente acoplados que intercambian información usando estándares web.",
            "Aplicaciones para la gestión de bases de datos.",
            "Sistemas operativos para servidores."
        ],
        answer: 1,
        explanation: "Los Servicios Web son componentes de software débilmente acoplados que intercambian información utilizando estándares y lenguajes de comunicación web universales (como XML, SOAP, WSDL, UDDI)."
    },
    {
        question: "¿Qué es el Outsourcing de software?",
        options: [
            "Desarrollo de software internamente por el personal de la empresa.",
            "Contratar el desarrollo o mantenimiento de software con empresas externas.",
            "Venta de software a otras empresas.",
            "Uso de software gratuito."
        ],
        answer: 1,
        explanation: "El Outsourcing de software es contratar el desarrollo o mantenimiento de software personalizado con empresas externas, a menudo en el extranjero, para reducir costos."
    },
    {
        question: "¿Cuál es una de las desventajas de la computación en la nube para las empresas?",
        options: [
            "Reducción de grandes inversiones iniciales.",
            "Mayor escalabilidad y flexibilidad.",
            "Dependencia del proveedor y riesgos de seguridad/privacidad.",
            "Reducción de costos operativos."
        ],
        answer: 2,
        explanation: "Una de las desventajas de la computación en la nube es la dependencia del proveedor y los riesgos de seguridad y privacidad al confiar datos críticos a terceros."
    },
    {
        question: "¿Qué es la computación autonómica?",
        options: [
            "Sistemas que requieren constante intervención humana.",
            "Sistemas que se configuran, optimizan, ajustan, reparan y protegen a sí mismos.",
            "Sistemas que solo funcionan en la nube.",
            "Sistemas que solo usan hardware de Apple."
        ],
        answer: 1,
        explanation: "La computación autonómica es un esfuerzo para desarrollar sistemas que puedan configurarse, optimizarse, ajustarse, repararse y protegerse a sí mismos, reduciendo la complejidad de la administración."
    },
    {
        question: "¿Qué tipo de procesadores son cruciales para la duración de la batería en dispositivos móviles?",
        options: [
            "Procesadores de alto rendimiento.",
            "Procesadores multinúcleo.",
            "Procesadores de bajo consumo (ej. ARM, Intel Atom).",
            "Mainframes."
        ],
        answer: 2,
        explanation: "Los procesadores de bajo consumo (ARM, Apple A4, Intel Atom) son cruciales para la duración de la batería en dispositivos móviles."
    },
    {
        question: "¿Qué es un Mashup en el contexto de software?",
        options: [
            "Una aplicación de software que solo funciona offline.",
            "Una aplicación que combina capacidades de dos o más aplicaciones en línea.",
            "Un tipo de sistema operativo.",
            "Un lenguaje de programación."
        ],
        answer: 1,
        explanation: "Un Mashup es una aplicación de software que combina las capacidades de dos o más aplicaciones en línea para crear una nueva aplicación híbrida (ej. Google Maps con datos criminales)."
    },
    {
        question: "¿Qué es un SLA (Acuerdo de Nivel de Servicio)?",
        options: [
            "Un tipo de software de gestión de proyectos.",
            "Un contrato formal entre clientes y proveedores de servicios que define responsabilidades y nivel de servicio.",
            "Un lenguaje de programación para servicios web.",
            "Un tipo de hardware de red."
        ],
        answer: 1,
        explanation: "Un SLA (Acuerdo de Nivel de Servicio) es un contrato formal entre clientes y proveedores de servicios que define las responsabilidades específicas del proveedor y el nivel de servicio esperado."
    },
    {
        question: "¿Cuál es el principal objetivo de la computación verde?",
        options: [
            "Aumentar el consumo de energía en centros de datos.",
            "Minimizar el impacto ambiental de la TI.",
            "Reducir la vida útil del hardware.",
            "Incrementar los costos operativos de TI."
        ],
        answer: 1,
        explanation: "La computación verde (o TI verde) se refiere a las prácticas y tecnologías destinadas a diseñar, fabricar, usar y disponer de hardware de TI de manera que se minimice su impacto negativo en el medio ambiente."
    },
    {
        question: "¿Qué es la escalabilidad en el contexto de la infraestructura de TI?",
        options: [
            "La capacidad de un sistema para reducir su tamaño.",
            "La habilidad de un sistema para expandirse y dar servicio a un mayor número de usuarios sin fallar.",
            "El costo de mantener un sistema.",
            "La velocidad de procesamiento de un sistema."
        ],
        answer: 1,
        explanation: "La escalabilidad es la habilidad de un sistema, producto o computadora para expandirse y dar servicio a un mayor número de usuarios sin fallar."
    },
    {
        question: "¿Qué es un ecosistema de negocios?",
        options: [
            "Una sola empresa grande.",
            "Conjuntos de industrias vagamente acopladas que proporcionan servicios y productos relacionados.",
            "Un grupo de empresas que compiten directamente.",
            "Una red de computadoras en una oficina."
        ],
        answer: 1,
        explanation: "Un ecosistema de negocios es un conjunto de industrias vagamente acopladas que proporcionan servicios y productos relacionados, donde el éxito de una empresa depende del éxito de otras empresas en el ecosistema."
    },
    {
        question: "¿Qué son los efectos de red?",
        options: [
            "La velocidad de internet.",
            "Cuando el valor de un producto aumenta con el número de usuarios.",
            "El costo de las redes.",
            "La complejidad técnica de una red."
        ],
        answer: 1,
        explanation: "Los efectos de red ocurren cuando el valor de un producto o servicio aumenta a medida que más personas lo usan, como las redes sociales o plataformas de comunicación."
    },
    {
        question: "¿Qué es la nanotecnología en el contexto de la TI?",
        options: [
            "El estudio de redes muy pequeñas.",
            "El uso de átomos y moléculas individuales para crear dispositivos miles de veces más pequeños.",
            "Una nueva forma de computación en la nube.",
            "Un tipo de software de seguridad."
        ],
        answer: 1,
        explanation: "La nanotecnología es el uso de átomos y moléculas individuales para crear chips de computadora y otros dispositivos miles de veces más pequeños que las tecnologías actuales."
    },
    {
        question: "¿Qué es un servidor blade?",
        options: [
            "Un tipo de software de servidor.",
            "Una computadora ultradelgada con procesadores, memoria y conexiones de red, almacenada en estantes.",
            "Un servidor de gran tamaño para mainframes.",
            "Un dispositivo de almacenamiento de datos."
        ],
        answer: 1,
        explanation: "Un servidor blade es una computadora ultradelgada que consiste en un tablero de circuitos con procesadores, memoria y conexiones de red, almacenadas en estantes para ahorrar espacio."
    },
    {
        question: "¿Qué es un mashup?",
        options: [
            "Un tipo de sistema operativo móvil.",
            "Una aplicación de software que combina capacidades de dos o más aplicaciones en línea.",
            "Un lenguaje de programación para la web.",
            "Un dispositivo de hardware de red."
        ],
        answer: 1,
        explanation: "Un mashup es una aplicación de software que combina las capacidades de dos o más aplicaciones en línea (generalmente de fuentes distintas) para crear un nuevo servicio de valor agregado."
    },
    {
        question: "¿Qué es el TCO (Costo Total de Propiedad)?",
        options: [
            "Solo el costo de adquisición de hardware y software.",
            "Un modelo que analiza el costo real de poseer recursos tecnológicos, incluyendo costos directos e indirectos.",
            "El costo de la mano de obra para instalar TI.",
            "El precio de venta de un producto de software."
        ],
        answer: 1,
        explanation: "El Costo Total de Propiedad (TCO) es un modelo que analiza el costo real de poseer recursos tecnológicos, incluyendo no solo la adquisición sino también los costos continuos de instalación, capacitación, soporte, mantenimiento, infraestructura, tiempo inactivo, espacio y energía."
    },
    {
        question: "¿Qué es la computación utilitaria?",
        options: [
            "Un modelo de facturación donde los cargos se basan en la cantidad de recursos utilizados.",
            "Un tipo de software de utilidad.",
            "Un método para optimizar el uso de la CPU.",
            "Un sistema de cómputo para tareas básicas."
        ],
        answer: 0,
        explanation: "La computación utilitaria es un modelo de facturación en la computación en la nube donde los cargos se basan en la cantidad de recursos utilizados, también conocida como computación bajo demanda."
    },
    {
        question: "¿Qué es una SAN (Red de Área de Almacenamiento)?",
        options: [
            "Una red local para computadoras.",
            "Una red separada de alta velocidad dedicada al almacenamiento que conecta varios dispositivos.",
            "Un tipo de servidor de bases de datos.",
            "Un protocolo de red."
        ],
        answer: 1,
        explanation: "Una SAN (Red de Área de Almacenamiento) es una red separada de alta velocidad dedicada al almacenamiento que conecta varios dispositivos, creando una gran reserva central de almacenamiento para múltiples servidores."
    },
    {
        question: "¿Qué es un sistema operativo?",
        options: [
            "Un programa para navegar por internet.",
            "El software que administra los recursos y actividades de la computadora.",
            "Un tipo de hardware de computadora.",
            "Una aplicación de software empresarial."
        ],
        answer: 1,
        explanation: "Un sistema operativo es el software que administra los recursos y actividades de la computadora."
    },
    {
        question: "¿Qué son los sistemas heredados?",
        options: [
            "Sistemas de software de última generación.",
            "Sistemas de procesamiento de transacciones antiguos que se siguen utilizando.",
            "Sistemas diseñados para la computación en la nube.",
            "Sistemas de código abierto."
        ],
        answer: 1,
        explanation: "Los sistemas heredados son sistemas de procesamiento de transacciones antiguos, generalmente creados para mainframes, que se siguen utilizando por su alto costo de reemplazo o rediseño."
    },
    {
        question: "¿Qué es Unix?",
        options: [
            "Un lenguaje de programación.",
            "Un sistema operativo potente, portable, multitareas y multiusuario.",
            "Un tipo de hardware de servidor.",
            "Un protocolo de red."
        ],
        answer: 1,
        explanation: "Unix es un sistema operativo potente, portable, multitareas y multiusuario, desarrollado en Bell Labs y utilizado en una amplia variedad de computadoras de distintos fabricantes."
    },
    {
        question: "¿Qué es Wintel PC?",
        options: [
            "Una computadora personal basada en Linux.",
            "Una computadora personal basada en el sistema operativo Windows y un microprocesador Intel.",
            "Un tipo de servidor web.",
            "Un dispositivo móvil."
        ],
        answer: 1,
        explanation: "Wintel PC es una computadora personal basada en el sistema operativo Windows y un microprocesador Intel, que se convirtió en el estándar de escritorio."
    },
    {
        question: "¿Cuál es el principal beneficio de la virtualización para las organizaciones?",
        options: [
            "Aumenta el número de servidores físicos.",
            "Reduce la tasa de uso del equipo.",
            "Incrementa las tasas de uso del equipo, conserva espacio y energía.",
            "Hace los sistemas más complejos de administrar."
        ],
        answer: 2,
        explanation: "La virtualización aumenta las tasas de uso del equipo (hasta 70% o más), ahorra espacio y energía, y facilita la consolidación y administración centralizada del hardware."
    },
    {
        question: "¿Qué es el SaaS (Software como un Servicio)?",
        options: [
            "Software que se compra y se instala localmente.",
            "Software hospedado en servidores remotos y accesible a través de un navegador web.",
            "Un tipo de hardware de red.",
            "Un sistema operativo."
        ],
        answer: 1,
        explanation: "SaaS (Software como un Servicio) es un modelo de distribución de software donde los clientes usan software alojado por el distribuidor en su hardware y ofrecido a través de una red (Internet)."
    },
    {
        question: "¿Qué es un servidor de aplicaciones?",
        options: [
            "Un servidor que almacena archivos.",
            "Software que maneja todas las operaciones de las aplicaciones entre un usuario y los sistemas empresariales back-end.",
            "Un servidor que aloja sitios web.",
            "Un servidor de correo electrónico."
        ],
        answer: 1,
        explanation: "Un servidor de aplicaciones es software que maneja todas las operaciones de las aplicaciones entre un usuario y los sistemas empresariales back-end de una organización."
    },
    {
        question: "¿Qué es un servidor Web?",
        options: [
            "Un servidor que almacena bases de datos.",
            "Software o computadora que sirve páginas web a un cliente en respuesta a una solicitud de servicio.",
            "Un servidor para correo electrónico.",
            "Un servidor para aplicaciones empresariales."
        ],
        answer: 1,
        explanation: "Un servidor Web es software o computadora que sirve páginas web a un cliente en respuesta a una solicitud de servicio."
    },
    {
        question: "¿Qué son los costos de cambio para los clientes?",
        options: [
            "El precio de nuevos productos.",
            "Los costos que enfrentan los clientes al cambiar de proveedor.",
            "Los costos de envío.",
            "Los impuestos."
        ],
        answer: 1,
        explanation: "Los costos de cambio son todos los costos (tiempo, dinero, esfuerzo) que enfrentan los clientes cuando cambian de un producto o servicio a otro de un competidor diferente."
    },
    {
        question: "¿Qué es la computación en la nube pública?",
        options: [
            "Una red o centro de datos propietario de una compañía.",
            "Mantenida por un proveedor de servicios externo, accesible por Internet y disponible para el público en general.",
            "Un tipo de nube que solo se usa internamente.",
            "Una nube que no ofrece servicios SaaS."
        ],
        answer: 1,
        explanation: "La nube pública es mantenida por un proveedor de servicios externo (ej. Amazon Web Services), accesible por Internet y disponible para el público en general."
    },
    {
        question: "¿Qué es la computación en la nube privada?",
        options: [
            "Mantenida por un proveedor de servicios externo.",
            "Una red o centro de datos propietario que enlaza servidores, almacenamiento, redes, datos y aplicaciones como un conjunto de servicios virtualizados compartidos dentro de una compañía.",
            "Una nube accesible por Internet para el público en general.",
            "Un tipo de nube que solo ofrece IaaS."
        ],
        answer: 1,
        explanation: "La nube privada es una red o centro de datos propietario que enlaza servidores, almacenamiento, redes, datos y aplicaciones como un conjunto de servicios virtualizados compartidos dentro de una compañía."
    },
    {
        question: "¿Qué es un paquete de software?",
        options: [
            "Un software desarrollado a medida para una empresa.",
            "Un conjunto de programas listo para usarse y disponible comercialmente.",
            "Un software de código abierto.",
            "Un software que solo funciona en la nube."
        ],
        answer: 1,
        explanation: "Un paquete de software es un conjunto de programas listo para usarse y disponible comercialmente, que elimina la necesidad de que una empresa escriba sus propios programas para ciertas funciones."
    },
    {
        question: "¿Qué es un navegador Web?",
        options: [
            "Un tipo de servidor.",
            "Una herramienta de software con interfaz gráfica de usuario para mostrar páginas web y acceder a recursos en Internet.",
            "Un lenguaje de programación.",
            "Un sistema operativo."
        ],
        answer: 1,
        explanation: "Un navegador Web es una herramienta de software con interfaz gráfica de usuario para mostrar páginas web y acceder a recursos en Internet (ej. Chrome, Firefox, Internet Explorer)."
    },
    {
        question: "¿Qué es una Netbook?",
        options: [
            "Una computadora de escritorio potente.",
            "Una subnotebook pequeña, ligera y de bajo costo, optimizada para comunicación inalámbrica y acceso a Internet.",
            "Un tipo de servidor.",
            "Un dispositivo de almacenamiento."
        ],
        answer: 1,
        explanation: "Una Netbook es una subnotebook pequeña, ligera y de bajo costo, optimizada para comunicación inalámbrica y acceso a Internet."
    },
    {
        question: "¿Qué es la Arquitectura Orientada al Servicio (SOA)?",
        options: [
            "Un tipo de hardware de red.",
            "Un conjunto de servicios autocontenidos que se comunican entre sí utilizando estándares para crear una aplicación de software funcional.",
            "Un lenguaje de programación.",
            "Un sistema operativo."
        ],
        answer: 1,
        explanation: "La Arquitectura Orientada al Servicio (SOA) es un conjunto de servicios autocontenidos que se comunican entre sí utilizando estándares para crear una aplicación de software funcional."
    },
    {
        question: "¿Qué es un cliente en un entorno cliente/servidor?",
        options: [
            "Una computadora potente que provee servicios.",
            "Una computadora de escritorio o laptop conectada en red a servidores.",
            "Un tipo de software de servidor.",
            "Un dispositivo de almacenamiento."
        ],
        answer: 1,
        explanation: "Un cliente es una computadora de escritorio o laptop conectada en red a servidores en un entorno cliente/servidor."
    },
    {
        question: "¿Qué es la computación bajo demanda?",
        options: [
            "Un modelo de facturación donde los cargos se basan en la cantidad de recursos utilizados.",
            "Un tipo de software de utilidad.",
            "Un método para optimizar el uso de la CPU.",
            "Un sistema de cómputo para tareas básicas."
        ],
        answer: 0,
        explanation: "La computación bajo demanda es un modelo de facturación en la computación en la nube donde los cargos se basan en la cantidad de recursos utilizados, también conocida como computación utilitaria."
    },
    {
        question: "¿Qué es la computación cliente/servidor?",
        options: [
            "Un modelo donde las computadoras cliente se conectan en red a poderosas computadoras servidor que proveen servicios y herramientas.",
            "Un tipo de computación centralizada.",
            "Un sistema que solo usa mainframes.",
            "Un modelo de computación en la nube."
        ],
        answer: 0,
        explanation: "La computación cliente/servidor es un modelo donde las computadoras cliente se conectan en red a poderosas computadoras servidor que proveen servicios y herramientas."
    },
    {
        question: "¿Qué es un servidor en una red?",
        options: [
            "Una computadora de escritorio.",
            "Una computadora potente que provee servicios y herramientas a las computadoras cliente.",
            "Un dispositivo de entrada.",
            "Un tipo de software de aplicación."
        ],
        answer: 1,
        explanation: "Un servidor es una computadora potente en una red que provee servicios y herramientas a las computadoras cliente, o la aplicación de software que gestiona actividades de red."
    },
    {
        question: "¿Qué es el Lenguaje de marcado extensible (XML)?",
        options: [
            "Un lenguaje de programación para hardware.",
            "Un lenguaje de marcado más poderoso y flexible que HTML, utilizado para la presentación, comunicación y almacenamiento de datos.",
            "Un protocolo de red.",
            "Un sistema operativo."
        ],
        answer: 1,
        explanation: "El Lenguaje de marcado extensible (XML) es un lenguaje de marcado más poderoso y flexible que HTML, utilizado para la presentación, comunicación y almacenamiento de datos, y base de los servicios Web."
    },
    {
        question: "¿Qué es el Lenguaje de marcado de hipertexto (HTML)?",
        options: [
            "Un lenguaje de programación para bases de datos.",
            "Un lenguaje de descripción de páginas para especificar cómo se debe presentar texto, gráficos, video y sonido en una página web.",
            "Un protocolo de red.",
            "Un sistema operativo."
        ],
        answer: 1,
        explanation: "El Lenguaje de marcado de hipertexto (HTML) es un lenguaje de descripción de páginas para especificar cómo se debe presentar texto, gráficos, video y sonido en una página web."
    },
    {
        question: "¿Qué es un Mainframe?",
        options: [
            "Una computadora personal.",
            "Una computadora grande y potente que en las primeras eras de la TI daban soporte a miles de terminales remotas.",
            "Un tipo de servidor blade.",
            "Un dispositivo móvil."
        ],
        answer: 1,
        explanation: "Un Mainframe es una computadora grande y potente que en las primeras eras de la TI daban soporte a miles de terminales remotas y que ahora se adaptan como servidores masivos."
    },
    {
        question: "¿Qué son las Minicomputadoras?",
        options: [
            "Máquinas más grandes y caras que los mainframes.",
            "Máquinas más pequeñas y económicas que las mainframes, que permitieron la computación descentralizada.",
            "Un tipo de servidor blade.",
            "Dispositivos móviles."
        ],
        answer: 1,
        explanation: "Las Minicomputadoras son máquinas más pequeñas y económicas que las mainframes, que permitieron la computación descentralizada en departamentos o unidades de negocio."
    },
    {
        question: "¿Qué es la Multitáctil?",
        options: [
            "Una tecnología de almacenamiento.",
            "Tecnología de interfaz que permite a los usuarios usar uno o más dedos para realizar gestos especiales y manipular objetos en una pantalla.",
            "Un tipo de red.",
            "Un sistema operativo."
        ],
        answer: 1,
        explanation: "La Multitáctil es una tecnología de interfaz que permite a los usuarios usar uno o más dedos para realizar gestos especiales y manipular objetos en una pantalla."
    },
    {
        question: "¿Qué es el Outsourcing?",
        options: [
            "Desarrollo de software internamente.",
            "Contratación del desarrollo de software personalizado o el mantenimiento de programas existentes con empresas externas.",
            "Venta de software a otras empresas.",
            "Uso de software gratuito."
        ],
        answer: 1,
        explanation: "El Outsourcing es la contratación del desarrollo de software personalizado o el mantenimiento de programas existentes con empresas externas, a menudo en el extranjero."
    },
    {
        question: "¿Qué es un Procesador multinúcleo?",
        options: [
            "Un microprocesador con un solo núcleo.",
            "Un microprocesador con dos o más núcleos de procesamiento conectados en un solo chip para mejorar el rendimiento y reducir el consumo de energía.",
            "Un tipo de memoria.",
            "Un dispositivo de almacenamiento."
        ],
        answer: 1,
        explanation: "Un Procesador multinúcleo es un microprocesador con dos o más núcleos de procesamiento conectados en un solo chip para mejorar el rendimiento y reducir el consumo de energía."
    },
    {
        question: "¿Qué es un Servidor de hospedaje Web?",
        options: [
            "Un servicio que mantiene uno o varios servidores web y proporciona espacio a los suscriptores para mantener sus sitios web.",
            "Un tipo de software de servidor.",
            "Un lenguaje de programación.",
            "Un sistema operativo."
        ],
        answer: 0,
        explanation: "Un Servidor de hospedaje Web es un servicio que mantiene uno o varios servidores web y proporciona espacio a los suscriptores para mantener sus sitios web."
    },
    {
        question: "¿Qué es un Servidor Web?",
        options: [
            "Un servidor que almacena bases de datos.",
            "Software o computadora que sirve páginas web a un cliente en respuesta a una solicitud de servicio.",
            "Un servidor para correo electrónico.",
            "Un servidor para aplicaciones empresariales."
        ],
        answer: 1,
        explanation: "Un Servidor Web es software o computadora que sirve páginas web a un cliente en respuesta a una solicitud de servicio."
    },
    {
        question: "¿Qué son los Servidores blade?",
        options: [
            "Computadoras ultradelgadas que consisten en un tablero de circuitos con procesadores, memoria y conexiones de red, almacenadas en estantes para ahorrar espacio.",
            "Servidores de gran tamaño para mainframes.",
            "Dispositivos de almacenamiento de datos.",
            "Tipos de software de servidor."
        ],
        answer: 0,
        explanation: "Los Servidores blade son computadoras ultradelgadas que consisten en un tablero de circuitos con procesadores, memoria y conexiones de red, almacenadas en estantes para ahorrar espacio."
    },
    {
        question: "¿Qué es el Software de código abierto?",
        options: [
            "Software que solo puede ser usado por empresas.",
            "Software producido por una comunidad global de programadores, gratuito y modificable por los usuarios.",
            "Software que requiere una licencia costosa.",
            "Software que solo funciona en sistemas operativos específicos."
        ],
        answer: 1,
        explanation: "El Software de código abierto es producido por una comunidad global de programadores, es gratuito y modificable por los usuarios, con obras derivadas también gratuitas y redistribuibles."
    },
    {
        question: "¿Qué es la Virtualización?",
        options: [
            "Un tipo de almacenamiento.",
            "Proceso de presentar un conjunto de recursos de cómputo de modo que se pueda acceder a ellos sin restricciones por su configuración física o ubicación geográfica.",
            "Un tipo de red.",
            "Un sistema operativo."
        ],
        answer: 1,
        explanation: "La Virtualización es el proceso de presentar un conjunto de recursos de cómputo de modo que se pueda acceder a ellos sin restricciones por su configuración física o ubicación geográfica."
    },
    {
        question: "¿Qué es Windows en el contexto de la TI?",
        options: [
            "Un lenguaje de programación.",
            "Un sistema operativo de Microsoft, líder en el mercado de sistemas operativos de servidor y cliente.",
            "Un tipo de hardware de servidor.",
            "Un protocolo de red."
        ],
        answer: 1,
        explanation: "Windows es un sistema operativo de Microsoft, líder en el mercado de sistemas operativos de servidor y cliente (ej. Windows 7, Windows Server)."
    },
    {
        question: "¿Qué es un Wintel PC?",
        options: [
            "Una computadora personal basada en Linux.",
            "Una computadora personal basada en el sistema operativo Windows y un microprocesador Intel, que se convirtió en el estándar de escritorio.",
            "Un tipo de servidor web.",
            "Un dispositivo móvil."
        ],
        answer: 1,
        explanation: "Wintel PC es una computadora personal basada en el sistema operativo Windows y un microprocesador Intel, que se convirtió en el estándar de escritorio."
    },
    {
        question: "¿Cuál es el principal beneficio de la computación en la nube para las empresas?",
        options: [
            "Aumento de grandes inversiones iniciales.",
            "Reducción de grandes inversiones iniciales en hardware y software.",
            "Menor escalabilidad.",
            "Mayor dependencia del proveedor."
        ],
        answer: 1,
        explanation: "Uno de los principales beneficios de la computación en la nube es la reducción de grandes inversiones iniciales en hardware y software, ya que se paga por uso."
    },
    {
        question: "¿Qué es un modelo de computación híbrida en la nube?",
        options: [
            "Usar solo nubes públicas.",
            "Usar solo nubes privadas.",
            "Combinar infraestructura propia con servicios en la nube pública.",
            "Un modelo que no usa virtualización."
        ],
        answer: 2,
        explanation: "Un modelo de computación híbrida combina infraestructura propia (nube privada) con servicios en la nube pública, ideal para grandes corporaciones con sistemas propietarios complejos."
    },
    {
        question: "¿Qué es el agrupamiento de recursos independiente de la ubicación en la nube?",
        options: [
            "Los recursos están fijos en una ubicación geográfica.",
            "Los recursos se agrupan para servir a múltiples usuarios, y se asignan dinámicamente sin que el usuario sepa su ubicación física.",
            "Cada usuario tiene sus propios recursos dedicados.",
            "Solo se puede acceder a los recursos desde una ubicación específica."
        ],
        answer: 1,
        explanation: "El agrupamiento de recursos independiente de la ubicación significa que los recursos se agrupan para servir a múltiples usuarios, y se asignan dinámicamente según la demanda, sin que el usuario sepa su ubicación física."
    },
    {
        question: "¿Qué significa la elasticidad rápida en la computación en la nube?",
        options: [
            "Los recursos son fijos y no pueden cambiar.",
            "Los recursos pueden aumentar o disminuir rápidamente para satisfacer la demanda cambiante.",
            "Los recursos son difíciles de escalar.",
            "Solo se puede escalar hacia arriba."
        ],
        answer: 1,
        explanation: "La elasticidad rápida significa que los recursos pueden aumentar o disminuir rápidamente para satisfacer la demanda cambiante, lo que permite una gran flexibilidad."
    },
    {
        question: "¿Qué es el servicio medido en la computación en la nube?",
        options: [
            "Los servicios son gratuitos.",
            "Los cargos se basan en la cantidad de recursos utilizados (computación utilitaria o bajo demanda).",
            "Se paga una tarifa fija sin importar el uso.",
            "Solo se mide el tiempo de uso."
        ],
        answer: 1,
        explanation: "El servicio medido implica que los cargos se basan en la cantidad de recursos utilizados, lo que permite un modelo de pago por uso."
    },
    {
        question: "¿Qué es el acceso ubicuo a la red en la computación en la nube?",
        options: [
            "Solo se puede acceder a los recursos desde la oficina.",
            "Se puede acceder a los recursos desde cualquier dispositivo conectado a Internet.",
            "El acceso está restringido a ciertos dispositivos.",
            "Solo se puede acceder a través de una red privada."
        ],
        answer: 1,
        explanation: "El acceso ubicuo a la red significa que se puede acceder a los recursos desde cualquier dispositivo conectado a Internet, incluyendo plataformas móviles."
    },
    {
        question: "¿Qué es el autoservicio bajo demanda en la computación en la nube?",
        options: [
            "Los usuarios deben solicitar los recursos a un administrador.",
            "Los usuarios pueden obtener recursos computacionales por sí mismos cuando los necesitan.",
            "Los servicios se entregan automáticamente sin intervención del usuario.",
            "Solo el proveedor puede aprovisionar recursos."
        ],
        answer: 1,
        explanation: "El autoservicio bajo demanda permite a los usuarios obtener recursos computacionales por sí mismos cuando los necesitan, sin intervención del proveedor."
    },
    {
        question: "¿Qué es el modelo de fuerzas competitivas para la inversión en infraestructura de TI?",
        options: [
            "Un modelo que solo considera el costo de adquisición.",
            "Un marco para evaluar la inversión necesaria considerando la demanda del mercado, estrategia de negocios, TCO, etc.",
            "Un modelo para reducir el personal de TI.",
            "Un modelo para aumentar la complejidad de la infraestructura."
        ],
        answer: 1,
        explanation: "El modelo de fuerzas competitivas para la inversión en infraestructura de TI es un marco para evaluar la inversión necesaria considerando la demanda del mercado, la estrategia de negocios, el TCO, la evaluación de la tecnología, y las inversiones de los competidores."
    },
    {
        question: "¿Qué es la gobernanza en la administración de la infraestructura de TI?",
        options: [
            "Determinar quién debe controlar y administrar la infraestructura de TI y cómo asignar los costos.",
            "Solo la gestión técnica de los servidores.",
            "La automatización de todos los procesos de TI.",
            "La compra de nuevo hardware."
        ],
        answer: 0,
        explanation: "La gobernanza en la administración de la infraestructura de TI implica determinar quién debe controlar y administrar la infraestructura de TI (centralizada o descentralizada) y cómo asignar los costos de TI."
    },
    {
        question: "¿Qué es la computación empresarial?",
        options: [
            "Una era de la TI donde las empresas solo usaban mainframes.",
            "Una era donde las empresas buscaron integrar redes y aplicaciones dispares en una infraestructura a nivel empresarial.",
            "Una era donde solo se usaban computadoras personales.",
            "Una era donde la computación en la nube era dominante."
        ],
        answer: 1,
        explanation: "La computación empresarial (1992-actualidad) es una era donde las empresas buscaron integrar redes y aplicaciones dispares en una infraestructura a nivel empresarial, utilizando estándares como TCP/IP."
    },
    {
        question: "¿Qué es la Era de la computadora personal?",
        options: [
            "Marcada por la introducción de la IBM PC y el dominio de la plataforma Wintel.",
            "Caracterizada por la computación centralizada.",
            "La era de la computación en la nube.",
            "La era de los mainframes."
        ],
        answer: 0,
        explanation: "La Era de la computadora personal (1981-actualidad) fue marcada por la introducción de la IBM PC y el dominio de la plataforma Wintel (Windows en microprocesadores Intel)."
    },
    {
        question: "¿Qué es la Era de la computación en la nube y móvil?",
        options: [
            "Impulsada por el ancho de banda de Internet, ofreciendo acceso a un pool compartido de recursos computacionales.",
            "Caracterizada por la computación centralizada.",
            "La era de las minicomputadoras.",
            "La era de la computadora personal."
        ],
        answer: 0,
        explanation: "La Era de la computación en la nube y móvil (2000-actualidad) es impulsada por el ancho de banda de Internet, ofreciendo acceso a un pool compartido de recursos computacionales a través de una red."
    },
    {
        question: "¿Qué es la Ley de Moore?",
        options: [
            "Predice que el valor de una red aumenta exponencialmente.",
            "Indica que el costo de almacenar información digital se reduce exponencialmente.",
            "Predice que el poder de los microprocesadores se duplica aproximadamente cada 18 meses.",
            "Se refiere a la reducción de costos de comunicaciones."
        ],
        answer: 2,
        explanation: "La Ley de Moore predice que el poder de los microprocesadores se duplica aproximadamente cada 18 meses, mientras que el precio de los componentes de cómputo se reduce a la mitad en el mismo período."
    },
    {
        question: "¿Qué es la Ley del almacenamiento digital masivo?",
        options: [
            "Predice que el poder de los microprocesadores se duplica.",
            "Indica que el costo de almacenar información digital se reduce exponencialmente.",
            "Afirma que el valor de una red aumenta exponencialmente.",
            "Se refiere a la reducción de costos de comunicaciones."
        ],
        answer: 1,
        explanation: "La Ley del almacenamiento digital masivo indica que el costo de almacenar información digital se reduce exponencialmente, duplicándose la cantidad de almacenamiento por cada dólar gastado aproximadamente cada 15 meses."
    },
    {
        question: "¿Qué son los Estándares y efectos de la red?",
        options: [
            "Especificaciones que establecen la compatibilidad de los productos y la habilidad de comunicarse en una red.",
            "Solo se refieren a la velocidad de internet.",
            "Aumentan los precios de los productos.",
            "Reducen la compatibilidad entre sistemas."
        ],
        answer: 0,
        explanation: "Los Estándares y efectos de la red son especificaciones que establecen la compatibilidad de los productos y la habilidad de comunicarse en una red, impulsando economías de escala y reduciendo precios."
    },
    {
        question: "¿Qué es la Plataforma digital móvil emergente?",
        options: [
            "Solo computadoras de escritorio.",
            "Teléfonos celulares, smartphones, netbooks y tabletas que se convierten en medios principales para acceder a Internet y realizar funciones de cómputo empresarial.",
            "Servidores blade.",
            "Mainframes."
        ],
        answer: 1,
        explanation: "La Plataforma digital móvil emergente incluye teléfonos celulares, smartphones, netbooks y tabletas que se están convirtiendo en los medios principales para acceder a Internet y realizar funciones de cómputo empresarial."
    },
    {
        question: "¿Qué son los Procesadores de alto rendimiento y ahorro de energía?",
        options: [
            "Microprocesadores que solo aumentan el consumo de energía.",
            "Microprocesadores multinúcleo que mejoran el rendimiento y la eficiencia energética.",
            "Procesadores que solo funcionan en mainframes.",
            "Procesadores que no son cruciales para dispositivos móviles."
        ],
        answer: 1,
        explanation: "Los Procesadores de alto rendimiento y ahorro de energía son microprocesadores multinúcleo (dual-core, quad-core y más) que mejoran el rendimiento y la eficiencia energética, siendo cruciales para la duración de la batería en dispositivos móviles."
    },
    {
        question: "¿Qué es Linux en el contexto de software?",
        options: [
            "Un sistema operativo propietario.",
            "Un sistema operativo de código abierto relacionado con Unix, utilizado en diversas plataformas.",
            "Un lenguaje de programación.",
            "Un tipo de hardware."
        ],
        answer: 1,
        explanation: "Linux es un sistema operativo de código abierto relacionado con Unix, es gratuito, modificable y redistribuible, utilizado en diversas plataformas de hardware, servidores web y cómputo de alto rendimiento."
    },
    {
        question: "¿Qué es Java en el contexto de software para Web?",
        options: [
            "Un lenguaje de programación que solo funciona en Windows.",
            "Un lenguaje de programación orientado a objetos, independiente del sistema operativo y del procesador, principal entorno interactivo para la web.",
            "Un tipo de base de datos.",
            "Un protocolo de red."
        ],
        answer: 1,
        explanation: "Java es un lenguaje de programación orientado a objetos, independiente del sistema operativo y del procesador, que se ha convertido en el entorno interactivo principal para la web."
    },
    {
        question: "¿Qué es la Arquitectura Orientada a Servicios (SOA)?",
        options: [
            "Un tipo de hardware de red.",
            "Una colección de servicios web que se utilizan para construir los sistemas de software de una empresa, permitiendo la reutilización de servicios.",
            "Un lenguaje de programación.",
            "Un sistema operativo."
        ],
        answer: 1,
        explanation: "La Arquitectura Orientada a Servicios (SOA) es una colección de servicios web que se utilizan para construir los sistemas de software de una empresa, permitiendo la reutilización de servicios y la creación rápida de nuevas aplicaciones."
    },
    {
        question: "¿Qué son los Paquetes de software empresarial?",
        options: [
            "Software desarrollado a medida para cada empresa.",
            "Soluciones listas para usar (ERP, CRM, SCM) de proveedores como SAP y Oracle-PeopleSoft.",
            "Software de código abierto.",
            "Software que solo funciona en la nube."
        ],
        answer: 1,
        explanation: "Los Paquetes de software empresarial son soluciones listas para usar (ERP, CRM, SCM) de proveedores como SAP y Oracle-PeopleSoft, que ofrecen un sistema integrado a nivel mundial."
    },
    {
        question: "¿Qué es el SaaS (Software como un Servicio)?",
        options: [
            "Software que se compra y se instala localmente.",
            "El software y los datos se alojan en servidores remotos y se accede a ellos a través de un navegador web, pagando por suscripción o transacción.",
            "Un tipo de hardware de red.",
            "Un sistema operativo."
        ],
        answer: 1,
        explanation: "SaaS (Software como un Servicio) es un modelo donde el software y los datos se alojan en servidores remotos y se accede a ellos a través de un navegador web, pagando por suscripción o transacción."
    },
    {
        question: "¿Qué es un Mashup?",
        options: [
            "Una aplicación de software que solo funciona offline.",
            "Una aplicación que combina capacidades de dos o más aplicaciones en línea para crear una nueva aplicación híbrida.",
            "Un tipo de sistema operativo.",
            "Un lenguaje de programación."
        ],
        answer: 1,
        explanation: "Un Mashup es una aplicación de software que combina las capacidades de dos o más aplicaciones en línea para crear una nueva aplicación híbrida (ej. Google Maps con datos criminales)."
    },
    {
        question: "¿Cuál es un desafío clave al administrar la infraestructura de TI relacionado con la flexibilidad ante el crecimiento o la reducción?",
        options: [
            "Gerencia y gobernanza.",
            "Realizar inversiones inteligentes en infraestructura.",
            "Lidiar con el cambio de plataforma e infraestructura (escalabilidad).",
            "Costo Total de Propiedad (TCO)."
        ],
        answer: 2,
        explanation: "Lidiar con el cambio de plataforma e infraestructura implica mantener la flexibilidad ante el crecimiento o la reducción, y la evolución tecnológica, lo que se relaciona con la escalabilidad."
    },
    {
        question: "¿Qué es el TCO (Costo Total de Propiedad)?",
        options: [
            "Solo el costo de adquisición de hardware y software.",
            "Un modelo que analiza el costo real de poseer recursos tecnológicos, incluyendo costos directos e indirectos como instalación, capacitación, soporte, etc.",
            "El costo de la mano de obra para instalar TI.",
            "El precio de venta de un producto de software."
        ],
        answer: 1,
        explanation: "El Costo Total de Propiedad (TCO) es un modelo que analiza el costo real de poseer recursos tecnológicos, incluyendo no solo la adquisición sino también los costos administrativos continuos (instalación, capacitación, soporte, mantenimiento, etc.)."
    },
    {
        question: "¿Qué es el modelo de fuerzas competitivas para la inversión en infraestructura de TI?",
        options: [
            "Un modelo que solo considera el costo de adquisición.",
            "Un marco para evaluar la inversión necesaria considerando la demanda del mercado, estrategia de negocios, TCO, etc.",
            "Un modelo para reducir el personal de TI.",
            "Un modelo para aumentar la complejidad de la infraestructura."
        ],
        answer: 1,
        explanation: "El modelo de fuerzas competitivas para la inversión en infraestructura de TI es un marco para evaluar la inversión necesaria considerando la demanda del mercado, la estrategia de negocios, el TCO, la evaluación de la tecnología, y las inversiones de los competidores."
    },
    {
        question: "¿Qué es la computación utilitaria o bajo demanda?",
        options: [
            "Un modelo de facturación donde los cargos se basan en la cantidad de recursos utilizados.",
            "Un tipo de software de utilidad.",
            "Un método para optimizar el uso de la CPU.",
            "Un sistema de cómputo para tareas básicas."
        ],
        answer: 0,
        explanation: "La computación utilitaria o bajo demanda es un modelo de facturación en la computación en la nube donde los cargos se basan en la cantidad de recursos utilizados."
    },
    {
        question: "¿Cuál es una desventaja de la computación en la nube para las empresas?",
        options: [
            "Reducción de grandes inversiones iniciales.",
            "Mayor escalabilidad y flexibilidad.",
            "Dependencia del proveedor y riesgos de seguridad/privacidad.",
            "Reducción de costos operativos."
        ],
        answer: 2,
        explanation: "Una de las desventajas de la computación en la nube es la dependencia del proveedor y los riesgos de seguridad y privacidad al confiar datos críticos a terceros."
    },
    {
        question: "¿Qué es la computación verde (Green Computing)?",
        options: [
            "Prácticas y tecnologías que minimizan el impacto ambiental de la TI.",
            "Un tipo de computación en la nube.",
            "Un sistema operativo.",
            "Un lenguaje de programación."
        ],
        answer: 0,
        explanation: "La computación verde (o TI verde) se refiere a las prácticas y tecnologías destinadas a diseñar, fabricar, usar y disponer de hardware de TI de manera que se minimice su impacto negativo en el medio ambiente."
    },
    {
        question: "¿Qué componente de la infraestructura de TI incluye software de gestión de bases de datos como IBM DB2 y Oracle?",
        options: [
            "Plataformas de hardware de computadora.",
            "Plataformas de sistemas operativos.",
            "Aplicaciones de software empresariales.",
            "Administración y almacenamiento de datos."
        ],
        answer: 3,
        explanation: "La Administración y almacenamiento de datos incluye software de gestión de bases de datos como IBM DB2, Oracle, Microsoft SQL Server, Sybase y MySQL."
    },
    {
        question: "¿Qué era de la infraestructura de TI se caracterizó por la integración de redes y aplicaciones dispares a nivel empresarial?",
        options: [
            "Era de las mainframes y minicomputadoras.",
            "Era de la computadora personal.",
            "Era cliente/servidor.",
            "Era de la computación empresarial."
        ],
        answer: 3,
        explanation: "La Era de la computación empresarial (1992-actualidad) se caracterizó por la integración de redes y aplicaciones dispares en una infraestructura a nivel empresarial, utilizando estándares como TCP/IP."
    },
    {
        question: "¿Qué ley tecnológica afirma que el valor o poder de una red aumenta exponencialmente a medida que el número de sus miembros crece?",
        options: [
            "Ley de Moore.",
            "Ley del almacenamiento digital masivo.",
            "Ley de Metcalfe.",
            "Ley de la reducción de costos de comunicaciones."
        ],
        answer: 2,
        explanation: "La Ley de Metcalfe afirma que el valor o poder de una red aumenta exponencialmente a medida que el número de sus miembros crece."
    },
    {
        question: "¿Qué tendencia de hardware permite que un solo recurso físico (servidor, almacenamiento) aparezca como múltiples recursos lógicos?",
        options: [
            "Computación en malla.",
            "Computación en la nube.",
            "Virtualización.",
            "Computación autonómica."
        ],
        answer: 2,
        explanation: "La virtualización permite que un solo recurso físico (servidor, almacenamiento) aparezca como múltiples recursos lógicos, o que varios recursos físicos se presenten como uno solo."
    },
    {
        question: "¿Qué es el software de código abierto?",
        options: [
            "Software que solo puede ser usado por empresas.",
            "Software producido por una comunidad global, gratuito, modificable y redistribuible.",
            "Software que requiere una licencia costosa.",
            "Software que solo funciona en sistemas operativos específicos."
        ],
        answer: 1,
        explanation: "El software de código abierto es producido por una comunidad global de programadores, es gratuito, modificable y redistribuible."
    },
    {
        question: "¿Qué son los Servicios Web?",
        options: [
            "Programas de software para navegar por internet.",
            "Componentes de software débilmente acoplados que intercambian información usando estándares web.",
            "Aplicaciones para la gestión de bases de datos.",
            "Sistemas operativos para servidores."
        ],
        answer: 1,
        explanation: "Los Servicios Web son componentes de software débilmente acoplados que intercambian información utilizando estándares y lenguajes de comunicación web universales (como XML, SOAP, WSDL, UDDI)."
    },
    {
        question: "¿Qué es el Outsourcing de software?",
        options: [
            "Desarrollo de software internamente por el personal de la empresa.",
            "Contratar el desarrollo o mantenimiento de software con empresas externas.",
            "Venta de software a otras empresas.",
            "Uso de software gratuito."
        ],
        answer: 1,
        explanation: "El Outsourcing de software es contratar el desarrollo o mantenimiento de software personalizado con empresas externas, a menudo en el extranjero, para reducir costos."
    },
    {
        question: "¿Cuál es una de las desventajas de la computación en la nube para las empresas?",
        options: [
            "Reducción de grandes inversiones iniciales.",
            "Mayor escalabilidad y flexibilidad.",
            "Dependencia del proveedor y riesgos de seguridad/privacidad.",
            "Reducción de costos operativos."
        ],
        answer: 2,
        explanation: "Una de las desventajas de la computación en la nube es la dependencia del proveedor y los riesgos de seguridad y privacidad al confiar datos críticos a terceros."
    },
    {
        question: "¿Qué es la computación autonómica?",
        options: [
            "Sistemas que requieren constante intervención humana.",
            "Sistemas que se configuran, optimizan, ajustan, reparan y protegen a sí mismos.",
            "Sistemas que solo funcionan en la nube.",
            "Sistemas que solo usan hardware de Apple."
        ],
        answer: 1,
        explanation: "La computación autonómica es un esfuerzo para desarrollar sistemas que puedan configurarse, optimizarse, ajustarse, repararse y protegerse a sí mismos, reduciendo la complejidad de la administración."
    },
    {
        question: "¿Qué tipo de procesadores son cruciales para la duración de la batería en dispositivos móviles?",
        options: [
            "Procesadores de alto rendimiento.",
            "Procesadores multinúcleo.",
            "Procesadores de bajo consumo (ej. ARM, Intel Atom).",
            "Mainframes."
        ],
        answer: 2,
        explanation: "Los procesadores de bajo consumo (ARM, Apple A4, Intel Atom) son cruciales para la duración de la batería en dispositivos móviles."
    },
    {
        question: "¿Qué es un Mashup en el contexto de software?",
        options: [
            "Una aplicación de software que solo funciona offline.",
            "Una aplicación que combina capacidades de dos o más aplicaciones en línea.",
            "Un tipo de sistema operativo.",
            "Un lenguaje de programación."
        ],
        answer: 1,
        explanation: "Un Mashup es una aplicación de software que combina las capacidades de dos o más aplicaciones en línea para crear una nueva aplicación híbrida (ej. Google Maps con datos criminales)."
    },
    {
        question: "¿Qué es un SLA (Acuerdo de Nivel de Servicio)?",
        options: [
            "Un tipo de software de gestión de proyectos.",
            "Un contrato formal entre clientes y proveedores de servicios que define responsabilidades y nivel de servicio.",
            "Un lenguaje de programación para servicios web.",
            "Un tipo de hardware de red."
        ],
        answer: 1,
        explanation: "Un SLA (Acuerdo de Nivel de Servicio) es un contrato formal entre clientes y proveedores de servicios que define las responsabilidades específicas del proveedor y el nivel de servicio esperado."
    },
    {
        question: "¿Cuál es el principal objetivo de la computación verde?",
        options: [
            "Aumentar el consumo de energía en centros de datos.",
            "Minimizar el impacto ambiental de la TI.",
            "Reducir la vida útil del hardware.",
            "Incrementar los costos operativos de TI."
        ],
        answer: 1,
        explanation: "La computación verde (o TI verde) se refiere a las prácticas y tecnologías destinadas a diseñar, fabricar, usar y disponer de hardware de TI de manera que se minimice su impacto negativo en el medio ambiente."
    },
    {
        question: "¿Qué es la escalabilidad en el contexto de la infraestructura de TI?",
        options: [
            "La capacidad de un sistema para reducir su tamaño.",
            "La habilidad de un sistema para expandirse y dar servicio a un mayor número de usuarios sin fallar.",
            "El costo de mantener un sistema.",
            "La velocidad de procesamiento de un sistema."
        ],
        answer: 1,
        explanation: "La escalabilidad es la habilidad de un sistema, producto o computadora para expandirse y dar servicio a un mayor número de usuarios sin fallar."
    },
    {
        question: "¿Qué es un ecosistema de negocios?",
        options: [
            "Una sola empresa grande.",
            "Conjuntos de industrias vagamente acopladas que proporcionan servicios y productos relacionados.",
            "Un grupo de empresas que compiten directamente.",
            "Una red de computadoras en una oficina."
        ],
        answer: 1,
        explanation: "Un ecosistema de negocios es un conjunto de industrias vagamente acopladas que proporcionan servicios y productos relacionados, donde el éxito de una empresa depende del éxito de otras empresas en el ecosistema."
    },
    {
        question: "¿Qué son los efectos de red?",
        options: [
            "La velocidad de internet.",
            "Cuando el valor de un producto aumenta con el número de usuarios.",
            "El costo de las redes.",
            "La complejidad técnica de una red."
        ],
        answer: 1,
        explanation: "Los efectos de red ocurren cuando el valor de un producto o servicio aumenta a medida que más personas lo usan, como las redes sociales o plataformas de comunicación."
    },
    {
        question: "¿Qué es la nanotecnología en el contexto de la TI?",
        options: [
            "El estudio de redes muy pequeñas.",
            "El uso de átomos y moléculas individuales para crear dispositivos miles de veces más pequeños.",
            "Una nueva forma de computación en la nube.",
            "Un tipo de software de seguridad."
        ],
        answer: 1,
        explanation: "La nanotecnología es el uso de átomos y moléculas individuales para crear chips de computadora y otros dispositivos miles de veces más pequeños que las tecnologías actuales."
    },
    {
        question: "¿Qué es un servidor blade?",
        options: [
            "Un tipo de software de servidor.",
            "Una computadora ultradelgada con procesadores, memoria y conexiones de red, almacenada en estantes.",
            "Un servidor de gran tamaño para mainframes.",
            "Un dispositivo de almacenamiento de datos."
        ],
        answer: 1,
        explanation: "Un servidor blade es una computadora ultradelgada que consiste en un tablero de circuitos con procesadores, memoria y conexiones de red, almacenadas en estantes para ahorrar espacio."
    },
    {
        question: "¿Qué es un mashup?",
        options: [
            "Un tipo de sistema operativo móvil.",
            "Una aplicación de software que combina capacidades de dos o más aplicaciones en línea.",
            "Un lenguaje de programación para la web.",
            "Un dispositivo de hardware de red."
        ],
        answer: 1,
        explanation: "Un mashup es una aplicación de software que combina las capacidades de dos o más aplicaciones en línea (generalmente de fuentes distintas) para crear un nuevo servicio de valor agregado."
    },
    {
        question: "¿Qué es el TCO (Costo Total de Propiedad)?",
        options: [
            "Solo el costo de adquisición de hardware y software.",
            "Un modelo que analiza el costo real de poseer recursos tecnológicos, incluyendo costos directos e indirectos.",
            "El costo de la mano de obra para instalar TI.",
            "El precio de venta de un producto de software."
        ],
        answer: 1,
        explanation: "El Costo Total de Propiedad (TCO) es un modelo que analiza el costo real de poseer recursos tecnológicos, incluyendo no solo la adquisición sino también los costos continuos de instalación, capacitación, soporte, mantenimiento, infraestructura, tiempo inactivo, espacio y energía."
    },
    {
        question: "¿Qué es la computación utilitaria?",
        options: [
            "Un modelo de facturación donde los cargos se basan en la cantidad de recursos utilizados.",
            "Un tipo de software de utilidad.",
            "Un método para optimizar el uso de la CPU.",
            "Un sistema de cómputo para tareas básicas."
        ],
        answer: 0,
        explanation: "La computación utilitaria es un modelo de facturación en la computación en la nube donde los cargos se basan en la cantidad de recursos utilizados, también conocida como computación bajo demanda."
    },
    {
        question: "¿Qué es una SAN (Red de Área de Almacenamiento)?",
        options: [
            "Una red local para computadoras.",
            "Una red separada de alta velocidad dedicada al almacenamiento que conecta varios dispositivos.",
            "Un tipo de servidor de bases de datos.",
            "Un protocolo de red."
        ],
        answer: 1,
        explanation: "Una SAN (Red de Área de Almacenamiento) es una red separada de alta velocidad dedicada al almacenamiento que conecta varios dispositivos, creando una gran reserva central de almacenamiento para múltiples servidores."
    },
    {
        question: "¿Qué es un sistema operativo?",
        options: [
            "Un programa para navegar por internet.",
            "El software que administra los recursos y actividades de la computadora.",
            "Un tipo de hardware de computadora.",
            "Una aplicación de software empresarial."
        ],
        answer: 1,
        explanation: "Un sistema operativo es el software que administra los recursos y actividades de la computadora."
    },
    {
        question: "¿Qué son los sistemas heredados?",
        options: [
            "Sistemas de software de última generación.",
            "Sistemas de procesamiento de transacciones antiguos que se siguen utilizando.",
            "Sistemas diseñados para la computación en la nube.",
            "Sistemas de código abierto."
        ],
        answer: 1,
        explanation: "Los sistemas heredados son sistemas de procesamiento de transacciones antiguos, generalmente creados para mainframes, que se siguen utilizando por su alto costo de reemplazo o rediseño."
    },
    {
        question: "¿Qué es Unix?",
        options: [
            "Un lenguaje de programación.",
            "Un sistema operativo potente, portable, multitareas y multiusuario.",
            "Un tipo de hardware de servidor.",
            "Un protocolo de red."
        ],
        answer: 1,
        explanation: "Unix es un sistema operativo potente, portable, multitareas y multiusuario, desarrollado en Bell Labs y utilizado en una amplia variedad de computadoras de distintos fabricantes."
    },
    {
        question: "¿Qué es Wintel PC?",
        options: [
            "Una computadora personal basada en Linux.",
            "Una computadora personal basada en el sistema operativo Windows y un microprocesador Intel, que se convirtió en el estándar de escritorio.",
            "Un tipo de servidor web.",
            "Un dispositivo móvil."
        ],
        answer: 1,
        explanation: "Wintel PC es una computadora personal basada en el sistema operativo Windows y un microprocesador Intel, que se convirtió en el estándar de escritorio."
    },
    {
        question: "¿Cuál es el principal beneficio de la computación en la nube para las empresas?",
        options: [
            "Aumento de grandes inversiones iniciales.",
            "Reducción de grandes inversiones iniciales en hardware y software.",
            "Menor escalabilidad.",
            "Mayor dependencia del proveedor."
        ],
        answer: 1,
        explanation: "Uno de los principales beneficios de la computación en la nube es la reducción de grandes inversiones iniciales en hardware y software, ya que se paga por uso."
    },
    {
        question: "¿Qué es un modelo de computación híbrida en la nube?",
        options: [
            "Usar solo nubes públicas.",
            "Usar solo nubes privadas.",
            "Combinar infraestructura propia con servicios en la nube pública.",
            "Un modelo que no usa virtualización."
        ],
        answer: 2,
        explanation: "Un modelo de computación híbrida combina infraestructura propia (nube privada) con servicios en la nube pública, ideal para grandes corporaciones con sistemas propietarios complejos."
    },
    {
        question: "¿Qué es el agrupamiento de recursos independiente de la ubicación en la nube?",
        options: [
            "Los recursos están fijos en una ubicación geográfica.",
            "Los recursos se agrupan para servir a múltiples usuarios, y se asignan dinámicamente sin que el usuario sepa su ubicación física.",
            "Cada usuario tiene sus propios recursos dedicados.",
            "Solo se puede acceder a los recursos desde una ubicación específica."
        ],
        answer: 1,
        explanation: "El agrupamiento de recursos independiente de la ubicación significa que los recursos se agrupan para servir a múltiples usuarios, y se asignan dinámicamente según la demanda, sin que el usuario sepa su ubicación física."
    },
    {
        question: "¿Qué significa la elasticidad rápida en la computación en la nube?",
        options: [
            "Los recursos son fijos y no pueden cambiar.",
            "Los recursos pueden aumentar o disminuir rápidamente para satisfacer la demanda cambiante.",
            "Los recursos son difíciles de escalar.",
            "Solo se puede escalar hacia arriba."
        ],
        answer: 1,
        explanation: "La elasticidad rápida significa que los recursos pueden aumentar o disminuir rápidamente para satisfacer la demanda cambiante, lo que permite una gran flexibilidad."
    },
    {
        question: "¿Qué es el servicio medido en la computación en la nube?",
        options: [
            "Los servicios son gratuitos.",
            "Los cargos se basan en la cantidad de recursos utilizados (computación utilitaria o bajo demanda).",
            "Se paga una tarifa fija sin importar el uso.",
            "Solo se mide el tiempo de uso."
        ],
        answer: 1,
        explanation: "El servicio medido implica que los cargos se basan en la cantidad de recursos utilizados, lo que permite un modelo de pago por uso."
    },
    {
        question: "¿Qué es el acceso ubicuo a la red en la computación en la nube?",
        options: [
            "Solo se puede acceder a los recursos desde la oficina.",
            "Se puede acceder a los recursos desde cualquier dispositivo conectado a Internet.",
            "El acceso está restringido a ciertos dispositivos.",
            "Solo se puede acceder a través de una red privada."
        ],
        answer: 1,
        explanation: "El acceso ubicuo a la red significa que se puede acceder a los recursos desde cualquier dispositivo conectado a Internet, incluyendo plataformas móviles."
    },
    {
        question: "¿Qué es el autoservicio bajo demanda en la computación en la nube?",
        options: [
            "Los usuarios deben solicitar los recursos a un administrador.",
            "Los usuarios pueden obtener recursos computacionales por sí mismos cuando los necesitan.",
            "Los servicios se entregan automáticamente sin intervención del usuario.",
            "Solo el proveedor puede aprovisionar recursos."
        ],
        answer: 1,
        explanation: "El autoservicio bajo demanda permite a los usuarios obtener recursos computacionales por sí mismos cuando los necesitan, sin intervención del proveedor."
    },
    {
        question: "¿Qué es el modelo de fuerzas competitivas para la inversión en infraestructura de TI?",
        options: [
            "Un modelo que solo considera el costo de adquisición.",
            "Un marco para evaluar la inversión necesaria considerando la demanda del mercado, estrategia de negocios, TCO, etc.",
            "Un modelo para reducir el personal de TI.",
            "Un modelo para aumentar la complejidad de la infraestructura."
        ],
        answer: 1,
        explanation: "El modelo de fuerzas competitivas para la inversión en infraestructura de TI es un marco para evaluar la inversión necesaria considerando la demanda del mercado, la estrategia de negocios, el TCO, la evaluación de la tecnología, y las inversiones de los competidores."
    },
    {
        question: "¿Qué es la gobernanza en la administración de la infraestructura de TI?",
        options: [
            "Determinar quién debe controlar y administrar la infraestructura de TI y cómo asignar los costos.",
            "Solo la gestión técnica de los servidores.",
            "La automatización de todos los procesos de TI.",
            "La compra de nuevo hardware."
        ],
        answer: 0,
        explanation: "La gobernanza en la administración de la infraestructura de TI implica determinar quién debe controlar y administrar la infraestructura de TI (centralizada o descentralizada) y cómo asignar los costos de TI."
    },
    {
        question: "¿Qué es la computación empresarial?",
        options: [
            "Una era de la TI donde las empresas solo usaban mainframes.",
            "Una era donde las empresas buscaron integrar redes y aplicaciones dispares en una infraestructura a nivel empresarial.",
            "Una era donde solo se usaban computadoras personales.",
            "Una era donde la computación en la nube era dominante."
        ],
        answer: 1,
        explanation: "La computación empresarial (1992-actualidad) es una era donde las empresas buscaron integrar redes y aplicaciones dispares en una infraestructura a nivel empresarial, utilizando estándares como TCP/IP."
    },
    {
        question: "¿Qué es la Era de la computadora personal?",
        options: [
            "Marcada por la introducción de la IBM PC y el dominio de la plataforma Wintel.",
            "Caracterizada por la computación centralizada.",
            "La era de la computación en la nube.",
            "La era de los mainframes."
        ],
        answer: 0,
        explanation: "La Era de la computadora personal (1981-actualidad) fue marcada por la introducción de la IBM PC y el dominio de la plataforma Wintel (Windows en microprocesadores Intel)."
    },
    {
        question: "¿Qué es la Era de la computación en la nube y móvil?",
        options: [
            "Impulsada por el ancho de banda de Internet, ofreciendo acceso a un pool compartido de recursos computacionales.",
            "Caracterizada por la computación centralizada.",
            "La era de las minicomputadoras.",
            "La era de la computadora personal."
        ],
        answer: 0,
        explanation: "La Era de la computación en la nube y móvil (2000-actualidad) es impulsada por el ancho de banda de Internet, ofreciendo acceso a un pool compartido de recursos computacionales a través de una red."
    },
    {
        question: "¿Qué es la Ley de Moore?",
        options: [
            "Predice que el valor de una red aumenta exponencialmente.",
            "Indica que el costo de almacenar información digital se reduce exponencialmente.",
            "Predice que el poder de los microprocesadores se duplica aproximadamente cada 18 meses.",
            "Se refiere a la reducción de costos de comunicaciones."
        ],
        answer: 2,
        explanation: "La Ley de Moore predice que el poder de los microprocesadores se duplica aproximadamente cada 18 meses, mientras que el precio de los componentes de cómputo se reduce a la mitad en el mismo período."
    },
    {
        question: "¿Qué es la Ley del almacenamiento digital masivo?",
        options: [
            "Predice que el poder de los microprocesadores se duplica.",
            "Indica que el costo de almacenar información digital se reduce exponencialmente.",
            "Afirma que el valor de una red aumenta exponencialmente.",
            "Se refiere a la reducción de costos de comunicaciones."
        ],
        answer: 1,
        explanation: "La Ley del almacenamiento digital masivo indica que el costo de almacenar información digital se reduce exponencialmente, duplicándose la cantidad de almacenamiento por cada dólar gastado aproximadamente cada 15 meses."
    },
    {
        question: "¿Qué son los Estándares y efectos de la red?",
        options: [
            "Especificaciones que establecen la compatibilidad de los productos y la habilidad de comunicarse en una red.",
            "Solo se refieren a la velocidad de internet.",
            "Aumentan los precios de los productos.",
            "Reducen la compatibilidad entre sistemas."
        ],
        answer: 0,
        explanation: "Los Estándares y efectos de la red son especificaciones que establecen la compatibilidad de los productos y la habilidad de comunicarse en una red, impulsando economías de escala y reduciendo precios."
    },
    {
        question: "¿Qué es la Plataforma digital móvil emergente?",
        options: [
            "Solo computadoras de escritorio.",
            "Teléfonos celulares, smartphones, netbooks y tabletas que se convierten en medios principales para acceder a Internet y realizar funciones de cómputo empresarial.",
            "Servidores blade.",
            "Mainframes."
        ],
        answer: 1,
        explanation: "La Plataforma digital móvil emergente incluye teléfonos celulares, smartphones, netbooks y tabletas que se están convirtiendo en los medios principales para acceder a Internet y realizar funciones de cómputo empresarial."
    },
    {
        question: "¿Qué son los Procesadores de alto rendimiento y ahorro de energía?",
        options: [
            "Microprocesadores que solo aumentan el consumo de energía.",
            "Microprocesadores multinúcleo que mejoran el rendimiento y la eficiencia energética.",
            "Procesadores que solo funcionan en mainframes.",
            "Procesadores que no son cruciales para dispositivos móviles."
        ],
        answer: 1,
        explanation: "Los Procesadores de alto rendimiento y ahorro de energía son microprocesadores multinúcleo (dual-core, quad-core y más) que mejoran el rendimiento y la eficiencia energética, siendo cruciales para la duración de la batería en dispositivos móviles."
    },
    {
        question: "¿Qué es Linux en el contexto de software?",
        options: [
            "Un sistema operativo propietario.",
            "Un sistema operativo de código abierto relacionado con Unix, utilizado en diversas plataformas.",
            "Un lenguaje de programación.",
            "Un tipo de hardware."
        ],
        answer: 1,
        explanation: "Linux es un sistema operativo de código abierto relacionado con Unix, es gratuito, modificable y redistribible, utilizado en diversas plataformas de hardware, servidores web y cómputo de alto rendimiento."
    },
    {
        question: "¿Qué es Java en el contexto de software para Web?",
        options: [
            "Un lenguaje de programación que solo funciona en Windows.",
            "Un lenguaje de programación orientado a objetos, independiente del sistema operativo y del procesador, principal entorno interactivo para la web.",
            "Un tipo de base de datos.",
            "Un protocolo de red."
        ],
        answer: 1,
        explanation: "Java es un lenguaje de programación orientado a objetos, independiente del sistema operativo y del procesador, que se ha convertido en el entorno interactivo principal para la web."
    },
    {
        question: "¿Qué es la Arquitectura Orientada a Servicios (SOA)?",
        options: [
            "Un tipo de hardware de red.",
            "Una colección de servicios web que se utilizan para construir los sistemas de software de una empresa, permitiendo la reutilización de servicios.",
            "Un lenguaje de programación.",
            "Un sistema operativo."
        ],
        answer: 1,
        explanation: "La Arquitectura Orientada a Servicios (SOA) es una colección de servicios web que se utilizan para construir los sistemas de software de una empresa, permitiendo la reutilización de servicios y la creación rápida de nuevas aplicaciones."
    },
    {
        question: "¿Qué son los Paquetes de software empresarial?",
        options: [
            "Software desarrollado a medida para cada empresa.",
            "Soluciones listas para usar (ERP, CRM, SCM) de proveedores como SAP y Oracle-PeopleSoft.",
            "Software de código abierto.",
            "Software que solo funciona en la nube."
        ],
        answer: 1,
        explanation: "Los Paquetes de software empresarial son soluciones listas para usar (ERP, CRM, SCM) de proveedores como SAP y Oracle-PeopleSoft, que ofrecen un sistema integrado a nivel mundial."
    },
    {
        question: "¿Qué es el SaaS (Software como un Servicio)?",
        options: [
            "Software que se compra y se instala localmente.",
            "El software y los datos se alojan en servidores remotos y se accede a ellos a través de un navegador web, pagando por suscripción o transacción.",
            "Un tipo de hardware de red.",
            "Un sistema operativo."
        ],
        answer: 1,
        explanation: "SaaS (Software como un Servicio) es un modelo donde el software y los datos se alojan en servidores remotos y se accede a ellos a través de un navegador web, pagando por suscripción o transacción."
    },
    {
        question: "¿Qué es un Mashup?",
        options: [
            "Una aplicación de software que solo funciona offline.",
            "Una aplicación que combina capacidades de dos o más aplicaciones en línea para crear una nueva aplicación híbrida.",
            "Un tipo de sistema operativo.",
            "Un lenguaje de programación."
        ],
        answer: 1,
        explanation: "Un Mashup es una aplicación de software que combina las capacidades de dos o más aplicaciones en línea para crear una nueva aplicación híbrida (ej. Google Maps con datos criminales)."
    },
    {
        question: "¿Cuál es un desafío clave al administrar la infraestructura de TI relacionado con la flexibilidad ante el crecimiento o la reducción?",
        options: [
            "Gerencia y gobernanza.",
            "Realizar inversiones inteligentes en infraestructura.",
            "Lidiar con el cambio de plataforma e infraestructura (escalabilidad).",
            "Costo Total de Propiedad (TCO)."
        ],
        answer: 2,
        explanation: "Lidiar con el cambio de plataforma e infraestructura implica mantener la flexibilidad ante el crecimiento o la reducción, y la evolución tecnológica, lo que se relaciona con la escalabilidad."
    },
    {
        question: "¿Qué es el TCO (Costo Total de Propiedad)?",
        options: [
            "Solo el costo de adquisición de hardware y software.",
            "Un modelo que analiza el costo real de poseer recursos tecnológicos, incluyendo costos directos e indirectos como instalación, capacitación, soporte, etc.",
            "El costo de la mano de obra para instalar TI.",
            "El precio de venta de un producto de software."
        ],
        answer: 1,
        explanation: "El Costo Total de Propiedad (TCO) es un modelo que analiza el costo real de poseer recursos tecnológicos, incluyendo no solo la adquisición sino también los costos administrativos continuos (instalación, capacitación, soporte, mantenimiento, etc.)."
    },
    {
        question: "¿Qué es el modelo de fuerzas competitivas para la inversión en infraestructura de TI?",
        options: [
            "Un modelo que solo considera el costo de adquisición.",
            "Un marco para evaluar la inversión necesaria considerando la demanda del mercado, estrategia de negocios, TCO, etc.",
            "Un modelo para reducir el personal de TI.",
            "Un modelo para aumentar la complejidad de la infraestructura."
        ],
        answer: 1,
        explanation: "El modelo de fuerzas competitivas para la inversión en infraestructura de TI es un marco para evaluar la inversión necesaria considerando la demanda del mercado, la estrategia de negocios, el TCO, la evaluación de la tecnología, y las inversiones de los competidores."
    },
    {
        question: "¿Qué es la computación utilitaria o bajo demanda?",
        options: [
            "Un modelo de facturación donde los cargos se basan en la cantidad de recursos utilizados.",
            "Un tipo de software de utilidad.",
            "Un método para optimizar el uso de la CPU.",
            "Un sistema de cómputo para tareas básicas."
        ],
        answer: 0,
        explanation: "La computación utilitaria o bajo demanda es un modelo de facturación en la computación en la nube donde los cargos se basan en la cantidad de recursos utilizados."
    },
    {
        question: "¿Cuál es una desventaja de la computación en la nube para las empresas?",
        options: [
            "Reducción de grandes inversiones iniciales.",
            "Mayor escalabilidad y flexibilidad.",
            "Dependencia del proveedor y riesgos de seguridad/privacidad.",
            "Reducción de costos operativos."
        ],
        answer: 2,
        explanation: "Una de las desventajas de la computación en la nube es la dependencia del proveedor y los riesgos de seguridad y privacidad al confiar datos críticos a terceros."
    },
    {
        question: "¿Qué es la computación verde (Green Computing)?",
        options: [
            "Prácticas y tecnologías que minimizan el impacto ambiental de la TI.",
            "Un tipo de computación en la nube.",
            "Un sistema operativo.",
            "Un lenguaje de programación."
        ],
        answer: 0,
        explanation: "La computación verde (o TI verde) se refiere a las prácticas y tecnologías destinadas a diseñar, fabricar, usar y disponer de hardware de TI de manera que se minimice su impacto negativo en el medio ambiente."
    },
    {
        question: "¿Qué componente de la infraestructura de TI incluye software de gestión de bases de datos como IBM DB2 y Oracle?",
        options: [
            "Plataformas de hardware de computadora.",
            "Plataformas de sistemas operativos.",
            "Aplicaciones de software empresariales.",
            "Administración y almacenamiento de datos."
        ],
        answer: 3,
        explanation: "La Administración y almacenamiento de datos incluye software de gestión de bases de datos como IBM DB2, Oracle, Microsoft SQL Server, Sybase y MySQL."
    },
    {
        question: "¿Qué era de la infraestructura de TI se caracterizó por la integración de redes y aplicaciones dispares a nivel empresarial?",
        options: [
            "Era de las mainframes y minicomputadoras.",
            "Era de la computadora personal.",
            "Era cliente/servidor.",
            "Era de la computación empresarial."
        ],
        answer: 3,
        explanation: "La Era de la computación empresarial (1992-actualidad) se caracterizó por la integración de redes y aplicaciones dispares en una infraestructura a nivel empresarial, utilizando estándares como TCP/IP."
    },
    {
        question: "¿Qué ley tecnológica afirma que el valor o poder de una red aumenta exponencialmente a medida que el número de sus miembros crece?",
        options: [
            "Ley de Moore.",
            "Ley del almacenamiento digital masivo.",
            "Ley de Metcalfe.",
            "Ley de la reducción de costos de comunicaciones."
        ],
        answer: 2,
        explanation: "La Ley de Metcalfe afirma que el valor o poder de una red aumenta exponencialmente a medida que el número de sus miembros crece."
    },
    {
        question: "¿Qué tendencia de hardware permite que un solo recurso físico (servidor, almacenamiento) aparezca como múltiples recursos lógicos?",
        options: [
            "Computación en malla.",
            "Computación en la nube.",
            "Virtualización.",
            "Computación autonómica."
        ],
        answer: 2,
        explanation: "La virtualización permite que un solo recurso físico (servidor, almacenamiento) aparezca como múltiples recursos lógicos, o que varios recursos físicos se presenten como uno solo."
    },
    {
        question: "¿Qué es el software de código abierto?",
        options: [
            "Software que solo puede ser usado por empresas.",
            "Software producido por una comunidad global, gratuito, modificable y redistribuible.",
            "Software que requiere una licencia costosa.",
            "Software que solo funciona en sistemas operativos específicos."
        ],
        answer: 1,
        explanation: "El software de código abierto es producido por una comunidad global de programadores, es gratuito, modificable y redistribuible."
    },
    {
        question: "¿Qué son los Servicios Web?",
        options: [
            "Programas de software para navegar por internet.",
            "Componentes de software débilmente acoplados que intercambian información usando estándares web.",
            "Aplicaciones para la gestión de bases de datos.",
            "Sistemas operativos para servidores."
        ],
        answer: 1,
        explanation: "Los Servicios Web son componentes de software débilmente acoplados que intercambian información utilizando estándares y lenguajes de comunicación web universales (como XML, SOAP, WSDL, UDDI)."
    },
    {
        question: "¿Qué es el Outsourcing de software?",
        options: [
            "Desarrollo de software internamente por el personal de la empresa.",
            "Contratar el desarrollo o mantenimiento de software con empresas externas.",
            "Venta de software a otras empresas.",
            "Uso de software gratuito."
        ],
        answer: 1,
        explanation: "El Outsourcing de software es contratar el desarrollo o mantenimiento de software personalizado con empresas externas, a menudo en el extranjero, para reducir costos."
    },
    {
        question: "¿Cuál es una de las desventajas de la computación en la nube para las empresas?",
        options: [
            "Reducción de grandes inversiones iniciales.",
            "Mayor escalabilidad y flexibilidad.",
            "Dependencia del proveedor y riesgos de seguridad/privacidad.",
            "Reducción de costos operativos."
        ],
        answer: 2,
        explanation: "Una de las desventajas de la computación en la nube es la dependencia del proveedor y los riesgos de seguridad y privacidad al confiar datos críticos a terceros."
    },
    {
        question: "¿Qué es la computación autonómica?",
        options: [
            "Sistemas que requieren constante intervención humana.",
            "Sistemas que se configuran, optimizan, ajustan, reparan y protegen a sí mismos.",
            "Sistemas que solo funcionan en la nube.",
            "Sistemas que solo usan hardware de Apple."
        ],
        answer: 1,
        explanation: "La computación autonómica es un esfuerzo para desarrollar sistemas que puedan configurarse, optimizarse, ajustarse, repararse y protegerse a sí mismos, reduciendo la complejidad de la administración."
    },
    {
        question: "¿Qué tipo de procesadores son cruciales para la duración de la batería en dispositivos móviles?",
        options: [
            "Procesadores de alto rendimiento.",
            "Procesadores multinúcleo.",
            "Procesadores de bajo consumo (ej. ARM, Intel Atom).",
            "Mainframes."
        ],
        answer: 2,
        explanation: "Los procesadores de bajo consumo (ARM, Apple A4, Intel Atom) son cruciales para la duración de la batería en dispositivos móviles."
    },
    {
        question: "¿Qué es un Mashup en el contexto de software?",
        options: [
            "Una aplicación de software que solo funciona offline.",
            "Una aplicación que combina capacidades de dos o más aplicaciones en línea.",
            "Un tipo de sistema operativo.",
            "Un lenguaje de programación."
        ],
        answer: 1,
        explanation: "Un Mashup es una aplicación de software que combina las capacidades de dos o más aplicaciones en línea para crear una nueva aplicación híbrida (ej. Google Maps con datos criminales)."
    },
    {
        question: "¿Qué es un SLA (Acuerdo de Nivel de Servicio)?",
        options: [
            "Un tipo de software de gestión de proyectos.",
            "Un contrato formal entre clientes y proveedores de servicios que define responsabilidades y nivel de servicio.",
            "Un lenguaje de programación para servicios web.",
            "Un tipo de hardware de red."
        ],
        answer: 1,
        explanation: "Un SLA (Acuerdo de Nivel de Servicio) es un contrato formal entre clientes y proveedores de servicios que define las responsabilidades específicas del proveedor y el nivel de servicio esperado."
    },
    {
        question: "¿Cuál es el principal objetivo de la computación verde?",
        options: [
            "Aumentar el consumo de energía en centros de datos.",
            "Minimizar el impacto ambiental de la TI.",
            "Reducir la vida útil del hardware.",
            "Incrementar los costos operativos de TI."
        ],
        answer: 1,
        explanation: "La computación verde (o TI verde) se refiere a las prácticas y tecnologías destinadas a diseñar, fabricar, usar y disponer de hardware de TI de manera que se minimice su impacto negativo en el medio ambiente."
    },
    {
        question: "¿Qué es la escalabilidad en el contexto de la infraestructura de TI?",
        options: [
            "La capacidad de un sistema para reducir su tamaño.",
            "La habilidad de un sistema para expandirse y dar servicio a un mayor número de usuarios sin fallar.",
            "El costo de mantener un sistema.",
            "La velocidad de procesamiento de un sistema."
        ],
        answer: 1,
        explanation: "La escalabilidad es la habilidad de un sistema, producto o computadora para expandirse y dar servicio a un mayor número de usuarios sin fallar."
    },
    {
        question: "¿Qué es un ecosistema de negocios?",
        options: [
            "Una sola empresa grande.",
            "Conjuntos de industrias vagamente acopladas que proporcionan servicios y productos relacionados.",
            "Un grupo de empresas que compiten directamente.",
            "Una red de computadoras en una oficina."
        ],
        answer: 1,
        explanation: "Un ecosistema de negocios es un conjunto de industrias vagamente acopladas que proporcionan servicios y productos relacionados, donde el éxito de una empresa depende del éxito de otras empresas en el ecosistema."
    },
    {
        question: "¿Qué son los efectos de red?",
        options: [
            "La velocidad de internet.",
            "Cuando el valor de un producto aumenta con el número de usuarios.",
            "El costo de las redes.",
            "La complejidad técnica de una red."
        ],
        answer: 1,
        explanation: "Los efectos de red ocurren cuando el valor de un producto o servicio aumenta a medida que más personas lo usan, como las redes sociales o plataformas de comunicación."
    },
    {
        question: "¿Qué es la nanotecnología en el contexto de la TI?",
        options: [
            "El estudio de redes muy pequeñas.",
            "El uso de átomos y moléculas individuales para crear dispositivos miles de veces más pequeños.",
            "Una nueva forma de computación en la nube.",
            "Un tipo de software de seguridad."
        ],
        answer: 1,
        explanation: "La nanotecnología es el uso de átomos y moléculas individuales para crear chips de computadora y otros dispositivos miles de veces más pequeños que las tecnologías actuales."
    },
    {
        question: "¿Qué es un servidor blade?",
        options: [
            "Un tipo de software de servidor.",
            "Una computadora ultradelgada con procesadores, memoria y conexiones de red, almacenada en estantes.",
            "Un servidor de gran tamaño para mainframes.",
            "Un dispositivo de almacenamiento de datos."
        ],
        answer: 1,
        explanation: "Un servidor blade es una computadora ultradelgada que consiste en un tablero de circuitos con procesadores, memoria y conexiones de red, almacenadas en estantes para ahorrar espacio."
    },
    {
        question: "¿Qué es un mashup?",
        options: [
            "Un tipo de sistema operativo móvil.",
            "Una aplicación de software que combina capacidades de dos o más aplicaciones en línea.",
            "Un lenguaje de programación para la web.",
            "Un dispositivo de hardware de red."
        ],
        answer: 1,
        explanation: "Un mashup es una aplicación de software que combina las capacidades de dos o más aplicaciones en línea (generalmente de fuentes distintas) para crear un nuevo servicio de valor agregado."
    },
    {
        question: "¿Qué es el TCO (Costo Total de Propiedad)?",
        options: [
            "Solo el costo de adquisición de hardware y software.",
            "Un modelo que analiza el costo real de poseer recursos tecnológicos, incluyendo costos directos e indirectos.",
            "El costo de la mano de obra para instalar TI.",
            "El precio de venta de un producto de software."
        ],
        answer: 1,
        explanation: "El Costo Total de Propiedad (TCO) es un modelo que analiza el costo real de poseer recursos tecnológicos, incluyendo no solo la adquisición sino también los costos continuos de instalación, capacitación, soporte, mantenimiento, infraestructura, tiempo inactivo, espacio y energía."
    },
    {
        question: "¿Qué es la computación utilitaria?",
        options: [
            "Un modelo de facturación donde los cargos se basan en la cantidad de recursos utilizados.",
            "Un tipo de software de utilidad.",
            "Un método para optimizar el uso de la CPU.",
            "Un sistema de cómputo para tareas básicas."
        ],
        answer: 0,
        explanation: "La computación utilitaria es un modelo de facturación en la computación en la nube donde los cargos se basan en la cantidad de recursos utilizados, también conocida como computación bajo demanda."
    },
    {
        question: "¿Qué es una SAN (Red de Área de Almacenamiento)?",
        options: [
            "Una red local para computadoras.",
            "Una red separada de alta velocidad dedicada al almacenamiento que conecta varios dispositivos.",
            "Un tipo de servidor de bases de datos.",
            "Un protocolo de red."
        ],
        answer: 1,
        explanation: "Una SAN (Red de Área de Almacenamiento) es una red separada de alta velocidad dedicada al almacenamiento que conecta varios dispositivos, creando una gran reserva central de almacenamiento para múltiples servidores."
    },
    {
        question: "¿Qué es un sistema operativo?",
        options: [
            "Un programa para navegar por internet.",
            "El software que administra los recursos y actividades de la computadora.",
            "Un tipo de hardware de computadora.",
            "Una aplicación de software empresarial."
        ],
        answer: 1,
        explanation: "Un sistema operativo es el software que administra los recursos y actividades de la computadora."
    },
    {
        question: "¿Qué son los sistemas heredados?",
        options: [
            "Sistemas de software de última generación.",
            "Sistemas de procesamiento de transacciones antiguos que se siguen utilizando.",
            "Sistemas diseñados para la computación en la nube.",
            "Sistemas de código abierto."
        ],
        answer: 1,
        explanation: "Los sistemas heredados son sistemas de procesamiento de transacciones antiguos, generalmente creados para mainframes, que se siguen utilizando por su alto costo de reemplazo o rediseño."
    },
    {
        question: "¿Qué es Unix?",
        options: [
            "Un lenguaje de programación.",
            "Un sistema operativo potente, portable, multitareas y multiusuario.",
            "Un tipo de hardware de servidor.",
            "Un protocolo de red."
        ],
        answer: 1,
        explanation: "Unix es un sistema operativo potente, portable, multitareas y multiusuario, desarrollado en Bell Labs y utilizado en una amplia variedad de computadoras de distintos fabricantes."
    },
    {
        question: "¿Qué es Wintel PC?",
        options: [
            "Una computadora personal basada en Linux.",
            "Una computadora personal basada en el sistema operativo Windows y un microprocesador Intel, que se convirtió en el estándar de escritorio.",
            "Un tipo de servidor web.",
            "Un dispositivo móvil."
        ],
        answer: 1,
        explanation: "Wintel PC es una computadora personal basada en el sistema operativo Windows y un microprocesador Intel, que se convirtió en el estándar de escritorio."
    },
    {
        question: "¿Cuál es el principal beneficio de la computación en la nube para las empresas?",
        options: [
            "Aumento de grandes inversiones iniciales.",
            "Reducción de grandes inversiones iniciales en hardware y software.",
            "Menor escalabilidad.",
            "Mayor dependencia del proveedor."
        ],
        answer: 1,
        explanation: "Uno de los principales beneficios de la computación en la nube es la reducción de grandes inversiones iniciales en hardware y software, ya que se paga por uso."
    },
    {
        question: "¿Qué es un modelo de computación híbrida en la nube?",
        options: [
            "Usar solo nubes públicas.",
            "Usar solo nubes privadas.",
            "Combinar infraestructura propia con servicios en la nube pública.",
            "Un modelo que no usa virtualización."
        ],
        answer: 2,
        explanation: "Un modelo de computación híbrida combina infraestructura propia (nube privada) con servicios en la nube pública, ideal para grandes corporaciones con sistemas propietarios complejos."
    },
    {
        question: "¿Qué es el agrupamiento de recursos independiente de la ubicación en la nube?",
        options: [
            "Los recursos están fijos en una ubicación geográfica.",
            "Los recursos se agrupan para servir a múltiples usuarios, y se asignan dinámicamente sin que el usuario sepa su ubicación física.",
            "Cada usuario tiene sus propios recursos dedicados.",
            "Solo se puede acceder a los recursos desde una ubicación específica."
        ],
        answer: 1,
        explanation: "El agrupamiento de recursos independiente de la ubicación significa que los recursos se agrupan para servir a múltiples usuarios, y se asignan dinámicamente según la demanda, sin que el usuario sepa su ubicación física."
    },
    {
        question: "¿Qué significa la elasticidad rápida en la computación en la nube?",
        options: [
            "Los recursos son fijos y no pueden cambiar.",
            "Los recursos pueden aumentar o disminuir rápidamente para satisfacer la demanda cambiante.",
            "Los recursos son difíciles de escalar.",
            "Solo se puede escalar hacia arriba."
        ],
        answer: 1,
        explanation: "La elasticidad rápida significa que los recursos pueden aumentar o disminuir rápidamente para satisfacer la demanda cambiante, lo que permite una gran flexibilidad."
    },
    {
        question: "¿Qué es el servicio medido en la computación en la nube?",
        options: [
            "Los servicios son gratuitos.",
            "Los cargos se basan en la cantidad de recursos utilizados (computación utilitaria o bajo demanda).",
            "Se paga una tarifa fija sin importar el uso.",
            "Solo se mide el tiempo de uso."
        ],
        answer: 1,
        explanation: "El servicio medido implica que los cargos se basan en la cantidad de recursos utilizados, lo que permite un modelo de pago por uso."
    },
    {
        question: "¿Qué es el acceso ubicuo a la red en la computación en la nube?",
        options: [
            "Solo se puede acceder a los recursos desde la oficina.",
            "Se puede acceder a los recursos desde cualquier dispositivo conectado a Internet.",
            "El acceso está restringido a ciertos dispositivos.",
            "Solo se puede acceder a través de una red privada."
        ],
        answer: 1,
        explanation: "El acceso ubicuo a la red significa que se puede acceder a los recursos desde cualquier dispositivo conectado a Internet, incluyendo plataformas móviles."
    },
    {
        question: "¿Qué es el autoservicio bajo demanda en la computación en la nube?",
        options: [
            "Los usuarios deben solicitar los recursos a un administrador.",
            "Los usuarios pueden obtener recursos computacionales por sí mismos cuando los necesitan.",
            "Los servicios se entregan automáticamente sin intervención del usuario.",
            "Solo el proveedor puede aprovisionar recursos."
        ],
        answer: 1,
        explanation: "El autoservicio bajo demanda permite a los usuarios obtener recursos computacionales por sí mismos cuando los necesitan, sin intervención del proveedor."
    },
    {
        question: "¿Qué es el modelo de fuerzas competitivas para la inversión en infraestructura de TI?",
        options: [
            "Un modelo que solo considera el costo de adquisición.",
            "Un marco para evaluar la inversión necesaria considerando la demanda del mercado, estrategia de negocios, TCO, etc.",
            "Un modelo para reducir el personal de TI.",
            "Un modelo para aumentar la complejidad de la infraestructura."
        ],
        answer: 1,
        explanation: "El modelo de fuerzas competitivas para la inversión en infraestructura de TI es un marco para evaluar la inversión necesaria considerando la demanda del mercado, la estrategia de negocios, el TCO, la evaluación de la tecnología, y las inversiones de los competidores."
    },
    {
        question: "¿Qué es la gobernanza en la administración de la infraestructura de TI?",
        options: [
            "Determinar quién debe controlar y administrar la infraestructura de TI y cómo asignar los costos.",
            "Solo la gestión técnica de los servidores.",
            "La automatización de todos los procesos de TI.",
            "La compra de nuevo hardware."
        ],
        answer: 0,
        explanation: "La gobernanza en la administración de la infraestructura de TI implica determinar quién debe controlar y administrar la infraestructura de TI (centralizada o descentralizada) y cómo asignar los costos de TI."
    },
    {
        question: "¿Qué es la computación empresarial?",
        options: [
            "Una era de la TI donde las empresas solo usaban mainframes.",
            "Una era donde las empresas buscaron integrar redes y aplicaciones dispares en una infraestructura a nivel empresarial.",
            "Una era donde solo se usaban computadoras personales.",
            "Una era donde la computación en la nube era dominante."
        ],
        answer: 1,
        explanation: "La computación empresarial (1992-actualidad) es una era donde las empresas buscaron integrar redes y aplicaciones dispares en una infraestructura a nivel empresarial, utilizando estándares como TCP/IP."
    },
    {
        question: "¿Qué es la Era de la computadora personal?",
        options: [
            "Marcada por la introducción de la IBM PC y el dominio de la plataforma Wintel.",
            "Caracterizada por la computación centralizada.",
            "La era de la computación en la nube.",
            "La era de los mainframes."
        ],
        answer: 0,
        explanation: "La Era de la computadora personal (1981-actualidad) fue marcada por la introducción de la IBM PC y el dominio de la plataforma Wintel (Windows en microprocesadores Intel)."
    },
    {
        question: "¿Qué es la Era de la computación en la nube y móvil?",
        options: [
            "Impulsada por el ancho de banda de Internet, ofreciendo acceso a un pool compartido de recursos computacionales.",
            "Caracterizada por la computación centralizada.",
            "La era de las minicomputadoras.",
            "La era de la computadora personal."
        ],
        answer: 0,
        explanation: "La Era de la computación en la nube y móvil (2000-actualidad) es impulsada por el ancho de banda de Internet, ofreciendo acceso a un pool compartido de recursos computacionales a través de una red."
    },
    {
        question: "¿Qué es la Ley de Moore?",
        options: [
            "Predice que el valor de una red aumenta exponencialmente.",
            "Indica que el costo de almacenar información digital se reduce exponencialmente.",
            "Predice que el poder de los microprocesadores se duplica aproximadamente cada 18 meses.",
            "Se refiere a la reducción de costos de comunicaciones."
        ],
        answer: 2,
        explanation: "La Ley de Moore predice que el poder de los microprocesadores se duplica aproximadamente cada 18 meses, mientras que el precio de los componentes de cómputo se reduce a la mitad en el mismo período."
    },
    {
        question: "¿Qué es la Ley del almacenamiento digital masivo?",
        options: [
            "Predice que el poder de los microprocesadores se duplica.",
            "Indica que el costo de almacenar información digital se reduce exponencialmente.",
            "Afirma que el valor de una red aumenta exponencialmente.",
            "Se refiere a la reducción de costos de comunicaciones."
        ],
        answer: 1,
        explanation: "La Ley del almacenamiento digital masivo indica que el costo de almacenar información digital se reduce exponencialmente, duplicándose la cantidad de almacenamiento por cada dólar gastado aproximadamente cada 15 meses."
    },
    {
        question: "¿Qué son los Estándares y efectos de la red?",
        options: [
            "Especificaciones que establecen la compatibilidad de los productos y la habilidad de comunicarse en una red.",
            "Solo se refieren a la velocidad de internet.",
            "Aumentan los precios de los productos.",
            "Reducen la compatibilidad entre sistemas."
        ],
        answer: 0,
        explanation: "Los Estándares y efectos de la red son especificaciones que establecen la compatibilidad de los productos y la habilidad de comunicarse en una red, impulsando economías de escala y reduciendo precios."
    },
    {
        question: "¿Qué es la Plataforma digital móvil emergente?",
        options: [
            "Solo computadoras de escritorio.",
            "Teléfonos celulares, smartphones, netbooks y tabletas que se convierten en medios principales para acceder a Internet y realizar funciones de cómputo empresarial.",
            "Servidores blade.",
            "Mainframes."
        ],
        answer: 1,
        explanation: "La Plataforma digital móvil emergente incluye teléfonos celulares, smartphones, netbooks y tabletas que se están convirtiendo en los medios principales para acceder a Internet y realizar funciones de cómputo empresarial."
    },
    {
        question: "¿Qué son los Procesadores de alto rendimiento y ahorro de energía?",
        options: [
            "Microprocesadores que solo aumentan el consumo de energía.",
            "Microprocesadores multinúcleo que mejoran el rendimiento y la eficiencia energética.",
            "Procesadores que solo funcionan en mainframes.",
            "Procesadores que no son cruciales para dispositivos móviles."
        ],
        answer: 1,
        explanation: "Los Procesadores de alto rendimiento y ahorro de energía son microprocesadores multinúcleo (dual-core, quad-core y más) que mejoran el rendimiento y la eficiencia energética, siendo cruciales para la duración de la batería en dispositivos móviles."
    },
    {
        question: "¿Qué es Linux en el contexto de software?",
        options: [
            "Un sistema operativo propietario.",
            "Un sistema operativo de código abierto relacionado con Unix, utilizado en diversas plataformas.",
            "Un lenguaje de programación.",
            "Un tipo de hardware."
        ],
        answer: 1,
        explanation: "Linux es un sistema operativo de código abierto relacionado con Unix, es gratuito, modificable y redistribible, utilizado en diversas plataformas de hardware, servidores web y cómputo de alto rendimiento."
    },
    {
        question: "¿Qué es Java en el contexto de software para Web?",
        options: [
            "Un lenguaje de programación que solo funciona en Windows.",
            "Un lenguaje de programación orientado a objetos, independiente del sistema operativo y del procesador, principal entorno interactivo para la web.",
            "Un tipo de base de datos.",
            "Un protocolo de red."
        ],
        answer: 1,
        explanation: "Java es un lenguaje de programación orientado a objetos, independiente del sistema operativo y del procesador, que se ha convertido en el entorno interactivo principal para la web."
    },
    {
        question: "¿Qué es la Arquitectura Orientada a Servicios (SOA)?",
        options: [
            "Un tipo de hardware de red.",
            "Una colección de servicios web que se utilizan para construir los sistemas de software de una empresa, permitiendo la reutilización de servicios.",
            "Un lenguaje de programación.",
            "Un sistema operativo."
        ],
        answer: 1,
        explanation: "La Arquitectura Orientada a Servicios (SOA) es una colección de servicios web que se utilizan para construir los sistemas de software de una empresa, permitiendo la reutilización de servicios y la creación rápida de nuevas aplicaciones."
    },
    {
        question: "¿Qué son los Paquetes de software empresarial?",
        options: [
            "Software desarrollado a medida para cada empresa.",
            "Soluciones listas para usar (ERP, CRM, SCM) de proveedores como SAP y Oracle-PeopleSoft.",
            "Software de código abierto.",
            "Software que solo funciona en la nube."
        ],
        answer: 1,
        explanation: "Los Paquetes de software empresarial son soluciones listas para usar (ERP, CRM, SCM) de proveedores como SAP y Oracle-PeopleSoft, que ofrecen un sistema integrado a nivel mundial."
    },
    {
        question: "¿Qué es el SaaS (Software como un Servicio)?",
        options: [
            "Software que se compra y se instala localmente.",
            "El software y los datos se alojan en servidores remotos y se accede a ellos a través de un navegador web, pagando por suscripción o transacción.",
            "Un tipo de hardware de red.",
            "Un sistema operativo."
        ],
        answer: 1,
        explanation: "SaaS (Software como un Servicio) es un modelo donde el software y los datos se alojan en servidores remotos y se accede a ellos a través de un navegador web, pagando por suscripción o transacción."
    },
    {
        question: "¿Qué es un Mashup?",
        options: [
            "Una aplicación de software que solo funciona offline.",
            "Una aplicación que combina capacidades de dos o más aplicaciones en línea para crear una nueva aplicación híbrida.",
            "Un tipo de sistema operativo.",
            "Un lenguaje de programación."
        ],
        answer: 1,
        explanation: "Un Mashup es una aplicación de software que combina las capacidades de dos o más aplicaciones en línea para crear una nueva aplicación híbrida (ej. Google Maps con datos criminales)."
    },
    {
        question: "¿Cuál es un desafío clave al administrar la infraestructura de TI relacionado con la flexibilidad ante el crecimiento o la reducción?",
        options: [
            "Gerencia y gobernanza.",
            "Realizar inversiones inteligentes en infraestructura.",
            "Lidiar con el cambio de plataforma e infraestructura (escalabilidad).",
            "Costo Total de Propiedad (TCO)."
        ],
        answer: 2,
        explanation: "Lidiar con el cambio de plataforma e infraestructura implica mantener la flexibilidad ante el crecimiento o la reducción, y la evolución tecnológica, lo que se relaciona con la escalabilidad."
    },
    {
        question: "¿Qué es el TCO (Costo Total de Propiedad)?",
        options: [
            "Solo el costo de adquisición de hardware y software.",
            "Un modelo que analiza el costo real de poseer recursos tecnológicos, incluyendo costos directos e indirectos como instalación, capacitación, soporte, etc.",
            "El costo de la mano de obra para instalar TI.",
            "El precio de venta de un producto de software."
        ],
        answer: 1,
        explanation: "El Costo Total de Propiedad (TCO) es un modelo que analiza el costo real de poseer recursos tecnológicos, incluyendo no solo la adquisición sino también los costos administrativos continuos (instalación, capacitación, soporte, mantenimiento, etc.)."
    },
    {
        question: "¿Qué es el modelo de fuerzas competitivas para la inversión en infraestructura de TI?",
        options: [
            "Un modelo que solo considera el costo de adquisición.",
            "Un marco para evaluar la inversión necesaria considerando la demanda del mercado, estrategia de negocios, TCO, etc.",
            "Un modelo para reducir el personal de TI.",
            "Un modelo para aumentar la complejidad de la infraestructura."
        ],
        answer: 1,
        explanation: "El modelo de fuerzas competitivas para la inversión en infraestructura de TI es un marco para evaluar la inversión necesaria considerando la demanda del mercado, la estrategia de negocios, el TCO, la evaluación de la tecnología, y las inversiones de los competidores."
    },
    {
        question: "¿Qué es la computación utilitaria o bajo demanda?",
        options: [
            "Un modelo de facturación donde los cargos se basan en la cantidad de recursos utilizados.",
            "Un tipo de software de utilidad.",
            "Un método para optimizar el uso de la CPU.",
            "Un sistema de cómputo para tareas básicas."
        ],
        answer: 0,
        explanation: "La computación utilitaria o bajo demanda es un modelo de facturación en la computación en la nube donde los cargos se basan en la cantidad de recursos utilizados."
    },
    {
        question: "¿Cuál es una desventaja de la computación en la nube para las empresas?",
        options: [
            "Reducción de grandes inversiones iniciales.",
            "Mayor escalabilidad y flexibilidad.",
            "Dependencia del proveedor y riesgos de seguridad/privacidad.",
            "Reducción de costos operativos."
        ],
        answer: 2,
        explanation: "Una de las desventajas de la computación en la nube es la dependencia del proveedor y los riesgos de seguridad y privacidad al confiar datos críticos a terceros."
    },
    {
        question: "¿Qué es la computación verde (Green Computing)?",
        options: [
            "Prácticas y tecnologías que minimizan el impacto ambiental de la TI.",
            "Un tipo de computación en la nube.",
            "Un sistema operativo.",
            "Un lenguaje de programación."
        ],
        answer: 0,
        explanation: "La computación verde (o TI verde) se refiere a las prácticas y tecnologías destinadas a diseñar, fabricar, usar y disponer de hardware de TI de manera que se minimice su impacto negativo en el medio ambiente."
    },
    {
        question: "¿Qué componente de la infraestructura de TI incluye software de gestión de bases de datos como IBM DB2 y Oracle?",
        options: [
            "Plataformas de hardware de computadora.",
            "Plataformas de sistemas operativos.",
            "Aplicaciones de software empresariales.",
            "Administración y almacenamiento de datos."
        ],
        answer: 3,
        explanation: "La Administración y almacenamiento de datos incluye software de gestión de bases de datos como IBM DB2, Oracle, Microsoft SQL Server, Sybase y MySQL."
    },
    {
        question: "¿Qué era de la infraestructura de TI se caracterizó por la integración de redes y aplicaciones dispares a nivel empresarial?",
        options: [
            "Era de las mainframes y minicomputadoras.",
            "Era de la computadora personal.",
            "Era cliente/servidor.",
            "Era de la computación empresarial."
        ],
        answer: 3,
        explanation: "La Era de la computación empresarial (1992-actualidad) se caracterizó por la integración de redes y aplicaciones dispares en una infraestructura a nivel empresarial, utilizando estándares como TCP/IP."
    },
    {
        question: "¿Qué ley tecnológica afirma que el valor o poder de una red aumenta exponencialmente a medida que el número de sus miembros crece?",
        options: [
            "Ley de Moore.",
            "Ley del almacenamiento digital masivo.",
            "Ley de Metcalfe.",
            "Ley de la reducción de costos de comunicaciones."
        ],
        answer: 2,
        explanation: "La Ley de Metcalfe afirma que el valor o poder de una red aumenta exponencialmente a medida que el número de sus miembros crece."
    },
    {
        question: "¿Qué tendencia de hardware permite que un solo recurso físico (servidor, almacenamiento) aparezca como múltiples recursos lógicos?",
        options: [
            "Computación en malla.",
            "Computación en la nube.",
            "Virtualización.",
            "Computación autonómica."
        ],
        answer: 2,
        explanation: "La virtualización permite que un solo recurso físico (servidor, almacenamiento) aparezca como múltiples recursos lógicos, o que varios recursos físicos se presenten como uno solo."
    },
    {
        question: "¿Qué es el software de código abierto?",
        options: [
            "Software que solo puede ser usado por empresas.",
            "Software producido por una comunidad global, gratuito, modificable y redistribuible.",
            "Software que requiere una licencia costosa.",
            "Software que solo funciona en sistemas operativos específicos."
        ],
        answer: 1,
        explanation: "El software de código abierto es producido por una comunidad global de programadores, es gratuito, modificable y redistribuible."
    },
    {
        question: "¿Qué son los Servicios Web?",
        options: [
            "Programas de software para navegar por internet.",
            "Componentes de software débilmente acoplados que intercambian información usando estándares web.",
            "Aplicaciones para la gestión de bases de datos.",
            "Sistemas operativos para servidores."
        ],
        answer: 1,
        explanation: "Los Servicios Web son componentes de software débilmente acoplados que intercambian información utilizando estándares y lenguajes de comunicación web universales (como XML, SOAP, WSDL, UDDI)."
    },
    {
        question: "¿Qué es el Outsourcing de software?",
        options: [
            "Desarrollo de software internamente por el personal de la empresa.",
            "Contratar el desarrollo o mantenimiento de software con empresas externas.",
            "Venta de software a otras empresas.",
            "Uso de software gratuito."
        ],
        answer: 1,
        explanation: "El Outsourcing de software es contratar el desarrollo o mantenimiento de software personalizado con empresas externas, a menudo en el extranjero, para reducir costos."
    },
    {
        question: "¿Cuál es una de las desventajas de la computación en la nube para las empresas?",
        options: [
            "Reducción de grandes inversiones iniciales.",
            "Mayor escalabilidad y flexibilidad.",
            "Dependencia del proveedor y riesgos de seguridad/privacidad.",
            "Reducción de costos operativos."
        ],
        answer: 2,
        explanation: "Una de las desventajas de la computación en la nube es la dependencia del proveedor y los riesgos de seguridad y privacidad al confiar datos críticos a terceros."
    },
    {
        question: "¿Qué es la computación autonómica?",
        options: [
            "Sistemas que requieren constante intervención humana.",
            "Sistemas que se configuran, optimizan, ajustan, reparan y protegen a sí mismos.",
            "Sistemas que solo funcionan en la nube.",
            "Sistemas que solo usan hardware de Apple."
        ],
        answer: 1,
        explanation: "La computación autonómica es un esfuerzo para desarrollar sistemas que puedan configurarse, optimizarse, ajustarse, repararse y protegerse a sí mismos, reduciendo la complejidad de la administración."
    },
    {
        question: "¿Qué tipo de procesadores son cruciales para la duración de la batería en dispositivos móviles?",
        options: [
            "Procesadores de alto rendimiento.",
            "Procesadores multinúcleo.",
            "Procesadores de bajo consumo (ej. ARM, Intel Atom).",
            "Mainframes."
        ],
        answer: 2,
        explanation: "Los procesadores de bajo consumo (ARM, Apple A4, Intel Atom) son cruciales para la duración de la batería en dispositivos móviles."
    },
    {
        question: "¿Qué es un Mashup en el contexto de software?",
        options: [
            "Una aplicación de software que solo funciona offline.",
            "Una aplicación que combina capacidades de dos o más aplicaciones en línea.",
            "Un tipo de sistema operativo.",
            "Un lenguaje de programación."
        ],
        answer: 1,
        explanation: "Un Mashup es una aplicación de software que combina las capacidades de dos o más aplicaciones en línea para crear una nueva aplicación híbrida (ej. Google Maps con datos criminales)."
    },
    {
        question: "¿Qué es un SLA (Acuerdo de Nivel de Servicio)?",
        options: [
            "Un tipo de software de gestión de proyectos.",
            "Un contrato formal entre clientes y proveedores de servicios que define responsabilidades y nivel de servicio.",
            "Un lenguaje de programación para servicios web.",
            "Un tipo de hardware de red."
        ],
        answer: 1,
        explanation: "Un SLA (Acuerdo de Nivel de Servicio) es un contrato formal entre clientes y proveedores de servicios que define las responsabilidades específicas del proveedor y el nivel de servicio esperado."
    },
    {
        question: "¿Cuál es el principal objetivo de la computación verde?",
        options: [
            "Aumentar el consumo de energía en centros de datos.",
            "Minimizar el impacto ambiental de la TI.",
            "Reducir la vida útil del hardware.",
            "Incrementar los costos operativos de TI."
        ],
        answer: 1,
        explanation: "La computación verde (o TI verde) se refiere a las prácticas y tecnologías destinadas a diseñar, fabricar, usar y disponer de hardware de TI de manera que se minimice su impacto negativo en el medio ambiente."
    },
    {
        question: "¿Qué es la escalabilidad en el contexto de la infraestructura de TI?",
        options: [
            "La capacidad de un sistema para reducir su tamaño.",
            "La habilidad de un sistema para expandirse y dar servicio a un mayor número de usuarios sin fallar.",
            "El costo de mantener un sistema.",
            "La velocidad de procesamiento de un sistema."
        ],
        answer: 1,
        explanation: "La escalabilidad es la habilidad de un sistema, producto o computadora para expandirse y dar servicio a un mayor número de usuarios sin fallar."
    },
    {
        question: "¿Qué es un ecosistema de negocios?",
        options: [
            "Una sola empresa grande.",
            "Conjuntos de industrias vagamente acopladas que proporcionan servicios y productos relacionados.",
            "Un grupo de empresas que compiten directamente.",
            "Una red de computadoras en una oficina."
        ],
        answer: 1,
        explanation: "Un ecosistema de negocios es un conjunto de industrias vagamente acopladas que proporcionan servicios y productos relacionados, donde el éxito de una empresa depende del éxito de otras empresas en el ecosistema."
    },
    {
        question: "¿Qué son los efectos de red?",
        options: [
            "La velocidad de internet.",
            "Cuando el valor de un producto aumenta con el número de usuarios.",
            "El costo de las redes.",
            "La complejidad técnica de una red."
        ],
        answer: 1,
        explanation: "Los efectos de red ocurren cuando el valor de un producto o servicio aumenta a medida que más personas lo usan, como las redes sociales o plataformas de comunicación."
    },
    {
        question: "¿Qué es la nanotecnología en el contexto de la TI?",
        options: [
            "El estudio de redes muy pequeñas.",
            "El uso de átomos y moléculas individuales para crear dispositivos miles de veces más pequeños.",
            "Una nueva forma de computación en la nube.",
            "Un tipo de software de seguridad."
        ],
        answer: 1,
        explanation: "La nanotecnología es el uso de átomos y moléculas individuales para crear chips de computadora y otros dispositivos miles de veces más pequeños que las tecnologías actuales."
    },
    {
        question: "¿Qué es un servidor blade?",
        options: [
            "Un tipo de software de servidor.",
            "Una computadora ultradelgada con procesadores, memoria y conexiones de red, almacenada en estantes.",
            "Un servidor de gran tamaño para mainframes.",
            "Un dispositivo de almacenamiento de datos."
        ],
        answer: 1,
        explanation: "Un servidor blade es una computadora ultradelgada que consiste en un tablero de circuitos con procesadores, memoria y conexiones de red, almacenadas en estantes para ahorrar espacio."
    },
    {
        question: "¿Qué es un mashup?",
        options: [
            "Un tipo de sistema operativo móvil.",
            "Una aplicación de software que combina capacidades de dos o más aplicaciones en línea.",
            "Un lenguaje de programación para la web.",
            "Un dispositivo de hardware de red."
        ],
        answer: 1,
        explanation: "Un mashup es una aplicación de software que combina las capacidades de dos o más aplicaciones en línea (generalmente de fuentes distintas) para crear un nuevo servicio de valor agregado."
    },
    {
        question: "¿Qué es el TCO (Costo Total de Propiedad)?",
        options: [
            "Solo el costo de adquisición de hardware y software.",
            "Un modelo que analiza el costo real de poseer recursos tecnológicos, incluyendo costos directos e indirectos.",
            "El costo de la mano de obra para instalar TI.",
            "El precio de venta de un producto de software."
        ],
        answer: 1,
        explanation: "El Costo Total de Propiedad (TCO) es un modelo que analiza el costo real de poseer recursos tecnológicos, incluyendo no solo la adquisición sino también los costos continuos de instalación, capacitación, soporte, mantenimiento, infraestructura, tiempo inactivo, espacio y energía."
    },
    {
        question: "¿Qué es la computación utilitaria?",
        options: [
            "Un modelo de facturación donde los cargos se basan en la cantidad de recursos utilizados.",
            "Un tipo de software de utilidad.",
            "Un método para optimizar el uso de la CPU.",
            "Un sistema de cómputo para tareas básicas."
        ],
        answer: 0,
        explanation: "La computación utilitaria es un modelo de facturación en la computación en la nube donde los cargos se basan en la cantidad de recursos utilizados, también conocida como computación bajo demanda."
    },
    {
        question: "¿Qué es una SAN (Red de Área de Almacenamiento)?",
        options: [
            "Una red local para computadoras.",
            "Una red separada de alta velocidad dedicada al almacenamiento que conecta varios dispositivos.",
            "Un tipo de servidor de bases de datos.",
            "Un protocolo de red."
        ],
        answer: 1,
        explanation: "Una SAN (Red de Área de Almacenamiento) es una red separada de alta velocidad dedicada al almacenamiento que conecta varios dispositivos, creando una gran reserva central de almacenamiento para múltiples servidores."
    },
    {
        question: "¿Qué es un sistema operativo?",
        options: [
            "Un programa para navegar por internet.",
            "El software que administra los recursos y actividades de la computadora.",
            "Un tipo de hardware de computadora.",
            "Una aplicación de software empresarial."
        ],
        answer: 1,
        explanation: "Un sistema operativo es el software que administra los recursos y actividades de la computadora."
    },
    {
        question: "¿Qué son los sistemas heredados?",
        options: [
            "Sistemas de software de última generación.",
            "Sistemas de procesamiento de transacciones antiguos que se siguen utilizando.",
            "Sistemas diseñados para la computación en la nube.",
            "Sistemas de código abierto."
        ],
        answer: 1,
        explanation: "Los sistemas heredados son sistemas de procesamiento de transacciones antiguos, generalmente creados para mainframes, que se siguen utilizando por su alto costo de reemplazo o rediseño."
    },
    {
        question: "¿Qué es Unix?",
        options: [
            "Un lenguaje de programación.",
            "Un sistema operativo potente, portable, multitareas y multiusuario.",
            "Un tipo de hardware de servidor.",
            "Un protocolo de red."
        ],
        answer: 1,
        explanation: "Unix es un sistema operativo potente, portable, multitareas y multiusuario, desarrollado en Bell Labs y utilizado en una amplia variedad de computadoras de distintos fabricantes."
    },
    {
        question: "¿Qué es Wintel PC?",
        options: [
            "Una computadora personal basada en Linux.",
            "Una computadora personal basada en el sistema operativo Windows y un microprocesador Intel, que se convirtió en el estándar de escritorio.",
            "Un tipo de servidor web.",
            "Un dispositivo móvil."
        ],
        answer: 1,
        explanation: "Wintel PC es una computadora personal basada en el sistema operativo Windows y un microprocesador Intel, que se convirtió en el estándar de escritorio."
    },
    {
        question: "¿Cuál es el principal beneficio de la computación en la nube para las empresas?",
        options: [
            "Aumento de grandes inversiones iniciales.",
            "Reducción de grandes inversiones iniciales en hardware y software.",
            "Menor escalabilidad.",
            "Mayor dependencia del proveedor."
        ],
        answer: 1,
        explanation: "Uno de los principales beneficios de la computación en la nube es la reducción de grandes inversiones iniciales en hardware y software, ya que se paga por uso."
    },
    {
        question: "¿Qué es un modelo de computación híbrida en la nube?",
        options: [
            "Usar solo nubes públicas.",
            "Usar solo nubes privadas.",
            "Combinar infraestructura propia con servicios en la nube pública.",
            "Un modelo que no usa virtualización."
        ],
        answer: 2,
        explanation: "Un modelo de computación híbrida combina infraestructura propia (nube privada) con servicios en la nube pública, ideal para grandes corporaciones con sistemas propietarios complejos."
    },
    {
        question: "¿Qué es el agrupamiento de recursos independiente de la ubicación en la nube?",
        options: [
            "Los recursos están fijos en una ubicación geográfica.",
            "Los recursos se agrupan para servir a múltiples usuarios, y se asignan dinámicamente sin que el usuario sepa su ubicación física.",
            "Cada usuario tiene sus propios recursos dedicados.",
            "Solo se puede acceder a los recursos desde una ubicación específica."
        ],
        answer: 1,
        explanation: "El agrupamiento de recursos independiente de la ubicación significa que los recursos se agrupan para servir a múltiples usuarios, y se asignan dinámicamente según la demanda, sin que el usuario sepa su ubicación física."
    },
    {
        question: "¿Qué significa la elasticidad rápida en la computación en la nube?",
        options: [
            "Los recursos son fijos y no pueden cambiar.",
            "Los recursos pueden aumentar o disminuir rápidamente para satisfacer la demanda cambiante.",
            "Los recursos son difíciles de escalar.",
            "Solo se puede escalar hacia arriba."
        ],
        answer: 1,
        explanation: "La elasticidad rápida significa que los recursos pueden aumentar o disminuir rápidamente para satisfacer la demanda cambiante, lo que permite una gran flexibilidad."
    },
    {
        question: "¿Qué es el servicio medido en la computación en la nube?",
        options: [
            "Los servicios son gratuitos.",
            "Los cargos se basan en la cantidad de recursos utilizados (computación utilitaria o bajo demanda).",
            "Se paga una tarifa fija sin importar el uso.",
            "Solo se mide el tiempo de uso."
        ],
        answer: 1,
        explanation: "El servicio medido implica que los cargos se basan en la cantidad de recursos utilizados, lo que permite un modelo de pago por uso."
    },
    {
        question: "¿Qué es el acceso ubicuo a la red en la computación en la nube?",
        options: [
            "Solo se puede acceder a los recursos desde la oficina.",
            "Se puede acceder a los recursos desde cualquier dispositivo conectado a Internet.",
            "El acceso está restringido a ciertos dispositivos.",
            "Solo se puede acceder a través de una red privada."
        ],
        answer: 1,
        explanation: "El acceso ubicuo a la red significa que se puede acceder a los recursos desde cualquier dispositivo conectado a Internet, incluyendo plataformas móviles."
    },
    {
        question: "¿Qué es el autoservicio bajo demanda en la computación en la nube?",
        options: [
            "Los usuarios deben solicitar los recursos a un administrador.",
            "Los usuarios pueden obtener recursos computacionales por sí mismos cuando los necesitan.",
            "Los servicios se entregan automáticamente sin intervención del usuario.",
            "Solo el proveedor puede aprovisionar recursos."
        ],
        answer: 1,
        explanation: "El autoservicio bajo demanda permite a los usuarios obtener recursos computacionales por sí mismos cuando los necesitan, sin intervención del proveedor."
    },
    {
        question: "¿Qué es el modelo de fuerzas competitivas para la inversión en infraestructura de TI?",
        options: [
            "Un modelo que solo considera el costo de adquisición.",
            "Un marco para evaluar la inversión necesaria considerando la demanda del mercado, estrategia de negocios, TCO, etc.",
            "Un modelo para reducir el personal de TI.",
            "Un modelo para aumentar la complejidad de la infraestructura."
        ],
        answer: 1,
        explanation: "El modelo de fuerzas competitivas para la inversión en infraestructura de TI es un marco para evaluar la inversión necesaria considerando la demanda del mercado, la estrategia de negocios, el TCO, la evaluación de la tecnología, y las inversiones de los competidores."
    },
    {
        question: "¿Qué es la gobernanza en la administración de la infraestructura de TI?",
        options: [
            "Determinar quién debe controlar y administrar la infraestructura de TI y cómo asignar los costos.",
            "Solo la gestión técnica de los servidores.",
            "La automatización de todos los procesos de TI.",
            "La compra de nuevo hardware."
        ],
        answer: 0,
        explanation: "La gobernanza en la administración de la infraestructura de TI implica determinar quién debe controlar y administrar la infraestructura de TI (centralizada o descentralizada) y cómo asignar los costos de TI."
    },
    {
        question: "¿Qué es la computación empresarial?",
        options: [
            "Una era de la TI donde las empresas solo usaban mainframes.",
            "Una era donde las empresas buscaron integrar redes y aplicaciones dispares en una infraestructura a nivel empresarial.",
            "Una era donde solo se usaban computadoras personales.",
            "Una era donde la computación en la nube era dominante."
        ],
        answer: 1,
        explanation: "La computación empresarial (1992-actualidad) es una era donde las empresas buscaron integrar redes y aplicaciones dispares en una infraestructura a nivel empresarial, utilizando estándares como TCP/IP."
    },
    {
        question: "¿Qué es la Era de la computadora personal?",
        options: [
            "Marcada por la introducción de la IBM PC y el dominio de la plataforma Wintel.",
            "Caracterizada por la computación centralizada.",
            "La era de la computación en la nube.",
            "La era de los mainframes."
        ],
        answer: 0,
        explanation: "La Era de la computadora personal (1981-actualidad) fue marcada por la introducción de la IBM PC y el dominio de la plataforma Wintel (Windows en microprocesadores Intel)."
    },
    {
        question: "¿Qué es la Era de la computación en la nube y móvil?",
        options: [
            "Impulsada por el ancho de banda de Internet, ofreciendo acceso a un pool compartido de recursos computacionales.",
            "Caracterizada por la computación centralizada.",
            "La era de las minicomputadoras.",
            "La era de la computadora personal."
        ],
        answer: 0,
        explanation: "La Era de la computación en la nube y móvil (2000-actualidad) es impulsada por el ancho de banda de Internet, ofreciendo acceso a un pool compartido de recursos computacionales a través de una red."
    },
    {
        question: "¿Qué es la Ley de Moore?",
        options: [
            "Predice que el valor de una red aumenta exponencialmente.",
            "Indica que el costo de almacenar información digital se reduce exponencialmente.",
            "Predice que el poder de los microprocesadores se duplica aproximadamente cada 18 meses.",
            "Se refiere a la reducción de costos de comunicaciones."
        ],
        answer: 2,
        explanation: "La Ley de Moore predice que el poder de los microprocesadores se duplica aproximadamente cada 18 meses, mientras que el precio de los componentes de cómputo se reduce a la mitad en el mismo período."
    },
    {
        question: "¿Qué es la Ley del almacenamiento digital masivo?",
        options: [
            "Predice que el poder de los microprocesadores se duplica.",
            "Indica que el costo de almacenar información digital se reduce exponencialmente.",
            "Afirma que el valor de una red aumenta exponencialmente.",
            "Se refiere a la reducción de costos de comunicaciones."
        ],
        answer: 1,
        explanation: "La Ley del almacenamiento digital masivo indica que el costo de almacenar información digital se reduce exponencialmente, duplicándose la cantidad de almacenamiento por cada dólar gastado aproximadamente cada 15 meses."
    },
    {
        question: "¿Qué son los Estándares y efectos de la red?",
        options: [
            "Especificaciones que establecen la compatibilidad de los productos y la habilidad de comunicarse en una red.",
            "Solo se refieren a la velocidad de internet.",
            "Aumentan los precios de los productos.",
            "Reducen la compatibilidad entre sistemas."
        ],
        answer: 0,
        explanation: "Los Estándares y efectos de la red son especificaciones que establecen la compatibilidad de los productos y la habilidad de comunicarse en una red, impulsando economías de escala y reduciendo precios."
    },
    {
        question: "¿Qué es la Plataforma digital móvil emergente?",
        options: [
            "Solo computadoras de escritorio.",
            "Teléfonos celulares, smartphones, netbooks y tabletas que se convierten en medios principales para acceder a Internet y realizar funciones de cómputo empresarial.",
            "Servidores blade.",
            "Mainframes."
        ],
        answer: 1,
        explanation: "La Plataforma digital móvil emergente incluye teléfonos celulares, smartphones, netbooks y tabletas que se están convirtiendo en los medios principales para acceder a Internet y realizar funciones de cómputo empresarial."
    },
    {
        question: "¿Qué son los Procesadores de alto rendimiento y ahorro de energía?",
        options: [
            "Microprocesadores que solo aumentan el consumo de energía.",
            "Microprocesadores multinúcleo que mejoran el rendimiento y la eficiencia energética.",
            "Procesadores que solo funcionan en mainframes.",
            "Procesadores que no son cruciales para dispositivos móviles."
        ],
        answer: 1,
        explanation: "Los Procesadores de alto rendimiento y ahorro de energía son microprocesadores multinúcleo (dual-core, quad-core y más) que mejoran el rendimiento y la eficiencia energética, siendo cruciales para la duración de la batería en dispositivos móviles."
    },
    {
        question: "¿Qué es Linux en el contexto de software?",
        options: [
            "Un sistema operativo propietario.",
            "Un sistema operativo de código abierto relacionado con Unix, utilizado en diversas plataformas.",
            "Un lenguaje de programación.",
            "Un tipo de hardware."
        ],
        answer: 1,
        explanation: "Linux es un sistema operativo de código abierto relacionado con Unix, es gratuito, modificable y redistribible, utilizado en diversas plataformas de hardware, servidores web y cómputo de alto rendimiento."
    },
    {
        question: "¿Qué es Java en el contexto de software para Web?",
        options: [
            "Un lenguaje de programación que solo funciona en Windows.",
            "Un lenguaje de programación orientado a objetos, independiente del sistema operativo y del procesador, principal entorno interactivo para la web.",
            "Un tipo de base de datos.",
            "Un protocolo de red."
        ],
        answer: 1,
        explanation: "Java es un lenguaje de programación orientado a objetos, independiente del sistema operativo y del procesador, que se ha convertido en el entorno interactivo principal para la web."
    },
    {
        question: "¿Qué es la Arquitectura Orientada a Servicios (SOA)?",
        options: [
            "Un tipo de hardware de red.",
            "Una colección de servicios web que se utilizan para construir los sistemas de software de una empresa, permitiendo la reutilización de servicios.",
            "Un lenguaje de programación.",
            "Un sistema operativo."
        ],
        answer: 1,
        explanation: "La Arquitectura Orientada a Servicios (SOA) es una colección de servicios web que se utilizan para construir los sistemas de software de una empresa, permitiendo la reutilización de servicios y la creación rápida de nuevas aplicaciones."
    },
    {
        question: "¿Qué son los Paquetes de software empresarial?",
        options: [
            "Software desarrollado a medida para cada empresa.",
            "Soluciones listas para usar (ERP, CRM, SCM) de proveedores como SAP y Oracle-PeopleSoft.",
            "Software de código abierto.",
            "Software que solo funciona en la nube."
        ],
        answer: 1,
        explanation: "Los Paquetes de software empresarial son soluciones listas para usar (ERP, CRM, SCM) de proveedores como SAP y Oracle-PeopleSoft, que ofrecen un sistema integrado a nivel mundial."
    },
    {
        question: "¿Qué es el SaaS (Software como un Servicio)?",
        options: [
            "Software que se compra y se instala localmente.",
            "El software y los datos se alojan en servidores remotos y se accede a ellos a través de un navegador web, pagando por suscripción o transacción.",
            "Un tipo de hardware de red.",
            "Un sistema operativo."
        ],
        answer: 1,
        explanation: "SaaS (Software como un Servicio) es un modelo donde el software y los datos se alojan en servidores remotos y se accede a ellos a través de un navegador web, pagando por suscripción o transacción."
    },
    {
        question: "¿Qué es un Mashup?",
        options: [
            "Una aplicación de software que solo funciona offline.",
            "Una aplicación que combina capacidades de dos o más aplicaciones en línea para crear una nueva aplicación híbrida.",
            "Un tipo de sistema operativo.",
            "Un lenguaje de programación."
        ],
        answer: 1,
        explanation: "Un Mashup es una aplicación de software que combina las capacidades de dos o más aplicaciones en línea para crear una nueva aplicación híbrida (ej. Google Maps con datos criminales)."
    },
    {
        question: "¿Cuál es un desafío clave al administrar la infraestructura de TI relacionado con la flexibilidad ante el crecimiento o la reducción?",
        options: [
            "Gerencia y gobernanza.",
            "Realizar inversiones inteligentes en infraestructura.",
            "Lidiar con el cambio de plataforma e infraestructura (escalabilidad).",
            "Costo Total de Propiedad (TCO)."
        ],
        answer: 2,
        explanation: "Lidiar con el cambio de plataforma e infraestructura implica mantener la flexibilidad ante el crecimiento o la reducción, y la evolución tecnológica, lo que se relaciona con la escalabilidad."
    },
    {
        question: "¿Qué es el TCO (Costo Total de Propiedad)?",
        options: [
            "Solo el costo de adquisición de hardware y software.",
            "Un modelo que analiza el costo real de poseer recursos tecnológicos, incluyendo costos directos e indirectos como instalación, capacitación, soporte, etc.",
            "El costo de la mano de obra para instalar TI.",
            "El precio de venta de un producto de software."
        ],
        answer: 1,
        explanation: "El Costo Total de Propiedad (TCO) es un modelo que analiza el costo real de poseer recursos tecnológicos, incluyendo no solo la adquisición sino también los costos administrativos continuos (instalación, capacitación, soporte, mantenimiento, etc.)."
    },
    {
        question: "¿Qué es el modelo de fuerzas competitivas para la inversión en infraestructura de TI?",
        options: [
            "Un modelo que solo considera el costo de adquisición.",
            "Un marco para evaluar la inversión necesaria considerando la demanda del mercado, estrategia de negocios, TCO, etc.",
            "Un modelo para reducir el personal de TI.",
            "Un modelo para aumentar la complejidad de la infraestructura."
        ],
        answer: 1,
        explanation: "El modelo de fuerzas competitivas para la inversión en infraestructura de TI es un marco para evaluar la inversión necesaria considerando la demanda del mercado, la estrategia de negocios, el TCO, la evaluación de la tecnología, y las inversiones de los competidores."
    },
    {
        question: "¿Qué es la computación utilitaria o bajo demanda?",
        options: [
            "Un modelo de facturación donde los cargos se basan en la cantidad de recursos utilizados.",
            "Un tipo de software de utilidad.",
            "Un método para optimizar el uso de la CPU.",
            "Un sistema de cómputo para tareas básicas."
        ],
        answer: 0,
        explanation: "La computación utilitaria o bajo demanda es un modelo de facturación en la computación en la nube donde los cargos se basan en la cantidad de recursos utilizados."
    },
    {
        question: "¿Cuál es una desventaja de la computación en la nube para las empresas?",
        options: [
            "Reducción de grandes inversiones iniciales.",
            "Mayor escalabilidad y flexibilidad.",
            "Dependencia del proveedor y riesgos de seguridad/privacidad.",
            "Reducción de costos operativos."
        ],
        answer: 2,
        explanation: "Una de las desventajas de la computación en la nube es la dependencia del proveedor y los riesgos de seguridad y privacidad al confiar datos críticos a terceros."
    },
    {
        question: "¿Qué es la computación verde (Green Computing)?",
        options: [
            "Prácticas y tecnologías que minimizan el impacto ambiental de la TI.",
            "Un tipo de computación en la nube.",
            "Un sistema operativo.",
            "Un lenguaje de programación."
        ],
        answer: 0,
        explanation: "La computación verde (o TI verde) se refiere a las prácticas y tecnologías destinadas a diseñar, fabricar, usar y disponer de hardware de TI de manera que se minimice su impacto negativo en el medio ambiente."
    },
    {
        question: "¿Qué componente de la infraestructura de TI incluye software de gestión de bases de datos como IBM DB2 y Oracle?",
        options: [
            "Plataformas de hardware de computadora.",
            "Plataformas de sistemas operativos.",
            "Aplicaciones de software empresariales.",
            "Administración y almacenamiento de datos."
        ],
        answer: 3,
        explanation: "La Administración y almacenamiento de datos incluye software de gestión de bases de datos como IBM DB2, Oracle, Microsoft SQL Server, Sybase y MySQL."
    },
    {
        question: "¿Qué era de la infraestructura de TI se caracterizó por la integración de redes y aplicaciones dispares a nivel empresarial?",
        options: [
            "Era de las mainframes y minicomputadoras.",
            "Era de la computadora personal.",
            "Era cliente/servidor.",
            "Era de la computación empresarial."
        ],
        answer: 3,
        explanation: "La Era de la computación empresarial (1992-actualidad) se caracterizó por la integración de redes y aplicaciones dispares en una infraestructura a nivel empresarial, utilizando estándares como TCP/IP."
    },
    {
        question: "¿Qué ley tecnológica afirma que el valor o poder de una red aumenta exponencialmente a medida que el número de sus miembros crece?",
        options: [
            "Ley de Moore.",
            "Ley del almacenamiento digital masivo.",
            "Ley de Metcalfe.",
            "Ley de la reducción de costos de comunicaciones."
        ],
        answer: 2,
        explanation: "La Ley de Metcalfe afirma que el valor o poder de una red aumenta exponencialmente a medida que el número de sus miembros crece."
    },
    {
        question: "¿Qué tendencia de hardware permite que un solo recurso físico (servidor, almacenamiento) aparezca como múltiples recursos lógicos?",
        options: [
            "Computación en malla.",
            "Computación en la nube.",
            "Virtualización.",
            "Computación autonómica."
        ],
        answer: 2,
        explanation: "La virtualización permite que un solo recurso físico (servidor, almacenamiento) aparezca como múltiples recursos lógicos, o que varios recursos físicos se presenten como uno solo."
    },
    {
        question: "¿Qué es el software de código abierto?",
        options: [
            "Software que solo puede ser usado por empresas.",
            "Software producido por una comunidad global, gratuito, modificable y redistribuible.",
            "Software que requiere una licencia costosa.",
            "Software que solo funciona en sistemas operativos específicos."
        ],
        answer: 1,
        explanation: "El software de código abierto es producido por una comunidad global de programadores, es gratuito, modificable y redistribuible."
    },
    {
        question: "¿Qué son los Servicios Web?",
        options: [
            "Programas de software para navegar por internet.",
            "Componentes de software débilmente acoplados que intercambian información usando estándares web.",
            "Aplicaciones para la gestión de bases de datos.",
            "Sistemas operativos para servidores."
        ],
        answer: 1,
        explanation: "Los Servicios Web son componentes de software débilmente acoplados que intercambian información utilizando estándares y lenguajes de comunicación web universales (como XML, SOAP, WSDL, UDDI)."
    },
    {
        question: "¿Qué es el Outsourcing de software?",
        options: [
            "Desarrollo de software internamente por el personal de la empresa.",
            "Contratar el desarrollo o mantenimiento de software con empresas externas.",
            "Venta de software a otras empresas.",
            "Uso de software gratuito."
        ],
        answer: 1,
        explanation: "El Outsourcing de software es contratar el desarrollo o mantenimiento de software personalizado con empresas externas, a menudo en el extranjero, para reducir costos."
    },
    {
        question: "¿Cuál es una de las desventajas de la computación en la nube para las empresas?",
        options: [
            "Reducción de grandes inversiones iniciales.",
            "Mayor escalabilidad y flexibilidad.",
            "Dependencia del proveedor y riesgos de seguridad/privacidad.",
            "Reducción de costos operativos."
        ],
        answer: 2,
        explanation: "Una de las desventajas de la computación en la nube es la dependencia del proveedor y los riesgos de seguridad y privacidad al confiar datos críticos a terceros."
    },
    {
        question: "¿Qué es la computación autonómica?",
        options: [
            "Sistemas que requieren constante intervención humana.",
            "Sistemas que se configuran, optimizan, ajustan, reparan y protegen a sí mismos.",
            "Sistemas que solo funcionan en la nube.",
            "Sistemas que solo usan hardware de Apple."
        ],
        answer: 1,
        explanation: "La computación autonómica es un esfuerzo para desarrollar sistemas que puedan configurarse, optimizarse, ajustarse, repararse y protegerse a sí mismos, reduciendo la complejidad de la administración."
    },
    {
        question: "¿Qué tipo de procesadores son cruciales para la duración de la batería en dispositivos móviles?",
        options: [
            "Procesadores de alto rendimiento.",
            "Procesadores multinúcleo.",
            "Procesadores de bajo consumo (ej. ARM, Intel Atom).",
            "Mainframes."
        ],
        answer: 2,
        explanation: "Los procesadores de bajo consumo (ARM, Apple A4, Intel Atom) son cruciales para la duración de la batería en dispositivos móviles."
    },
    {
        question: "¿Qué es un Mashup en el contexto de software?",
        options: [
            "Una aplicación de software que solo funciona offline.",
            "Una aplicación que combina capacidades de dos o más aplicaciones en línea.",
            "Un tipo de sistema operativo.",
            "Un lenguaje de programación."
        ],
        answer: 1,
        explanation: "Un Mashup es una aplicación de software que combina las capacidades de dos o más aplicaciones en línea para crear una nueva aplicación híbrida (ej. Google Maps con datos criminales)."
    },
    {
        question: "¿Qué es un SLA (Acuerdo de Nivel de Servicio)?",
        options: [
            "Un tipo de software de gestión de proyectos.",
            "Un contrato formal entre clientes y proveedores de servicios que define responsabilidades y nivel de servicio.",
            "Un lenguaje de programación para servicios web.",
            "Un tipo de hardware de red."
        ],
        answer: 1,
        explanation: "Un SLA (Acuerdo de Nivel de Servicio) es un contrato formal entre clientes y proveedores de servicios que define las responsabilidades específicas del proveedor y el nivel de servicio esperado."
    },
    {
        question: "¿Cuál es el principal objetivo de la computación verde?",
        options: [
            "Aumentar el consumo de energía en centros de datos.",
            "Minimizar el impacto ambiental de la TI.",
            "Reducir la vida útil del hardware.",
            "Incrementar los costos operativos de TI."
        ],
        answer: 1,
        explanation: "La computación verde (o TI verde) se refiere a las prácticas y tecnologías destinadas a diseñar, fabricar, usar y disponer de hardware de TI de manera que se minimice su impacto negativo en el medio ambiente."
    },
    {
        question: "¿Qué es la escalabilidad en el contexto de la infraestructura de TI?",
        options: [
            "La capacidad de un sistema para reducir su tamaño.",
            "La habilidad de un sistema para expandirse y dar servicio a un mayor número de usuarios sin fallar.",
            "El costo de mantener un sistema.",
            "La velocidad de procesamiento de un sistema."
        ],
        answer: 1,
        explanation: "La escalabilidad es la habilidad de un sistema, producto o computadora para expandirse y dar servicio a un mayor número de usuarios sin fallar."
    },
    {
        question: "¿Qué es un ecosistema de negocios?",
        options: [
            "Una sola empresa grande.",
            "Conjuntos de industrias vagamente acopladas que proporcionan servicios y productos relacionados.",
            "Un grupo de empresas que compiten directamente.",
            "Una red de computadoras en una oficina."
        ],
        answer: 1,
        explanation: "Un ecosistema de negocios es un conjunto de industrias vagamente acopladas que proporcionan servicios y productos relacionados, donde el éxito de una empresa depende del éxito de otras empresas en el ecosistema."
    },
    {
        question: "¿Qué son los efectos de red?",
        options: [
            "La velocidad de internet.",
            "Cuando el valor de un producto aumenta con el número de usuarios.",
            "El costo de las redes.",
            "La complejidad técnica de una red."
        ],
        answer: 1,
        explanation: "Los efectos de red ocurren cuando el valor de un producto o servicio aumenta a medida que más personas lo usan, como las redes sociales o plataformas de comunicación."
    },
    {
        question: "¿Qué es la nanotecnología en el contexto de la TI?",
        options: [
            "El estudio de redes muy pequeñas.",
            "El uso de átomos y moléculas individuales para crear dispositivos miles de veces más pequeños.",
            "Una nueva forma de computación en la nube.",
            "Un tipo de software de seguridad."
        ],
        answer: 1,
        explanation: "La nanotecnología es el uso de átomos y moléculas individuales para crear chips de computadora y otros dispositivos miles de veces más pequeños que las tecnologías actuales."
    },
    {
        question: "¿Qué es un servidor blade?",
        options: [
            "Un tipo de software de servidor.",
            "Una computadora ultradelgada con procesadores, memoria y conexiones de red, almacenada en estantes.",
            "Un servidor de gran tamaño para mainframes.",
            "Un dispositivo de almacenamiento de datos."
        ],
        answer: 1,
        explanation: "Un servidor blade es una computadora ultradelgada que consiste en un tablero de circuitos con procesadores, memoria y conexiones de red, almacenadas en estantes para ahorrar espacio."
    },
    {
        question: "¿Qué es un mashup?",
        options: [
            "Un tipo de sistema operativo móvil.",
            "Una aplicación de software que combina capacidades de dos o más aplicaciones en línea.",
            "Un lenguaje de programación para la web.",
            "Un dispositivo de hardware de red."
        ],
        answer: 1,
        explanation: "Un mashup es una aplicación de software que combina las capacidades de dos o más aplicaciones en línea (generalmente de fuentes distintas) para crear un nuevo servicio de valor agregado."
    },
    {
        question: "¿Qué es el TCO (Costo Total de Propiedad)?",
        options: [
            "Solo el costo de adquisición de hardware y software.",
            "Un modelo que analiza el costo real de poseer recursos tecnológicos, incluyendo costos directos e indirectos.",
            "El costo de la mano de obra para instalar TI.",
            "El precio de venta de un producto de software."
        ],
        answer: 1,
        explanation: "El Costo Total de Propiedad (TCO) es un modelo que analiza el costo real de poseer recursos tecnológicos, incluyendo no solo la adquisición sino también los costos continuos de instalación, capacitación, soporte, mantenimiento, infraestructura, tiempo inactivo, espacio y energía."
    },
    {
        question: "¿Qué es la computación utilitaria?",
        options: [
            "Un modelo de facturación donde los cargos se basan en la cantidad de recursos utilizados.",
            "Un tipo de software de utilidad.",
            "Un método para optimizar el uso de la CPU.",
            "Un sistema de cómputo para tareas básicas."
        ],
        answer: 0,
        explanation: "La computación utilitaria es un modelo de facturación en la computación en la nube donde los cargos se basan en la cantidad de recursos utilizados, también conocida como computación bajo demanda."
    },
    {
        question: "¿Qué es una SAN (Red de Área de Almacenamiento)?",
        options: [
            "Una red local para computadoras.",
            "Una red separada de alta velocidad dedicada al almacenamiento que conecta varios dispositivos.",
            "Un tipo de servidor de bases de datos.",
            "Un protocolo de red."
        ],
        answer: 1,
        explanation: "Una SAN (Red de Área de Almacenamiento) es una red separada de alta velocidad dedicada al almacenamiento que conecta varios dispositivos, creando una gran reserva central de almacenamiento para múltiples servidores."
    },
    {
        question: "¿Qué es un sistema operativo?",
        options: [
            "Un programa para navegar por internet.",
            "El software que administra los recursos y actividades de la computadora.",
            "Un tipo de hardware de computadora.",
            "Una aplicación de software empresarial."
        ],
        answer: 1,
        explanation: "Un sistema operativo es el software que administra los recursos y actividades de la computadora."
    },
    {
        question: "¿Qué son los sistemas heredados?",
        options: [
            "Sistemas de software de última generación.",
            "Sistemas de procesamiento de transacciones antiguos que se siguen utilizando.",
            "Sistemas diseñados para la computación en la nube.",
            "Sistemas de código abierto."
        ],
        answer: 1,
        explanation: "Los sistemas heredados son sistemas de procesamiento de transacciones antiguos, generalmente creados para mainframes, que se siguen utilizando por su alto costo de reemplazo o rediseño."
    },
    {
        question: "¿Qué es Unix?",
        options: [
            "Un lenguaje de programación.",
            "Un sistema operativo potente, portable, multitareas y multiusuario.",
            "Un tipo de hardware de servidor.",
            "Un protocolo de red."
        ],
        answer: 1,
        explanation: "Unix es un sistema operativo potente, portable, multitareas y multiusuario, desarrollado en Bell Labs y utilizado en una amplia variedad de computadoras de distintos fabricantes."
    },
    {
        question: "¿Qué es Wintel PC?",
        options: [
            "Una computadora personal basada en Linux.",
            "Una computadora personal basada en el sistema operativo Windows y un microprocesador Intel, que se convirtió en el estándar de escritorio.",
            "Un tipo de servidor web.",
            "Un dispositivo móvil."
        ],
        answer: 1,
        explanation: "Wintel PC es una computadora personal basada en el sistema operativo Windows y un microprocesador Intel, que se convirtió en el estándar de escritorio."
    },
    {
        question: "¿Cuál es el principal beneficio de la computación en la nube para las empresas?",
        options: [
            "Aumento de grandes inversiones iniciales.",
            "Reducción de grandes inversiones iniciales en hardware y software.",
            "Menor escalabilidad.",
            "Mayor dependencia del proveedor."
        ],
        answer: 1,
        explanation: "Uno de los principales beneficios de la computación en la nube es la reducción de grandes inversiones iniciales en hardware y software, ya que se paga por uso."
    },
    {
        question: "¿Qué es un modelo de computación híbrida en la nube?",
        options: [
            "Usar solo nubes públicas.",
            "Usar solo nubes privadas.",
            "Combinar infraestructura propia con servicios en la nube pública.",
            "Un modelo que no usa virtualización."
        ],
        answer: 2,
        explanation: "Un modelo de computación híbrida combina infraestructura propia (nube privada) con servicios en la nube pública, ideal para grandes corporaciones con sistemas propietarios complejos."
    },
    {
        question: "¿Qué es el agrupamiento de recursos independiente de la ubicación en la nube?",
        options: [
            "Los recursos están fijos en una ubicación geográfica.",
            "Los recursos se agrupan para servir a múltiples usuarios, y se asignan dinámicamente sin que el usuario sepa su ubicación física.",
            "Cada usuario tiene sus propios recursos dedicados.",
            "Solo se puede acceder a los recursos desde una ubicación específica."
        ],
        answer: 1,
        explanation: "El agrupamiento de recursos independiente de la ubicación significa que los recursos se agrupan para servir a múltiples usuarios, y se asignan dinámicamente según la demanda, sin que el usuario sepa su ubicación física."
    },
    {
        question: "¿Qué significa la elasticidad rápida en la computación en la nube?",
        options: [
            "Los recursos son fijos y no pueden cambiar.",
            "Los recursos pueden aumentar o disminuir rápidamente para satisfacer la demanda cambiante.",
            "Los recursos son difíciles de escalar.",
            "Solo se puede escalar hacia arriba."
        ],
        answer: 1,
        explanation: "La elasticidad rápida significa que los recursos pueden aumentar o disminuir rápidamente para satisfacer la demanda cambiante, lo que permite una gran flexibilidad."
    },
    {
        question: "¿Qué es el servicio medido en la computación en la nube?",
        options: [
            "Los servicios son gratuitos.",
            "Los cargos se basan en la cantidad de recursos utilizados (computación utilitaria o bajo demanda).",
            "Se paga una tarifa fija sin importar el uso.",
            "Solo se mide el tiempo de uso."
        ],
        answer: 1,
        explanation: "El servicio medido implica que los cargos se basan en la cantidad de recursos utilizados, lo que permite un modelo de pago por uso."
    },
    {
        question: "¿Qué es el acceso ubicuo a la red en la computación en la nube?",
        options: [
            "Solo se puede acceder a los recursos desde la oficina.",
            "Se puede acceder a los recursos desde cualquier dispositivo conectado a Internet.",
            "El acceso está restringido a ciertos dispositivos.",
            "Solo se puede acceder a través de una red privada."
        ],
        answer: 1,
        explanation: "El acceso ubicuo a la red significa que se puede acceder a los recursos desde cualquier dispositivo conectado a Internet, incluyendo plataformas móviles."
    },
    {
        question: "¿Qué es el autoservicio bajo demanda en la computación en la nube?",
        options: [
            "Los usuarios deben solicitar los recursos a un administrador.",
            "Los usuarios pueden obtener recursos computacionales por sí mismos cuando los necesitan.",
            "Los servicios se entregan automáticamente sin intervención del usuario.",
            "Solo el proveedor puede aprovisionar recursos."
        ],
        answer: 1,
        explanation: "El autoservicio bajo demanda permite a los usuarios obtener recursos computacionales por sí mismos cuando los necesitan, sin intervención del proveedor."
    },
    {
        question: "¿Qué es el modelo de fuerzas competitivas para la inversión en infraestructura de TI?",
        options: [
            "Un modelo que solo considera el costo de adquisición.",
            "Un marco para evaluar la inversión necesaria considerando la demanda del mercado, estrategia de negocios, TCO, etc.",
            "Un modelo para reducir el personal de TI.",
            "Un modelo para aumentar la complejidad de la infraestructura."
        ],
        answer: 1,
        explanation: "El modelo de fuerzas competitivas para la inversión en infraestructura de TI es un marco para evaluar la inversión necesaria considerando la demanda del mercado, la estrategia de negocios, el TCO, la evaluación de la tecnología, y las inversiones de los competidores."
    },
    {
        question: "¿Qué es la gobernanza en la administración de la infraestructura de TI?",
        options: [
            "Determinar quién debe controlar y administrar la infraestructura de TI y cómo asignar los costos.",
            "Solo la gestión técnica de los servidores.",
            "La automatización de todos los procesos de TI.",
            "La compra de nuevo hardware."
        ],
        answer: 0,
        explanation: "La gobernanza en la administración de la infraestructura de TI implica determinar quién debe controlar y administrar la infraestructura de TI (centralizada o descentralizada) y cómo asignar los costos de TI."
    },
    {
        question: "¿Qué es la computación empresarial?",
        options: [
            "Una era de la TI donde las empresas solo usaban mainframes.",
            "Una era donde las empresas buscaron integrar redes y aplicaciones dispares en una infraestructura a nivel empresarial.",
            "Una era donde solo se usaban computadoras personales.",
            "Una era donde la computación en la nube era dominante."
        ],
        answer: 1,
        explanation: "La computación empresarial (1992-actualidad) es una era donde las empresas buscaron integrar redes y aplicaciones dispares en una infraestructura a nivel empresarial, utilizando estándares como TCP/IP."
    },
    {
        question: "¿Qué es la Era de la computadora personal?",
        options: [
            "Marcada por la introducción de la IBM PC y el dominio de la plataforma Wintel.",
            "Caracterizada por la computación centralizada.",
            "La era de la computación en la nube.",
            "La era de los mainframes."
        ],
        answer: 0,
        explanation: "La Era de la computadora personal (1981-actualidad) fue marcada por la introducción de la IBM PC y el dominio de la plataforma Wintel (Windows en microprocesadores Intel)."
    },
    {
        question: "¿Qué es la Era de la computación en la nube y móvil?",
        options: [
            "Impulsada por el ancho de banda de Internet, ofreciendo acceso a un pool compartido de recursos computacionales.",
            "Caracterizada por la computación centralizada.",
            "La era de las minicomputadoras.",
            "La era de la computadora personal."
        ],
        answer: 0,
        explanation: "La Era de la computación en la nube y móvil (2000-actualidad) es impulsada por el ancho de banda de Internet, ofreciendo acceso a un pool compartido de recursos computacionales a través de una red."
    },
    {
        question: "¿Qué es la Ley de Moore?",
        options: [
            "Predice que el valor de una red aumenta exponencialmente.",
            "Indica que el costo de almacenar información digital se reduce exponencialmente.",
            "Predice que el poder de los microprocesadores se duplica aproximadamente cada 18 meses.",
            "Se refiere a la reducción de costos de comunicaciones."
        ],
        answer: 2,
        explanation: "La Ley de Moore predice que el poder de los microprocesadores se duplica aproximadamente cada 18 meses, mientras que el precio de los componentes de cómputo se reduce a la mitad en el mismo período."
    },
    {
        question: "¿Qué es la Ley del almacenamiento digital masivo?",
        options: [
            "Predice que el poder de los microprocesadores se duplica.",
            "Indica que el costo de almacenar información digital se reduce exponencialmente.",
            "Afirma que el valor de una red aumenta exponencialmente.",
            "Se refiere a la reducción de costos de comunicaciones."
        ],
        answer: 1,
        explanation: "La Ley del almacenamiento digital masivo indica que el costo de almacenar información digital se reduce exponencialmente, duplicándose la cantidad de almacenamiento por cada dólar gastado aproximadamente cada 15 meses."
    },
    {
        question: "¿Qué son los Estándares y efectos de la red?",
        options: [
            "Especificaciones que establecen la compatibilidad de los productos y la habilidad de comunicarse en una red.",
            "Solo se refieren a la velocidad de internet.",
            "Aumentan los precios de los productos.",
            "Reducen la compatibilidad entre sistemas."
        ],
        answer: 0,
        explanation: "Los Estándares y efectos de la red son especificaciones que establecen la compatibilidad de los productos y la habilidad de comunicarse en una red, impulsando economías de escala y reduciendo precios."
    },
    {
        question: "¿Qué es la Plataforma digital móvil emergente?",
        options: [
            "Solo computadoras de escritorio.",
            "Teléfonos celulares, smartphones, netbooks y tabletas que se convierten en medios principales para acceder a Internet y realizar funciones de cómputo empresarial.",
            "Servidores blade.",
            "Mainframes."
        ],
        answer: 1,
        explanation: "La Plataforma digital móvil emergente incluye teléfonos celulares, smartphones, netbooks y tabletas que se están convirtiendo en los medios principales para acceder a Internet y realizar funciones de cómputo empresarial."
    },
    {
        question: "¿Qué son los Procesadores de alto rendimiento y ahorro de energía?",
        options: [
            "Microprocesadores que solo aumentan el consumo de energía.",
            "Microprocesadores multinúcleo que mejoran el rendimiento y la eficiencia energética.",
            "Procesadores que solo funcionan en mainframes.",
            "Procesadores que no son cruciales para dispositivos móviles."
        ],
        answer: 1,
        explanation: "Los Procesadores de alto rendimiento y ahorro de energía son microprocesadores multinúcleo (dual-core, quad-core y más) que mejoran el rendimiento y la eficiencia energética, siendo cruciales para la duración de la batería en dispositivos móviles."
    },
    {
        question: "¿Qué es Linux en el contexto de software?",
        options: [
            "Un sistema operativo propietario.",
            "Un sistema operativo de código abierto relacionado con Unix, utilizado en diversas plataformas.",
            "Un lenguaje de programación.",
            "Un tipo de hardware."
        ],
        answer: 1,
        explanation: "Linux es un sistema operativo de código abierto relacionado con Unix, es gratuito, modificable y redistribible, utilizado en diversas plataformas de hardware, servidores web y cómputo de alto rendimiento."
    },
    {
        question: "¿Qué es Java en el contexto de software para Web?",
        options: [
            "Un lenguaje de programación que solo funciona en Windows.",
            "Un lenguaje de programación orientado a objetos, independiente del sistema operativo y del procesador, principal entorno interactivo para la web.",
            "Un tipo de base de datos.",
            "Un protocolo de red."
        ],
        answer: 1,
        explanation: "Java es un lenguaje de programación orientado a objetos, independiente del sistema operativo y del procesador, que se ha convertido en el entorno interactivo principal para la web."
    },
    {
        question: "¿Qué es la Arquitectura Orientada a Servicios (SOA)?",
        options: [
            "Un tipo de hardware de red.",
            "Una colección de servicios web que se utilizan para construir los sistemas de software de una empresa, permitiendo la reutilización de servicios.",
            "Un lenguaje de programación.",
            "Un sistema operativo."
        ],
        answer: 1,
        explanation: "La Arquitectura Orientada a Servicios (SOA) es una colección de servicios web que se utilizan para construir los sistemas de software de una empresa, permitiendo la reutilización de servicios y la creación rápida de nuevas aplicaciones."
    },
    {
        question: "¿Qué son los Paquetes de software empresarial?",
        options: [
            "Software desarrollado a medida para cada empresa.",
            "Soluciones listas para usar (ERP, CRM, SCM) de proveedores como SAP y Oracle-PeopleSoft.",
            "Software de código abierto.",
            "Software que solo funciona en la nube."
        ],
        answer: 1,
        explanation: "Los Paquetes de software empresarial son soluciones listas para usar (ERP, CRM, SCM) de proveedores como SAP y Oracle-PeopleSoft, que ofrecen un sistema integrado a nivel mundial."
    },
    {
        question: "¿Qué es el SaaS (Software como un Servicio)?",
        options: [
            "Software que se compra y se instala localmente.",
            "El software y los datos se alojan en servidores remotos y se accede a ellos a través de un navegador web, pagando por suscripción o transacción.",
            "Un tipo de hardware de red.",
            "Un sistema operativo."
        ],
        answer: 1,
        explanation: "SaaS (Software como un Servicio) es un modelo donde el software y los datos se alojan en servidores remotos y se accede a ellos a través de un navegador web, pagando por suscripción o transacción."
    },
    {
        question: "¿Qué es un Mashup?",
        options: [
            "Una aplicación de software que solo funciona offline.",
            "Una aplicación que combina capacidades de dos o más aplicaciones en línea para crear una nueva aplicación híbrida.",
            "Un tipo de sistema operativo.",
            "Un lenguaje de programación."
        ],
        answer: 1,
        explanation: "Un Mashup es una aplicación de software que combina las capacidades de dos o más aplicaciones en línea para crear una nueva aplicación híbrida (ej. Google Maps con datos criminales)."
    },
    {
        question: "¿Cuál es un desafío clave al administrar la infraestructura de TI relacionado con la flexibilidad ante el crecimiento o la reducción?",
        options: [
            "Gerencia y gobernanza.",
            "Realizar inversiones inteligentes en infraestructura.",
            "Lidiar con el cambio de plataforma e infraestructura (escalabilidad).",
            "Costo Total de Propiedad (TCO)."
        ],
        answer: 2,
        explanation: "Lidiar con el cambio de plataforma e infraestructura implica mantener la flexibilidad ante el crecimiento o la reducción, y la evolución tecnológica, lo que se relaciona con la escalabilidad."
    },
    {
        question: "¿Qué es el TCO (Costo Total de Propiedad)?",
        options: [
            "Solo el costo de adquisición de hardware y software.",
            "Un modelo que analiza el costo real de poseer recursos tecnológicos, incluyendo costos directos e indirectos como instalación, capacitación, soporte, etc.",
            "El costo de la mano de obra para instalar TI.",
            "El precio de venta de un producto de software."
        ],
        answer: 1,
        explanation: "El Costo Total de Propiedad (TCO) es un modelo que analiza el costo real de poseer recursos tecnológicos, incluyendo no solo la adquisición sino también los costos administrativos continuos (instalación, capacitación, soporte, mantenimiento, etc.)."
    },
    {
        question: "¿Qué es el modelo de fuerzas competitivas para la inversión en infraestructura de TI?",
        options: [
            "Un modelo que solo considera el costo de adquisición.",
            "Un marco para evaluar la inversión necesaria considerando la demanda del mercado, estrategia de negocios, TCO, etc.",
            "Un modelo para reducir el personal de TI.",
            "Un modelo para aumentar la complejidad de la infraestructura."
        ],
        answer: 1,
        explanation: "El modelo de fuerzas competitivas para la inversión en infraestructura de TI es un marco para evaluar la inversión necesaria considerando la demanda del mercado, la estrategia de negocios, el TCO, la evaluación de la tecnología, y las inversiones de los competidores."
    },
    {
        question: "¿Qué es la computación utilitaria o bajo demanda?",
        options: [
            "Un modelo de facturación donde los cargos se basan en la cantidad de recursos utilizados.",
            "Un tipo de software de utilidad.",
            "Un método para optimizar el uso de la CPU.",
            "Un sistema de cómputo para tareas básicas."
        ],
        answer: 0,
        explanation: "La computación utilitaria o bajo demanda es un modelo de facturación en la computación en la nube donde los cargos se basan en la cantidad de recursos utilizados."
    },
    {
        question: "¿Cuál es una desventaja de la computación en la nube para las empresas?",
        options: [
            "Reducción de grandes inversiones iniciales.",
            "Mayor escalabilidad y flexibilidad.",
            "Dependencia del proveedor y riesgos de seguridad/privacidad.",
            "Reducción de costos operativos."
        ],
        answer: 2,
        explanation: "Una de las desventajas de la computación en la nube es la dependencia del proveedor y los riesgos de seguridad y privacidad al confiar datos críticos a terceros."
    },
    {
        question: "¿Qué es la computación verde (Green Computing)?",
        options: [
            "Prácticas y tecnologías que minimizan el impacto ambiental de la TI.",
            "Un tipo de computación en la nube.",
            "Un sistema operativo.",
            "Un lenguaje de programación."
        ],
        answer: 0,
        explanation: "La computación verde (o TI verde) se refiere a las prácticas y tecnologías destinadas a diseñar, fabricar, usar y disponer de hardware de TI de manera que se minimice su impacto negativo en el medio ambiente."
    },
    {
        question: "¿Qué componente de la infraestructura de TI incluye software de gestión de bases de datos como IBM DB2 y Oracle?",
        options: [
            "Plataformas de hardware de computadora.",
            "Plataformas de sistemas operativos.",
            "Aplicaciones de software empresariales.",
            "Administración y almacenamiento de datos."
        ],
        answer: 3,
        explanation: "La Administración y almacenamiento de datos incluye software de gestión de bases de datos como IBM DB2, Oracle, Microsoft SQL Server, Sybase y MySQL."
    },
    {
        question: "¿Qué era de la infraestructura de TI se caracterizó por la integración de redes y aplicaciones dispares a nivel empresarial?",
        options: [
            "Era de las mainframes y minicomputadoras.",
            "Era de la computadora personal.",
            "Era cliente/servidor.",
            "Era de la computación empresarial."
        ],
        answer: 3,
        explanation: "La Era de la computación empresarial (1992-actualidad) se caracterizó por la integración de redes y aplicaciones dispares en una infraestructura a nivel empresarial, utilizando estándares como TCP/IP."
    },
    {
        question: "¿Qué ley tecnológica afirma que el valor o poder de una red aumenta exponencialmente a medida que el número de sus miembros crece?",
        options: [
            "Ley de Moore.",
            "Ley del almacenamiento digital masivo.",
            "Ley de Metcalfe.",
            "Ley de la reducción de costos de comunicaciones."
        ],
        answer: 2,
        explanation: "La Ley de Metcalfe afirma que el valor o poder de una red aumenta exponencialmente a medida que el número de sus miembros crece."
    },
    {
        question: "¿Qué tendencia de hardware permite que un solo recurso físico (servidor, almacenamiento) aparezca como múltiples recursos lógicos?",
        options: [
            "Computación en malla.",
            "Computación en la nube.",
            "Virtualización.",
            "Computación autonómica."
        ],
        answer: 2,
        explanation: "La virtualización permite que un solo recurso físico (servidor, almacenamiento) aparezca como múltiples recursos lógicos, o que varios recursos físicos se presenten como uno solo."
    },
    {
        question: "¿Qué es el software de código abierto?",
        options: [
            "Software que solo puede ser usado por empresas.",
            "Software producido por una comunidad global, gratuito, modificable y redistribuible.",
            "Software que requiere una licencia costosa.",
            "Software que solo funciona en sistemas operativos específicos."
        ],
        answer: 1,
        explanation: "El software de código abierto es producido por una comunidad global de programadores, es gratuito, modificable y redistribuible."
    },
    {
        question: "¿Qué son los Servicios Web?",
        options: [
            "Programas de software para navegar por internet.",
            "Componentes de software débilmente acoplados que intercambian información usando estándares web.",
            "Aplicaciones para la gestión de bases de datos.",
            "Sistemas operativos para servidores."
        ],
        answer: 1,
        explanation: "Los Servicios Web son componentes de software débilmente acoplados que intercambian información utilizando estándares y lenguajes de comunicación web universales (como XML, SOAP, WSDL, UDDI)."
    },
    {
        question: "¿Qué es el Outsourcing de software?",
        options: [
            "Desarrollo de software internamente por el personal de la empresa.",
            "Contratar el desarrollo o mantenimiento de software con empresas externas.",
            "Venta de software a otras empresas.",
            "Uso de software gratuito."
        ],
        answer: 1,
        explanation: "El Outsourcing de software es contratar el desarrollo o mantenimiento de software personalizado con empresas externas, a menudo en el extranjero, para reducir costos."
    },
    {
        question: "¿Cuál es una de las desventajas de la computación en la nube para las empresas?",
        options: [
            "Reducción de grandes inversiones iniciales.",
            "Mayor escalabilidad y flexibilidad.",
            "Dependencia del proveedor y riesgos de seguridad/privacidad.",
            "Reducción de costos operativos."
        ],
        answer: 2,
        explanation: "Una de las desventajas de la computación en la nube es la dependencia del proveedor y los riesgos de seguridad y privacidad al confiar datos críticos a terceros."
    },
    {
        question: "¿Qué es la computación autonómica?",
        options: [
            "Sistemas que requieren constante intervención humana.",
            "Sistemas que se configuran, optimizan, ajustan, reparan y protegen a sí mismos.",
            "Sistemas que solo funcionan en la nube.",
            "Sistemas que solo usan hardware de Apple."
        ],
        answer: 1,
        explanation: "La computación autonómica es un esfuerzo para desarrollar sistemas que puedan configurarse, optimizarse, ajustarse, repararse y protegerse a sí mismos, reduciendo la complejidad de la administración."
    },
    {
        question: "¿Qué tipo de procesadores son cruciales para la duración de la batería en dispositivos móviles?",
        options: [
            "Procesadores de alto rendimiento.",
            "Procesadores multinúcleo.",
            "Procesadores de bajo consumo (ej. ARM, Intel Atom).",
            "Mainframes."
        ],
        answer: 2,
        explanation: "Los procesadores de bajo consumo (ARM, Apple A4, Intel Atom) son cruciales para la duración de la batería en dispositivos móviles."
    },
    {
        question: "¿Qué es un Mashup en el contexto de software?",
        options: [
            "Una aplicación de software que solo funciona offline.",
            "Una aplicación que combina capacidades de dos o más aplicaciones en línea.",
            "Un tipo de sistema operativo.",
            "Un lenguaje de programación."
        ],
        answer: 1,
        explanation: "Un Mashup es una aplicación de software que combina las capacidades de dos o más aplicaciones en línea para crear una nueva aplicación híbrida (ej. Google Maps con datos criminales)."
    },
    {
        question: "¿Qué es un SLA (Acuerdo de Nivel de Servicio)?",
        options: [
            "Un tipo de software de gestión de proyectos.",
            "Un contrato formal entre clientes y proveedores de servicios que define responsabilidades y nivel de servicio.",
            "Un lenguaje de programación para servicios web.",
            "Un tipo de hardware de red."
        ],
        answer: 1,
        explanation: "Un SLA (Acuerdo de Nivel de Servicio) es un contrato formal entre clientes y proveedores de servicios que define las responsabilidades específicas del proveedor y el nivel de servicio esperado."
    },
    {
        question: "¿Cuál es el principal objetivo de la computación verde?",
        options: [
            "Aumentar el consumo de energía en centros de datos.",
            "Minimizar el impacto ambiental de la TI.",
            "Reducir la vida útil del hardware.",
            "Incrementar los costos operativos de TI."
        ],
        answer: 1,
        explanation: "La computación verde (o TI verde) se refiere a las prácticas y tecnologías destinadas a diseñar, fabricar, usar y disponer de hardware de TI de manera que se minimice su impacto negativo en el medio ambiente."
    },
    {
        question: "¿Qué es la escalabilidad en el contexto de la infraestructura de TI?",
        options: [
            "La capacidad de un sistema para reducir su tamaño.",
            "La habilidad de un sistema para expandirse y dar servicio a un mayor número de usuarios sin fallar.",
            "El costo de mantener un sistema.",
            "La velocidad de procesamiento de un sistema."
        ],
        answer: 1,
        explanation: "La escalabilidad es la habilidad de un sistema, producto o computadora para expandirse y dar servicio a un mayor número de usuarios sin fallar."
    },
    {
        question: "¿Qué es un ecosistema de negocios?",
        options: [
            "Una sola empresa grande.",
            "Conjuntos de industrias vagamente acopladas que proporcionan servicios y productos relacionados.",
            "Un grupo de empresas que compiten directamente.",
            "Una red de computadoras en una oficina."
        ],
        answer: 1,
        explanation: "Un ecosistema de negocios es un conjunto de industrias vagamente acopladas que proporcionan servicios y productos relacionados, donde el éxito de una empresa depende del éxito de otras empresas en el ecosistema."
    },
    {
        question: "¿Qué son los efectos de red?",
        options: [
            "La velocidad de internet.",
            "Cuando el valor de un producto aumenta con el número de usuarios.",
            "El costo de las redes.",
            "La complejidad técnica de una red."
        ],
        answer: 1,
        explanation: "Los efectos de red ocurren cuando el valor de un producto o servicio aumenta a medida que más personas lo usan, como las redes sociales o plataformas de comunicación."
    },
    {
        question: "¿Qué es la nanotecnología en el contexto de la TI?",
        options: [
            "El estudio de redes muy pequeñas.",
            "El uso de átomos y moléculas individuales para crear dispositivos miles de veces más pequeños.",
            "Una nueva forma de computación en la nube.",
            "Un tipo de software de seguridad."
        ],
        answer: 1,
        explanation: "La nanotecnología es el uso de átomos y moléculas individuales para crear chips de computadora y otros dispositivos miles de veces más pequeños que las tecnologías actuales."
    },
    {
        question: "¿Qué es un servidor blade?",
        options: [
            "Un tipo de software de servidor.",
            "Una computadora ultradelgada con procesadores, memoria y conexiones de red, almacenada en estantes.",
            "Un servidor de gran tamaño para mainframes.",
            "Un dispositivo de almacenamiento de datos."
        ],
        answer: 1,
        explanation: "Un servidor blade es una computadora ultradelgada que consiste en un tablero de circuitos con procesadores, memoria y conexiones de red, almacenadas en estantes para ahorrar espacio."
    },
    {
        question: "¿Qué es un mashup?",
        options: [
            "Un tipo de sistema operativo móvil.",
            "Una aplicación de software que combina capacidades de dos o más aplicaciones en línea.",
            "Un lenguaje de programación para la web.",
            "Un dispositivo de hardware de red."
        ],
        answer: 1,
        explanation: "Un mashup es una aplicación de software que combina las capacidades de dos o más aplicaciones en línea (generalmente de fuentes distintas) para crear un nuevo servicio de valor agregado."
    },
    {
        question: "¿Qué es el TCO (Costo Total de Propiedad)?",
        options: [
            "Solo el costo de adquisición de hardware y software.",
            "Un modelo que analiza el costo real de poseer recursos tecnológicos, incluyendo costos directos e indirectos.",
            "El costo de la mano de obra para instalar TI.",
            "El precio de venta de un producto de software."
        ],
        answer: 1,
        explanation: "El Costo Total de Propiedad (TCO) es un modelo que analiza el costo real de poseer recursos tecnológicos, incluyendo no solo la adquisición sino también los costos continuos de instalación, capacitación, soporte, mantenimiento, infraestructura, tiempo inactivo, espacio y energía."
    },
    {
        question: "¿Qué es la computación utilitaria?",
        options: [
            "Un modelo de facturación donde los cargos se basan en la cantidad de recursos utilizados.",
            "Un tipo de software de utilidad.",
            "Un método para optimizar el uso de la CPU.",
            "Un sistema de cómputo para tareas básicas."
        ],
        answer: 0,
        explanation: "La computación utilitaria es un modelo de facturación en la computación en la nube donde los cargos se basan en la cantidad de recursos utilizados, también conocida como computación bajo demanda."
    },
    {
        question: "¿Qué es una SAN (Red de Área de Almacenamiento)?",
        options: [
            "Una red local para computadoras.",
            "Una red separada de alta velocidad dedicada al almacenamiento que conecta varios dispositivos.",
            "Un tipo de servidor de bases de datos.",
            "Un protocolo de red."
        ],
        answer: 1,
        explanation: "Una SAN (Red de Área de Almacenamiento) es una red separada de alta velocidad dedicada al almacenamiento que conecta varios dispositivos, creando una gran reserva central de almacenamiento para múltiples servidores."
    },
    {
        question: "¿Qué es un sistema operativo?",
        options: [
            "Un programa para navegar por internet.",
            "El software que administra los recursos y actividades de la computadora.",
            "Un tipo de hardware de computadora.",
            "Una aplicación de software empresarial."
        ],
        answer: 1,
        explanation: "Un sistema operativo es el software que administra los recursos y actividades de la computadora."
    },
    {
        question: "¿Qué son los sistemas heredados?",
        options: [
            "Sistemas de software de última generación.",
            "Sistemas de procesamiento de transacciones antiguos que se siguen utilizando.",
            "Sistemas diseñados para la computación en la nube.",
            "Sistemas de código abierto."
        ],
        answer: 1,
        explanation: "Los sistemas heredados son sistemas de procesamiento de transacciones antiguos, generalmente creados para mainframes, que se siguen utilizando por su alto costo de reemplazo o rediseño."
    },
    {
        question: "¿Qué es Unix?",
        options: [
            "Un lenguaje de programación.",
            "Un sistema operativo potente, portable, multitareas y multiusuario.",
            "Un tipo de hardware de servidor.",
            "Un protocolo de red."
        ],
        answer: 1,
        explanation: "Unix es un sistema operativo potente, portable, multitareas y multiusuario, desarrollado en Bell Labs y utilizado en una amplia variedad de computadoras de distintos fabricantes."
    },
    {
        question: "¿Qué es Wintel PC?",
        options: [
            "Una computadora personal basada en Linux.",
            "Una computadora personal basada en el sistema operativo Windows y un microprocesador Intel, que se convirtió en el estándar de escritorio.",
            "Un tipo de servidor web.",
            "Un dispositivo móvil."
        ],
        answer: 1,
        explanation: "Wintel PC es una computadora personal basada en el sistema operativo Windows y un microprocesador Intel, que se convirtió en el estándar de escritorio."
    },
    {
        question: "¿Cuál es el principal beneficio de la computación en la nube para las empresas?",
        options: [
            "Aumento de grandes inversiones iniciales.",
            "Reducción de grandes inversiones iniciales en hardware y software.",
            "Menor escalabilidad.",
            "Mayor dependencia del proveedor."
        ],
        answer: 1,
        explanation: "Uno de los principales beneficios de la computación en la nube es la reducción de grandes inversiones iniciales en hardware y software, ya que se paga por uso."
    },
    {
        question: "¿Qué es un modelo de computación híbrida en la nube?",
        options: [
            "Usar solo nubes públicas.",
            "Usar solo nubes privadas.",
            "Combinar infraestructura propia con servicios en la nube pública.",
            "Un modelo que no usa virtualización."
        ],
        answer: 2,
        explanation: "Un modelo de computación híbrida combina infraestructura propia (nube privada) con servicios en la nube pública, ideal para grandes corporaciones con sistemas propietarios complejos."
    },
    {
        question: "¿Qué es el agrupamiento de recursos independiente de la ubicación en la nube?",
        options: [
            "Los recursos están fijos en una ubicación geográfica.",
            "Los recursos se agrupan para servir a múltiples usuarios, y se asignan dinámicamente sin que el usuario sepa su ubicación física.",
            "Cada usuario tiene sus propios recursos dedicados.",
            "Solo se puede acceder a los recursos desde una ubicación específica."
        ],
        answer: 1,
        explanation: "El agrupamiento de recursos independiente de la ubicación significa que los recursos se agrupan para servir a múltiples usuarios, y se asignan dinámicamente según la demanda, sin que el usuario sepa su ubicación física."
    },
    {
        question: "¿Qué significa la elasticidad rápida en la computación en la nube?",
        options: [
            "Los recursos son fijos y no pueden cambiar.",
            "Los recursos pueden aumentar o disminuir rápidamente para satisfacer la demanda cambiante.",
            "Los recursos son difíciles de escalar.",
            "Solo se puede escalar hacia arriba."
        ],
        answer: 1,
        explanation: "La elasticidad rápida significa que los recursos pueden aumentar o disminuir rápidamente para satisfacer la demanda cambiante, lo que permite una gran flexibilidad."
    },
    {
        question: "¿Qué es el servicio medido en la computación en la nube?",
        options: [
            "Los servicios son gratuitos.",
            "Los cargos se basan en la cantidad de recursos utilizados (computación utilitaria o bajo demanda).",
            "Se paga una tarifa fija sin importar el uso.",
            "Solo se mide el tiempo de uso."
        ],
        answer: 1,
        explanation: "El servicio medido implica que los cargos se basan en la cantidad de recursos utilizados, lo que permite un modelo de pago por uso."
    },
    {
        question: "¿Qué es el acceso ubicuo a la red en la computación en la nube?",
        options: [
            "Solo se puede acceder a los recursos desde la oficina.",
            "Se puede acceder a los recursos desde cualquier dispositivo conectado a Internet.",
            "El acceso está restringido a ciertos dispositivos.",
            "Solo se puede acceder a través de una red privada."
        ],
        answer: 1,
        explanation: "El acceso ubicuo a la red significa que se puede acceder a los recursos desde cualquier dispositivo conectado a Internet, incluyendo plataformas móviles."
    },
    {
        question: "¿Qué es el autoservicio bajo demanda en la computación en la nube?",
        options: [
            "Los usuarios deben solicitar los recursos a un administrador.",
            "Los usuarios pueden obtener recursos computacionales por sí mismos cuando los necesitan.",
            "Los servicios se entregan automáticamente sin intervención del usuario.",
            "Solo el proveedor puede aprovisionar recursos."
        ],
        answer: 1,
        explanation: "El autoservicio bajo demanda permite a los usuarios obtener recursos computacionales por sí mismos cuando los necesitan, sin intervención del proveedor."
    },
    {
        question: "¿Qué es el modelo de fuerzas competitivas para la inversión en infraestructura de TI?",
        options: [
            "Un modelo que solo considera el costo de adquisición.",
            "Un marco para evaluar la inversión necesaria considerando la demanda del mercado, estrategia de negocios, TCO, etc.",
            "Un modelo para reducir el personal de TI.",
            "Un modelo para aumentar la complejidad de la infraestructura."
        ],
        answer: 1,
        explanation: "El modelo de fuerzas competitivas para la inversión en infraestructura de TI es un marco para evaluar la inversión necesaria considerando la demanda del mercado, la estrategia de negocios, el TCO, la evaluación de la tecnología, y las inversiones de los competidores."
    },
    {
        question: "¿Qué es la gobernanza en la administración de la infraestructura de TI?",
        options: [
            "Determinar quién debe controlar y administrar la infraestructura de TI y cómo asignar los costos.",
            "Solo la gestión técnica de los servidores.",
            "La automatización de todos los procesos de TI.",
            "La compra de nuevo hardware."
        ],
        answer: 0,
        explanation: "La gobernanza en la administración de la infraestructura de TI implica determinar quién debe controlar y administrar la infraestructura de TI (centralizada o descentralizada) y cómo asignar los costos de TI."
    },
    {
        question: "¿Qué es la computación empresarial?",
        options: [
            "Una era de la TI donde las empresas solo usaban mainframes.",
            "Una era donde las empresas buscaron integrar redes y aplicaciones dispares en una infraestructura a nivel empresarial.",
            "Una era donde solo se usaban computadoras personales.",
            "Una era donde la computación en la nube era dominante."
        ],
        answer: 1,
        explanation: "La computación empresarial (1992-actualidad) es una era donde las empresas buscaron integrar redes y aplicaciones dispares en una infraestructura a nivel empresarial, utilizando estándares como TCP/IP."
    },
    {
        question: "¿Qué es la Era de la computadora personal?",
        options: [
            "Marcada por la introducción de la IBM PC y el dominio de la plataforma Wintel.",
            "Caracterizada por la computación centralizada.",
            "La era de la computación en la nube.",
            "La era de los mainframes."
        ],
        answer: 0,
        explanation: "La Era de la computadora personal (1981-actualidad) fue marcada por la introducción de la IBM PC y el dominio de la plataforma Wintel (Windows en microprocesadores Intel)."
    },
    {
        question: "¿Qué es la Era de la computación en la nube y móvil?",
        options: [
            "Impulsada por el ancho de banda de Internet, ofreciendo acceso a un pool compartido de recursos computacionales.",
            "Caracterizada por la computación centralizada.",
            "La era de las minicomputadoras.",
            "La era de la computadora personal."
        ],
        answer: 0,
        explanation: "La Era de la computación en la nube y móvil (2000-actualidad) es impulsada por el ancho de banda de Internet, ofreciendo acceso a un pool compartido de recursos computacionales a través de una red."
    },
    {
        question: "¿Qué es la Ley de Moore?",
        options: [
            "Predice que el valor de una red aumenta exponencialmente.",
            "Indica que el costo de almacenar información digital se reduce exponencialmente.",
            "Predice que el poder de los microprocesadores se duplica aproximadamente cada 18 meses.",
            "Se refiere a la reducción de costos de comunicaciones."
        ],
        answer: 2,
        explanation: "La Ley de Moore predice que el poder de los microprocesadores se duplica aproximadamente cada 18 meses, mientras que el precio de los componentes de cómputo se reduce a la mitad en el mismo período."
    },
    {
        question: "¿Qué es la Ley del almacenamiento digital masivo?",
        options: [
            "Predice que el poder de los microprocesadores se duplica.",
            "Indica que el costo de almacenar información digital se reduce exponencialmente.",
            "Afirma que el valor de una red aumenta exponencialmente.",
            "Se refiere a la reducción de costos de comunicaciones."
        ],
        answer: 1,
        explanation: "La Ley del almacenamiento digital masivo indica que el costo de almacenar información digital se reduce exponencialmente, duplicándose la cantidad de almacenamiento por cada dólar gastado aproximadamente cada 15 meses."
    },
    {
        question: "¿Qué son los Estándares y efectos de la red?",
        options: [
            "Especificaciones que establecen la compatibilidad de los productos y la habilidad de comunicarse en una red.",
            "Solo se refieren a la velocidad de internet.",
            "Aumentan los precios de los productos.",
            "Reducen la compatibilidad entre sistemas."
        ],
        answer: 0,
        explanation: "Los Estándares y efectos de la red son especificaciones que establecen la compatibilidad de los productos y la habilidad de comunicarse en una red, impulsando economías de escala y reduciendo precios."
    },
    {
        question: "¿Qué es la Plataforma digital móvil emergente?",
        options: [
            "Solo computadoras de escritorio.",
            "Teléfonos celulares, smartphones, netbooks y tabletas que se convierten en medios principales para acceder a Internet y realizar funciones de cómputo empresarial.",
            "Servidores blade.",
            "Mainframes."
        ],
        answer: 1,
        explanation: "La Plataforma digital móvil emergente incluye teléfonos celulares, smartphones, netbooks y tabletas que se están convirtiendo en los medios principales para acceder a Internet y realizar funciones de cómputo empresarial."
    },
    {
        question: "¿Qué son los Procesadores de alto rendimiento y ahorro de energía?",
        options: [
            "Microprocesadores que solo aumentan el consumo de energía.",
            "Microprocesadores multinúcleo que mejoran el rendimiento y la eficiencia energética.",
            "Procesadores que solo funcionan en mainframes.",
            "Procesadores que no son cruciales para dispositivos móviles."
        ],
        answer: 1,
        explanation: "Los Procesadores de alto rendimiento y ahorro de energía son microprocesadores multinúcleo (dual-core, quad-core y más) que mejoran el rendimiento y la eficiencia energética, siendo cruciales para la duración de la batería en dispositivos móviles."
    },
    {
        question: "¿Qué es Linux en el contexto de software?",
        options: [
            "Un sistema operativo propietario.",
            "Un sistema operativo de código abierto relacionado con Unix, utilizado en diversas plataformas.",
            "Un lenguaje de programación.",
            "Un tipo de hardware."
        ],
        answer: 1,
        explanation: "Linux es un sistema operativo de código abierto relacionado con Unix, es gratuito, modificable y redistribible, utilizado en diversas plataformas de hardware, servidores web y cómputo de alto rendimiento."
    },
    {
        question: "¿Qué es Java en el contexto de software para Web?",
        options: [
            "Un lenguaje de programación que solo funciona en Windows.",
            "Un lenguaje de programación orientado a objetos, independiente del sistema operativo y del procesador, principal entorno interactivo para la web.",
            "Un tipo de base de datos.",
            "Un protocolo de red."
        ],
        answer: 1,
        explanation: "Java es un lenguaje de programación orientado a objetos, independiente del sistema operativo y del procesador, que se ha convertido en el entorno interactivo principal para la web."
    },
    {
        question: "¿Qué es la Arquitectura Orientada a Servicios (SOA)?",
        options: [
            "Un tipo de hardware de red.",
            "Una colección de servicios web que se utilizan para construir los sistemas de software de una empresa, permitiendo la reutilización de servicios.",
            "Un lenguaje de programación.",
            "Un sistema operativo."
        ],
        answer: 1,
        explanation: "La Arquitectura Orientada a Servicios (SOA) es una colección de servicios web que se utilizan para construir los sistemas de software de una empresa, permitiendo la reutilización de servicios y la creación rápida de nuevas aplicaciones."
    },
    {
        question: "¿Qué son los Paquetes de software empresarial?",
        options: [
            "Software desarrollado a medida para cada empresa.",
            "Soluciones listas para usar (ERP, CRM, SCM) de proveedores como SAP y Oracle-PeopleSoft.",
            "Software de código abierto.",
            "Software que solo funciona en la nube."
        ],
        answer: 1,
        explanation: "Los Paquetes de software empresarial son soluciones listas para usar (ERP, CRM, SCM) de proveedores como SAP y Oracle-PeopleSoft, que ofrecen un sistema integrado a nivel mundial."
    },
    {
        question: "¿Qué es el SaaS (Software como un Servicio)?",
        options: [
            "Software que se compra y se instala localmente.",
            "El software y los datos se alojan en servidores remotos y se accede a ellos a través de un navegador web, pagando por suscripción o transacción.",
            "Un tipo de hardware de red.",
            "Un sistema operativo."
        ],
        answer: 1,
        explanation: "SaaS (Software como un Servicio) es un modelo donde el software y los datos se alojan en servidores remotos y se accede a ellos a través de un navegador web, pagando por suscripción o transacción."
    },
    {
        question: "¿Qué es un Mashup?",
        options: [
            "Una aplicación de software que solo funciona offline.",
            "Una aplicación que combina capacidades de dos o más aplicaciones en línea para crear una nueva aplicación híbrida.",
            "Un tipo de sistema operativo.",
            "Un lenguaje de programación."
        ],
        answer: 1,
        explanation: "Un Mashup es una aplicación de software que combina las capacidades de dos o más aplicaciones en línea para crear una nueva aplicación híbrida (ej. Google Maps con datos criminales)."
    },
    {
        question: "¿Cuál es un desafío clave al administrar la infraestructura de TI relacionado con la flexibilidad ante el crecimiento o la reducción?",
        options: [
            "Gerencia y gobernanza.",
            "Realizar inversiones inteligentes en infraestructura.",
            "Lidiar con el cambio de plataforma e infraestructura (escalabilidad).",
            "Costo Total de Propiedad (TCO)."
        ],
        answer: 2,
        explanation: "Lidiar con el cambio de plataforma e infraestructura implica mantener la flexibilidad ante el crecimiento o la reducción, y la evolución tecnológica, lo que se relaciona con la escalabilidad."
    },
    {
        question: "¿Qué es el TCO (Costo Total de Propiedad)?",
        options: [
            "Solo el costo de adquisición de hardware y software.",
            "Un modelo que analiza el costo real de poseer recursos tecnológicos, incluyendo costos directos e indirectos como instalación, capacitación, soporte, etc.",
            "El costo de la mano de obra para instalar TI.",
            "El precio de venta de un producto de software."
        ],
        answer: 1,
        explanation: "El Costo Total de Propiedad (TCO) es un modelo que analiza el costo real de poseer recursos tecnológicos, incluyendo no solo la adquisición sino también los costos administrativos continuos (instalación, capacitación, soporte, mantenimiento, etc.)."
    },
    {
        question: "¿Qué es el modelo de fuerzas competitivas para la inversión en infraestructura de TI?",
        options: [
            "Un modelo que solo considera el costo de adquisición.",
            "Un marco para evaluar la inversión necesaria considerando la demanda del mercado, estrategia de negocios, TCO, etc.",
            "Un modelo para reducir el personal de TI.",
            "Un modelo para aumentar la complejidad de la infraestructura."
        ],
        answer: 1,
        explanation: "El modelo de fuerzas competitivas para la inversión en infraestructura de TI es un marco para evaluar la inversión necesaria considerando la demanda del mercado, la estrategia de negocios, el TCO, la evaluación de la tecnología, y las inversiones de los competidores."
    },
    {
        question: "¿Qué es la computación utilitaria o bajo demanda?",
        options: [
            "Un modelo de facturación donde los cargos se basan en la cantidad de recursos utilizados.",
            "Un tipo de software de utilidad.",
            "Un método para optimizar el uso de la CPU.",
            "Un sistema de cómputo para tareas básicas."
        ],
        answer: 0,
        explanation: "La computación utilitaria o bajo demanda es un modelo de facturación en la computación en la nube donde los cargos se basan en la cantidad de recursos utilizados."
    },
    {
        question: "¿Cuál es una desventaja de la computación en la nube para las empresas?",
        options: [
            "Reducción de grandes inversiones iniciales.",
            "Mayor escalabilidad y flexibilidad.",
            "Dependencia del proveedor y riesgos de seguridad/privacidad.",
            "Reducción de costos operativos."
        ],
        answer: 2,
        explanation: "Una de las desventajas de la computación en la nube es la dependencia del proveedor y los riesgos de seguridad y privacidad al confiar datos críticos a terceros."
    },
    {
        question: "¿Qué es la computación verde (Green Computing)?",
        options: [
            "Prácticas y tecnologías que minimizan el impacto ambiental de la TI.",
            "Un tipo de computación en la nube.",
            "Un sistema operativo.",
            "Un lenguaje de programación."
        ],
        answer: 0,
        explanation: "La computación verde (o TI verde) se refiere a las prácticas y tecnologías destinadas a diseñar, fabricar, usar y disponer de hardware de TI de manera que se minimice su impacto negativo en el medio ambiente."
    },
    {
        question: "¿Qué componente de la infraestructura de TI incluye software de gestión de bases de datos como IBM DB2 y Oracle?",
        options: [
            "Plataformas de hardware de computadora.",
            "Plataformas de sistemas operativos.",
            "Aplicaciones de software empresariales.",
            "Administración y almacenamiento de datos."
        ],
        answer: 3,
        explanation: "La Administración y almacenamiento de datos incluye software de gestión de bases de datos como IBM DB2, Oracle, Microsoft SQL Server, Sybase y MySQL."
    },
    {
        question: "¿Qué era de la infraestructura de TI se caracterizó por la integración de redes y aplicaciones dispares a nivel empresarial?",
        options: [
            "Era de las mainframes y minicomputadoras.",
            "Era de la computadora personal.",
            "Era cliente/servidor.",
            "Era de la computación empresarial."
        ],
        answer: 3,
        explanation: "La Era de la computación empresarial (1992-actualidad) se caracterizó por la integración de redes y aplicaciones dispares en una infraestructura a nivel empresarial, utilizando estándares como TCP/IP."
    },
    {
        question: "¿Qué ley tecnológica afirma que el valor o poder de una red aumenta exponencialmente a medida que el número de sus miembros crece?",
        options: [
            "Ley de Moore.",
            "Ley del almacenamiento digital masivo.",
            "Ley de Metcalfe.",
            "Ley de la reducción de costos de comunicaciones."
        ],
        answer: 2,
        explanation: "La Ley de Metcalfe afirma que el valor o poder de una red aumenta exponencialmente a medida que el número de sus miembros crece."
    },
    {
        question: "¿Qué tendencia de hardware permite que un solo recurso físico (servidor, almacenamiento) aparezca como múltiples recursos lógicos?",
        options: [
            "Computación en malla.",
            "Computación en la nube.",
            "Virtualización.",
            "Computación autonómica."
        ],
        answer: 2,
        explanation: "La virtualización permite que un solo recurso físico (servidor, almacenamiento) aparezca como múltiples recursos lógicos, o que varios recursos físicos se presenten como uno solo."
    },
    {
        question: "¿Qué es el software de código abierto?",
        options: [
            "Software que solo puede ser usado por empresas.",
            "Software producido por una comunidad global, gratuito, modificable y redistribuible.",
            "Software que requiere una licencia costosa.",
            "Software que solo funciona en sistemas operativos específicos."
        ],
        answer: 1,
        explanation: "El software de código abierto es producido por una comunidad global de programadores, es gratuito, modificable y redistribuible."
    },
    {
        question: "¿Qué son los Servicios Web?",
        options: [
            "Programas de software para navegar por internet.",
            "Componentes de software débilmente acoplados que intercambian información usando estándares web.",
            "Aplicaciones para la gestión de bases de datos.",
            "Sistemas operativos para servidores."
        ],
        answer: 1,
        explanation: "Los Servicios Web son componentes de software débilmente acoplados que intercambian información utilizando estándares y lenguajes de comunicación web universales (como XML, SOAP, WSDL, UDDI)."
    },
    {
        question: "¿Qué es el Outsourcing de software?",
        options: [
            "Desarrollo de software internamente por el personal de la empresa.",
            "Contratar el desarrollo o mantenimiento de software con empresas externas.",
            "Venta de software a otras empresas.",
            "Uso de software gratuito."
        ],
        answer: 1,
        explanation: "El Outsourcing de software es contratar el desarrollo o mantenimiento de software personalizado con empresas externas, a menudo en el extranjero, para reducir costos."
    },
    {
        question: "¿Cuál es una de las desventajas de la computación en la nube para las empresas?",
        options: [
            "Reducción de grandes inversiones iniciales.",
            "Mayor escalabilidad y flexibilidad.",
            "Dependencia del proveedor y riesgos de seguridad/privacidad.",
            "Reducción de costos operativos."
        ],
        answer: 2,
        explanation: "Una de las desventajas de la computación en la nube es la dependencia del proveedor y los riesgos de seguridad y privacidad al confiar datos críticos a terceros."
    },
    {
        question: "¿Qué es la computación autonómica?",
        options: [
            "Sistemas que requieren constante intervención humana.",
            "Sistemas que se configuran, optimizan, ajustan, reparan y protegen a sí mismos.",
            "Sistemas que solo funcionan en la nube.",
            "Sistemas que solo usan hardware de Apple."
        ],
        answer: 1,
        explanation: "La computación autonómica es un esfuerzo para desarrollar sistemas que puedan configurarse, optimizarse, ajustarse, repararse y protegerse a sí mismos, reduciendo la complejidad de la administración."
    },
    {
        question: "¿Qué tipo de procesadores son cruciales para la duración de la batería en dispositivos móviles?",
        options: [
            "Procesadores de alto rendimiento.",
            "Procesadores multinúcleo.",
            "Procesadores de bajo consumo (ej. ARM, Intel Atom).",
            "Mainframes."
        ],
        answer: 2,
        explanation: "Los procesadores de bajo consumo (ARM, Apple A4, Intel Atom) son cruciales para la duración de la batería en dispositivos móviles."
    },
    {
        question: "¿Qué es un Mashup en el contexto de software?",
        options: [
            "Una aplicación de software que solo funciona offline.",
            "Una aplicación que combina capacidades de dos o más aplicaciones en línea.",
            "Un tipo de sistema operativo.",
            "Un lenguaje de programación."
        ],
        answer: 1,
        explanation: "Un Mashup es una aplicación de software que combina las capacidades de dos o más aplicaciones en línea para crear una nueva aplicación híbrida (ej. Google Maps con datos criminales)."
    },
    {
        question: "¿Qué es un SLA (Acuerdo de Nivel de Servicio)?",
        options: [
            "Un tipo de software de gestión de proyectos.",
            "Un contrato formal entre clientes y proveedores de servicios que define responsabilidades y nivel de servicio.",
            "Un lenguaje de programación para servicios web.",
            "Un tipo de hardware de red."
        ],
        answer: 1,
        explanation: "Un SLA (Acuerdo de Nivel de Servicio) es un contrato formal entre clientes y proveedores de servicios que define las responsabilidades específicas del proveedor y el nivel de servicio esperado."
    },
    {
        question: "¿Cuál es el principal objetivo de la computación verde?",
        options: [
            "Aumentar el consumo de energía en centros de datos.",
            "Minimizar el impacto ambiental de la TI.",
            "Reducir la vida útil del hardware.",
            "Incrementar los costos operativos de TI."
        ],
        answer: 1,
        explanation: "La computación verde (o TI verde) se refiere a las prácticas y tecnologías destinadas a diseñar, fabricar, usar y disponer de hardware de TI de manera que se minimice su impacto negativo en el medio ambiente."
    },
    {
        question: "¿Qué es la escalabilidad en el contexto de la infraestructura de TI?",
        options: [
            "La capacidad de un sistema para reducir su tamaño.",
            "La habilidad de un sistema para expandirse y dar servicio a un mayor número de usuarios sin fallar.",
            "El costo de mantener un sistema.",
            "La velocidad de procesamiento de un sistema."
        ],
        answer: 1,
        explanation: "La escalabilidad es la habilidad de un sistema, producto o computadora para expandirse y dar servicio a un mayor número de usuarios sin fallar."
    },
    {
        question: "¿Qué es un ecosistema de negocios?",
        options: [
            "Una sola empresa grande.",
            "Conjuntos de industrias vagamente acopladas que proporcionan servicios y productos relacionados.",
            "Un grupo de empresas que compiten directamente.",
            "Una red de computadoras en una oficina."
        ],
        answer: 1,
        explanation: "Un ecosistema de negocios es un conjunto de industrias vagamente acopladas que proporcionan servicios y productos relacionados, donde el éxito de una empresa depende del éxito de otras empresas en el ecosistema."
    },
    {
        question: "¿Qué son los efectos de red?",
        options: [
            "La velocidad de internet.",
            "Cuando el valor de un producto aumenta con el número de usuarios.",
            "El costo de las redes.",
            "La complejidad técnica de una red."
        ],
        answer: 1,
        explanation: "Los efectos de red ocurren cuando el valor de un producto o servicio aumenta a medida que más personas lo usan, como las redes sociales o plataformas de comunicación."
    },
    {
        question: "¿Qué es la nanotecnología en el contexto de la TI?",
        options: [
            "El estudio de redes muy pequeñas.",
            "El uso de átomos y moléculas individuales para crear dispositivos miles de veces más pequeños.",
            "Una nueva forma de computación en la nube.",
            "Un tipo de software de seguridad."
        ],
        answer: 1,
        explanation: "La nanotecnología es el uso de átomos y moléculas individuales para crear chips de computadora y otros dispositivos miles de veces más pequeños que las tecnologías actuales."
    },
    {
        question: "¿Qué es un servidor blade?",
        options: [
            "Un tipo de software de servidor.",
            "Una computadora ultradelgada con procesadores, memoria y conexiones de red, almacenada en estantes.",
            "Un servidor de gran tamaño para mainframes.",
            "Un dispositivo de almacenamiento de datos."
        ],
        answer: 1,
        explanation: "Un servidor blade es una computadora ultradelgada que consiste en un tablero de circuitos con procesadores, memoria y conexiones de red, almacenadas en estantes para ahorrar espacio."
    },
    {
        question: "¿Qué es un mashup?",
        options: [
            "Un tipo de sistema operativo móvil.",
            "Una aplicación de software que combina capacidades de dos o más aplicaciones en línea.",
            "Un lenguaje de programación para la web.",
            "Un dispositivo de hardware de red."
        ],
        answer: 1,
        explanation: "Un mashup es una aplicación de software que combina las capacidades de dos o más aplicaciones en línea (generalmente de fuentes distintas) para crear un nuevo servicio de valor agregado."
    },
    {
        question: "¿Qué es el TCO (Costo Total de Propiedad)?",
        options: [
            "Solo el costo de adquisición de hardware y software.",
            "Un modelo que analiza el costo real de poseer recursos tecnológicos, incluyendo costos directos e indirectos.",
            "El costo de la mano de obra para instalar TI.",
            "El precio de venta de un producto de software."
        ],
        answer: 1,
        explanation: "El Costo Total de Propiedad (TCO) es un modelo que analiza el costo real de poseer recursos tecnológicos, incluyendo no solo la adquisición sino también los costos continuos de instalación, capacitación, soporte, mantenimiento, infraestructura, tiempo inactivo, espacio y energía."
    },
    {
        question: "¿Qué es la computación utilitaria?",
        options: [
            "Un modelo de facturación donde los cargos se basan en la cantidad de recursos utilizados.",
            "Un tipo de software de utilidad.",
            "Un método para optimizar el uso de la CPU.",
            "Un sistema de cómputo para tareas básicas."
        ],
        answer: 0,
        explanation: "La computación utilitaria es un modelo de facturación en la computación en la nube donde los cargos se basan en la cantidad de recursos utilizados, también conocida como computación bajo demanda."
    },
    {
        question: "¿Qué es una SAN (Red de Área de Almacenamiento)?",
        options: [
            "Una red local para computadoras.",
            "Una red separada de alta velocidad dedicada al almacenamiento que conecta varios dispositivos.",
            "Un tipo de servidor de bases de datos.",
            "Un protocolo de red."
        ],
        answer: 1,
        explanation: "Una SAN (Red de Área de Almacenamiento) es una red separada de alta velocidad dedicada al almacenamiento que conecta varios dispositivos, creando una gran reserva central de almacenamiento para múltiples servidores."
    },
    {
        question: "¿Qué es un sistema operativo?",
        options: [
            "Un programa para navegar por internet.",
            "El software que administra los recursos y actividades de la computadora.",
            "Un tipo de hardware de computadora.",
            "Una aplicación de software empresarial."
        ],
        answer: 1,
        explanation: "Un sistema operativo es el software que administra los recursos y actividades de la computadora."
    },
    {
        question: "¿Qué son los sistemas heredados?",
        options: [
            "Sistemas de software de última generación.",
            "Sistemas de procesamiento de transacciones antiguos que se siguen utilizando.",
            "Sistemas diseñados para la computación en la nube.",
            "Sistemas de código abierto."
        ],
        answer: 1,
        explanation: "Los sistemas heredados son sistemas de procesamiento de transacciones antiguos, generalmente creados para mainframes, que se siguen utilizando por su alto costo de reemplazo o rediseño."
    },
    {
        question: "¿Qué es Unix?",
        options: [
            "Un lenguaje de programación.",
            "Un sistema operativo potente, portable, multitareas y multiusuario.",
            "Un tipo de hardware de servidor.",
            "Un protocolo de red."
        ],
        answer: 1,
        explanation: "Unix es un sistema operativo potente, portable, multitareas y multiusuario, desarrollado en Bell Labs y utilizado en una amplia variedad de computadoras de distintos fabricantes."
    },
    {
        question: "¿Qué es Wintel PC?",
        options: [
            "Una computadora personal basada en Linux.",
            "Una computadora personal basada en el sistema operativo Windows y un microprocesador Intel, que se convirtió en el estándar de escritorio.",
            "Un tipo de servidor web.",
            "Un dispositivo móvil."
        ],
        answer: 1,
        explanation: "Wintel PC es una computadora personal basada en el sistema operativo Windows y un microprocesador Intel, que se convirtió en el estándar de escritorio."
    },
    {
        question: "¿Cuál es el principal beneficio de la computación en la nube para las empresas?",
        options: [
            "Aumento de grandes inversiones iniciales.",
            "Reducción de grandes inversiones iniciales en hardware y software.",
            "Menor escalabilidad.",
            "Mayor dependencia del proveedor."
        ],
        answer: 1,
        explanation: "Uno de los principales beneficios de la computación en la nube es la reducción de grandes inversiones iniciales en hardware y software, ya que se paga por uso."
    },
    {
        question: "¿Qué es un modelo de computación híbrida en la nube?",
        options: [
            "Usar solo nubes públicas.",
            "Usar solo nubes privadas.",
            "Combinar infraestructura propia con servicios en la nube pública.",
            "Un modelo que no usa virtualización."
        ],
        answer: 2,
        explanation: "Un modelo de computación híbrida combina infraestructura propia (nube privada) con servicios en la nube pública, ideal para grandes corporaciones con sistemas propietarios complejos."
    },
    {
        question: "¿Qué es el agrupamiento de recursos independiente de la ubicación en la nube?",
        options: [
            "Los recursos están fijos en una ubicación geográfica.",
            "Los recursos se agrupan para servir a múltiples usuarios, y se asignan dinámicamente sin que el usuario sepa su ubicación física.",
            "Cada usuario tiene sus propios recursos dedicados.",
            "Solo se puede acceder a los recursos desde una ubicación específica."
        ],
        answer: 1,
        explanation: "El agrupamiento de recursos independiente de la ubicación significa que los recursos se agrupan para servir a múltiples usuarios, y se asignan dinámicamente según la demanda, sin que el usuario sepa su ubicación física."
    },
    {
        question: "¿Qué significa la elasticidad rápida en la computación en la nube?",
        options: [
            "Los recursos son fijos y no pueden cambiar.",
            "Los recursos pueden aumentar o disminuir rápidamente para satisfacer la demanda cambiante.",
            "Los recursos son difíciles de escalar.",
            "Solo se puede escalar hacia arriba."
        ],
        answer: 1,
        explanation: "La elasticidad rápida significa que los recursos pueden aumentar o disminuir rápidamente para satisfacer la demanda cambiante, lo que permite una gran flexibilidad."
    },
    {
        question: "¿Qué es el servicio medido en la computación en la nube?",
        options: [
            "Los servicios son gratuitos.",
            "Los cargos se basan en la cantidad de recursos utilizados (computación utilitaria o bajo demanda).",
            "Se paga una tarifa fija sin importar el uso.",
            "Solo se mide el tiempo de uso."
        ],
        answer: 1,
        explanation: "El servicio medido implica que los cargos se basan en la cantidad de recursos utilizados, lo que permite un modelo de pago por uso."
    },
    {
        question: "¿Qué es el acceso ubicuo a la red en la computación en la nube?",
        options: [
            "Solo se puede acceder a los recursos desde la oficina.",
            "Se puede acceder a los recursos desde cualquier dispositivo conectado a Internet.",
            "El acceso está restringido a ciertos dispositivos.",
            "Solo se puede acceder a través de una red privada."
        ],
        answer: 1,
        explanation: "El acceso ubicuo a la red significa que se puede acceder a los recursos desde cualquier dispositivo conectado a Internet, incluyendo plataformas móviles."
    },
    {
        question: "¿Qué es el autoservicio bajo demanda en la computación en la nube?",
        options: [
            "Los usuarios deben solicitar los recursos a un administrador.",
            "Los usuarios pueden obtener recursos computacionales por sí mismos cuando los necesitan.",
            "Los servicios se entregan automáticamente sin intervención del usuario.",
            "Solo el proveedor puede aprovisionar recursos."
        ],
        answer: 1,
        explanation: "El autoservicio bajo demanda permite a los usuarios obtener recursos computacionales por sí mismos cuando los necesitan, sin intervención del proveedor."
    },
    {
        question: "¿Qué es el modelo de fuerzas competitivas para la inversión en infraestructura de TI?",
        options: [
            "Un modelo que solo considera el costo de adquisición.",
            "Un marco para evaluar la inversión necesaria considerando la demanda del mercado, estrategia de negocios, TCO, etc.",
            "Un modelo para reducir el personal de TI.",
            "Un modelo para aumentar la complejidad de la infraestructura."
        ],
        answer: 1,
        explanation: "El modelo de fuerzas competitivas para la inversión en infraestructura de TI es un marco para evaluar la inversión necesaria considerando la demanda del mercado, la estrategia de negocios, el TCO, la evaluación de la tecnología, y las inversiones de los competidores."
    },
    {
        question: "¿Qué es la gobernanza en la administración de la infraestructura de TI?",
        options: [
            "Determinar quién debe controlar y administrar la infraestructura de TI y cómo asignar los costos.",
            "Solo la gestión técnica de los servidores.",
            "La automatización de todos los procesos de TI.",
            "La compra de nuevo hardware."
        ],
        answer: 0,
        explanation: "La gobernanza en la administración de la infraestructura de TI implica determinar quién debe controlar y administrar la infraestructura de TI (centralizada o descentralizada) y cómo asignar los costos de TI."
    },
    {
        question: "¿Qué es la computación empresarial?",
        options: [
            "Una era de la TI donde las empresas solo usaban mainframes.",
            "Una era donde las empresas buscaron integrar redes y aplicaciones dispares en una infraestructura a nivel empresarial.",
            "Una era donde solo se usaban computadoras personales.",
            "Una era donde la computación en la nube era dominante."
        ],
        answer: 1,
        explanation: "La computación empresarial (1992-actualidad) es una era donde las empresas buscaron integrar redes y aplicaciones dispares en una infraestructura a nivel empresarial, utilizando estándares como TCP/IP."
    },
    {
        question: "¿Qué es la Era de la computadora personal?",
        options: [
            "Marcada por la introducción de la IBM PC y el dominio de la plataforma Wintel.",
            "Caracterizada por la computación centralizada.",
            "La era de la computación en la nube.",
            "La era de los mainframes."
        ],
        answer: 0,
        explanation: "La Era de la computadora personal (1981-actualidad) fue marcada por la introducción de la IBM PC y el dominio de la plataforma Wintel (Windows en microprocesadores Intel)."
    },
    {
        question: "¿Qué es la Era de la computación en la nube y móvil?",
        options: [
            "Impulsada por el ancho de banda de Internet, ofreciendo acceso a un pool compartido de recursos computacionales.",
            "Caracterizada por la computación centralizada.",
            "La era de las minicomputadoras.",
            "La era de la computadora personal."
        ],
        answer: 0,
        explanation: "La Era de la computación en la nube y móvil (2000-actualidad) es impulsada por el ancho de banda de Internet, ofreciendo acceso a un pool compartido de recursos computacionales a través de una red."
    },
    {
        question: "¿Qué es la Ley de Moore?",
        options: [
            "Predice que el valor de una red aumenta exponencialmente.",
            "Indica que el costo de almacenar información digital se reduce exponencialmente.",
            "Predice que el poder de los microprocesadores se duplica aproximadamente cada 18 meses.",
            "Se refiere a la reducción de costos de comunicaciones."
        ],
        answer: 2,
        explanation: "La Ley de Moore predice que el poder de los microprocesadores se duplica aproximadamente cada 18 meses, mientras que el precio de los componentes de cómputo se reduce a la mitad en el mismo período."
    },
    {
        question: "¿Qué es la Ley del almacenamiento digital masivo?",
        options: [
            "Predice que el poder de los microprocesadores se duplica.",
            "Indica que el costo de almacenar información digital se reduce exponencialmente.",
            "Afirma que el valor de una red aumenta exponencialmente.",
            "Se refiere a la reducción de costos de comunicaciones."
        ],
        answer: 1,
        explanation: "La Ley del almacenamiento digital masivo indica que el costo de almacenar información digital se reduce exponencialmente, duplicándose la cantidad de almacenamiento por cada dólar gastado aproximadamente cada 15 meses."
    },
    {
        question: "¿Qué son los Estándares y efectos de la red?",
        options: [
            "Especificaciones que establecen la compatibilidad de los productos y la habilidad de comunicarse en una red.",
            "Solo se refieren a la velocidad de internet.",
            "Aumentan los precios de los productos.",
            "Reducen la compatibilidad entre sistemas."
        ],
        answer: 0,
        explanation: "Los Estándares y efectos de la red son especificaciones que establecen la compatibilidad de los productos y la habilidad de comunicarse en una red, impulsando economías de escala y reduciendo precios."
    },
    {
        question: "¿Qué es la Plataforma digital móvil emergente?",
        options: [
            "Solo computadoras de escritorio.",
            "Teléfonos celulares, smartphones, netbooks y tabletas que se convierten en medios principales para acceder a Internet y realizar funciones de cómputo empresarial.",
            "Servidores blade.",
            "Mainframes."
        ],
        answer: 1,
        explanation: "La Plataforma digital móvil emergente incluye teléfonos celulares, smartphones, netbooks y tabletas que se están convirtiendo en los medios principales para acceder a Internet y realizar funciones de cómputo empresarial."
    },
    {
        question: "¿Qué son los Procesadores de alto rendimiento y ahorro de energía?",
        options: [
            "Microprocesadores que solo aumentan el consumo de energía.",
            "Microprocesadores multinúcleo que mejoran el rendimiento y la eficiencia energética.",
            "Procesadores que solo funcionan en mainframes.",
            "Procesadores que no son cruciales para dispositivos móviles."
        ],
        answer: 1,
        explanation: "Los Procesadores de alto rendimiento y ahorro de energía son microprocesadores multinúcleo (dual-core, quad-core y más) que mejoran el rendimiento y la eficiencia energética, siendo cruciales para la duración de la batería en dispositivos móviles."
    },
    {
        question: "¿Qué es Linux en el contexto de software?",
        options: [
            "Un sistema operativo propietario.",
            "Un sistema operativo de código abierto relacionado con Unix, utilizado en diversas plataformas.",
            "Un lenguaje de programación.",
            "Un tipo de hardware."
        ],
        answer: 1,
        explanation: "Linux es un sistema operativo de código abierto relacionado con Unix, es gratuito, modificable y redistribible, utilizado en diversas plataformas de hardware, servidores web y cómputo de alto rendimiento."
    },
    {
        question: "¿Qué es Java en el contexto de software para Web?",
        options: [
            "Un lenguaje de programación que solo funciona en Windows.",
            "Un lenguaje de programación orientado a objetos, independiente del sistema operativo y del procesador, principal entorno interactivo para la web.",
            "Un tipo de base de datos.",
            "Un protocolo de red."
        ],
        answer: 1,
        explanation: "Java es un lenguaje de programación orientado a objetos, independiente del sistema operativo y del procesador, que se ha convertido en el entorno interactivo principal para la web."
    },
    {
        question: "¿Qué es la Arquitectura Orientada a Servicios (SOA)?",
        options: [
            "Un tipo de hardware de red.",
            "Una colección de servicios web que se utilizan para construir los sistemas de software de una empresa, permitiendo la reutilización de servicios.",
            "Un lenguaje de programación.",
            "Un sistema operativo."
        ],
        answer: 1,
        explanation: "La Arquitectura Orientada a Servicios (SOA) es una colección de servicios web que se utilizan para construir los sistemas de software de una empresa, permitiendo la reutilización de servicios y la creación rápida de nuevas aplicaciones."
    },
    {
        question: "¿Qué son los Paquetes de software empresarial?",
        options: [
            "Software desarrollado a medida para cada empresa.",
            "Soluciones listas para usar (ERP, CRM, SCM) de proveedores como SAP y Oracle-PeopleSoft.",
            "Software de código abierto.",
            "Software que solo funciona en la nube."
        ],
        answer: 1,
        explanation: "Los Paquetes de software empresarial son soluciones listas para usar (ERP, CRM, SCM) de proveedores como SAP y Oracle-PeopleSoft, que ofrecen un sistema integrado a nivel mundial."
    },
    {
        question: "¿Qué es el SaaS (Software como un Servicio)?",
        options: [
            "Software que se compra y se instala localmente.",
            "El software y los datos se alojan en servidores remotos y se accede a ellos a través de un navegador web, pagando por suscripción o transacción.",
            "Un tipo de hardware de red.",
            "Un sistema operativo."
        ],
        answer: 1,
        explanation: "SaaS (Software como un Servicio) es un modelo donde el software y los datos se alojan en servidores remotos y se accede a ellos a través de un navegador web, pagando por suscripción o transacción."
    },
    {
        question: "¿Qué es un Mashup?",
        options: [
            "Una aplicación de software que solo funciona offline.",
            "Una aplicación que combina capacidades de dos o más aplicaciones en línea para crear una nueva aplicación híbrida.",
            "Un tipo de sistema operativo.",
            "Un lenguaje de programación."
        ],
        answer: 1,
        explanation: "Un Mashup es una aplicación de software que combina las capacidades de dos o más aplicaciones en línea para crear una nueva aplicación híbrida (ej. Google Maps con datos criminales)."
    },
    {
        question: "¿Cuál es un desafío clave al administrar la infraestructura de TI relacionado con la flexibilidad ante el crecimiento o la reducción?",
        options: [
            "Gerencia y gobernanza.",
            "Realizar inversiones inteligentes en infraestructura.",
            "Lidiar con el cambio de plataforma e infraestructura (escalabilidad).",
            "Costo Total de Propiedad (TCO)."
        ],
        answer: 2,
        explanation: "Lidiar con el cambio de plataforma e infraestructura implica mantener la flexibilidad ante el crecimiento o la reducción, y la evolución tecnológica, lo que se relaciona con la escalabilidad."
    },
    {
        question: "¿Qué es el TCO (Costo Total de Propiedad)?",
        options: [
            "Solo el costo de adquisición de hardware y software.",
            "Un modelo que analiza el costo real de poseer recursos tecnológicos, incluyendo costos directos e indirectos como instalación, capacitación, soporte, etc.",
            "El costo de la mano de obra para instalar TI.",
            "El precio de venta de un producto de software."
        ],
        answer: 1,
        explanation: "El Costo Total de Propiedad (TCO) es un modelo que analiza el costo real de poseer recursos tecnológicos, incluyendo no solo la adquisición sino también los costos administrativos continuos (instalación, capacitación, soporte, mantenimiento, etc.)."
    },
    {
        question: "¿Qué es el modelo de fuerzas competitivas para la inversión en infraestructura de TI?",
        options: [
            "Un modelo que solo considera el costo de adquisición.",
            "Un marco para evaluar la inversión necesaria considerando la demanda del mercado, estrategia de negocios, TCO, etc.",
            "Un modelo para reducir el personal de TI.",
            "Un modelo para aumentar la complejidad de la infraestructura."
        ],
        answer: 1,
        explanation: "El modelo de fuerzas competitivas para la inversión en infraestructura de TI es un marco para evaluar la inversión necesaria considerando la demanda del mercado, la estrategia de negocios, el TCO, la evaluación de la tecnología, y las inversiones de los competidores."
    },
    {
        question: "¿Qué es la computación utilitaria o bajo demanda?",
        options: [
            "Un modelo de facturación donde los cargos se basan en la cantidad de recursos utilizados.",
            "Un tipo de software de utilidad.",
            "Un método para optimizar el uso de la CPU.",
            "Un sistema de cómputo para tareas básicas."
        ],
        answer: 0,
        explanation: "La computación utilitaria o bajo demanda es un modelo de facturación en la computación en la nube donde los cargos se basan en la cantidad de recursos utilizados."
    },
    {
        question: "¿Cuál es una desventaja de la computación en la nube para las empresas?",
        options: [
            "Reducción de grandes inversiones iniciales.",
            "Mayor escalabilidad y flexibilidad.",
            "Dependencia del proveedor y riesgos de seguridad/privacidad.",
            "Reducción de costos operativos."
        ],
        answer: 2,
        explanation: "Una de las desventajas de la computación en la nube es la dependencia del proveedor y los riesgos de seguridad y privacidad al confiar datos críticos a terceros."
    },
    {
        question: "¿Qué es la computación verde (Green Computing)?",
        options: [
            "Prácticas y tecnologías que minimizan el impacto ambiental de la TI.",
            "Un tipo de computación en la nube.",
            "Un sistema operativo.",
            "Un lenguaje de programación."
        ],
        answer: 0,
        explanation: "La computación verde (o TI verde) se refiere a las prácticas y tecnologías destinadas a diseñar, fabricar, usar y disponer de hardware de TI de manera que se minimice su impacto negativo en el medio ambiente."
    },
    {
        question: "¿Qué componente de la infraestructura de TI incluye software de gestión de bases de datos como IBM DB2 y Oracle?",
        options: [
            "Plataformas de hardware de computadora.",
            "Plataformas de sistemas operativos.",
            "Aplicaciones de software empresariales.",
            "Administración y almacenamiento de datos."
        ],
        answer: 3,
        explanation: "La Administración y almacenamiento de datos incluye software de gestión de bases de datos como IBM DB2, Oracle, Microsoft SQL Server, Sybase y MySQL."
    },
    {
        question: "¿Qué era de la infraestructura de TI se caracterizó por la integración de redes y aplicaciones dispares a nivel empresarial?",
        options: [
            "Era de las mainframes y minicomputadoras.",
            "Era de la computadora personal.",
            "Era cliente/servidor.",
            "Era de la computación empresarial."
        ],
        answer: 3,
        explanation: "La Era de la computación empresarial (1992-actualidad) se caracterizó por la integración de redes y aplicaciones dispares en una infraestructura a nivel empresarial, utilizando estándares como TCP/IP."
    },
    {
        question: "¿Qué ley tecnológica afirma que el valor o poder de una red aumenta exponencialmente a medida que el número de sus miembros crece?",
        options: [
            "Ley de Moore.",
            "Ley del almacenamiento digital masivo.",
            "Ley de Metcalfe.",
            "Ley de la reducción de costos de comunicaciones."
        ],
        answer: 2,
        explanation: "La Ley de Metcalfe afirma que el valor o poder de una red aumenta exponencialmente a medida que el número de sus miembros crece."
    },
    {
        question: "¿Qué tendencia de hardware permite que un solo recurso físico (servidor, almacenamiento) aparezca como múltiples recursos lógicos?",
        options: [
            "Computación en malla.",
            "Computación en la nube.",
            "Virtualización.",
            "Computación autonómica."
        ],
        answer: 2,
        explanation: "La virtualización permite que un solo recurso físico (servidor, almacenamiento) aparezca como múltiples recursos lógicos, o que varios recursos físicos se presenten como uno solo."
    },
    {
        question: "¿Qué es el software de código abierto?",
        options: [
            "Software que solo puede ser usado por empresas.",
            "Software producido por una comunidad global, gratuito, modificable y redistribuible.",
            "Software que requiere una licencia costosa.",
            "Software que solo funciona en sistemas operativos específicos."
        ],
        answer: 1,
        explanation: "El software de código abierto es producido por una comunidad global de programadores, es gratuito, modificable y redistribuible."
    },
    {
        question: "¿Qué son los Servicios Web?",
        options: [
            "Programas de software para navegar por internet.",
            "Componentes de software débilmente acoplados que intercambian información usando estándares web.",
            "Aplicaciones para la gestión de bases de datos.",
            "Sistemas operativos para servidores."
        ],
        answer: 1,
        explanation: "Los Servicios Web son componentes de software débilmente acoplados que intercambian información utilizando estándares y lenguajes de comunicación web universales (como XML, SOAP, WSDL, UDDI)."
    },
    {
        question: "¿Qué es el Outsourcing de software?",
        options: [
            "Desarrollo de software internamente por el personal de la empresa.",
            "Contratar el desarrollo o mantenimiento de software con empresas externas.",
            "Venta de software a otras empresas.",
            "Uso de software gratuito."
        ],
        answer: 1,
        explanation: "El Outsourcing de software es contratar el desarrollo o mantenimiento de software personalizado con empresas externas, a menudo en el extranjero, para reducir costos."
    },
    {
        question: "¿Cuál es una de las desventajas de la computación en la nube para las empresas?",
        options: [
            "Reducción de grandes inversiones iniciales.",
            "Mayor escalabilidad y flexibilidad.",
            "Dependencia del proveedor y riesgos de seguridad/privacidad.",
            "Reducción de costos operativos."
        ],
        answer: 2,
        explanation: "Una de las desventajas de la computación en la nube es la dependencia del proveedor y los riesgos de seguridad y privacidad al confiar datos críticos a terceros."
    },
    {
        question: "¿Qué es la computación autonómica?",
        options: [
            "Sistemas que requieren constante intervención humana.",
            "Sistemas que se configuran, optimizan, ajustan, reparan y protegen a sí mismos.",
            "Sistemas que solo funcionan en la nube.",
            "Sistemas que solo usan hardware de Apple."
        ],
        answer: 1,
        explanation: "La computación autonómica es un esfuerzo para desarrollar sistemas que puedan configurarse, optimizarse, ajustarse, repararse y protegerse a sí mismos, reduciendo la complejidad de la administración."
    },
    {
        question: "¿Qué tipo de procesadores son cruciales para la duración de la batería en dispositivos móviles?",
        options: [
            "Procesadores de alto rendimiento.",
            "Procesadores multinúcleo.",
            "Procesadores de bajo consumo (ej. ARM, Intel Atom).",
            "Mainframes."
        ],
        answer: 2,
        explanation: "Los procesadores de bajo consumo (ARM, Apple A4, Intel Atom) son cruciales para la duración de la batería en dispositivos móviles."
    },
    {
        question: "¿Qué es un Mashup en el contexto de software?",
        options: [
            "Una aplicación de software que solo funciona offline.",
            "Una aplicación que combina capacidades de dos o más aplicaciones en línea.",
            "Un tipo de sistema operativo.",
            "Un lenguaje de programación."
        ],
        answer: 1,
        explanation: "Un Mashup es una aplicación de software que combina las capacidades de dos o más aplicaciones en línea para crear una nueva aplicación híbrida (ej. Google Maps con datos criminales)."
    },
    {
        question: "¿Qué es un SLA (Acuerdo de Nivel de Servicio)?",
        options: [
            "Un tipo de software de gestión de proyectos.",
            "Un contrato formal entre clientes y proveedores de servicios que define responsabilidades y nivel de servicio.",
            "Un lenguaje de programación para servicios web.",
            "Un tipo de hardware de red."
        ],
        answer: 1,
        explanation: "Un SLA (Acuerdo de Nivel de Servicio) es un contrato formal entre clientes y proveedores de servicios que define las responsabilidades específicas del proveedor y el nivel de servicio esperado."
    },
    {
        question: "¿Cuál es el principal objetivo de la computación verde?",
        options: [
            "Aumentar el consumo de energía en centros de datos.",
            "Minimizar el impacto ambiental de la TI.",
            "Reducir la vida útil del hardware.",
            "Incrementar los costos operativos de TI."
        ],
        answer: 1,
        explanation: "La computación verde (o TI verde) se refiere a las prácticas y tecnologías destinadas a diseñar, fabricar, usar y disponer de hardware de TI de manera que se minimice su impacto negativo en el medio ambiente."
    },
    {
        question: "¿Qué es la escalabilidad en el contexto de la infraestructura de TI?",
        options: [
            "La capacidad de un sistema para reducir su tamaño.",
            "La habilidad de un sistema para expandirse y dar servicio a un mayor número de usuarios sin fallar.",
            "El costo de mantener un sistema.",
            "La velocidad de procesamiento de un sistema."
        ],
        answer: 1,
        explanation: "La escalabilidad es la habilidad de un sistema, producto o computadora para expandirse y dar servicio a un mayor número de usuarios sin fallar."
    },
    {
        question: "¿Qué es un ecosistema de negocios?",
        options: [
            "Una sola empresa grande.",
            "Conjuntos de industrias vagamente acopladas que proporcionan servicios y productos relacionados.",
            "Un grupo de empresas que compiten directamente.",
            "Una red de computadoras en una oficina."
        ],
        answer: 1,
        explanation: "Un ecosistema de negocios es un conjunto de industrias vagamente acopladas que proporcionan servicios y productos relacionados, donde el éxito de una empresa depende del éxito de otras empresas en el ecosistema."
    },
    {
        question: "¿Qué son los efectos de red?",
        options: [
            "La velocidad de internet.",
            "Cuando el valor de un producto aumenta con el número de usuarios.",
            "El costo de las redes.",
            "La complejidad técnica de una red."
        ],
        answer: 1,
        explanation: "Los efectos de red ocurren cuando el valor de un producto o servicio aumenta a medida que más personas lo usan, como las redes sociales o plataformas de comunicación."
    },
    {
        question: "¿Qué es la nanotecnología en el contexto de la TI?",
        options: [
            "El estudio de redes muy pequeñas.",
            "El uso de átomos y moléculas individuales para crear dispositivos miles de veces más pequeños.",
            "Una nueva forma de computación en la nube.",
            "Un tipo de software de seguridad."
        ],
        answer: 1,
        explanation: "La nanotecnología es el uso de átomos y moléculas individuales para crear chips de computadora y otros dispositivos miles de veces más pequeños que las tecnologías actuales."
    },
    {
        question: "¿Qué es un servidor blade?",
        options: [
            "Un tipo de software de servidor.",
            "Una computadora ultradelgada con procesadores, memoria y conexiones de red, almacenada en estantes.",
            "Un servidor de gran tamaño para mainframes.",
            "Un dispositivo de almacenamiento de datos."
        ],
        answer: 1,
        explanation: "Un servidor blade es una computadora ultradelgada que consiste en un tablero de circuitos con procesadores, memoria y conexiones de red, almacenadas en estantes para ahorrar espacio."
    },
    {
        question: "¿Qué es un mashup?",
        options: [
            "Un tipo de sistema operativo móvil.",
            "Una aplicación de software que combina capacidades de dos o más aplicaciones en línea.",
            "Un lenguaje de programación para la web.",
            "Un dispositivo de hardware de red."
        ],
        answer: 1,
        explanation: "Un mashup es una aplicación de software que combina las capacidades de dos o más aplicaciones en línea (generalmente de fuentes distintas) para crear un nuevo servicio de valor agregado."
    },
    {
        question: "¿Qué es el TCO (Costo Total de Propiedad)?",
        options: [
            "Solo el costo de adquisición de hardware y software.",
            "Un modelo que analiza el costo real de poseer recursos tecnológicos, incluyendo costos directos e indirectos.",
            "El costo de la mano de obra para instalar TI.",
            "El precio de venta de un producto de software."
        ],
        answer: 1,
        explanation: "El Costo Total de Propiedad (TCO) es un modelo que analiza el costo real de poseer recursos tecnológicos, incluyendo no solo la adquisición sino también los costos continuos de instalación, capacitación, soporte, mantenimiento, infraestructura, tiempo inactivo, espacio y energía."
    },
    {
        question: "¿Qué es la computación utilitaria?",
        options: [
            "Un modelo de facturación donde los cargos se basan en la cantidad de recursos utilizados.",
            "Un tipo de software de utilidad.",
            "Un método para optimizar el uso de la CPU.",
            "Un sistema de cómputo para tareas básicas."
        ],
        answer: 0,
        explanation: "La computación utilitaria es un modelo de facturación en la computación en la nube donde los cargos se basan en la cantidad de recursos utilizados, también conocida como computación bajo demanda."
    },
    {
        question: "¿Qué es una SAN (Red de Área de Almacenamiento)?",
        options: [
            "Una red local para computadoras.",
            "Una red separada de alta velocidad dedicada al almacenamiento que conecta varios dispositivos.",
            "Un tipo de servidor de bases de datos.",
            "Un protocolo de red."
        ],
        answer: 1,
        explanation: "Una SAN (Red de Área de Almacenamiento) es una red separada de alta velocidad dedicada al almacenamiento que conecta varios dispositivos, creando una gran reserva central de almacenamiento para múltiples servidores."
    },
    {
        question: "¿Qué es un sistema operativo?",
        options: [
            "Un programa para navegar por internet.",
            "El software que administra los recursos y actividades de la computadora.",
            "Un tipo de hardware de computadora.",
            "Una aplicación de software empresarial."
        ],
        answer: 1,
        explanation: "Un sistema operativo es el software que administra los recursos y actividades de la computadora."
    },
    {
        question: "¿Qué son los sistemas heredados?",
        options: [
            "Sistemas de software de última generación.",
            "Sistemas de procesamiento de transacciones antiguos que se siguen utilizando.",
            "Sistemas diseñados para la computación en la nube.",
            "Sistemas de código abierto."
        ],
        answer: 1,
        explanation: "Los sistemas heredados son sistemas de procesamiento de transacciones antiguos, generalmente creados para mainframes, que se siguen utilizando por su alto costo de reemplazo o rediseño."
    },
    {
        question: "¿Qué es Unix?",
        options: [
            "Un lenguaje de programación.",
            "Un sistema operativo potente, portable, multitareas y multiusuario.",
            "Un tipo de hardware de servidor.",
            "Un protocolo de red."
        ],
        answer: 1,
        explanation: "Unix es un sistema operativo potente, portable, multitareas y multiusuario, desarrollado en Bell Labs y utilizado en una amplia variedad de computadoras de distintos fabricantes."
    },
    {
        question: "¿Qué es Wintel PC?",
        options: [
            "Una computadora personal basada en Linux.",
            "Una computadora personal basada en el sistema operativo Windows y un microprocesador Intel, que se convirtió en el estándar de escritorio.",
            "Un tipo de servidor web.",
            "Un dispositivo móvil."
        ],
        answer: 1,
        explanation: "Wintel PC es una computadora personal basada en el sistema operativo Windows y un microprocesador Intel, que se convirtió en el estándar de escritorio."
    }
];