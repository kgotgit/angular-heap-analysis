import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { PageFourComponent } from './page-four/page-four.component';




const routes:Route[]=[
 {path:'',component:PageFourComponent}
]

@NgModule({
    declarations:[],
    imports:[
      RouterModule.forChild(routes),
    ],
    exports:[
      RouterModule
    ],

})
export class PageFourRoutingModule{

}
