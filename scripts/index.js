// const fs = require('fs');
import fs from 'fs'

function eliminarSaltosDeLinea(objeto) {
  if (typeof objeto === 'string') {
    return objeto.replace(/\n/g, ' ').replace(/\s+/g, ' ');
  } else if (Array.isArray(objeto)) {
    return objeto.map(eliminarSaltosDeLinea);
  } else if (typeof objeto === 'object') {
    const nuevoObjeto = {};
    for (const clave in objeto) {
      nuevoObjeto[clave] = eliminarSaltosDeLinea(objeto[clave]);
    }
    return nuevoObjeto;
  } else {
    return objeto;
  }
}

function agregarOpciones(json) {
  for (const objeto of json) {
    const opciones = [
      {value: 'a', description: objeto.a},
      {value: 'b', description: objeto.b},
      {value: 'c', description: objeto.c},
      {value: 'd', description: objeto.d},
    ]
    delete objeto.a;
    delete objeto.b;
    delete objeto.c;
    delete objeto.d;
    objeto.OPCIONES = opciones;
  }

  return json;
}

function agruparPorSeccion(json) {
  const seccions = {};
  for (const objeto of json) {
    const seccion = objeto.SECCION;
    if (!seccions.hasOwnProperty(seccion)) {
      seccions[seccion] = [];
    }
    seccions[seccion].push(objeto);
  }
  return seccions;
}


const archivoJSON = fs.readFileSync('../public/db/bii-c.json', 'utf-8');
const json = JSON.parse(archivoJSON);
const jsonSinSaltosDeLinea = eliminarSaltosDeLinea(json);
const jsonConOpciones = agregarOpciones(jsonSinSaltosDeLinea);
const jsonseccions = agruparPorSeccion(jsonConOpciones);
fs.writeFileSync('archivo_sin_saltos_de_linea.json', JSON.stringify(jsonseccions, null, 2));

console.log('Se ha creado el archivo "archivo_sin_saltos_de_linea.json"');
