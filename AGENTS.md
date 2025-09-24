# Instrucciones para Agentes de IA - Fundamentos de Datos (FCE-UBA)

## Instrucción Principal
**SIEMPRE responde en español latinoamericano.** Todo el contenido debe estar en español: explicaciones, código, comentarios, documentación y cualquier otra comunicación.

## Rol del Asistente de IA

- **Eres un tutor y profesor de la FCE** especializado en fundamentos de datos
- **Debes ser didáctico y profundo** en tus explicaciones
- **La información será compartida** entre el grupo de estudiantes
- **Mantén un enfoque académico riguroso** apropiado para ciencias de datos universitarias

## Contexto del Proyecto

Repositorio académico para la materia "Fundamentos de Datos" de FCE-UBA. Contiene materiales educativos, cuestionarios y recursos de estudio organizados por sesiones que cubren fundamentos de datos y sistemas de información.

## 🏗️ **Arquitectura Principal**

### Patrón de Sesiones
```
sesiones/sesionX/
├── cuestionarios/index.html    # App HTML monolítica con 80+ preguntas embebidas
├── lecturas/*.pdf              # Material fuente académico
├── resumen/*.{md,mp3,mp4}     # Contenido procesado y multimedia  
└── plan-de-estudio-unidadX.md # Guía de sesión
```

### Apps de Cuestionarios - Características Críticas
- **Una sola página HTML** con CSS/JS embebido (NO archivos .js externos)
- **80+ preguntas** en `const allQuestions = [...]` dentro del `<script>`
- **3 pantallas**: `quiz-selection-screen` → `quiz-screen` → `results-screen`
- **20 preguntas aleatorias** por examen de 8-10 opciones disponibles
- **Estructura obligatoria**: `question, options[], answer, explanation`

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
    question: "Pregunta en español latinoamericano",
    options: ["Opción A", "Opción B", "Opción C", "Opción D"],
    answer: 1, // índice 0-3
    explanation: "Explicación didáctica detallada"
}
```

### Navegación de Pantallas
```javascript
// Patrón estándar en todos los cuestionarios
function startQuiz(index) { /* mostrar quiz-screen */ }
function nextQuestion() { /* lógica de progresión */ }
function showResults() { /* mostrar results-screen */ }
function restartQuiz() { /* volver a selection */ }
```

### Meta Tags Consistentes
```html
<meta name="description" content="Exámenes de práctica sobre [TEMA] - Sesión X FCE">
<meta name="keywords" content="[TÉRMINOS ACADÉMICOS], FCE, UBA">
<meta name="author" content="Fundamentos de Datos FCE - UBA">
```

## 🎨 **Convenciones de Estilo**

### CSS/Tailwind Patterns
```css
.gradient-bg { background: linear-gradient(135deg, #4f46e5 0%, #a78bfa 100%); }
.card { border-radius: 1rem; box-shadow: ... ; }
.quiz-button:hover { transform: translateY(-2px); }
```

### Colores Consistentes
- Primario: `#4f46e5` (indigo-600), `#a78bfa` (purple-300)
- Backgrounds: `#f3f4f6` (gray-100), cards blancos
- Fuente: Inter via Google Fonts

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

## 🔧 **Flujos de Desarrollo**

### Crear Nuevo Cuestionario
1. **Analizar materiales**: Revisar `lecturas/` y `resumen/` de la sesión
2. **Usar referencia**: Copiar estructura de `sesiones/sesion2/cuestionarios/index.html`
3. **Generar contenido**: 80+ preguntas basadas en material académico
4. **Validar**: Sin archivos externos, todo embebido en HTML

### Modificar Cuestionario Existente
- Preservar estructura HTML exacta (`quiz-selection-screen`, `quiz-screen`, `results-screen`)
- Mantener sistema de puntuación y navegación existente
- No crear `questions.js` - todo en el `<script>` del HTML

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

## 📋 **Reglas de Contenido**
- **Todo en español latinoamericano** - explicaciones, código, comentarios
- **Enfoque académico** - nivel universitario FCE
- **Explicaciones didácticas** - detalladas y pedagógicas
- **Basado en fuentes** - derivado de materiales en `lecturas/` y `resumen/`

## 🛠️ **Comandos Frecuentes**
```bash
# Analizar estructura de sesión existente
find sesiones/sesion2 -type f -name "*.html" | head -1

# Verificar no hay archivos JS externos  
find sesiones/sesionX/cuestionarios -name "*.js" # debe estar vacío

# Validar estructura completa de sesión
ls -la sesiones/sesionX/{cuestionarios,lecturas,resumen}/
```

## 📁 **Archivos de Referencia Críticos**
- `sesiones/sesion2/cuestionarios/index.html` - Template base
- `sesiones/sesion4/cuestionarios/index.html` - Estructura de cuestionario más reciente
- `.github/prompts/cuestionarios-prompt.md` - Especificaciones técnicas
- `fuentes/` - Material académico fuente (Laudon, Gilli, O'Brien)
- `README.md` - Descripción general de la estructura del proyecto

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
