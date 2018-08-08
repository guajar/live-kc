import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kc-tasks',
  template: `
    <div class="row">
      <kc-task-control class="col"></kc-task-control>
    </div>
  `,
  styles: []
})
export class TasksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
