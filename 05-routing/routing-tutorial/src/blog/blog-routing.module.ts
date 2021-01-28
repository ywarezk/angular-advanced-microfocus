/**

Define routing logic that the blog module is adding

 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ArticleComponent } from './article.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // Route[]
    // Route => { path: '', component: ''}
    RouterModule.forChild([
      {
        path: ':category/:title',
        component: ArticleComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: [],
})
export class BlogRoutingModule {}
