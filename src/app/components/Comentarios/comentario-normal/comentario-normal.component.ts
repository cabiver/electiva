import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comentario-normal',
  templateUrl: './comentario-normal.component.html',
  styleUrls: ['./comentario-normal.component.sass']
})
export class ComentarioNormalComponent implements OnInit {
  @Input() coment: String ="";
  @Input() fecha: String ="";
  @Input() name: String ="";
  @Input() image: String="assets/Img/comentario3.gif";
  constructor() { }

  ngOnInit(): void {
  }

}
