import { Component, OnInit } from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableModule,
} from '@angular/material/table';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { TaskService } from '../../../../services/task/task.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, AsyncPipe],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent implements OnInit {
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    //
    this.taskService.getAllTasks().subscribe((taskList: any) => {
      this.taskList = taskList;
      console.log('tasklist is', taskList[0]);
    });
  }
  taskList: any[] = [];
  displayedColumns = ['id', 'title', 'dueDate', 'action'];
}
