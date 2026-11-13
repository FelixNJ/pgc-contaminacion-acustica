# Sitio web PGC – Contaminación acústica

Sitio estático desarrollado con HTML, CSS y JavaScript para documentar el Proyecto de Gestión del Conocimiento del módulo de contaminación acústica de Ciudad Inteligente.

## 1. Abrir en Visual Studio Code
1. Descomprime `pgc_contaminacion_acustica.zip`.
2. Abre Visual Studio Code.
3. Selecciona **File > Open Folder** y abre la carpeta `pgc_contaminacion_acustica`.
4. Abre `index.html` con la extensión **Live Server** (clic derecho > Open with Live Server). También puedes abrir `index.html` directamente en el navegador.

## 2. Archivos
- `index.html`: contenido y estructura de todas las secciones.
- `styles.css`: diseño adaptable a computador, tableta y celular.
- `script.js`: menú móvil, botón para volver arriba e integración del informe Power BI.
- `assets/`: carpeta para fotografías de la maqueta, diagramas y evidencias.

## 3. Integrar Power BI
1. Publica el informe desde Power BI Desktop según los permisos de la cuenta y las políticas de la universidad.
2. Obtén una URL de inserción que el docente pueda abrir.
3. Abre `script.js` y reemplaza la cadena vacía de `POWER_BI_EMBED_URL` por la URL autorizada.
4. Guarda y vuelve a cargar el sitio.
5. Comprueba que el informe se vea y que sus filtros funcionen.

**Importante:** “Publicar en la web” puede hacer que el informe quede accesible públicamente. No lo uses con información privada o sensible. Verifica con el docente y la institución qué modalidad de publicación está permitida. Si se requiere autenticación, comparte el informe con las cuentas autorizadas y usa la modalidad de inserción correspondiente.

## 4. Información que debes personalizar antes de entregar
Busca y reemplaza:
- `[Nombres del equipo]`
- `[Completar asignatura]`
- `[Ciclo de formación]`
- Las referencias bibliográficas pendientes.
- Fotografías reales de la maqueta, conexiones, sensor, semáforo y evidencias de ejecución.
- La URL de Power BI.
- Los cinco conocimientos: incorpora cifras reales, gráficos, procedimiento, interpretación, utilidad y limitación.
- Las dos decisiones: agrega el hallazgo y los valores exactos que las respaldan.
- La URL pública del sitio y evidencia del video (puedes añadir una sección o enlace en el pie de página).

## 5. Publicar gratis con GitHub Pages
1. Crea un repositorio nuevo en GitHub.
2. Sube `index.html`, `styles.css`, `script.js` y la carpeta `assets`.
3. En el repositorio abre **Settings > Pages**.
4. En **Build and deployment**, elige **Deploy from a branch**.
5. Selecciona la rama `main` y la carpeta `/ (root)`, y guarda.
6. Espera la publicación y abre la URL que GitHub Pages muestre.

También puedes desplegarlo en Netlify o Vercel como sitio estático.

## 6. Precisión académica
El informe de la Actividad 8 reporta un millón de mediciones simuladas entre el 1 de enero y el 10 de noviembre de 2026, con promedio de 48,534762 dB. La distribución objetivo de simulación fue aproximadamente 70 % normal, 22 % moderado y 8 % alto. El periodo, promedio, conteos y configuración deben cotejarse con la base de datos final antes de publicar.

No presentes las mediciones simuladas como mediciones reales de la ciudad ni como certificación de cumplimiento normativo. Los hallazgos de Power BI y las decisiones deben completarse únicamente después de ejecutar y validar los análisis.

## 7. Recomendación de evidencias
Guarda en `assets/`:
- Foto general de la maqueta.
- Foto del ESP32 y el sensor.
- Foto del semáforo o matriz.
- Diagrama del modelo relacional.
- Diagrama del esquema estrella.
- Capturas del flujo ETL y su ejecución.
- Capturas del dashboard y sus filtros.
