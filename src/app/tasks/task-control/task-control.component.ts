import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kc-task-control',
  templateUrl: './task-control.component.html',
  styleUrls: ['./task-control.component.css']
})
export class TaskControlComponent implements OnInit {

  aTasks: Array<string>;

  constructor() { }

  ngOnInit() {
    this.aTasks = [];
  }

  addTasks(task) {
    this.aTasks.push(task);
  }

  removeTasks(index) {
    this.aTasks.splice(index, 1);
  }

}
