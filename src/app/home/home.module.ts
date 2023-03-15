import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CardComponent } from './card/card.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { ThreadbuildComponent } from './threadbuild/threadbuild.component';
import { MethodComponent } from './method/method.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    HomeComponent,
    CardComponent,
    ThreadbuildComponent,
    MethodComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    YouTubePlayerModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
