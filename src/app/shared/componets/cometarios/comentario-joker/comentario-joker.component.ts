import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comentario-joker',
  templateUrl: './comentario-joker.component.html',
  styleUrls: ['./comentario-joker.component.css']
})
export class ComentarioJokerComponent implements OnInit {
  @Input() coment: String ="";
  @Input() fecha: String ="";
  constructor() { }

  ngOnInit(): void {
  }

}
