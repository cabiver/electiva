import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-servicios',
  templateUrl: './card-servicios.component.html',
  styleUrls: ['./card-servicios.component.css']
})
export class CardServiciosComponent implements OnInit {
  @Input() img:String=""
  @Input() titulo:String=""
  @Input() description:String=""
  
  constructor() { }

  ngOnInit(): void {
  }

}
