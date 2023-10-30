const { writeFileSync, mkdirSync } = require('fs'); // importaciones para crear el archivo

require('dotenv').config(); // importacion de dotenv

const targetPath = './src/environments/environments.ts' // ruta donde se creara el archivo

const envFileContent =
`export const environment = {
  mapbox_key: "${ process.env['MAPBOX_KEY'] }"
};
`; // contenido del archivo

mkdirSync('./src/environments', { recursive: true } ); // crear la carpeta y el parametro recursive es para sobrescribir si existe

writeFileSync( targetPath, envFileContent); // esta linea de codigo crea el archivo en el path y le agrega el contenido descrito anteriormente
