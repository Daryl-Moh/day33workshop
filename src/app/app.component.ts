import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskComponent } from './components/task.component';
import { Todo } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  
  @ViewChild(TaskComponent)
  taskComp!: TaskComponent

  todos: Todo[] = []

  invalid_!: Observable<Boolean>

  ngAfterViewInit(): void {
      this.invalid_ = this.taskComp.invalid$
  }

  addTodo() {
    const todo: Todo = this.taskComp.value
    this.taskComp.clear()
    this.todos.push(todo)
    console.info('>>> todo: ', todo)
  }
}
