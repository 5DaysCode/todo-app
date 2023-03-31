import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoListComponent } from './modules/todo/components/todo-list/todo-list.component';
import { TodoItemComponent } from './modules/todo/components/todo-item/todo-item.component';
import { TodoInputComponent } from './modules/todo/components/todo-input/todo-input.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoInputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
