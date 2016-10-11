import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {AppComponent} from "./app.component";
import {TodoComponent} from "./todo/todo.component";
import {TodoService} from "./services/todo.service";
import {TodoDetailComponent} from "./todo/todo-detail/todo-detail.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            },
            {
                path: 'todo',
                component: TodoComponent
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'detail/:id',
                component: TodoDetailComponent
            }
        ])
    ],
    declarations: [
        AppComponent,
        TodoComponent,
        TodoDetailComponent,
        DashboardComponent
    ],
    providers: [TodoService],
    bootstrap: [AppComponent]
})
export class AppModule {

}