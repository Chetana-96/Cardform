import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { TaskdataService } from '../taskdisplay/taskdata.service';
import { Task } from '../taskdisplay/task';
@Component({
  selector: 'app-taskdisplay1',
  templateUrl: './taskdisplay1.component.html',
  styleUrls: ['./taskdisplay1.component.css']
})
export class Taskdisplay1Component implements OnInit {
  arr: Task[] = [];
  name = '';

  constructor(private _data: TaskdataService, private _router: Router) {}

  ngOnInit() {
    this._data.getAllTasks().subscribe(
      (data: Task[]) => {
        this.arr = data;
      },
      function(error) {
        alert(error);
      },
      function() {}
    );
  }
  onTaskDelete(item: Task) {
    this._data.deleteTask(item.Id).subscribe((data: any) => {
      this.arr.splice(this.arr.indexOf(item), 1);
      alert('deleted');
    });
  }
  onTaskEdit(item: Task) {
    this._router.navigate(['/edittask1', item.Id]);
  }



  }

