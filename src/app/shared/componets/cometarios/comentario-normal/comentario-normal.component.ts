import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comentario-normal',
  templateUrl: './comentario-normal.component.html',
  styleUrls: ['./comentario-normal.component.css']
})
export class ComentarioNormalComponent implements OnInit {
  @Input() coment: String ="";
  @Input() fecha: String ="";
  @Input() name: String ="";
  @Input() id: String | number ="";
  @Input() image: String="assets/Img/comentario3.gif";
  constructor() {

  }

  ngOnInit(): void {
  }
  edit(): void {
      let input=document.getElementById(`edit${this.id}`)
      if(!input){
        return
      }
      input.style.display=""
      let parrafo=document.getElementById(`show${this.id}`)
      if(!parrafo){
        return
      }
      parrafo.style.display="none"
      let butonUpdate=document.getElementById(`update${this.id}`)

      if(!butonUpdate){
        return
      }
      butonUpdate.style.display=""


      let butonEditor=document.getElementById(`editador${this.id}`)

      if(!butonEditor){
        return
      }
      butonEditor.style.display="none"
      
      let butonDelete=document.getElementById(`delete${this.id}`)

      if(!butonDelete){
        return
      }
      butonDelete.style.display="none"
      
  }
  update(): void{
    
    let input = document.getElementById(`edit${this.id}`) as HTMLInputElement
    if(!input){
      return
    }
    let data = window.localStorage.getItem("comentarios")
    if(!data){
      return
    }
    let arrayComnets = JSON.parse(data)
    let newArray: any[]= []
    arrayComnets.forEach((element:any) => {
      if(element.id != this.id){
        newArray = [element, ...newArray]
      }else{
        newArray = [{
          comentario: input.value,
          email: element.email,
          fecha: element.fecha,
          id: element.id,
          name: element.name
        }, ...newArray]
      }
    });

    this.coment= input.value
    window.localStorage.setItem('comentarios', JSON.stringify(newArray))
  
    input.style.display="none"
    let parrafo=document.getElementById(`show${this.id}`)
    if(!parrafo){
      return
    }
    parrafo.style.display=""
    let butonUpdate=document.getElementById(`update${this.id}`)

    if(!butonUpdate){
      return
    }
    butonUpdate.style.display="none"


    let butonEditor=document.getElementById(`editador${this.id}`)

    if(!butonEditor){
      return
    }
    butonEditor.style.display=""
    
    let butonDelete=document.getElementById(`delete${this.id}`)

    if(!butonDelete){
      return
    }
    butonDelete.style.display=""
  }
  delete(): void{
    let data = window.localStorage.getItem("comentarios")
    if(!data){
      return
    }
    let arrayComnets = JSON.parse(data)
    let newArray: any[]= []
    arrayComnets.forEach((element:any) => {
      if(element.id != this.id){
        newArray = [element, ...newArray]
      }
    });
    window.localStorage.setItem('comentarios', JSON.stringify(newArray))
    window.location.reload()
  }
}
