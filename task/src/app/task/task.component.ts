import { Component, OnInit } from '@angular/core';
import { Task, TaskResolved } from '../taskdisplay/task';
import { TaskdataService } from '../taskdisplay/taskdata.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  taskArr: Task[] = [];
  taskData: TaskResolved;
  errorMessage: String = '';

  constructor(private _taskdata: TaskdataService, private _actroute: ActivatedRoute) {
    this.taskData = this._actroute.snapshot.data.tData;
   }

  ngOnInit() {
    this.taskArr = this.taskData.data;
    this.errorMessage = this.taskData.errorMessage;
  }

}
