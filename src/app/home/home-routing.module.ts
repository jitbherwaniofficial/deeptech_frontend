import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { MethodComponent } from './method/method.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ThreadbuildComponent } from './threadbuild/threadbuild.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,

    children:[
      {
        path:'threadbuild',
        component:ThreadbuildComponent
      },
      {
        path: 'method',
        component: MethodComponent
      },
      {
        path: 'sidebar',
        component: SidebarComponent
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
