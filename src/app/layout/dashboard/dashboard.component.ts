import { Component, OnInit } from '@angular/core';
import { DashboardCardData } from 'src/app/data/shared-data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dashboardCardData = DashboardCardData


  constructor() { }

  ngOnInit(): void {
  }
}
