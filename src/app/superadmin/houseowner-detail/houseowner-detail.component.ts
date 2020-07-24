import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-houseowner-detail',
  templateUrl: './houseowner-detail.component.html',
  styleUrls: ['./houseowner-detail.component.css']
})
export class HouseownerDetailComponent implements OnInit {

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
      { "managersid": '01', "managersFirstname": 'Georges', "managersLastname": 'Bailey', "managersEmail": 'samplemailid123@email.com', "managerPhone": '+1 9876 54 3210', "managersAddress": 'Ap #867-859 Sit Rd. Azusa New York...', "managersStatus": 'Active' },
      { "managersid": '02', "managersFirstname": 'deorge', "managersLastname": 'Bailey', "managersEmail": 'samplemailid123@email.com', "managerPhone": '+1 9876 54 3210', "managersAddress": 'Ap #867-859 Sit Rd. Azusa New York...', "managersStatus": 'Active' },
      { "managersid": '03', "managersFirstname": 'deorge', "managersLastname": 'Bailey', "managersEmail": 'samplemailid123@email.com', "managerPhone": '+1 9876 54 3210', "managersAddress": 'Ap #867-859 Sit Rd. Azusa New York...', "managersStatus": 'Active' },
      { "managersid": '04', "managersFirstname": 'deorge', "managersLastname": 'Bailey', "managersEmail": 'samplemailid123@email.com', "managerPhone": '+1 9876 54 3210', "managersAddress": 'Ap #867-859 Sit Rd. Azusa New York...', "managersStatus": 'Active' },
      { "managersid": '05', "managersFirstname": 'George', "managersLastname": 'Bailey', "managersEmail": 'samplemailid123@email.com', "managerPhone": '+1 9876 54 3210', "managersAddress": 'Ap #867-859 Sit Rd. Azusa New York...', "managersStatus": 'Active' },
      { "managersid": '06', "managersFirstname": 'George', "managersLastname": 'Bailey', "managersEmail": 'samplemailid123@email.com', "managerPhone": '+1 9876 54 3210', "managersAddress": 'Ap #867-859 Sit Rd. Azusa New York...', "managersStatus": 'Active' },
      { "managersid": '07', "managersFirstname": 'George', "managersLastname": 'Bailey', "managersEmail": 'samplemailid123@email.com', "managerPhone": '+1 9876 54 3210', "managersAddress": 'Ap #867-859 Sit Rd. Azusa New York...', "managersStatus": 'Active' },
      { "managersid": '08', "managersFirstname": 'George', "managersLastname": 'Bailey', "managersEmail": 'samplemailid123@email.com', "managerPhone": '+1 9876 54 3210', "managersAddress": 'Ap #867-859 Sit Rd. Azusa New York...', "managersStatus": 'Active' }
    ];
  }
  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }

}
