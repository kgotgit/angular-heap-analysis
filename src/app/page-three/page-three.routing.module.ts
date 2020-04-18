import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { PageThreeComponent } from './page-three/page-three.component';




const routes:Route[]=[
 {path:'',component:PageThreeComponent}
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
export class PageThreeRoutingModule{

}
