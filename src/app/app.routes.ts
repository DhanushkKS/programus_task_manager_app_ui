import { Routes } from '@angular/router';
import { NewTaskComponent } from './pages/components/new-task/new-task.component';
import { TaskListComponent } from './pages/components/task-list/task-list.component';
import { UpdateTaskComponent } from './pages/components/update-task/update-task.component';
import { TaskDetailComponent } from './pages/components/task-detail/task-detail.component';

export const routes: Routes = [
  //
  { path: '', component: TaskListComponent },
  { path: 'task/:id', component: TaskDetailComponent },
  { path: 'create', component: NewTaskComponent, title: 'New Task' },
  {
    path: 'update/:id',
    component: UpdateTaskComponent,
    title: 'Update Task',
  },
];
