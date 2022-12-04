import { Component } from '@angular/core';
import { LocalStorageService } from 'src/app/local-storage.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent {
  constructor(public localService: LocalStorageService) {}
}
