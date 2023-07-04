import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-list-questions',
  templateUrl: './dashboard-list-questions.component.html',
  styleUrls: ['./dashboard-list-questions.component.scss']
})
export class DashboardListQuestionsComponent implements OnInit {
  products = [{
    name: 1,
    date: '10/10/2023'
  },{
    name: 1,
    date: '10/10/2023'
  },{
    name: 1,
    date: '10/10/2023'
  },
];

  constructor() { }

  ngOnInit(): void {
  }

}
