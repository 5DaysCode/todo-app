import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ToDo } from '../models/todo.model';
import { StateManagmentService } from './state-managment.service';

@Injectable()
export class ToDoService {
  private _todos: BehaviorSubject<ToDo[]> = new BehaviorSubject<ToDo[]>([]);

  constructor(private stateManagmentService: StateManagmentService) {
    this.stateManagmentService.states$.subscribe((state) => {
      if (state) {
        this._todos.next(state);
      }
    });
  }

  get todos() {
    return this._todos.asObservable();
  }

  addTodo(title: string) {
    const newTodo = new ToDo(Date.now(), title);
    this._todos.next([...this._todos.getValue(), newTodo]);
    this.stateManagmentService.saveState(this._todos.getValue());
  }

  toggleTodo(todo: ToDo) {
    const updatedTodos = this._todos.getValue().map((t: ToDo) => {
      return t.id === todo.id ? { ...t, completed: !t.completed } : t;
    });
    this._todos.next(updatedTodos);
    this.stateManagmentService.saveState(updatedTodos);
  }

  removeTodo(todo: ToDo) {
    this._todos.next(
      this._todos.getValue().filter((t: ToDo) => t.id !== todo.id)
    );
    this.stateManagmentService.saveState(this._todos.getValue());
  }
}
