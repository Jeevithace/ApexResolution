import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../../service/manager.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-agent-list-edit',
  templateUrl: './agent-list-edit.component.html',
  styleUrls: ['./agent-list-edit.component.css']
})
export class AgentListEditComponent implements OnInit {
  addAgent: any = {};
  getAgentlist: any = {};
  id: any = {};
  updateAgent: Boolean = false;
  constructor(private _manager_service: ManagerService, private route: Router, private activated_route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activated_route.snapshot.queryParamMap.get('id');
    // let id = this._manager_service.getId();
    if (this.id !== null || undefined) {
      this.updateAgent = true;
      this._getAgent_byId(this.id)
    }

  }


  _create_Agent() {
    if (this.updateAgent) {
      console.log(this.addAgent)
      this.addAgent.createdBy = "SuperAdmin";

      this._manager_service._update_agent(this.addAgent).subscribe((data: any) => {
        console.log("update", data)

        alert(data.message)
        this.route.navigate(['/superadmin/agent-list'])
      })
    }
    else {
      let boolValue = (/true/i).test(this.addAgent.active);
      this.addAgent['active'] = boolValue;
      this.addAgent.createdBy = "SuperAdmin";
      this._manager_service._add_agent(this.addAgent).subscribe((data: any) => {
        console.log("add", data)
        alert(data.message)
        this.route.navigate(['/superadmin/agent-list'])
      })
    }
  }

  _getAgent_byId(id: number) {
    this._manager_service._get_agentByid(id).subscribe((data: any) => {
      console.log(data)
      this.addAgent = data.data;
    })


  }






}
