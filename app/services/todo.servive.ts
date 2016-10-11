import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Todo} from "../domain/todo";
import {TODOS} from "../mockdata/todos";

@Injectable()
export class TodoService {

    constructor(private http: Http){

    }

    getTodos():Promise<Todo[]>{

        return Promise.resolve(TODOS);
    }

    getTodosHttp():Promise<Todo[]>{
        return this.http.get('http://google.com/api/v1/todos')
            .toPromise()
            .then(response => response.json().data as Todo)
            .catch(this.handleError);
    }

    private handleError(erro:any):Promise<any>{
        return Promise.reject(error.message || error);
    }
}