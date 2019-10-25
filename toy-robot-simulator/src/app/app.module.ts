import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ToyRobotComponent } from './toy-robot/toy-robot.component';
import { ToyRobotService } from './toy-robot/toy-robot.service';

@NgModule({
  declarations: [
    AppComponent,
    ToyRobotComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    ToyRobotService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
