import { NgModule } from '@angular/core';

import { SidenavComponent } from './sidenav/sidenav.component';
import { ButtonComponent } from './button/button.component';
import { CommonModule } from '@angular/common'



@NgModule({
  declarations: [SidenavComponent, ButtonComponent, ],
  imports: [
    CommonModule
  ],
  exports: [SidenavComponent, ButtonComponent, ]
})
export class CvLibraryModule { }
