export class ToDo {
  id: number;
  title: string;
  completed: boolean;

  constructor(id: number, title: string, completed: boolean = false) {
    this.id = id;
    this.title = title;
    this.completed = completed;
  }

  static fromJSON(json: any): ToDo {
    const todo = new ToDo(json.id, json.title, json.completed);
    return todo;
  }
}
