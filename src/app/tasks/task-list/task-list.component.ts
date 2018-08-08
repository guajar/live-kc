import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'kc-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  @Input() aItems;
  @Output() evtRemove: EventEmitter<number>;

  constructor() {
    this.evtRemove = new EventEmitter();
  }

  ngOnInit() {
  }

  btnRemove(index) {
    this.evtRemove.emit(index);
  }

}
