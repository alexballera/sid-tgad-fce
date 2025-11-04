# 📚 Fundamentos de Datos (FCE - UBA)

> Repositorio académico completo con materiales de estudio, cuestionarios interactivos y recursos multimedia para la materia "Fundamentos de Datos" de la Facultad de Ciencias Económicas (FCE - UBA).

---

## 📖 Descripción

Este repositorio contiene todos los materiales necesarios para estudiar y aprobar la materia **Fundamentos de Datos**. La materia aborda los principios y conceptos fundamentales del manejo, representación y procesamiento de datos en contextos económicos y de gestión: sistemas de información organizacionales, bases de datos, desarrollo de software, tecnologías emergentes y gestión de proyectos TI.

### ✨ Características principales

- **📘 Bibliografía completa**: Libros de texto principales y material académico de referencia
- **🎯 Cuestionarios interactivos**: Aplicaciones web con 80+ preguntas por tema y explicaciones detalladas
- **🎧 Contenido multimedia**: Resúmenes en PDF, audio (MP3) y video (MP4)
- **📝 Organización por parciales**: Material estructurado según el cronograma de la materia
- **🔄 Estudio autogestionado**: Planes de estudio y resúmenes para cada sesión

---

## 🗂️ Estructura del Repositorio

```
sid-tgad-fce/
├── fuentes/                    # 📚 Bibliografía base
│   ├── Sistemas de Información Gerencial - Laudon 12Ed.pdf
│   ├── Diseño organizativo - GILLI.pdf
│   ├── OBM-Sistemas_de_Informacion_Gerencial-J-Obrien.pdf
│   ├── Fundamentos de bases de datos (5a. ed.).pdf
│   ├── ingenieria-de-software-enfoque-practico-7ed-pressman.pdf
│   └── Cronograma.pdf
│
└── sesiones/                   # 📂 Material organizado por parcial y sesión
    ├── 1er-parcial/            # Sesiones 2-11
    │   ├── 1er-parcial.html    # Examen de práctica completo
    │   ├── sesion2/
    │   ├── sesion3/
    │   ├── sesion4/
    │   └── ...
    │
    └── 2do-parcial/            # Sesiones 11, 14-20
        ├── sesion11-ecommerce/
        ├── sesion14-computacion-en-nube-iot/
        ├── sesion15-ciclo-de-vida/
        └── ...
```

### 📁 Estructura de cada sesión

Cada sesión contiene tres directorios principales:

```
sesiones/[periodo]/sesionX/
├── lecturas/                   # 📖 Material académico original (PDFs)
├── resumen/                    # 📝 Contenido procesado
│   ├── resumen.md             # Resumen en texto
│   ├── *.pdf                  # Resúmenes detallados
│   ├── *.mp3                  # Audios explicativos (si aplica)
│   └── *.mp4                  # Videos educativos (si aplica)
└── cuestionarios/             # ✅ Exámenes de práctica
    └── index.html             # App web interactiva
```

---

## 🎯 Temario por Parcial

### 📘 Primer Parcial (Sesiones 2-11)

| Sesión | Tema | Contenido |
|--------|------|-----------|
| **2** | Sistemas y Organización | Sistemas de información organizacionales, estrategia TI |
| **3** | Sistemas de Información | Tipos de SI, arquitecturas empresariales |
| **4** | Sistemas Integrados | ERP, SCM, CRM, KMS |
| **5-7** | Bases de Datos | Modelos de datos, diseño relacional, SQL |
| **6** | Gestión de Datos | Administración y almacenamiento |
| **7** | Infraestructura TI | Hardware, software, redes |
| **8** | Telecomunicaciones | Redes empresariales, internet |
| **9** | Seguridad | Ciberseguridad, controles |
| **10** | Inteligencia de Negocios | BI, Analytics, DSS |
| **11** | E-Commerce | Comercio electrónico, modelos digitales |

### 📗 Segundo Parcial (Sesiones 11, 14-20)

| Sesión | Tema | Contenido |
|--------|------|-----------|
| **11** | E-Commerce | Continuación de comercio electrónico |
| **14** | Tecnologías Emergentes | Cloud Computing, IoT, Big Data |
| **15** | Ciclo de Vida del Software | Metodologías tradicionales, fases SDLC |
| **16** | Metodologías Ágiles | Scrum, Agile, desarrollo iterativo |
| **17** | Adquisición de SI | Make vs Buy, selección de sistemas |
| **18** | Nuevas Tecnologías | IA, Blockchain, RPA |
| **19** | Gestión de Proyectos | PMI, planificación, control |
| **20** | Control y Auditoría | Calidad, auditoría de SI, COBIT |

