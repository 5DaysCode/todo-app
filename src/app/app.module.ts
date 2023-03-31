import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoListComponent } from './modules/todo/components/todo-list/todo-list.component';
import { TodoItemComponent } from './modules/todo/components/todo-item/todo-item.component';
import { TodoInputComponent } from './modules/todo/components/todo-input/todo-input.component';
import { FormsModule } from '@angular/forms';
import { ToDoService } from './modules/todo/services/todo-service';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoInputComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [ToDoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
