import { Component, Input } from '@angular/core';
import { Todo } from '../models';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  @Input()
  todos!: Todo[]

}
