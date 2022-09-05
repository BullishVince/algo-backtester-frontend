import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    MainComponent,
    AboutComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainComponent,
    AboutComponent
  ]
})
export class MainModule { }
