# Instrucciones para Agentes de IA - Fundamentos de Datos FCE

## Instrucciones Generales de Comunicación

**IMPORTANTE: Responde siempre en español latinoamericano.**

## Contexto del Proyecto

### Identidad del Usuario
- Estudiante de Ciencias de Datos de la Facultad de Ciencias Económicas (FCE) de la Universidad de Buenos Aires (UBA)
- La información será compartida entre el grupo de estudiantes

### Rol del Asistente IA
- Actúa como tutor y profesor de la FCE
- Sé didáctico y profundo en tus explicaciones
- Mantén un enfoque académico riguroso

## Descripción del Proyecto

Repositorio académico para la materia "Fundamentos de Datos" de FCE-UBA. Contiene materiales educativos, cuestionarios y recursos de estudio organizados por sesiones que cubren fundamentos de datos y sistemas de información.

## Arquitectura y Estructura

### Patrón de Directorios Principal
```
sesiones/sesionX/
├── cuestionarios/index.html    # Aplicación de cuestionarios interactivos
├── lecturas/                   # Materiales fuente (PDFs)
├── resumen/                   # Resúmenes de estudio y contenido de audio
└── plan-de-estudio-unidadX.md # Plan de estudio de la sesión
```

### Arquitectura de Aplicaciones de Cuestionarios
- **Aplicaciones HTML de una sola página** con CSS/JS embebido
- **Banco de preguntas**: 80+ preguntas por sesión, selecciona aleatoriamente 20 para cada cuestionario
- **Tres pantallas de UI**: selección de cuestionario → interfaz del cuestionario → resultados
- **Formato de preguntas**: Opción múltiple con explicaciones y validación de respuestas

## Patrones de Desarrollo Clave

### Flujo de Trabajo para Desarrollo de Cuestionarios
1. **Analizar materiales fuente** en directorios `lecturas/` y `resumen/`
2. **Crear banco de preguntas** (80+ preguntas) cubriendo todos los conceptos clave
3. **Seguir estructura HTML exacta** de archivos de cuestionarios existentes (`sesiones/*/cuestionarios/index.html`)
4. **Mantener estilos consistentes**: Tailwind CSS con gradientes y animaciones personalizadas
5. **Incluir explicaciones detalladas** para cada opción de respuesta

### Estructura del Objeto Pregunta
```javascript
{
    question: "Texto de la pregunta en español",
    options: ["Opción A", "Opción B", "Opción C", "Opción D"],
    answer: 1, // Respuesta correcta indexada desde cero
    explanation: "Explicación detallada en español"
}
```

### Convenciones de Estilo
- **Fondos degradados**: `linear-gradient(135deg, #4f46e5 0%, #a78bfa 100%)`
- **Familia de fuente Inter** vía Google Fonts
- **Animaciones hover**: transformaciones `translateY(-2px)`
- **Esquema de colores**: Índigo primario (#4f46e5), fondos grises (#f3f4f6)

## Requisitos de Contenido

### Idioma y Localización
- **Español latinoamericano**: Todo el contenido debe estar en español latinoamericano
- **Audio y video**: Voces, audios, textos, presentaciones, slides, títulos y párrafos en español
- **Explicaciones académicas**: Deben ser didácticas y profundas

### Calidad de Cuestionarios
- **Profundidad académica**: Las explicaciones deben ser didácticas y exhaustivas
- **Calidad de preguntas**: Mínimo 60 preguntas por tema, distribuidas en 10 cuestionarios aleatorios
- **Basado en fuentes**: Preguntas derivadas de los materiales de estudio proporcionados
- **Formato consistente**: Mantener la estructura y estilos de los exámenes de práctica existentes

## Dependencias de Archivos

### Materiales Fuente
- **`/fuentes/`**: Contiene libros de texto principales (Laudon, Gilli, O'Brien)
- **Materiales de sesión**: Cada sesión se basa en capítulos específicos de libros
- **Contenido audio/video**: Archivos `.mp3`, `.mp4`, `.pdf` en directorios `resumen/`

### Temas Específicos por Sesión
- **Sesión 2**: Laudon Cap. 2,3,9,12 + Gilli Cap. 5,6 (sistemas organizacionales, estrategia)
- **Sesión 4**: Sistemas de información integrados (ERP, SCM, CRM, KMS)

## Guías de Desarrollo

### Mejores Prácticas
- **Preservar estructura existente** al crear nuevas sesiones de cuestionarios
- **Validar preguntas** contra materiales fuente para garantizar precisión
- **Probar aleatorización** para asegurar experiencias de cuestionario diferentes
- **Diseño responsivo**: Utilizar utilidades de Tailwind para móviles
- **Accesibilidad**: HTML semántico apropiado y navegación por teclado

### Flujo de Trabajo de Creación de Contenido
1. **Análisis de materiales**: Revisar PDFs, audios y resúmenes en directorios de sesión
2. **Extracción de conceptos**: Identificar conceptos clave y teorías principales
3. **Creación de preguntas**: Desarrollar preguntas que cubran todos los aspectos importantes
4. **Implementación técnica**: Seguir la estructura HTML y JavaScript existente
5. **Validación**: Verificar que las preguntas sean precisas y las explicaciones sean completas

## Archivos Críticos de Referencia
- `sesiones/sesion2/cuestionarios/index.html` - Implementación de referencia
- `sesiones/sesion4/cuestionarios/index.html` - Estructura de cuestionario más reciente
- `README.md` - Descripción general de la estructura del proyecto
- `fuentes/` - Directorio con materiales fuente principales

## Comandos y Flujos de Trabajo

### Para Crear Nuevos Cuestionarios
1. Crear directorio: `sesiones/sesionX/cuestionarios/`
2. Copiar estructura base de sesión existente
3. Analizar materiales en `sesiones/sesionX/lecturas/` y `sesiones/sesionX/resumen/`
4. Adaptar contenido específico de la sesión
5. Generar banco de 80+ preguntas basadas en el material

### Para Actualizar Contenido Existente
1. Revisar materiales fuente para precisión
2. Mantener consistencia en explicaciones
3. Preservar estructura HTML y estilos CSS existentes
4. Validar que la aleatorización funcione correctamente
