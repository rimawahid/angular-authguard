import { Component, OnInit } from '@angular/core';
import {faLock} from "@fortawesome/free-solid-svg-icons";
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
faLock= faLock;
loginForm = new FormGroup({
  email: new FormControl(''),
  password: new FormControl(''),
})
  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  if (this.auth.isLoggedIn()){
    this.router.navigate(["admin"])
  }
  }
onSubmit(){
 // console.log(this.loginForm.value);
  if (this.loginForm.valid){
    this.auth.login(this.loginForm.value).subscribe(data=>{
      console.log(data);
      this.router.navigate(['/admin']);
    },(err:Error)=>{
      alert(err.message)
    });
  }
}
}
