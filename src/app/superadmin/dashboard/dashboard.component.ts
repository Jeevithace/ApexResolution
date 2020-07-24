import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public RecentLead: any;

  constructor() { }

  ngOnInit(): void {
    var self = this;

    this.RecentLead = [
      {
        LeadTitle: 'George Bailey', LeadDescription: 'No. 78, Flat Name, Street Name, Area Name, City Name, State Name Pincode - 21354'
      },
      {
        LeadTitle: 'George Bailey1', LeadDescription: 'No. 78, Flat Name, Street Name, Area Name, City Name, State Name Pincode - 21354'
      },
      {
        LeadTitle: 'George Bailey2', LeadDescription: 'No. 78, Flat Name, Street Name, Area Name, City Name, State Name Pincode - 21354'
      },
      {
        LeadTitle: 'George Bailey3', LeadDescription: 'No. 78, Flat Name, Street Name, Area Name, City Name, State Name Pincode - 21354'
      },
      {
        LeadTitle: 'George Bailey4', LeadDescription: 'No. 78, Flat Name, Street Name, Area Name, City Name, State Name Pincode - 21354'
      },
      {
        LeadTitle: 'George Bailey5', LeadDescription: 'No. 78, Flat Name, Street Name, Area Name, City Name, State Name Pincode - 21354'
      },
      {
        LeadTitle: 'George Bailey4', LeadDescription: 'No. 78, Flat Name, Street Name, Area Name, City Name, State Name Pincode - 21354'
      },
      {
        LeadTitle: 'George Bailey5', LeadDescription: 'No. 78, Flat Name, Street Name, Area Name, City Name, State Name Pincode - 21354'
      },

    ]
  }


}
