import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { PageTwoComponent } from './page-two/page-two.component';




const routes:Route[]=[
 {path:'',component:PageTwoComponent}
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
export class PageTwoRoutingModule{

}
