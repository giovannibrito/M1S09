import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-barra-busca',
  templateUrl: './barra-busca.component.html',
  styleUrls: ['./barra-busca.component.scss'],
})
export class BarraBuscaComponent {
  busca = '';
  @Output() teclaPressionada = new EventEmitter<string>();
}
