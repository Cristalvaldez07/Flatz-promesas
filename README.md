# Async / await
* Hay una sintaxis especial para trabajar con promesas de una manera más cómoda, llamada "async / await".
* La palabra "asincrónica" antes de una función significa una cosa simple: una función siempre devuelve una promesa. Otros valores se envuelven en una promesa resuelta automáticamente.
* La palabra clave await hace que JavaScript espere hasta que esa promesa se establezca y devuelva su resultado.
  
### La async palabra clave antes de una función tiene dos efectos:

* Hace que siempre devuelva una promesa.
Permite awaitser utilizado en él.
* La await palabra clave antes de una promesa hace que JavaScript espere hasta que esa promesa se establezca y luego:
* Si es un error, se genera la excepción, igual que si throw errorse llamara en ese mismo lugar.
* De lo contrario, devuelve el resultado.