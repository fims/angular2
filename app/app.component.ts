import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>{{hello}}</h1>
<my-todo></my-todo>
    `
})
export class AppComponent {

    hello:string = "Hello world";

}