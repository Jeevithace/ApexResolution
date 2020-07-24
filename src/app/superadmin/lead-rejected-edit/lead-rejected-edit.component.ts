import { Component, OnInit } from '@angular/core';
import { IDayCalendarConfig, DatePickerComponent } from "ng2-date-picker";
@Component({
  selector: 'app-lead-rejected-edit',
  templateUrl: './lead-rejected-edit.component.html',
  styleUrls: ['./lead-rejected-edit.component.css']
})
export class LeadRejectedEditComponent implements OnInit {
  datePickerConfig = {
    format: 'DD-MM-YYYY'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
