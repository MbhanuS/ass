import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registeratinForm: FormGroup

  constructor(private $fb: FormBuilder, private $router: Router) { }

  ngOnInit() {
    this.createRegistrationForm()
  }

  createRegistrationForm() {
    this.registeratinForm = this.$fb.group({
      name: [''],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  onRegistering() {
    console.log(this.registeratinForm.value)

    let users = []
    let flag = true
    if(localStorage.getItem('users')) {
      users = JSON.parse(localStorage.getItem('users'))
    }
    users.map(user => {
      if(user.email === this.registeratinForm.value.email) {
        flag = false
      }
    })
    if(!flag) {
      return alert('email already exists')
    }
    users.push(this.registeratinForm.value)
    localStorage.setItem('users', JSON.stringify(users) )
    return this.$router.navigate(['/login'])
  }

  get email(): FormControl {
    return this.registeratinForm.get('email') as FormControl
  }

  get password(): FormControl {
    return this.registeratinForm.get('password') as FormControl
  }

  onLogin() {
    return this.$router.navigate(['/login'])
  }

}
