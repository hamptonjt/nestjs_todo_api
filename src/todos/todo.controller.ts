import { Controller, Get, Post, Body, Param, Patch, Put, Delete } from '@nestjs/common';

import Todo from './todo.model';
import { TodoService } from './todo.service';

@Controller('todos')
export class TodoController {
    constructor(private todoService: TodoService) {}

    @Get()
    getTodoList(): Todo[] {
        return this.todoService.fetchAllTodos();
    }

    @Get(':id')
    getTodo(@Param('id') id: string): Todo {
        const todo = this.todoService.fetchTodo(parseInt(id, 10));
        return todo;
    }

    @Post()
    createTodo(@Body() todo: Todo): number {
        return this.todoService.createNewTodo(todo);
    // createTodo(@Body('name') name: string, @Body('completed') completed: boolean): number {
    //     return this.todoService.createNewTodo(name, completed);
    }

    @Put()
    @Patch()
    // updateTodo(@Body('id') id: number, ; @Body('name') name: string, ; @Body('completed') completed: boolean; ): Todo; {
    //         return this.todoService.updateTodo(id, name, completed);
    updateTodo(@Body() todo: Todo): Todo {
        return this.todoService.updateTodo(todo);
    }

    @Delete(':id')
    deleteTodo(@Param('id') id: string): string {
        return this.todoService.deleteTodo(parseInt(id, 10));
    }
}
