import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title: string = 'Hello world!';
  constructor() {}

  ngOnInit(): void {}

  changeTitle($event: Event): void {
    this.title = 'title changed';
  }
  
}
