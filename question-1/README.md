# Enunciado 1

> Estás subiendo una escalera de N peldaños. En cada momento, puedes subir 1 o 2 peldaños. ¿En cuántas formas diferentes puedes subir las escalera?

# Razonamiento

_Escribir aquí el razonamiento al puzzle_

Santiago, siguiendo el enunciado del ejercicio, realizo el siguiente razonamiento:

Escalera de 0 peldaños: no existe escalera.
Escalera de 1 peldaño: solo puedo subir 1 peldaño (1 forma).
Escalera de 2 peldaños: puedo subir de 1 en 1, o de una sola vez 2 peldaños juntos (2 formas).
Escalera de 3 peldaños: puedo subir de 1 en 1, primero 2 y después 1, primero 1 después 2 (3 formas).
Escalera de 4 peldaños: puedo subir de 1 en 1, de 2 en 2, y las secuencias 1-1-2, 2-1-1, 1-2-1 (5 formas).

En este punto, podemos empezar a visualizar un patrón a medida que aumenta el número de peldaños, ya que la suma de la cantidad de formas de subir en el caso de 1 peldaño y 2 peldaños, nos da como resultado el mismo número de formas de subir una escalera de 3 peldaños(3). Y si hacemos la misma operación entre escalera de 2 y 3 peldaños, nos da como resultado 5, que es la cantidad de formas de subir una escalera de 4 peldaños!

Agrego un ejemplo más para verificar esta teoría

Escalera de 5 peldaños: puedo subir:
    1-1-1-1-1
    1-2-2
    2-1-2
    2-2-1
    1-1-1-2
    1-1-2-1
    1-2-1-1
    2-1-1-1
Tenemos 8 formas posibles de subir una escalera de 5 peldaños siguiendo el enunciado. Y la suma de las formas en una escalera de 4 peldaños (5) con las formas de una escalera de 3 peldaños(3), nos da el mismo resultado, 8.

Por lo cual, podemos deducir que para obtener el número de formas posibles de subir una cantidad de N peldaños, necesitamos sumar la cantidad de formas de sus 2 predecesores, lo que nos lleva al siguiente algoritmo:  cantidadFormas(escalera) = cantidadFormas(escalera - 1) + cantidadFormas(escalera - 2).

Con este algoritmo, podremos obtener la cantidad de formas de subir una escalera de cualquier cantidad de peldaños, subiendo solo de a 1 o 2 peldaños!