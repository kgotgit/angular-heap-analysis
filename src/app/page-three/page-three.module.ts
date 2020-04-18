import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageThreeComponent } from './page-three/page-three.component';
import { PageThreeRoutingModule } from './page-three.routing.module';



@NgModule({
  declarations: [PageThreeComponent],
  imports: [
    CommonModule,
    PageThreeRoutingModule
  ]
})
export class PageThreeModule { }
