import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  name: string = 'Lucas Santos';
  ra: string = '0050832021012';
  today = new Date();

  constructor() {}

  ngOnInit() {}
}
