const argv = require('./config/yargs').argv;
//const color = require('colors');



const { crearArchivo } = require('./multiplicar/multiplicar');
const { listarArchivo } = require('./multiplicar/listar');

let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo} `))
            .catch(e => console.log(e));
        break;
    case 'crear':
        crearArchivo(argv.base)
            .then(archivo => console.log(`Archivo creado: ${archivo} `))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}

//console.log(argv);

//require se pone siempre al principio
//busco en la pagina node.js las bibliotecas para bajar..en este caso filesystem..que permite grabar
//la tabla en un archivo plano

//const fs = require('fs'); //esta libreria ya existe en node y no debemos hacer nada mas.
//const fs = require('express'); //esta no es propia de node..se instala ..no son nativos de node
//const fs = require('./path donde esta el archivo'); //son archivos que nosotros mismos creamos
//console.log(module);  //el modulo es un objeto a nivel global...

//console.log(process);

//esto es para pasar parametros...el argumento argv
//console.log(process.argv);

//siempre que tengamos let {} o const {} significa que es una destructuracion...

//aca lo que vamos a hacer es consumir la funcion que esta en multiplicar.js




//let argv2 = process.argv;


//console.log(argv2);
/*
let parametro = argv[2];
let base = parametro.split('=')[1];


//por defecto esto muestra que estamos mandando 2 parametros..
//la ubicacion de node y el path del archivo que estamos ejecutando

//si ejecutamos nodemon app --base=5, vemos que --base5 esta en 3er parametro


//esta parte que sigue es solo la valida luego que puse el const y traigo la funcion del otro lado*/


/*

comento todo esto , la logica la puse en multiplicar.js
let contenido = '';


for (let index = 1; index <= 10; index++) {

    //console.log(`El resultado de ${ base } * ${index } = ${base * index}`);

    contenido += `${ base } * ${index } = ${base * index} \n `;

}

//archivos es la carpeta creada para que grabe ahi...depende de donde estemos la ruta a poner

fs.writeFile(`archivos/Tabla ${base}.txt`, contenido, (err) => {
    if (err) throw err;
    console.log('El archivo ha sido grabado!');
});

/*
esto es un ejemplo de como escribir en un archivo plano
fs.writeFile('tabla-2.txt', 'hola mundo', (err) => {
    if (err) throw err;
    console.log('El archivo ha sido grabado!');
});


*/
//IMPORTANTEEEEEEEEEEEEE
//con npm init es para poder crear el package.json  
//me va pidiendo parametros. que se podrian modificar. ej. la version

//crea el package y este tiene todas las dependencias de nuestra app..
//luego instalo npm i yargs --save.. ahora podemos ver que en el json original hay dependencias