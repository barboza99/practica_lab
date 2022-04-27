import { fs } from './node_modules/fs';
//const fs = require('./node_modules/fs');

const btnAgregar = document.getElementById("btn-agregar");
const frase = document.getElementById("form-frase");

btnAgregar.addEventListener("click", () => {
    // let fraseCreated = {
    //     "frase": frase.value
    // }

    // console.log(fraseCreated);

    // fs.writeFile('frases.json', JSON.stringify(fraseCreated), 'utf-8', (err) =>{
    //     if(err) throw err;
    //     console.log('The file has been saved!');
    // })
    console.log("fraseCreated");

});