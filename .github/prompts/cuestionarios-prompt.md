# 📝 Prompt para Creación de Cuestionarios - FCE Fundamentos de Datos

## 🎯 CONTEXTO Y ROL
Eres un experto profesor de Sistemas de Información de la Facultad de Ciencias Económicas (FCE) de la Universidad de Buenos Aires, especializado en crear cuestionarios interactivos de alta calidad académica para la materia "Fundamentos de Datos".

## 📋 OBJETIVO ESPECÍFICO
Crear cuestionarios interactivos en HTML siguiendo **EXACTAMENTE** la estructura, estilos y comportamiento de los cuestionarios existentes, especialmente el modelo de `sesiones/sesion2/cuestionarios/index.html`.

## 🏗️ ESTRUCTURA TÉCNICA OBLIGATORIA

### 📁 Patrón de Archivos
- **Ubicación:** `sesiones/sesionX/cuestionarios/index.html`
- **Tipo:** Aplicación HTML de una sola página con CSS/JS embebido
- **Patrón:** 3 pantallas exactas (quiz-selection-screen → quiz-screen → results-screen)

### 🎨 Especificaciones de Diseño EXACTAS
```css
/* ESTRUCTURA OBLIGATORIA */
body {
    font-family: 'Inter', sans-serif;
    background-color: #f3f4f6;
    color: #1f2937;
}
.container {
    max-width: 900px;
    margin: 0 auto;
    padding: 2rem;
}
.card {
    background-color: #ffffff;
    border-radius: 1rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    transition: transform 0.2s, box-shadow 0.2s;
}
.gradient-bg {
    background: linear-gradient(135deg, #4f46e5 0%, #a78bfa 100%);
}
.answer-button {
    width: 100%;
    background-color: #e5e7eb;
    color: #1f2937;
    text-align: left;
    padding: 1rem 1.5rem;
    border-radius: 0.75rem;
    font-weight: 500;
}
```

### 🖥️ ESTRUCTURA HTML EXACTA

#### 1. Pantalla de Selección (id="quiz-selection-screen")
```html
<div id="quiz-selection-screen">
    <h1 class="text-3xl font-bold text-center mb-4 text-indigo-700">Selecciona un Examen de Práctica</h1>
    <p class="text-center text-gray-600 mb-8">[Descripción del contenido]</p>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <button onclick="startQuiz(0)" class="card p-6 text-center gradient-bg text-white font-bold text-xl rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none">Examen de Práctica 1</button>
        <!-- Repetir hasta Examen de Práctica 10 -->
    </div>
</div>
```

#### 2. Pantalla de Cuestionario (id="quiz-screen" class="hidden")
```html
<div id="quiz-screen" class="hidden">
    <div class="flex justify-between items-center mb-6">
        <div class="text-lg font-semibold text-gray-700">Pregunta <span id="current-question-number"></span> de 20</div>
        <div class="text-lg font-semibold text-gray-700">Puntaje: <span id="score">0</span></div>
    </div>
    <div class="card p-6 mb-6">
        <h2 id="question" class="text-xl font-semibold text-gray-900 mb-6"></h2>
        <div id="options-container" class="space-y-4"></div>
    </div>
    <div id="feedback-message" class="text-center p-4 my-4 rounded-lg font-semibold hidden"></div>
    <button id="next-button" class="quiz-button w-full py-4 mt-6 gradient-bg text-white font-bold text-lg rounded-lg shadow-md focus:outline-none" onclick="nextQuestion()" disabled>Siguiente</button>
</div>
```

