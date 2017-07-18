import { Task } from './../model/task';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TaskService {
  readonly API_BASE_URL = 'http://localhost:3001';
  readonly API_TASKS_URL = `${this.API_BASE_URL}/tasks`;

  constructor(private http: HttpClient) {}

  load(): Observable<Task[]> {
    return this.http
      .get(this.API_TASKS_URL) as Observable<Task[]>;
  }

  create(body: Task): Observable<Task> {
    return this.http
      .post(this.API_TASKS_URL, this.getBody(body)) as Observable<Task>;
  }

  update(body: Task): Observable<Task> {
    return this.http
      .put(`${this.API_TASKS_URL}/${body.id}`, this.getBody(body)) as Observable<Task>;
  }

  remove(taskId: string): Observable<Task> {
    return this.http
      .delete(`${this.API_TASKS_URL}/${taskId}`) as Observable<Task>;
  }

  private getBody(body: any) {
    // return JSON.stringify(body)
    return body; // node.js does not need stringify
  }
}
