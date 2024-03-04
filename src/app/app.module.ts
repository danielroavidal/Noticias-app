import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent} from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { NoticiaService } from './noticias/noticia.service';
import { RouterModule, Routes} from '@angular/router';
import { HttpNewsModule } from '@angular/common/http';
import { FormComponent } from './noticias/form.component';
import { FormsModule } from '@angular/forms'
import { Noticias } from './noticias/noticia';

const routes: Routes = [
  {path: '', redirectTo: '/noticias', pathMatch: 'full'},
  {path: 'directivas', component: DirectivaComponent},
  {path: 'noticias', component: NoticiasComponent},
  {path: 'noticias/form', component: FormComponent},
  {path: 'noticias/form/:id', component: FormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    NoticiasComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
