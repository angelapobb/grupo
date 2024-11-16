# Ficha Técnica de la Base de Datos

## Características de los Datos

- **Fuente**: Datos oficiales sobre cambios demográficos en Chile (2002-2021).
- **Formato**: Archivo CSV estructurado, listo para análisis.
- **Contenido**: Cambios porcentuales en la población por grupos etarios y regiones de Chile.
- **Cobertura temporal**: Años 2002 a 2021.
- **Unidades de análisis**: Porcentajes de cambio poblacional agrupados por región y grupo etario.

---

## Variables Incorporadas

| Variable                    | Descripción                                                                 |
|-----------------------------|-----------------------------------------------------------------------------|
| `Región`                   | Nombre de la región de Chile o "Total país" como referencia nacional.       |
| `0-14 años (%) cambio`     | Cambio porcentual en la población de 0 a 14 años entre 2002 y 2021.        |
| `16-59 años (%) cambio`    | Cambio porcentual en la población de 16 a 59 años entre 2002 y 2021.       |
| `60 y más (%) cambio`      | Cambio porcentual en la población de 60 años o más entre 2002 y 2021.      |

---

## Observaciones sobre la Base de Datos

1. **Limpieza de datos**:
   - El archivo CSV proporcionado estaba limpio y estructurado adecuadamente.
   - Fue necesario verificar y ajustar nombres de regiones (por ejemplo, "Total país" en lugar de "Total País") para garantizar un filtrado correcto en el análisis.

2. **Formato de los datos**:
   - Todos los datos están expresados en porcentajes con una precisión de una décima.
   - Los valores negativos reflejan disminuciones en los grupos poblacionales, mientras que los positivos indican aumentos.

3. **Transformaciones realizadas**:
   - Se utilizó la función `melt` de Pandas para reorganizar los datos, convirtiendo las columnas de grupos etarios en una sola columna (`Grupo etario`) con valores correspondientes en una nueva columna (`Cambio (%)`).
   - Esta transformación fue necesaria para que los datos fueran compatibles con la estructura requerida por Altair para la creación del gráfico.

4. **Limitaciones**:
   - La base de datos no incluye información específica sobre las causas del cambio demográfico, como migración, políticas públicas, o dinámicas económicas.
   - Solo se presentan porcentajes, por lo que no es posible analizar las cifras absolutas de población.

5. **Consideraciones para el análisis**:
   - La comparación entre "Magallanes" y "Total país" destaca cómo el envejecimiento en Magallanes supera el promedio nacional.
   - Los valores negativos para los grupos de 0-14 años y 16-59 años reflejan una combinación de migración interna y baja natalidad, claves para comprender el fenómeno.
