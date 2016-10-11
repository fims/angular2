import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';


import {Todo} from "../domain/todo";
import {TODOS} from "../mockData/mockData";

@Injectable()
export class TodoService {

    constructor(private http:Http) {
    }

    getTodos():Promise<Todo[]>{
        return Promise.resolve(TODOS);
    }

    getTodo(id: number):Promise<Todo> {
        return this.getTodos()
            .then(todos => todos.find(todo => todo.id === id))
    }

    getTodosHttp():Promise<Todo[]> {
        return this.http.get('http://localhost:8080')
            .toPromise()
            .then(response => response.json().data as Todo[])
            .catch(this.handleError);
    }

    private handleError(error:any):Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}