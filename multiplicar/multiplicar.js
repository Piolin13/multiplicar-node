const fs = require('fs');
const colors = require('colors');

let listarArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No es un numero valido');
            return;
        }

        let contenido = '';

        for (let index = 1; index <= limite; index++) {

            contenido += `${ base } * ${index } = ${base * index} \n `;

        }

        //archivos es la carpeta creada para que grabe ahi...depende de donde estemos la ruta a poner

        fs.writeFile(`archivos/Tabla ${base}.txt`, contenido, (err) => {
            if (err) reject(err);

            else
                resolve(`Tabla ${base}.txt`);

        });

    })


}

//aca lo que vamos a hacer es exponer las funciones del modulo para que se vean y las pueda consumir

module.exports = {
    listarArchivo
}

//como alternativa podriamos poner module.export.crearArchivo en la linea 4.