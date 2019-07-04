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
        console.log(todo)
        return todo;
    }

    createNewTodo(name: string, completed: boolean) {
        let maxId = 0;
        if (this.todos.length > 0) {
            // find the max id in the list of todos
            maxId = Math.max.apply(Math, this.todos.map(t => { return t.id; }));
        }
        let todo = new Todo(maxId + 1, name, completed, completed === true ? new Date() : null)
        this.todos.push(todo)
        return todo.id
    }
}