import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Todo } from '../Model/todo';
import { TaskManagerService } from './task-manager.service';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {

  todos: Todo[] = [];
  doing: Todo[] = [];
  done: Todo[] = [];
  title = '';
  description = '';
  show = false;
  displayValue = 'none';
  constructor(private taskManagerService: TaskManagerService) { }

  ngOnInit() {

    this.taskManagerService.getTarefaList().subscribe(
      (todos) => {
        this.todos = this.taskManagerService.filter(todos, 'TODO');
        this.doing = this.taskManagerService.filter(todos, 'DOING');
        this.done = this.taskManagerService.filter(todos, 'DONE');
      }
    );

  }

  drop(event: CdkDragDrop<string[]>) {
    console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
      const todo = event.item.data;
      todo.status = event.container.element.nativeElement.classList[0].toUpperCase();
      console.log(todo.status);
      this.taskManagerService.update(todo).subscribe(
          (response) => {
          console.log(response);
        }
      );
    }
  }

  add() {
    const todo = new Todo(this.title, this.description, 'TODO');
    this.taskManagerService.add(todo).subscribe(
        (response) => {
        this.ngOnInit();
      }
    );
  }

  delete() {
    const id = this.id;
    this.taskManagerService.delete(id).subscribe(
        (response) => {
        this.ngOnInit();
      }
    );
  }

  display() {
    this.show = ! this.show;
    this.displayValue = 'block';
  }
  hide() {
    this.displayValue = 'none';
    this.show = ! this.show;
    this.title = '';
    this.description = '';
  }

}
