import { Component, Input, OnInit } from '@angular/core';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { TaskService } from '../../../../services/task/task.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import CreateTaskDto from '../../../../Dtos/taskDtos/createTaskDto';
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerToggle,
} from '@angular/material/datepicker';
import { MatCard, MatCardContent, MatCardFooter } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import UpdateTaskDto from '../../../../Dtos/taskDtos/updateTaskDto';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatDatepicker,
    MatDatepickerInput,
    MatDatepickerToggle,
    ReactiveFormsModule,
    MatCardFooter,
    MatButton,
    MatNativeDateModule,
    MatCard,
    MatCardContent,
  ],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css',
})
export class TaskFormComponent implements OnInit {
  @Input() taskId: number = 0;
  task: any;
  submitButtonName: string = 'Create Task';
  constructor(
    private taskService: TaskService,
    private fb: FormBuilder,
    private router: Router,
  ) {}

  ngOnInit(): void {
    console.log('task id is', this.taskId);
    if (this.taskId != 0) {
      this.taskService.getTaskById(this.taskId).subscribe((task) => {
        this.task = task;
        console.log('update task', this.task);
        this.submitButtonName = 'Update Task';
        this.taskForm.setValue({
          title: task.title,
          description: task.description,
          dueDate: task.dueDate,
        });
      });
    }
  }
  taskForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    dueDate: [new Date(), Validators.required],
  });

  onSubmit() {
    //
    const id = this.taskId;
    const title = <string>this.taskForm.value.title;
    const description = <string>this.taskForm.value.description;

    const dueDate = <Date>this.taskForm.value.dueDate;

    const createTaskDto = new CreateTaskDto(title, description, dueDate);
    const updateTaskDto = new UpdateTaskDto(id, title, description, dueDate);
    if (this.taskId == 0) {
      this.taskService.createTask(createTaskDto).subscribe(
        () => {
          console.log('Task created success');
          this.router.navigate(['/']).then((r) => {});
        },
        (e) => {
          console.log(`Some error happen when creating task ${e}`);
        },
      );
    } else {
      this.taskService.updateTask(this.taskId, updateTaskDto).subscribe(
        () => {
          console.log('Task update success');
          this.router.navigate(['/']).then((r) => {});
        },
        (e) => {
          console.log('some error happen while updating task');
        },
      );
    }
  }
}
