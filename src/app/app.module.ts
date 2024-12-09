import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Importando o AppRoutingModule
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RodapeComponent } from './rodape/rodape.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PerfilComponent,
    RodapeComponent,
  
],
  imports: [
    BrowserModule,
    AppRoutingModule // Importando o AppRoutingModule para que as rotas funcionem
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
