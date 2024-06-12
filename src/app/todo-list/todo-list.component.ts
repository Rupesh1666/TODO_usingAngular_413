import { Component } from '@angular/core';

interface Task {
  name: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  newTask: string = '';
  tasks: Task[] = [];

  addTask() {
    if (this.newTask.trim() !== '') {
      this.tasks.push({ name: this.newTask, completed: false });
      this.newTask = '';
    }
  }

  removeTask(task: Task) {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }
}
