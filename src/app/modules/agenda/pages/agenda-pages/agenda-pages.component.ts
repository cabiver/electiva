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
    let data = window.localStorage.getItem("citas")
    if(!data){
      this.list = null
    }else{
      this.list = [...JSON.parse(data)]
    }


    let dataClient = window.localStorage.getItem("client")
    
    if(!dataClient){
      this.client = null
    }else{
      this.client=[...JSON.parse(dataClient)]
    }
   }

  ngOnInit(): void {
  }
  submit(): void {
    let form = this.myform
    console.log(form.valid)
    if(!form.valid){
      return
    }
    let exist = false
    if(this.client){
      this.client.forEach(element => {
        if(element.cedula == form.value.cedula){
          exist = true
        }
      })
    }
    
    console.log(this.client?.length)

    if(!exist){
        if(!this.client){
          
          window.localStorage.setItem("client", JSON.stringify(
            [{
              id: 0,
              name:form.value.name,
              email:form.value.email,
              phone:form.value.phone,
              cedula:form.value.cedula
            }]))
        }else{
          window.localStorage.setItem("client", JSON.stringify(
            [{
              id: this.client.length,
              name:form.value.name,
              email:form.value.email,
              phone:form.value.phone,
              cedula:form.value.cedula
            },...this.client]))
        }  
        let dataClient = window.localStorage.getItem("client")
    
        if(!dataClient){
          this.client = null
        }else{
          this.client=[...JSON.parse(dataClient)]
        }
    }
    


    if(!this.list){
      window.localStorage.setItem("citas", JSON.stringify(
        [{
          id: 0,
          name:form.value.name,
          hora: form.value.time,
          sede:form.value.sede,
        }]))
    }else{
      window.localStorage.setItem("citas", JSON.stringify(
        [{
          id: this.list.length,
          name:form.value.name,
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
  }

}
