const desplegar= document.getElementById('desplegar-comentario');
const form = document.getElementById('form-comentarios');
let newcoments = [];

desplegar.addEventListener('click', e=>{
    form.classList.remove('d-none')
})
form.addEventListener('submit', e=>{
    e.preventDefault();
    const data = new FormData(form)
    newcoments.push({
        nombre: data.get('nombre'),
        comentario: data.get('comentario'),
        fecha: new Date(),
    })
    localStorage.setItem('coments',JSON.stringify(newcoments));
})