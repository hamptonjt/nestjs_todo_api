import { Controller, Get, Post, Body, Param, Patch, Put, Delete } from "@nestjs/common";

import Todo from "./todo.model";
import { TodoService } from "./todo.service";

@Controller('todos')
export class TodoController {
    constructor(private todoService: TodoService) {}

    @Get()
    getTodoList(): Todo[] {
        return this.todoService.fetchAllTodos(); 
    }

    @Get(':id')
    getTodo(@Param('id') id: string): Todo {
        let todo = this.todoService.fetchTodo(parseInt(id))
        return todo; 
    }


    @Post()
    createTodo(@Body('name') name: string, @Body('completed') completed: boolean): number {
        return this.todoService.createNewTodo(name, completed);
    }

    @Put()
    @Patch()
    updateTodo(@Body('id') id: number, @Body('name') name: string, @Body('completed') completed: boolean): Todo {
        return this.todoService.updateTodo(id, name, completed);
    }

    @Delete(':id')
    deleteTodo(@Param('id') id: string): string {
        return this.todoService.deleteTodo(parseInt(id));
    }
}