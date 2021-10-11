"use strict";
const form = document.getElementById('form');

const validar = (num)=>!Number(num)
                                ?false
                                :true;

form.addEventListener('submit',e=>{
    e.preventDefault();
    const res = document.getElementById('request');
    const data = new FormData(form);
    if(validar(data.get('telefono'))){
        res.style.backgroundColor = '#0c0c';
        res.innerText = 'su comentario fue enviado';
    }else{
        res.style.backgroundColor = '#f00c';
        res.innerText = 'el numero telefonico no es valido';
    }
    
});