import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import {Todo} from "../../domain/todo";
import {TodoService} from "../../services/todo.service";

@Component({
    moduleId: module.id,
    templateUrl: 'todo-detail.component.html',
    selector: 'my-todos-detail'
})
export class TodoDetailComponent implements OnInit {

    @Input()
    todo:Todo;

    constructor(private todoService:TodoService,
                private route:ActivatedRoute,
                private location:Location) {

    }

    ngOnInit():void {
        this.route.params.forEach((params:Params) => {
            let id = +params['id'];
            this.todoService.getTodo(id)
                .then(todo => this.todo = todo)
        })
    }

    goBack():void {
        this.location.back();
    }
}
