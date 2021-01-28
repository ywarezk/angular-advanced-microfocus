import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { UserComponent } from './user.component';
import { AccountComponent } from './account.component';
import { AdminLayoutComponent } from './admin-layout.component';
import { IsAdminService } from './routing-guards/is-admin.guard';
import { FinishFormService } from './routing-guards/fnish-form.guard';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      // admin
      { path: '', redirectTo: 'user', pathMatch: 'full' },
      // admin/user
      {
        path: '',
        component: AdminLayoutComponent,
        // canActivateChild: [IsAdminService],
        children: [
          {
            path: 'user',
            component: UserComponent ,
            canDeactivate: [FinishFormService]
          },
          { path: 'accounts', component: AccountComponent }
        ]
      },

    ])
  ],
  exports: [
    RouterModule
  ],
  providers: [],
})
export class AdminRoutingModule {}
