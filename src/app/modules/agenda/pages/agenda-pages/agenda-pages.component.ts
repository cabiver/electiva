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

  edit(id: any): void{
    console.log(id)
    
    let trs= document.querySelectorAll(`.show${id}`)

    // console.log(trs[0])
    trs.forEach((element:any) => {
      element.style.display = "none"
    });
    let trsEdit= document.querySelectorAll(`.edit${id}`)

    // console.log(trsEdit[0])
    trsEdit.forEach((element:any) => {
      element.style.display = ""
    });
  }
  delete(id: any): void{
    let newCitas: any[] = []
    this.list?.forEach(element=>{
      if(element.id != id){
        newCitas = [element, ...newCitas]
      }
    })
    
    window.localStorage.setItem('citas', JSON.stringify(newCitas))
    
    this.list = this.updateList()
  }
  change(id: any): void{



    let sede = document.getElementById(`sede${id}`) as HTMLInputElement
   let hora = document.getElementById(`hora${id}`) as HTMLInputElement
   
    if(!this.list){
      return
    }     
    
   let indexArray : null | number =null
   this.list.forEach((element: any, indece: any) => {
     if(element.id == id){
       indexArray=indece
     }
   });

   if(indexArray == null){
    return
   }
   
   this.list[indexArray].sede = sede?.value
   this.list[indexArray].hora = hora?.value
   console.log(this.list)
   window.localStorage.setItem('citas', JSON.stringify(this.list))

   let trs= document.querySelectorAll(`.show${id}`)

   trs.forEach((element:any) => {
     element.style.display = ""
   });
   let trsEdit= document.querySelectorAll(`.edit${id}`)

   trsEdit.forEach((element:any) => {
     element.style.display = "none"
   });

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
    
    
    
    let idPersona: number | null = null
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
          this.client.forEach(element => {
            if(element.id == idPersona){
              console.log()
              if(idPersona){
                idPersona = idPersona +1
              }
              
            }
          })
          

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

    

    if(!this.list){
      window.localStorage.setItem("citas", JSON.stringify(
        [{
          id: 0,
          idPersona: idPersona,
          hora: form.value.time,
          sede:form.value.sede,
        }]))
    }else{
      let idlist = this.list.length
      this.list.forEach(element => {
        if(element.id == idlist){
          if(idlist){
            idlist = idlist +1
          }
        }
      })
      window.localStorage.setItem("citas", JSON.stringify(
        [{
          id: idlist,
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
