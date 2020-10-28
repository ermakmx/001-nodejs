const multiplicar = require('./multiplicacion/multiplicar');
const argv = require('yargs')
.command('listar','Imprime pantalla de multiplicar',{
  base : {
   
    demand: true,
    alias: 'b'
  },
  limite:{
    alias: 'l',
    default: 10

  }
}).command('crear','crea un archivo de multiplicar',{
  base : {
   
    demand: true,
    alias: 'b'
  },
  limite:{
    alias: 'l',
    default: 10

  }
})
.help().argv;

let comando = argv._[0];
let base=argv.base;
let limite=argv.limite;
switch (comando) {
  case 'listar':
  //  console.log("Usted eligio listar");

  
  
  multiplicar.listartabla(base,limite)
  .then()
  .catch(error => console.log(`Ocurrio un error ${error}`));
  
  break;

  case 'crear':
    //console.log("Uster eligio crear");
       multiplicar.crearArchivo(base,limite)
        .then(archivo => console.log(`El archivo ${archivo} se genero exitosamente`))
        .catch(error => console.log(`Ocurrio un error ${error}`));
          
    break;

  default:
    //console.log("Comando no reconocido");
    break;
}

// console.log(`La base es ${argv.base}`);
// console.log(`El limite es ${argv.limite}`);
// console.log(`La opcion del menu seleccionado fue ${argv._[0]}`);

