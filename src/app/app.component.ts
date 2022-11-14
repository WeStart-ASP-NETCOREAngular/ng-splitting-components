import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  taskList: { title: string; content: string }[] = [
    { title: 'Example', content: 'content Example' },
  ];

  constructor() {}

  onAddTaskAdded(todoTask: { title: string; content: string }) {
    console.log(todoTask);
    this.taskList.push({
      title: todoTask.title,
      content: todoTask.content,
    });
  }
}
