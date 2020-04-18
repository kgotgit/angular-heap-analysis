import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageFourComponent } from './page-four/page-four.component';
import { PageFourRoutingModule } from './page-four.routing.module';



@NgModule({
  declarations: [PageFourComponent],
  imports: [
    CommonModule,
    PageFourRoutingModule
  ]
})
export class PageFourModule { }
