import {Component, OnInit} from '@angular/core';
import {Todo} from "../domain/todo";
import {TodoService} from "../services/todo.servive";

@Component({
    moduleId: module.id,
    selector: 'my-todo',
    templateUrl: 'todo.component.html'
})
export class TodoComponent implements OnInit{
    todos: Todo[] = [];

    constructor(private todoServie: TodoService){
        
    }

    ngOnInit():void {
        this.todoServie.getTodos()
            .then(todos => this.todos = todos);
    }

    add(name: string): void{

        this.todos.push({id: undefined, name: name, done: false});
    }

}