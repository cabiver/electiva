import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-comentario-page',
  templateUrl: './comentario-page.component.html',
  styleUrls: ['./comentario-page.component.css']
})
export class ComentarioPageComponent implements OnInit {

  
  coments: FormGroup

  arrayComentens: Array<any> | null

  constructor(private _builder: FormBuilder) {
    this.coments = this._builder.group({
      email: ['', [Validators.required]],
      name: ['', [Validators.required]],
      comentario: ['', [Validators.required]],
      
    })
    this.arrayComentens= this.updateComents()
  }

  ngOnInit(): void {
  }
  updateComents(): any {

    let data = window.localStorage.getItem('comentarios')
    if(!data){
      return null
    }
    return JSON.parse(data)
  }
  submit(): void{
    let form = this.coments
    console.log(form.valid)
    let div=document.getElementById("ah recuerde llenar el formulario")
    
    if(!div){
        return
    }
    if(!form.valid){
      div.style.display= ""  
      return
    }else{
      div.style.display= "none"
    }
    let name = form.value.name
    let email = form.value.email
    
    let comentario = form.value.comentario
    let fecha = new Date().toDateString();
    if(!this.arrayComentens){
      window.localStorage.setItem('comentarios', JSON.stringify([{id:0, name, email, comentario, fecha}]))
    
    }else{
      let idComentario = this.arrayComentens.length 
      this.arrayComentens.forEach(element =>{
        if(element.id == idComentario){
          idComentario+=1
        }
      })
      window.localStorage.setItem('comentarios', JSON.stringify([{id:idComentario, name, email, comentario, fecha},...this.arrayComentens]))
    }
    this.arrayComentens= this.updateComents()
  }
}
