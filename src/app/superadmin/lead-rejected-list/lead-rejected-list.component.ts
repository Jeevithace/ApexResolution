import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lead-rejected-list',
  templateUrl: './lead-rejected-list.component.html',
  styleUrls: ['./lead-rejected-list.component.css']
})
export class LeadRejectedListComponent implements OnInit {

  public leadData: any = [];

  order: string = 'leadowner';
  p: number = 0;
  reverse: boolean = false;
  masterSelected: boolean;
  checkedList: any;
  constructor() {
    for (let i = 1; i <= 100; i++) {
      this.leadData.push(`item ${i}`);
    }
    this.masterSelected = false;

    this.getCheckedItemList();
  }
  ngOnInit(): void {
    this.leadData = [
      { id: 1, value: '', isSelected: false, "leadid": '01', "leadowner": 'Georges', "leadunits": '1', "leademail": 'samplemailid123@email.com', "leadphone": '+1 9876 54 3210', "leadreason": 'Lorem ipsum is a dummy text...' },
      { id: 2, value: '', isSelected: true, "leadid": '02', "leadowner": 'Georges', "leadunits": '1', "leademail": 'samplemailid123@email.com', "leadphone": '+1 9876 54 3210', "leadreason": 'Lorem ipsum is a dummy text...' },
      { id: 3, value: '', isSelected: false, "leadid": '03', "leadowner": 'Georges', "leadunits": '1', "leademail": 'samplemailid123@email.com', "leadphone": '+1 9876 54 3210', "leadreason": 'Lorem ipsum is a dummy text...' },
      { id: 4, value: '', isSelected: false, "leadid": '04', "leadowner": 'Georges', "leadunits": '1', "leademail": 'samplemailid123@email.com', "leadphone": '+1 9876 54 3210', "leadreason": 'Lorem ipsum is a dummy text...' },
      { id: 5, value: '', isSelected: false, "leadid": '05', "leadowner": 'Georges', "leadunits": '1', "leademail": 'samplemailid123@email.com', "leadphone": '+1 9876 54 3210', "leadreason": 'Lorem ipsum is a dummy text...' },
      { id: 6, value: '', isSelected: false, "leadid": '06', "leadowner": 'Georges', "leadunits": '1', "leademail": 'samplemailid123@email.com', "leadphone": '+1 9876 54 3210', "leadreason": 'Lorem ipsum is a dummy text...' },
      { id: 7, value: '', isSelected: false, "leadid": '07', "leadowner": 'Georges', "leadunits": '1', "leademail": 'samplemailid123@email.com', "leadphone": '+1 9876 54 3210', "leadreason": 'Lorem ipsum is a dummy text...' },
      { id: 8, value: '', isSelected: false, "leadid": '08', "leadowner": 'Georges', "leadunits": '1', "leademail": 'samplemailid123@email.com', "leadphone": '+1 9876 54 3210', "leadreason": 'Lorem ipsum is a dummy text...' }
    ];
  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }

  checkUncheckAll() {
    for (var i = 0; i < this.leadData.length; i++) {
      this.leadData[i].isSelected = this.masterSelected;
    }
    this.getCheckedItemList();
  }
  isAllSelected() {
    this.masterSelected = this.leadData.every(function (item: any) {
      return item.isSelected == true;
    })
    this.getCheckedItemList();
  }

  getCheckedItemList() {
    this.checkedList = [];
    for (var i = 0; i < this.leadData.length; i++) {
      if (this.leadData[i].isSelected)
        this.checkedList.push(this.leadData[i]);
    }
    this.checkedList = JSON.stringify(this.checkedList);
  }


}
