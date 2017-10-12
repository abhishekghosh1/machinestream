import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomePage } from './home/homepage.component';
import { MachineModule } from './machines/machine.module';

@NgModule({
  declarations: [
    AppComponent,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
        { path: 'home', component: HomePage },
        { path: '', redirectTo: 'home', pathMatch: 'full'},
        { path: '**', redirectTo: 'home', pathMatch: 'full'}
    ]),
    MachineModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
