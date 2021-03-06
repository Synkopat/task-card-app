import { Component } from '@angular/core';
import { Task } from './model/task';
@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})

export class AppComponent {
    private tasks: Task[] = [];
    private currentTask = new Task(null,false);

    private addTask(){
        let task = new Task(this.currentTask.content,this.currentTask.isCompleted);
        this.currentTask.content=null;
        this.currentTask.isCompleted=false;
        this.tasks.push(task);
    }
}