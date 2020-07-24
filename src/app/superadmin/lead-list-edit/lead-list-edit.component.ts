import { Component, OnInit } from '@angular/core';
import { IDayCalendarConfig, DatePickerComponent } from "ng2-date-picker";
@Component({
  selector: 'app-lead-list-edit',
  templateUrl: './lead-list-edit.component.html',
  styleUrls: ['./lead-list-edit.component.css']
})
export class LeadListEditComponent implements OnInit {

  datePickerConfig = {
    format: 'DD-MM-YYYY'
  };
  constructor() { }

  ngOnInit(): void {

  }

}
