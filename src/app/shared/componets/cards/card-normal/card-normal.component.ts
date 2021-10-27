import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-normal',
  templateUrl: './card-normal.component.html',
  styleUrls: ['./card-normal.component.css']
})
export class CardNormalComponent implements OnInit {
  @Input() resumen:String=""
  @Input() titulo:String=""
  @Input() tiempo:String=""
  @Input() img:String=""
  constructor() { }

  ngOnInit(): void {
  }

}
