import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators

} from '@angular/forms';
import { TaskdataService } from 'src/app/taskdisplay/taskdata.service';
import { Task } from 'src/app/taskdisplay/task';


@Component({
  selector: 'app-addtask1',
  templateUrl: './addtask1.component.html',
  styleUrls: ['./addtask1.component.css']
})
export class AddTask1Component implements OnInit {
  addtask: FormGroup;
  debouncer: any;
  constructor(private fb: FormBuilder, private _data: TaskdataService) {}

  ngOnInit() {
    this.addtask = this.fb.group({
      Id: new FormControl(null,
        Validators.required),

      Title: new FormControl(null, Validators.required),
      Status: new FormControl(null, Validators.required)


    });
  }

  onTaskAdd() {
    this._data.addTask(
        new Task(
          this.addtask.value.Id,
          this.addtask.value.Title,
          this.addtask.value.Status,

        )
      )
      .subscribe((x1: any) => {
        alert('task added');
      });
  }
}
