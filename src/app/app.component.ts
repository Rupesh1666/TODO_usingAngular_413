import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newTask: string = ''; // Define newTask property
  tasks: any[] = []; // Define tasks property

  addTask() { // Define addTask method
    if (this.newTask.trim() !== '') {
      this.tasks.push({ name: this.newTask, completed: false });
      this.newTask = '';
    }
  }

  removeTask(task: any) { // Define removeTask method
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }
}
