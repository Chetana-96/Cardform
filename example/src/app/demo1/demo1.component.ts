import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component implements OnInit {


  constructor(private router: Router) { }


  ngOnInit() {
  }
  onClick() {
  this.router.navigate(['/demo2', 10]);
}
}
