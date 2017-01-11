import { Component, Input } from '@angular/core';
import { Task } from '../model/task';
@Component({
    moduleId: module.id,
    selector: 'task-card',
    templateUrl: 'taskCard.component.html',  
    styleUrls: [ 'taskCard.component.css' ]
})

export class TaskCardComponent{
    @Input() task: Task;

    private toggleStatus(){
        this.task.isCompleted = !this.task.isCompleted;
    }
}