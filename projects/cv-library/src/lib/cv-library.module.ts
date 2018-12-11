import { NgModule } from '@angular/core';

import { SidenavComponent } from './sidenav/sidenav.component';
import { ButtonComponent } from './button/button.component';


@NgModule({
  declarations: [SidenavComponent, ButtonComponent, ],
  imports: [
  ],
  exports: [SidenavComponent, ButtonComponent, ]
})
export class CvLibraryModule { }
