import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HttpClientModule }    from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CounterComponent } from './counter/counter.component';
import { LayoutComponent } from './layout/layout.component';
import { TodoComponent } from './todo/todo.comoponent';

const routes: Routes=[
  {
    path:'',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: CounterComponent
      }
    ]
  },
  {
    path:'todo', 
    component: LayoutComponent,
    children:[
      {
        path:'',  //  http://domain/todo/list
        component: TodoComponent  

      }
    ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    CounterComponent,
    LayoutComponent,
    TodoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
