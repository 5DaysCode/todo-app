import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../../services/todo-service';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss'],
})
export class TodoInputComponent implements OnInit {
  title: string = '';
  constructor(private todoService: ToDoService) {}

  ngOnInit(): void {}

  addTodo() {
    if (this.title.trim()) {
      this.todoService.addTodo(this.title);
      this.title = '';
    }
  }
}
