const fs = require('fs');
const colors = require('colors');

// Promesa usando new Promise
// const crearArchivo = (base = 5) => {

//     return new Promise((resolve, reject) => {

//         console.log('=======================');
//         console.log('     Tabla del: ', base);
//         console.log('=======================');

//         let salida = '';


//         for (let index = 1; index <= 10; index++) {
//             salida += (`${base} x ${index} = ${base * index}\n`);
//         }

//         console.log(salida);

//         fs.writeFileSync(`tabla-${base}.txt`, salida);
//         resolve(`tabla-${base}.txt`);

//     })


// Promesa usando  async
const crearArchivo = async (base = 5, listar = false, hasta = 10) => {

    try {
        if (listar) {            
            console.log('======================='.green);
            console.log('     Tabla del: '.green, colors.blue(base));
            console.log('======================='.green);
        }

        let salida, consola = '';


        for (let index = 1; index <= hasta; index++) {
            salida += (`${base} x ${index} = ${base * index}\n`);
            consola += (`${base} ${'x'.green} ${index} ${'='.green} ${base * index}\n`);
        }

        if (listar) {
            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;
    } catch (err) {
        throw err;
    }

}


module.exports = {
    crearArchivo
}