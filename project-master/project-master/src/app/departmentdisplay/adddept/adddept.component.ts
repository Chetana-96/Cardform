import { Component, Input, OnInit } from '@angular/core';
import { Dept } from '../dept';

@Component({
  selector: 'app-adddept',
  templateUrl: './adddept.component.html',
  styleUrls: ['./adddept.component.css']
})
export class AdddeptComponent implements OnInit {
  constructor() { }

arr: Dept[] = [];
name = '';
  description: string = '';
  ngOnInit() {
  }
  onSave(f) {
    this.arr.push(new Dept(this.name, this.description));
  }
}

