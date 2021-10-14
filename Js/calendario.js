function addTabla(){
    // console.log(localStorage.getItem('agenda'))
    let array=JSON.parse(localStorage.getItem('agenda'));
    array.forEach(element =>{
        let tr = document.createElement('tr')


        let nombre = document.createElement('th')
        nombre.setAttribute('scope','row')
        nombre.innerHTML= element.nombre
        
        let apellido = document.createElement('td')
        apellido.innerHTML= element.apellido
        
        let correo = document.createElement('td')
        correo.innerHTML = element.correo

        let telefono = document.createElement('td')
        telefono.innerHTML = element.telefono

        let hora = document.createElement('td')
        hora.innerHTML = element.hora

        let localidad = document.createElement('td')
        localidad.innerHTML = element.localidad

        tr.appendChild(nombre)
        tr.appendChild(apellido)
        tr.appendChild(correo)
        tr.appendChild(telefono)
        tr.appendChild(hora)
        tr.appendChild(localidad)

        document.getElementById('citas').appendChild(tr);
    })
}
function loadData(){
    if(!localStorage.getItem('agenda')){
        return
    }
    addTabla();                            
}
loadData();