import { Injectable } from '@nestjs/common';
import { Todo } from './interfaces/todo.interface';

@Injectable()
export class TodoService {
  private todos: Todo[] = [];

  async addTodo(todo: Todo): Promise<Todo> {
    await this.todos.push(todo);
    return todo;
  }

  async getTodos(): Promise<Todo[]> {
    return this.todos;
  }

  async deleteTodo(index: number): Promise<void> {
    await this.todos.splice(index, 1);
  }

  async updateTodo(index: number, todo: Todo): Promise<void> {
    this.todos[index] = todo;
  }
}
