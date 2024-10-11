# Ficha Técnica y Diccionario de Datos

## 1. Características de los datos

La información obtenida para ambas bases de datos, proporcionan información sobre las principales causas de mortalidad entre personas mayores y la distribución de especialistas médicos en distintas regiones del país, con el fin de compararlas con la evolución del envejecimiento en Chile.

Los datos fueron obtenidos del documento **"Envejecimiento en Chile: Evolución, características de las personas mayores y desafíos demográficos para la población"** del Instituto Nacional de Estadísticas (INE), que abarca el período 2010-2019, y del Registro Nacional de Prestadores Individuales de Salud, que muestra los médicos registrados actualmente (consultado octubre 2024).

Los datos representan información a nivel nacional, con detalles a nivel regional.

Para obtenerlos se estudió ambas bases de datos en comparación con los censos, obtenidos del INE, lo que permitió elegir centrarse en la distribución etaria y su relación con variables de salud como la mortalidad y la cantidad de especialistas por región.
  
## 2. Variables

| Variable                 | Descripción                                                                                             |
|--------------------------|---------------------------------------------------------------------------------------------------------|
| `Regiones`                 | Nombre de la región de Chile donde se encuentran los especialistas oncólogos y cardiólogos.                                           ||
| `Año` | Año en el que se registraron los datos, abarca el año 2010 y 2019. |
| `Causa de muerte adultos mayores`       | Principales causas de muerte en personas mayores: enfermedades circulatorias, tumores, etc.           |
| `Cardiólogos`| Número de cardiólogos registrados por región en el Registro Nacional de Prestadores de Salud.           |
| `Oncólogos `  | Número de oncólogos registrados por región en el Registro Nacional de Prestadores de Salud.             |

## 3. Observaciones 

- **Actualización**: Los datos de mortalidad se extienden hasta el año 2019, por lo que pueden no reflejar los cambios más recientes en tendencias de mortalidad o envejecimiento.

- **Limitaciones**: Los datos de esperanza de vida, mortalidad y acceso a salud no están disponibles para cada año al consultar en el INE, lo que impidió un mayor análisis a nivel temporal.

- **Falta de datos**: Con la inclusión de datos sobre las enfermedades que tienen las personas mayores se podría haber hecho un análisis más completo, en vez de usar sólo la mortalidad, y así poder identificar si efectivamente la falta de especialistas incide en la salud de los adultos mayores y su calidad de vida. Hasta el momento no se ha podido encontrar estos datos, la página de SENAMA, que podría tener algún dato o estimación, no está funcionando.
