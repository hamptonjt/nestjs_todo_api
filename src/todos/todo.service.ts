import { Injectable } from '@nestjs/common';
import Todo from './todo.model';

@Injectable()
export class TodoService {
    private todos: Todo[] = [];

    fetchAllTodos() {
        return this.todos;
    }

    fetchTodo(id: number): Todo {
        const todo = this.todos.find(t => {
            return t.id === id;
        });
        return todo;
    }

    // createNewTodo(name: string, completed: boolean) {
    createNewTodo(todo: Todo) {
        let maxId = 0;
        if (this.todos.length > 0) {
            // find the max id in the list of todos
            maxId = Math.max.apply(Math, this.todos.map(t => t.id));
        }
        todo.id = maxId + 1;
        todo.dateCompleted = todo.completed === true ? new Date() : null;
        this.todos.push(todo);
        return todo.id;
    }

    updateTodo(todo: Todo): Todo {
        const updatedTodo = this.todos.find(t => {
            return t.id === todo.id;
        });
        updatedTodo.name = todo.name;
        updatedTodo.completed = todo.completed;
        updatedTodo.dateCompleted = todo.completed === true ? new Date() : null;
        return updatedTodo;
    }

    deleteTodo(id: number): string {
        const todo = this.todos.find(t => {
            return t.id === id;
        });
        const index = this.todos.indexOf(todo);
        if (index > -1) {
            this.todos.splice(index, 1);
            return 'Todo successfully deleted.';
        } else {
            return 'Todo not found.';
        }
    }
}
