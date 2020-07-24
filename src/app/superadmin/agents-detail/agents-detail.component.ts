import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agents-detail',
  templateUrl: './agents-detail.component.html',
  styleUrls: ['./agents-detail.component.css']
})
export class AgentsDetailComponent implements OnInit {

  public manageData: any = [];
  order: string = 'managersFirstname';
  p: number = 0;
  reverse: boolean = false;
  constructor() {
    for (let i = 1; i <= 100; i++) {
      this.manageData.push(`item ${i}`);
    }
  }

  ngOnInit(): void {
    this.manageData = [
      { "managersid": '01', "managersFirstname": 'George', "managersLastname": 'Bailey', "managersEmail": 'samplemailid123@email.com', "managerPhone": '+1 9876 54 3210', "managersStatus": 'Active' },
      { "managersid": '02', "managersFirstname": 'deorge', "managersLastname": 'Bailey', "managersEmail": 'samplemailid123@email.com', "managerPhone": '+1 9876 54 3210', "managersStatus": 'Active' },
      { "managersid": '03', "managersFirstname": 'deorge', "managersLastname": 'Bailey', "managersEmail": 'samplemailid123@email.com', "managerPhone": '+1 9876 54 3210', "managersStatus": 'Active' },
      { "managersid": '04', "managersFirstname": 'deorge', "managersLastname": 'Bailey', "managersEmail": 'samplemailid123@email.com', "managerPhone": '+1 9876 54 3210', "managersStatus": 'Active' },
      { "managersid": '05', "managersFirstname": 'George', "managersLastname": 'Bailey', "managersEmail": 'samplemailid123@email.com', "managerPhone": '+1 9876 54 3210', "managersStatus": 'Active' },
      { "managersid": '06', "managersFirstname": 'George', "managersLastname": 'Bailey', "managersEmail": 'samplemailid123@email.com', "managerPhone": '+1 9876 54 3210', "managersStatus": 'Active' },
      { "managersid": '07', "managersFirstname": 'George', "managersLastname": 'Bailey', "managersEmail": 'samplemailid123@email.com', "managerPhone": '+1 9876 54 3210', "managersStatus": 'Active' },
      { "managersid": '08', "managersFirstname": 'George', "managersLastname": 'Bailey', "managersEmail": 'samplemailid123@email.com', "managerPhone": '+1 9876 54 3210', "managersStatus": 'Active' }
    ];
  }
  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }

}
