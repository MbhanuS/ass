import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../register/register.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup

  constructor(private $fb: FormBuilder, private $router: Router) { }

  ngOnInit() {
    this.createLoginForm()
  }

  createLoginForm() {
    this.loginForm = this.$fb.group({
      email: [''],
      password: ['']
    })
  }

  onLogin() {
    if(!this.loginForm.value.email || !this.loginForm.value.password) {
      return alert('email and password are required')
    }
    let flag: boolean = false
    let users = JSON.parse(localStorage.getItem('users'))
    if(users === null) {
      alert('kindly add users')
      return this.$router.navigate(['/register'])
    } else {
      users.map( user => {
        if(user.email === this.loginForm.value.email && user.password === this.loginForm.value.password) {
          return flag = true
        }
      })
      if(flag === false) {
        alert('either email or password is wrong')
      } else {
        localStorage.setItem('login','true')
        return this.$router.navigate(['/posts'])
      }
    }
  }

  onRegistration() {
    this.$router.navigate(['/register'])
  }

}
