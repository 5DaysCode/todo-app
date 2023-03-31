import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDo } from '../../models/todo.model';
import { ToDoService } from '../../services/todo-service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todos$: Observable<ToDo[]>;

  constructor(private todoService: ToDoService) {
    this.todos$ = this.todoService.todos;
  }

  toggle(todo: ToDo) {
    this.todoService.toggleTodo(todo);
  }

  remove(todo: ToDo) {
    this.todoService.removeTodo(todo);
  }

  ngOnInit(): void {}
}
