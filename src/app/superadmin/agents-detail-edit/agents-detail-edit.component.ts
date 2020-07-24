import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agents-detail-edit',
  templateUrl: './agents-detail-edit.component.html',
  styleUrls: ['./agents-detail-edit.component.css']
})
export class AgentsDetailEditComponent implements OnInit {

  constructor() { }
  agentType = ['Self User', 'Self User-1', 'Self User-2']
  companyName = ['Leanon Enterprises', 'Leanon Enterprises-1']
  statusActive = ['Active', 'Inactive']
  ngOnInit(): void {
  }

}
