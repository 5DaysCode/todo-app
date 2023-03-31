import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ToDo } from '../models/todo.model';

export class ToDoService {
  private _todos: BehaviorSubject<ToDo[]> = new BehaviorSubject<ToDo[]>([]);

  constructor() {}

  get todos() {
    return this._todos.asObservable();
  }

  addTodo(title: string) {
    const newTodo = new ToDo(Date.now(), title);
    const todos = this._todos.getValue();
    todos.push(newTodo);
  }

  toggleTodo(todo: ToDo) {
    const todos = this._todos.getValue();
    const index = todos.findIndex((t) => t.id === todo.id);
    todos[index].completed = !todos[index].completed;
    this._todos.next(todos);
  }

  removeTodo(todo: ToDo) {
    const todos = this._todos.getValue();
    const index = todos.findIndex((t) => t.id === todo.id);
    todos.splice(index, 1);
    this._todos.next(todos);
  }
}
