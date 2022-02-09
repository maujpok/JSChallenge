# Enunciado 2

> En la carpeta [question-2](https://bitbucket.org/vestua-com/questions/src/main/question-2/) se ha exportado eventos de navegación de usuarios anonimizados de la plataforma Vestuá. Se le pide al equipo de Ingeniería que hagan un análisis sobre los datos de navegación. En particular se solicita:
>
> - Calcular la cantidad de visitas únicas por cada producto.
> - Calcular la cantidad de clicks únicos por cada producto.
> - Calular el CTR (*Clickthrough Rate*) de cada producto.
> 
> El set de datos contiene la siguiente estructura:
> 
> - `user`: id del usuario que ejecutó el evento.
> - `entityId`: id de la entidad al que el usuario ejecutó el evento.
> - `entityType`: tipo de entidad al que se ejecutó el evento.
> - `eventType`: tipo de evento. Puede ser `impression` o `click`.
> 
> Como miembro del equipo de ingeniería, te solicitan modificar el archivo [script.js](https://bitbucket.org/vestua-com/questions/src/main/question-2/script.js) para que pueda leer el set de datos y generar un archivo `output.csv` con las siguientes columnas:
> 
> - `productId`: id del producto.
> - `clicks`: cantidad de *clicks* únicos que tiene el producto
> - `impressions`: cantidad de impresiones únicas que tiene el producto.
> - `ctr`: métrica CTR del producto.

# Razonamiento

_Escribir aquí los supuestos asumidos, reflexiones y explicaciones de la solución_

Como primer paso, debo parsear la información que viene en el archivo CSV para poderla manipular.

Como el parámetro relevante es el producto, debo individualizarlos, para luego poder ejecutar las funciones necesarias que me permitan obtener la cantidad de visitas únicas, clicks, y con estos dos datos calcular el CTR. Esto lo puedo lograr iterando el array de datos parseados y pusheando los entityId no repetidos.

Luego, teniendo individualizados los id de producto, puedo recorrer nuevamente los datos parseados, evaluando el entityId, y a partir de allí obtener visitas únicas y clicks.

Finalmente, una exportación en formato CSV de la lectura realizada de la información.