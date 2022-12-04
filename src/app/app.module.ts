import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormularioComponent } from './routes/formulario/formulario.component';
import { BotaoComponent } from './components/botao/botao.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './routes/cards/cards.component';
import { CadastroComponent } from './routes/cadastro/cadastro.component';
import { BuscaComponent } from './routes/busca/busca.component';
import { BarraBuscaComponent } from './components/barra-busca/barra-busca.component';

const routes: Routes = [
  { path: '', redirectTo: '/form', pathMatch: 'full' },
  { path: 'form', component: FormularioComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'busca', component: BuscaComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    BotaoComponent,
    NavbarComponent,
    CardComponent,
    CardsComponent,
    CadastroComponent,
    BuscaComponent,
    BarraBuscaComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes), FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
