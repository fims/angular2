import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from "./app.component";
import {TodoComponent} from "./todo/todo.component";
import {TodoService} from "./services/todo.servive";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        TodoComponent
    ],
    providers: [TodoService],
    bootstrap: [AppComponent]
})
export class AppModule {

}