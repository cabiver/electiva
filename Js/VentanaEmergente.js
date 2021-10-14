 const agenda = document.getElementById("agenda");

 agenda.addEventListener('submit',e=>{
     e.preventDefault();
     document.getElementById('submit-agenda').disabled = true;
     const data = new FormData(agenda);
     const check1 = document.getElementById("defaultCheck1");
     const check2 = document.getElementById("defaultCheck2");
     !localStorage.getItem('agenda')
                            ?newcoments = [{
                                nombre: data.get('nombre'),
                                apellido: data.get('apellido'),
                                correo: data.get('correo'),
                                telefono: data.get('telefono'),
                                hora: data.get('hora'),
                                localidad: data.get('localidad'),
                                resibir: check1.checked,
                                
                            }]
                            :newcoments = [ ...JSON.parse(localStorage.getItem('agenda')),
                            {
                                nombre: data.get('nombre'),
                                apellido: data.get('apellido'),
                                correo: data.get('correo'),
                                telefono: data.get('telefono'),
                                hora: data.get('hora'),
                                localidad: data.get('localidad'),
                                resibir: check1.checked,
                                
    }];
    
    localStorage.setItem('agenda',JSON.stringify(newcoments));
    form.reset();
    document.getElementById('submit-agenda').disabled = false;
    
 });