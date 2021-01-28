import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TodoListComponent } from './todo-list.component';
import { FetchTasksService } from './fetch-tasks.service';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      {
        path: 'list',
        component: TodoListComponent,
        resolve: {
          tasks: FetchTasksService
        }
      }
    ])

  ],
  exports: [],
  providers: [],
})
export class TodoRoutingModule {}
