# Proceso_ConstanzaInostroza
## I° Visualización
1. Para visualizar los datos en un gráfico, pocedí a instalar **Altair** a través de un notebook en Google Colab, ingresando el codigo de instalación pude proceder a subir mis archivos que continen las tablas para ser visualizadas en gráfico de barras.
2. Una vez subido los archivos, ingresé el codigo para que el programa leyera las tablas contenidas en mi documento (CSV) y las visualizara en tablas.
3. Si bien, ambas tablas visualizadas tenían una misma variable X (años), una de las tablas tenía una cantidad mucho mayor de variables, que la otra. En ese sentido, me ví en la obligación de limpiar algunos datos, con el fin de que ambos gráficos quedaran con una relación evidente entre las variables X.
4. Una vez limpiados los datos, quedó consignada la **Tabla1 'Evolución de la edad promedio en Chile'** y **Tabla2 'Evolución del procentaje de adultos mayores de 60 años en Chile'**
5. Despés de cada tabla ingresé el codigo **chart** para crear el gráfico y mediante el uso de **mark_bar** definí que ambos fueran gráficos de barras.
6.  Una vez logrado visulizar ambos gráficos de barras, procedí a ingresar códigos nuevos en cada programación, con el fin  de darle mayor interactividad a los gráficos, por ejempolo: **Color=alt.color()** para agregarle color a las varialbes, **scale=alt.Scale(scheme='spectral')** para ingresar un espectro de colores determinado a las variables, **tooltip** para agregar el texto descriptivo sobre las áreas de cada variable presente en los gráficos.
7.  Luego, abrí el apartado de **Properties** donde ingresé las codigos para agregarle un titulo a los gráficos y determinar el tamaño y dimensiones de su visualización
8.  Una vez teniendo ambos graficos visualizados de forma interactiva, y con datos correlativos (variable x), procedí combinar ambos gráficos en forma horizontal mediante el código **combined_chart = alt.hconcat(chart1, chart2)**, finalmente ingresé el codigo  **combined_chart** para visualizarlos.

## II° Base de datos utilizada


- 
- 
- 
- 
