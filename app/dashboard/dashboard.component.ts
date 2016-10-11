import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Todo} from "../domain/todo";
import {TodoService} from "../services/todo.service";

@Component({
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

    selectedTodo:Todo;

    todos:Todo [] = [];

    constructor(private router:Router,
                private todoService:TodoService) {

    }

    ngOnInit():void {
        this.todoService.getTodos()
            .then(todos => this.todos = todos.filter(todo => todo.done === false));
    }

    gotoDetail(todo:Todo):void {
        let link = ['/detail', todo.id];
        this.router.navigate(link);
    }
}
