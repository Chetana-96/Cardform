import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-reactive',
  templateUrl: './edit-reactive.component.html',
  styleUrls: ['./edit-reactive.component.css']
})
export class EditReactiveComponent implements OnInit {

  constructor( private fb:FormBuilder,) { }

  ngOnInit() {
  }

}
