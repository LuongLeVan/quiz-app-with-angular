import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';



import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { QuizComponent } from './component/quiz/quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
