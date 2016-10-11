import {Component, OnInit} from '@angular/core';
import {Todo} from "../domain/todo";
import {TodoService} from "../services/todo.service";

@Component({
    moduleId: module.id,
    templateUrl: 'todo.component.html',
    styleUrls: ['todo.component.css'],
    selector: 'my-todos'
})
export class TodoComponent implements OnInit{

    selectedTodo: Todo;

    todos: Todo [] = [];

    constructor(private todoService:TodoService){
        
    }

    ngOnInit():void {
        this.todoService.getTodos()
            .then(todos => this.todos = todos);
    }

    add(name:string):void {

        this.todos.push({id: undefined, name: name, done: false});
    }

    onSelect(todo:Todo):void{
        todo.done = !todo.done;
        this.selectedTodo = todo;
    }
}
