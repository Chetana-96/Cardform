import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeptdataService } from 'src/app/deptdata.service';
import { Dept } from '../dept';

@Component({
  selector: 'app-editdept',
  templateUrl: './editdept.component.html',
  styleUrls: ['./editdept.component.css']
})
export class EditdeptComponent implements OnInit {


  name = '';
  desc = '';

  constructor(private _act: ActivatedRoute, private _data: DeptdataService) { }

  ngOnInit() {
   // this.email= this._act.snapshot.params["user_em"];
   this._data.getDeptByName(this.name).subscribe(
    (data: Dept[]) => {
      this.name = data[0].name;
      this.desc = data[0].desc;

    }
   );

  }
  onDepartmentUpdate(f) {

    this._data.editDept(f.value).subscribe(
      (data: any) => {
        alert('updated');
      }
    );
  }
}
