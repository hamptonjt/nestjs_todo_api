import { Injectable } from "@nestjs/common";
import Todo from "./todo.model";

@Injectable()
export class TodoService {
    private todos: Todo[] = [];

    fetchAllTodos() {
        return this.todos;
    }

    fetchTodo(id: number): Todo {
        let todo = this.todos.find(t => {
            return t.id === id;
        })
        return todo;
    }

    createNewTodo(name: string, completed: boolean) {
        let maxId = 0;
        if (this.todos.length > 0) {
            // find the max id in the list of todos
            maxId = Math.max.apply(Math, this.todos.map(t => { return t.id; }));
        }
        let todo = new Todo(maxId + 1, name, completed, completed === true ? new Date() : null);
        this.todos.push(todo);
        return todo.id;
    }

    updateTodo(id: number, name: string, completed: boolean): Todo {
        let todo = this.todos.find(t => {
            return t.id === id;
        })
        todo.name = name;
        todo.completed = completed;
        todo.dateCompleted = completed === true ? new Date() : null;
        return todo;
    }

    deleteTodo(id: number): string {
        let todo = this.todos.find(t => {
            return t.id === id;
        })
        let index = this.todos.indexOf(todo);
        if (index > -1) {
            this.todos.splice(index, 1);
            return "Todo successfully deleted.";
        } else {
            return "Todo not found.";
        }
    }
}