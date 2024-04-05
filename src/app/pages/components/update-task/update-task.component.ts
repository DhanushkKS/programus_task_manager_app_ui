import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskFormComponent } from '../task-form/task-form.component';

@Component({
  selector: 'app-update-task',
  standalone: true,
  imports: [TaskFormComponent],
  templateUrl: './update-task.component.html',
  styleUrl: './update-task.component.css',
})
export class UpdateTaskComponent implements OnInit {
  taskId: number = 0;
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.taskId = Number.parseInt(<string>params.get('id'));
      console.log(this.taskId);
    });
  }
}
