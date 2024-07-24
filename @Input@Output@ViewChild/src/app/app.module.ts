import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { ViewchildComponent } from './viewchild/viewchild.component';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule],
  declarations: [AppComponent, ChildComponent, ViewchildComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
