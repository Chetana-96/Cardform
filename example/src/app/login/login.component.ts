import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { UserdataService } from '../userdisplay/userdata.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
login:FormGroup;
  _userdata: any;
  _router: any;
  constructor(private fb:FormBuilder, _userData:UserdataService, _actRouter:ActivatedRoute) { }

  ngOnInit() {
    this.login = this.fb.group({
      user_email: new FormControl(),
      user_password: new FormControl()
    });
  }
  onLoginSubmit() {
    this._userdata.login(
      this.login.value.user_email,
      this.login.value.user_password
    );
    if (this._userdata.redirectURL) {
      this._router.navigateByUrl(this._userdata.redirectURL);
    } else {
      this._router.navigateByUrl(["/users"]);
    }
  }
}
