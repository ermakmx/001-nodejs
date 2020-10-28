const fs = require('fs');//aqui importamos el paquete de manipuilacion de archivos

let crearArchivo = (base, limite) =>{

    return new Promise((resolve, reject) => {
    let tabla = '';
    
    if (!Number(base)) {
        reject('Favor de insertar un numero valido')
        return;
    
    }
    if (!Number(limite)) {
        reject('Favor de insertar un limite valido')
        return;
    }
    
    for (let i = 1; i <= limite; i++) {
        //  console.log(base + " X " + i + " = " + base*i);
        tabla += `${base} X ${i} = ${base*i} \n`;  
        //console.log(`${base} X ${i} = ${base*i}`);
          
      }
      fs.writeFile(`tablas/tabla_${base}.txt`,tabla,(err) => {
        if (err) {
            reject (err);
         }
        else{
            resolve(`tabla_${base}.txt`);
        }
        //console.log(`Se creo con exito el archivo tabla_${base}.txt`)  
        
        // for (let i = 1; i <= 10; i++) {
        //     //  console.log(base + " X " + i + " = " + base*i);
        //     tabla += `${base} X ${i} = ${base*i} \n`;  
        //     //console.log(`${base} X ${i} = ${base*i}`);
              
        //   }

      });

    });
};


let listartabla = (base, limite)=>{

    return new Promise((resolve, reject) =>{
        if (!Number(base)) {
            reject('Favor de insertar un numero valido')
            return;
        }

        if (!Number(limite)) {
            reject('Favor de insertar un limite valido')
            return;
        }

        for (let i = 1; i <= limite; i++) {
            //  console.log(base + " X " + i + " = " + base*i);
            //tabla += `${base} X ${i} = ${base*i} \n`;  
            console.log(`${base} X ${i} = ${base*i}`);
              
          }



    })
}
module.exports = {

    crearArchivo,
    listartabla

}