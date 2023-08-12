import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LazyimagenComponent } from './components/lazyimagen/lazyimagen.component';



@NgModule({
  declarations: [
    SidebarComponent,
    LazyimagenComponent
  ],
  imports: [
    CommonModule
  ],
  exports :[
    SidebarComponent,
    LazyimagenComponent
  ]
})
export class SharedModule { }
