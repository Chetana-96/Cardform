import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../userdisplay/userdata.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component implements OnInit {
  id:string;

  constructor(private _userData:UserdataService,private router:Router,private route:ActivatedRoute) { }


  ngOnInit() {
    this.route.params.subscribe(
      (x)=>{
        this.id= x.id;
      }

    );
    }
  onclick1(){
    this.router.navigate(['/demo2',1]);

  }
  onclick2(){
    this.router.navigate(['/demo2',2]);
  }
  onclick3(){
    this.router.navigate(['/demo2',3]);

  }




}
