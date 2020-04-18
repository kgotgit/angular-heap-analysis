import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { PageOneComponent } from './page-one.componen';




const routes:Route[]=[
{path:'', component:PageOneComponent}
];

@NgModule({
    declarations:[],
    imports:[
      RouterModule.forChild(routes),
    ],
    exports:[
      RouterModule
    ],

})
export class PageOneRoutingModule{

}
