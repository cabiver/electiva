import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-comentario-page',
  templateUrl: './comentario-page.component.html',
  styleUrls: ['./comentario-page.component.css']
})
export class ComentarioPageComponent implements OnInit {

  
  coments: FormGroup
  constructor(private _builder: FormBuilder) {
    this.coments = this._builder.group({
      email: ['', [Validators.required]],
      name: ['', [Validators.required]],
      comentario: ['', [Validators.required]],
      
    })
   }

  ngOnInit(): void {
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
    
    
  }
}
