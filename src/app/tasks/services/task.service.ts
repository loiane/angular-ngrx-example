import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Task } from './../model/task';

@Injectable()
export class TaskService {
  private readonly API_TASKS_URL = `http://localhost:3001/tasks`;

  constructor(private http: HttpClient) {}

  load() {
    return this.http.get<Task[]>(this.API_TASKS_URL);
  }

  create(record: Task) {
    return this.http.post<Task>(this.API_TASKS_URL, record);
  }

  update(record: Task) {
    return this.http.put<Task>(`${this.API_TASKS_URL}/${record.id}`, record);
  }

  remove(id: string) {
    return this.http.delete<Task>(`${this.API_TASKS_URL}/${id}`);
  }
}
