import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agenda-pages',
  templateUrl: './agenda-pages.component.html',
  styleUrls: ['./agenda-pages.component.css']
})
export class AgendaPagesComponent implements OnInit {

  myform: FormGroup
  list: Array<any> | null
  client: Array<any> | null 
  constructor( private _builder: FormBuilder) {
   this.myform = this._builder.group({
      email: ['', [Validators.required]],
      name: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      time: ['', [Validators.required]],
      cedula:['', [Validators.required]],
      sede: ['', [Validators.required]]
    }) 


    this.client = this.updateClient()
    this.list = this.updateList()

    
  }
  updateClient(): any{
    let dataClient = window.localStorage.getItem("client")
    
    if(!dataClient){
      return null
    }else{
      return [...JSON.parse(dataClient)]
    }
  }
  updateList(): any{
    let data = window.localStorage.getItem("citas")
    if(!data || !this.client){
      return null
    }else{
      let id = JSON.parse(data)
      id.forEach((element: any,index: any) => {
        this.client?.forEach(el=>{
          if(element.idPersona== el.id){
            id[index]={
              ...element,
              name:el.name
            }
          } 

        })
      });
      
      return id
      
    }
  }
  ngOnInit(): void {
  }
  submit(): void {
    let form = this.myform
    // console.log(form.valid)
    
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
    
    
    
    let idPersona = null
    let exist = false
    if(this.client){
      this.client.forEach(element => {
        if(element.cedula == form.value.cedula){
          idPersona = element.id 
          exist = true
        }
      })
    }
    
    
    if(!exist){
        if(this.client){
          idPersona = this.client.length
          window.localStorage.setItem("client", JSON.stringify(
            [{
              id: idPersona,
              name:form.value.name,
              email:form.value.email,
              phone:form.value.phone,
              cedula:form.value.cedula
            },...this.client]))
        } else{
          idPersona = 0
          window.localStorage.setItem("client", JSON.stringify(
            [{
              id: 0,
              name:form.value.name,
              email:form.value.email,
              phone:form.value.phone,
              cedula:form.value.cedula
            }]))
        }
        
    }
    let dataClient = window.localStorage.getItem("client")
    
    if(!dataClient){
          this.client = null
    }else{
          this.client=[...JSON.parse(dataClient)]
    }

    console.log(idPersona)
    if(!this.list){
      window.localStorage.setItem("citas", JSON.stringify(
        [{
          id: 0,
          idPersona: idPersona,
          hora: form.value.time,
          sede:form.value.sede,
        }]))
    }else{
      window.localStorage.setItem("citas", JSON.stringify(
        [{
          id: this.list.length,
          idPersona: idPersona,
          sede:form.value.sede,
          hora: form.value.time
          
        }, ...this.list]
      ))
    }
    let data = window.localStorage.getItem("citas")
    if(!data){
      this.list = null
    }else{
      this.list = [...JSON.parse(data)]
    }
    this.list = this.updateList()
  }
  

}
