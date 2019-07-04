import { Controller, Get, Post, Body, Param } from "@nestjs/common";

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
        console.log(id)
        let todo = this.todoService.fetchTodo(parseInt(id))
        return todo; 
    }


    @Post()
    createTodo(@Body('name') name: string, @Body('completed') completed: boolean) {
        return this.todoService.createNewTodo(name, completed);
    }
}