import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { AccountComponent } from './account.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminLayoutComponent } from './admin-layout.component';

@NgModule({
  declarations: [
    UserComponent,
    AccountComponent,
    AdminLayoutComponent
  ],
  imports: [
    CommonModule,
    // RouterModule
    // AdminRoutingModule
    AdminRoutingModule

  ],
  exports: [],
  providers: [],
})
export class AdminModule {}
