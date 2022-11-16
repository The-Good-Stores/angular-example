import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  example = {
    email: '',
    text: '',
  };
  constructor() {}

  ngOnInit(): void {}
  //Submit
  register() {
    console.log(this.example);
  }
}
