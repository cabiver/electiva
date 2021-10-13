"use strict";
const form = document.getElementById('form');

const validar = (num)=>!Number(num)
                                ?false
                                :true;

form.addEventListener('submit',e=>{
    e.preventDefault();
    const res = document.getElementById('request');
    const data = new FormData(form);
    if(!validar(data.get('telefono'))){
        res.style.backgroundColor = '#f00c';
        res.innerText = 'el numero telefonico no es valido';
        return
    }
    
    res.style.backgroundColor = '#0c0c';
    res.innerText = 'su comentario fue enviado';
    !localStorage.getItem('gmails')
                                ?localStorage.setItem('gmails',JSON.stringify({
                                    gmail: data.get('email'),
                                    nombre: data.get('nombre'),
                                    telefono:data.get('telefono'),
                                    text: data.get('text')
                                }))
                                :localStorage.setItem('gmails',JSON.stringify(
                                    [...JSON.parse(localStorage.getItem('coments')),{
                                    gmail: data.get('email'),
                                    nombre: data.get('nombre'),
                                    telefono:data.get('telefono'),
                                    text: data.get('text')
                                }]));
    
});