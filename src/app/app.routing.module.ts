import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';




const routes:Route[]=[
  {path:'pages/page-one', loadChildren:()=>import('./page-one/page-one.module').then(m=>m.PageOneModule)},
  {path:'pages/page-two', loadChildren:()=>import('./page-two/page-two.module').then(m=>m.PageTwoModule)},
  {path:'pages/page-three', loadChildren:()=>import('./page-three/page-three.module').then(m=>m.PageThreeModule)},
  {path:'pages/page-four', loadChildren:()=>import('./page-four/page-four.module').then(m=>m.PageFourModule)},
  {path:'', redirectTo:'pages/page-one',pathMatch:'full'},
 /*  {path:"**",redirectTo:'page-one'} */


]

@NgModule({
    declarations:[],
    imports:[
      RouterModule.forRoot(routes),
    ],
    exports:[
      RouterModule
    ],

})
export class AppRoutingModule{

}
