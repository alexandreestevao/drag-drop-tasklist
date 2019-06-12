import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../Model/todo';

@Injectable({
  providedIn: 'root'
})
export class TaskManagerService {

  link = 'http://localhost:8080/api/tarefa';

  constructor(private http: HttpClient) { }

  getTarefaList(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.link);
  }

  update(todo: Todo) {
    return this.http.put(this.link, todo);
  }

  filter(tab, property) {
    return tab.filter(
      (todo) => {
        return todo.status === property;
      }
    );
  }

  add(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.link, todo);
  }

  delete(id: number): Observable<Todo> {
    return this.http.delete(this.link/{id});
  }

}
