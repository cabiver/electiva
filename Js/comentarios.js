'use strict';
const desplegar= document.getElementById('desplegar-comentario');
const form = document.getElementById('form-comentarios');
const comentarioSeccion = document.getElementById('seccion de comentarios');
let INDEX_COMENTARIOS=0;
/* <div class="card mb-4 shadow p-3 mb-5 bg-body rounded">
        <div class="d-flex justify-content-between">
            <div class="d-flex flex-row align-items-center">
                <img src="../Img/comentario3.gif" alt="" width="25" height="25" />
                <p class="small ms-2">Terrie</p>
            </div>
            <div class="d-flex flex-row align-items-center">
                <p class="small text-muted">17/07/2021</p>
            </div>
        </div>
    <p class="mb-0">Terrie, Kate y yo queremos agradecer a Sonrisas por la fantástica atención que hemos recibido. </p>
</div> */

function loadComents () {
    let comentsByDraw = JSON.parse(localStorage.getItem('coments'));
    if(!comentsByDraw){
        return
    }
    comentsByDraw.forEach((element,index) => {
        if(!index===INDEX_COMENTARIOS){
            return;
        }
        let divcontainer = document.createElement('div');
        divcontainer.setAttribute('class','card mb-4 shadow p-3 mb-5 bg-body rounded');

        let divUsuario = document.createElement('div');
        divUsuario.setAttribute('class','d-flex justify-content-between');
        
        let divImage = document.createElement('div');
        divImage.setAttribute('class','d-flex flex-row align-items-center');

        let icon = document.createElement('img');
        icon.setAttribute('class','d-flex flex-row align-items-center');
        icon.setAttribute('src','../Img/comentario3.gif');
        icon.setAttribute('width','25');
        icon.setAttribute('height','25');

        let usuario = document.createElement('p');
        usuario.setAttribute('class','small ms-2');
        usuario.innerHTML = element.nombre;
        
        divImage.appendChild(icon);
        divImage.appendChild(usuario);

        let divFecha = document.createElement('div');
        divFecha.setAttribute('class','d-flex flex-row align-items-center');
        
        let fecha = document.createElement('p');
        fecha.setAttribute('class','small text-muted');
        fecha.innerHTML = element.fecha

        divFecha.appendChild(fecha);

        divUsuario.appendChild(divImage);
        divUsuario.appendChild(divFecha);
        

        let coment = document.createElement('p');
        coment.setAttribute('class','mb-0');
        coment.innerHTML = element.comentario
    
        divcontainer.appendChild(divUsuario);
        divcontainer.appendChild(coment);
        INDEX_COMENTARIOS++;
        comentarioSeccion.appendChild(divcontainer);
    });
}
loadComents();
let newcoments = [];

desplegar.addEventListener('click', e=>{
    form.classList.remove('d-none')
})
form.addEventListener('submit', e=>{
    e.preventDefault();
    const data = new FormData(form)
    // console.log(JSON.parse(localStorage.getItem('coments')))

    !localStorage.getItem('coments')
                                ?newcoments = [{
                                    nombre: data.get('nombre'),
                                    comentario: data.get('comentario'),
                                    fecha: new Date().toDateString(),
                                }]
                                :newcoments = [ ...JSON.parse(localStorage.getItem('coments')), {
                                    nombre: data.get('nombre'),
                                    comentario: data.get('comentario'),
                                    fecha: new Date().toDateString(),
                                }];

    
    localStorage.setItem('coments',JSON.stringify(newcoments));
    loadComents();
    form.reset();
})