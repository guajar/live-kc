import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import { TaskControlComponent } from './task-control/task-control.component';
import { ItemComponent } from './item/item.component';
import { TaskListComponent } from './task-list/task-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    TasksRoutingModule,
    FormsModule
  ],
  declarations: [TasksComponent, TaskControlComponent, ItemComponent, TaskListComponent]
})
export class TasksModule { }
