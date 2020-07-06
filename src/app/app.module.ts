import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PadreComponent } from './components/padre/padre.component';
import { MenuComponent } from './components/menu/menu.component';
import { HijoComponent } from './components/hijo/hijo.component';
import {Router, RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { PadreFormComponent } from './components/padre-form/padre-form.component';
import { HijoFormComponent } from './components/hijo-form/hijo-form.component';
import {HttpClientModule} from '@angular/common/http';

const MENU: Routes = [
  {path: 'padres', component: PadreComponent},
  {path: 'nuevoPadre', component: PadreFormComponent},
  {path: 'nuevoPadre/:id', component: PadreFormComponent},
  {path: 'hijos', component: HijoComponent},
  {path: 'nuevoHijo', component: HijoFormComponent},
  {path: 'nuevoHijo/:id', component: HijoFormComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PadreComponent,
    MenuComponent,
    HijoComponent,
    PadreFormComponent,
    HijoFormComponent
  ],
  imports: [
    HttpClientModule,
    RouterModule.forRoot(MENU),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
