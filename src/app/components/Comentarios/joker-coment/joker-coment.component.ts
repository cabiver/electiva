import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-joker-coment',
  templateUrl: './joker-coment.component.html',
  styleUrls: ['./joker-coment.component.sass']
})
export class JokerComentComponent implements OnInit {
  @Input() coment: String ="";
  @Input() fecha: String ="";
  constructor() {}

  ngOnInit(): void {

  }

}
