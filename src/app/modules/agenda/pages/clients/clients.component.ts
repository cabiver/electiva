import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients:Array<any> | null

  constructor() {
    let data= window.localStorage.getItem('client')
    if(data){
      this.clients=JSON.parse(data)
    }else{
      this.clients=null
    }

  }

  ngOnInit(): void {
  }
  edit(id: any): void {
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
  submit(id: any): void {
    // console.log(id)
   let name = document.getElementById(`name${id}`) as HTMLInputElement
   let cedula = document.getElementById(`cedula${id}`) as HTMLInputElement
   let email = document.getElementById(`email${id}`) as HTMLInputElement
  
   let data:null | string = window.localStorage.getItem('client')
    if(!data || !this.clients){
      return
    }     
    
   let indexArray : null | number =null
   this.clients.forEach((element: any, indece: any) => {
     if(element.id == id){
       indexArray=indece
     }
   });

   console.log(indexArray)
   if(indexArray == null){
    return
   }
   this.clients[indexArray].name = name?.value
   this.clients[indexArray].cedula = cedula?.value
   this.clients[indexArray].email = email?.value
   window.localStorage.setItem('client', JSON.stringify(this.clients))

   let trs= document.querySelectorAll(`.show${id}`)

   trs.forEach((element:any) => {
     element.style.display = ""
   });
   let trsEdit= document.querySelectorAll(`.edit${id}`)

   trsEdit.forEach((element:any) => {
     element.style.display = "none"
   });

  }
}
