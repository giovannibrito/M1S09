import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() nome: string = '';
  @Input() nomeAtor: string = '';
  @Input() descricao: string = '';
  @Input() linkImagem: string = '';
}
