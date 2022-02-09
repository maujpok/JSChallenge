# Enunciado 3

> Implementar un método de verificación lógica de paréntesis. Es decir, implementar el método `parenthesisChecker(str)` que recibe un `string` como parámetro y devuelve un `boolean`. La respuesta del método debe ser `true` si la cadena de `string` es válida en términos de paréntesis (`( )`, `[ ]`, `{ }`), i.e. cada apertura de paréntesis se cierra correctamente. A continuación se muestran ejemplos de `string` válidos e inválidos.
> 
> **Ejemplos válidos**: la función debe devuelve `true`.
>
> - `parenthesisChecker('a * (b + c)')` → `true`
> - `parenthesisChecker('a * (b + c * [d])')` → `true`
> - `parenthesisChecker('[]{}()abc{([])}')` → `true`
>
> **Ejemplos válidos**: la función debe devuelve `false`.
>
> - `parenthesisChecker('(()')` → `false`
> - `parenthesisChecker('(([))')` → `false`
> - `parenthesisChecker('([)]')` → `false`

# Razonamiento

_Escribir aquí los supuestos asumidos, reflexiones y explicaciones de la solución_

Santiago, siguiendo con la consigna, realizo el siguiente razonamiento:

Puedo limpiar el string para guardar solo aquellos caracteres que formen parte de la referencia, es decir, los signos de apertura y cierre, lo que nos importa verificar en la función.

Debemos guardar una referencia de los distintos signos, para poder iterar sobre el string y buscar el retorno de la funcion en virtud del string dado.

Una buena práctica para validar esta información, es guardar el par de signos de antemano para tener la referencia de comparación. Por otro lado, en el transcurso de la iteración, debemos almacenar los signos de apertura para luego contrastarlos con los de cierre.