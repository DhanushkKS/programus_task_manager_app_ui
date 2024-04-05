import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { TaskService } from '../../../../services/task/task.service';
import { AsyncPipe } from '@angular/common';
import { NavigationExtras, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, AsyncPipe, RouterLink],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent implements OnInit {
  constructor(
    private taskService: TaskService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    //
    this.taskService.getAllTasks().subscribe((taskList: any) => {
      this.taskList = taskList;
    });
  }
  taskList: any[] = [];
  displayedColumns = ['id', 'title', 'description', 'dueDate', 'action'];

  deleteTask(id: number) {
    // console.log('task id is,', id);
    this.taskService.deleteTask(id).subscribe(
      () => {
        // this.router.navigate([`/`]).then((result) => {
        //   console.log(result);
        // });
        window.location.reload();
        console.log(`Task ${id} delete success`);
      },
      (error) => {
        console.log(`Some error happen ${error}`);
      },
    );
  }

  updateTask(task: any) {
    this.router.navigate([`/update/${task.id}`]).then((result) => {});
  }
}
