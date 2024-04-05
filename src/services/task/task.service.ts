import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environment';
import { TASK } from '../../paths/paths';
import { Observable } from 'rxjs';
import CreateTaskDto from '../../Dtos/taskDtos/createTaskDto';
import UpdateTaskDto from '../../Dtos/taskDtos/updateTaskDto';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}
  private url = `${environment.BASE_URL}/${TASK}`;

  //get task list
  private fetchTaskListService(): Observable<any> {
    return this.http.get(this.url);
  }
  //get by id
  private fetchTaskService(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }
  //create task
  private createTaskService(dto: CreateTaskDto): Observable<any> {
    return this.http.post(this.url, {
      task: {
        title: dto.title,
        description: dto.description,
        dueDate: dto.dueDate,
      },
    });
  }
  //update
  private updateTaskService(id: number, dto: UpdateTaskDto): Observable<any> {
    return this.http.put(`${this.url}/${id}`, {
      task: {
        id: dto.id,
        title: dto.title,
        description: dto.description,
        dueDate: dto.dueDate,
      },
    });
  }
  //delete
  private deleteTaskService(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`); //body to be implemented
  }

  public getAllTasks(): Observable<any> {
    return this.fetchTaskListService();
  }
  public getTaskById(id: number): Observable<any> {
    return this.fetchTaskService(id);
  }
  public createTask(dto: CreateTaskDto): Observable<any> {
    return this.createTaskService(dto);
  }
  public updateTask(id: number, dto: UpdateTaskDto): Observable<any> {
    return this.updateTaskService(id, dto);
  }
  public deleteTask(id: number): Observable<any> {
    return this.deleteTaskService(id);
  }
}
