import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environment';
import { TASK } from '../../paths/paths';
import { Observable } from 'rxjs';
import * as url from 'url';
import CreateTaskDto from '../../Dtos/taskDtos/createTaskDto';

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
      task: { dto },
    });
  }
  //update
  private updateTaskService(id: number): Observable<any> {
    return this.http.put(`${this.url}/${id}`, {}); //body to be implemented
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
  public updateTask(id: number): Observable<any> {
    return this.updateTaskService(id);
  }
  public deleteTask(id: number): Observable<any> {
    return this.deleteTaskService(id);
  }
}