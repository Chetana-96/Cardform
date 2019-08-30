import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import {
  FormGroup,
  FormControl,
  FormBuilder
} from '@angular/forms';
import { TaskdataService } from 'src/app/taskdisplay/taskdata.service';
import { Task } from 'src/app/taskdisplay/task';


@Component({
  selector: 'app-edittask1',
  templateUrl: './edittask1.component.html',
  styleUrls: ['./edittask1.component.css']
})
export class Edittask1Component implements OnInit {
  edittask: FormGroup;
  id: string;
  displayTask: Task;

  constructor(

    private _act: ActivatedRoute,
    private taskdata: TaskdataService,
    private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.id = this._act.snapshot.params['Id'];
    this.taskdata.getTaskById(this.id).subscribe((data: Task[]) => {
      this.displayTask = data[0];
      this.edittask.patchValue({
        Id: this.displayTask.Id,
        Title: this.displayTask.Title,
        Status: this.displayTask.Status
      });
    });
    this.edittask = this.fb.group({
      Id: new FormControl(null),
      Title: new FormControl(null),
      Status: new FormControl(null)
    });

  }
  onEditTask() {
    this.taskdata
      .editTask(
        new Task(
          this.edittask.value.Id,
          this.edittask.value.Title,

          this.edittask.value.Status
        )
      )
      .subscribe(
        (data: any) => {
          this.router.navigate(['/taskdisplay1']);
        }
      );

}
}
