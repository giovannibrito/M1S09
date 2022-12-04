import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  contas: any[] = [];

  constructor() {}

  send(email: string, senha: string) {
    if (email && senha) {
      const conta = { email, senha };
      this.contas.push(conta);
      localStorage.setItem('contas', JSON.stringify(this.contas));
    }
  }

  retrieve() {
    const salvo = localStorage.getItem('contas');
    if (salvo) {
      console.log(JSON.parse(salvo));
    }
  }
}
