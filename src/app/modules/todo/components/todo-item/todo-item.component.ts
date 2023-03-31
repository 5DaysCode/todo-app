import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { ToDo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: ToDo;
  @Output() toggle = new EventEmitter<ToDo>();
  @Output() remove = new EventEmitter<ToDo>();

  constructor() {}

  ngOnInit(): void {}

  onToggle() {
    this.toggle.emit(this.todo);
  }

  onRemove() {
    this.remove.emit(this.todo);
  }
}
