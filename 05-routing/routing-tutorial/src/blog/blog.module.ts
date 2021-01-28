import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article.component';
import { BlogRoutingModule } from './blog-routing.module';

@NgModule({
  declarations: [
    ArticleComponent
  ],
  imports: [ CommonModule, BlogRoutingModule ],
  exports: [],
  providers: [],
})
export class BlogModule {}
