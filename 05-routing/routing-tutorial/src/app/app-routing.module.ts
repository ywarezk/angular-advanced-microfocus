import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page.component';
import { AboutPageComponent } from './about-page.component';
// import { BlogModule } from 'src/blog/blog.module';

@NgModule({
  declarations: [],
  imports: [
    // Router
    RouterModule.forRoot([
      { path: '', component: HomePageComponent },
      { path: 'about', component: AboutPageComponent },
      {
        path: 'blog',
        loadChildren: async () => {
          // { BlogModule: class BlogModule  }
          const moduleFile = await import('../blog/blog.module');
          return moduleFile.BlogModule;
        }
      },

      {
        path: 'admin',
        loadChildren: async () => {
          // { BlogModule: class BlogModule  }
          const moduleFile = await import('../admin/admin.module');
          return moduleFile.AdminModule;
        }
      }
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: [],
})
export class AppRoutingModule {}
