"use strict";
// ¿Es posible la depuracion del codigo de TypeScript?
/*
    - La variable sourceMap del archivo tsconfig puede ser
      utilizado para realizar un mapeo del codigo de javascript
      al codigo de typescript y poder visualizar en que linea
      ocurren errores pero haciendo referencia al archivo de
      typescript y no el de javascript.
    - En el navegador podemos realizar depuraciones en el
      archivo source map generado.
*/
// Remover los comentarios de los archivos JavaScript
/*
    Para eliminarlos podemos activar la variable removeComments
    en el tsconfig
*/
// Incluir y excluir carpetas y/o archivos
/*
    Podemos excluir archivos colocando una seccion mas al
    archivo tsconfig llamada exclude:

    "exclude": [
        "objectos/*.ts"
    ]

    Podemos incluir con:

    "include": [
        "objectos/*.ts"
    ]
*/
// outFile - Archivo de salida
/*
    Para tener un unico archivo de salida de javascript:

    Para hacer esto, debemos de dejar las siguientes variables de la siguiente forma:

    "module": "amd",
    "outFile": "./main.js"
*/
