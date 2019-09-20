import {
  Controller,
  Body,
  Get,
  Post,
  Put,
  Param,
  Delete,
} from '@nestjs/common';

import { TodoService } from './todo.service';
import { Todo } from './interfaces/todo.interface';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get('/')
  async getTodos(): Promise<Todo[]> {
    return await this.todoService.getTodos();
  }

  @Post('/')
  async addTodo(@Body() todo: Todo): Promise<Todo> {
    return await this.todoService.addTodo(todo);
  }

  @Put('/:index')
  async updateTodo(
    @Param('index') index: number,
    @Body() todo: Todo,
  ): Promise<void> {
    await this.todoService.updateTodo(index, todo);
  }

  @Delete('/:index')
  async deleteTodo(@Param('index') index: number): Promise<void> {
    await this.todoService.deleteTodo(index);
  }
}
