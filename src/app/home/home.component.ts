import { Component, OnInit } from '@angular/core';
import { CallApiService } from '../services/call-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title: string = 'Hello world!';
  result: any = null;
  constructor(private apiService: CallApiService) {}

  ngOnInit(): void {}

  changeTitle($event: Event) {
    this.result = this.apiService
      .getJSONPH()
      .subscribe((result) => (this.result = result));
    console.log(this.result);
    this.title = 'show fetching result!';
  }
}