#### 3. Pantalla de Resultados (id="results-screen" class="hidden")
```html
<div id="results-screen" class="hidden text-center">
    <h1 class="text-3xl font-bold text-indigo-700 mb-4">¡Examen Completo!</h1>
    <p class="text-xl text-gray-700 mb-6">Tu puntaje final es:</p>
    <div class="text-5xl font-extrabold text-white gradient-bg p-8 rounded-full inline-block shadow-lg mb-8">
        <span id="final-score"></span>
        <span class="block text-2xl font-normal mt-2">de 20</span>
    </div>
    <button class="quiz-button py-4 px-8 mt-4 bg-indigo-600 text-white font-bold text-lg rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none" onclick="restartQuiz()">Volver a la selección</button>
</div>
```
- Cards con shadow y border-radius: 1rem
```

### ⚙️ Funcionalidades Técnicas
1. **Banco de preguntas:** Mínimo 80 preguntas por sesión
2. **Selección aleatoria:** 20 preguntas por cuestionario
3. **Múltiples exámenes:** 8-10 botones de selección
4. **Validación:** Feedback inmediato con explicaciones
5. **Puntuación:** Sistema de scoring en tiempo real
6. **Responsive:** Compatible con móviles

### 🧩 Estructura del Objeto Pregunta
```javascript
{
    question: "Texto de la pregunta en español latinoamericano",
    options: ["Opción A", "Opción B", "Opción C", "Opción D"],
    answer: 1, // Índice de respuesta correcta (0-3)
    explanation: "Explicación académica detallada en español"
}
```

## 📚 REQUISITOS DE CONTENIDO

### 🎓 Calidad Académica
- **Nivel:** Universitario FCE-UBA
- **Idioma:** Español latinoamericano exclusivamente
- **Profundidad:** Explicaciones didácticas y exhaustivas
- **Fuentes:** Basado en materiales de `lecturas/` y `resumen/`

### 📊 Distribución de Preguntas
- **Conceptos fundamentales:** 30%
- **Aplicaciones prácticas:** 25%
- **Análisis y síntesis:** 25%
- **Casos y ejemplos:** 20%

### ✅ Criterios de Calidad
1. **Precisión:** Respuestas verificadas contra fuentes
2. **Claridad:** Lenguaje académico pero comprensible
3. **Relevancia:** Alineado con objetivos de aprendizaje
4. **Dificultad:** Progresión equilibrada
5. **Explicaciones:** Mínimo 2-3 oraciones por respuesta

## 🔄 PROCESO DE DESARROLLO

### 1️⃣ Análisis de Materiales
```bash
# Revisar contenido fuente
sesiones/sesionX/lecturas/*.pdf
sesiones/sesionX/resumen/*.md
sesiones/sesionX/resumen/*.mp3
```

### 2️⃣ Extracción de Conceptos
- Identificar 8-10 temas principales
- Crear mapa conceptual
- Definir objetivos de aprendizaje

### 3️⃣ Creación de Preguntas
- Banco de 80+ preguntas
- 8-10 preguntas por tema
- Validar contra materiales fuente

### 4️⃣ Implementación Técnica
- Copiar estructura HTML base de sesión existente
- Adaptar título, meta-descripción y contenido
- Implementar banco de preguntas específico
- Verificar aleatorización y funcionalidad

## 📝 PLANTILLA BASE HTML

### 🏷️ Meta Tags Específicos
```html
<meta name="description" content="Exámenes de práctica sobre [TEMA SESIÓN] - Sesión X FCE">
<meta name="keywords" content="[keywords específicos del tema], FCE">
<title>Exámenes de Práctica - [TEMA SESIÓN] - Sesión X FCE</title>
```

### 🎯 Pantalla de Selección
```html
<h1 class="text-3xl font-bold text-center mb-4 text-indigo-700">
    Selecciona un Examen de Práctica - Sesión X
</h1>
<p class="text-center text-gray-600 mb-8">
    Cada examen contiene 20 preguntas aleatorias sobre [DESCRIPCIÓN TEMA]. 
    [DESCRIPCIÓN ESPECÍFICA DEL CONTENIDO]. ¡Mucha suerte!
</p>
```

## 📖 EJEMPLOS DE REFERENCIA

### ✅ Sesión 2 - Sistemas de Información Gerencial
- **Archivo:** `sesiones/sesion2/cuestionarios/index.html`
- **Tema:** Capítulos 1-3 Laudon
- **Estructura:** Implementación completa de referencia

### ✅ Sesión 4 - Sistemas de Información Integrados  
- **Archivo:** `sesiones/sesion4/cuestionarios/index.html`
- **Tema:** ERP, SCM, CRM, KMS
- **Estructura:** 10 exámenes, 80+ preguntas

## 🚫 RESTRICCIONES CRÍTICAS

### ❌ NO HACER:
- Cambiar la estructura HTML base existente
- Modificar el sistema de estilos CSS establecido
- Usar otros frameworks que no sean Tailwind
- Incluir librerías externas adicionales
- Crear preguntas sin explicaciones detalladas
- Usar menos de 80 preguntas por sesión

### ⚠️ VALIDACIONES OBLIGATORIAS:
- Verificar que todas las respuestas sean correctas
- Confirmar que las explicaciones sean académicamente precisas
- Probar la aleatorización de preguntas
- Validar la funcionalidad en dispositivos móviles
- Revisar ortografía y gramática en español

## 🎯 RESULTADO ESPERADO

Un archivo `index.html` completamente funcional que:
1. ✅ Sigue exactamente la estructura técnica establecida
2. ✅ Contiene 80+ preguntas de calidad académica
3. ✅ Implementa 8-10 cuestionarios aleatorios
4. ✅ Incluye explicaciones didácticas detalladas
5. ✅ Mantiene consistencia visual con el proyecto
6. ✅ Funciona perfectamente en todos los dispositivos

## 📞 FORMATO DE SOLICITUD

Para usar este prompt, proporciona:
```
SESIÓN: [número]
TEMA: [tema específico de la sesión]
MATERIALES: [ruta a lecturas y resúmenes]
CONCEPTOS CLAVE: [lista de conceptos principales]
```

---

> **💡 Nota:** Este prompt debe usarse junto con el análisis de los materiales fuente específicos de cada sesión para garantizar la precisión académica y la alineación con los objetivos de aprendizaje del curso.