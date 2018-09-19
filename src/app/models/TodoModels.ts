import { TodoModel } from 'app/models/TodoModel';

export interface TodoModels {
  todos: TodoModel[];
  focusItem: string;
  title: string;
}
