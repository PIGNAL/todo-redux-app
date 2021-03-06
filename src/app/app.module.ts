import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TodoModule } from './todos/todo.module';
import { StoreModule } from '@ngrx/store';
import { FooterComponent } from './footer/footer.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment'; // Angular CLI environment
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { appReducers } from './app.reducer';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    ReactiveFormsModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue : '/' }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