---

## 🚀 Cómo Usar Este Repositorio

### Para Estudiantes

#### 1️⃣ **Descarga el repositorio**
```bash
git clone https://github.com/[tu-usuario]/sid-tgad-fce.git
cd sid-tgad-fce
```

#### 2️⃣ **Navega por las sesiones**
- Revisa el `Cronograma.pdf` en `/fuentes/` para conocer el orden de temas
- Entra al directorio de la sesión correspondiente: `sesiones/[periodo]/sesionX/`

#### 3️⃣ **Estudia el material**
```bash
# Ejemplo para estudiar Sesión 4 (Sistemas Integrados)
cd sesiones/1er-parcial/sesion4/

# 1. Lee el plan de estudio (si existe)
cat plan-de-estudio-unidad1.md

# 2. Revisa las lecturas
ls lecturas/

# 3. Estudia los resúmenes
ls resumen/
```

#### 4️⃣ **Practica con los cuestionarios**
- Abre `cuestionarios/index.html` en tu navegador
- Cada cuestionario tiene **8-10 exámenes** con **20 preguntas aleatorias** cada uno
- Obtendrás explicaciones detalladas de cada respuesta

#### 5️⃣ **Consulta la bibliografía**
- Los PDFs en `/fuentes/` son las fuentes principales
- Úsalos para profundizar conceptos específicos

### Para Colaboradores

Si deseas contribuir al proyecto:

1. Fork el repositorio
2. Crea una rama para tus cambios: `git checkout -b mejora/sesionX`
3. Sigue las convenciones del archivo `AGENTS.md`
4. Haz un Pull Request con descripción clara

---

## 🎮 Características de los Cuestionarios

Los cuestionarios interactivos incluyen:

- ✅ **80+ preguntas** por tema con contenido académico riguroso
- 🎲 **Aleatorización**: 20 preguntas diferentes en cada intento
- 📊 **Sistema de puntuación** con resultados inmediatos
- 💡 **Explicaciones detalladas** para cada opción de respuesta
- 🎨 **Diseño responsivo** con Tailwind CSS
- 📱 **Compatible** con desktop y móvil
- 🔄 **Sin instalación**: solo abre el archivo HTML en tu navegador

### Ejemplo de uso

```bash
# Abrir cuestionario de Ciclo de Vida del Software
firefox sesiones/2do-parcial/sesion15-ciclo-de-vida/cuestionarios/index.html
```

---

## 📚 Bibliografía Principal

| Libro | Autor | Aplicación |
|-------|-------|------------|
| Sistemas de Información Gerencial (12ª Ed.) | Laudon & Laudon | Temas generales de SI |
| Diseño Organizativo | Gilli | Sistemas organizacionales |
| Sistemas de Información Gerencial | O'Brien | Gestión de SI |
| Fundamentos de Bases de Datos (5ª Ed.) | Elmasri & Navathe | Bases de datos |
| Ingeniería del Software (7ª Ed.) | Pressman | Desarrollo de software |
| Scrum Guide (2020) | Schwaber & Sutherland | Metodologías ágiles |

Todos los PDFs están disponibles en el directorio `/fuentes/`.

---

## 🛠️ Tecnologías Utilizadas

- **HTML5 + CSS3**: Estructura de cuestionarios
- **JavaScript**: Lógica de exámenes y aleatorización
- **Tailwind CSS**: Diseño y estilos
- **Markdown**: Documentación y resúmenes

---

## 📝 Notas Importantes

- ⚠️ **Material académico**: Este repositorio es para uso educativo personal
- 📖 **Derechos de autor**: Los PDFs en `/fuentes/` son propiedad de sus respectivos autores
- 🔄 **Actualizaciones**: El contenido se actualiza según el programa de la materia
- 🤝 **Uso compartido**: Siéntete libre de compartir con otros estudiantes de FCE-UBA

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para proponer cambios:

1. Revisa el archivo `AGENTS.md` para conocer las convenciones
2. Asegúrate de que el contenido esté en **español latinoamericano**
3. Mantén la estructura y formato existente
4. Verifica que los cuestionarios sean precisos académicamente

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

## 📧 Contacto

Para reportar errores, sugerir mejoras o hacer consultas, abre un **Issue** en el repositorio.

---

**🎓 ¡Éxitos en tu estudio de Fundamentos de Datos!**
