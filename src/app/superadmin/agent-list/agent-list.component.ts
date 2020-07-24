import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/app/service/manager.service';
@Component({
  selector: 'app-agent-list',
  templateUrl: './agent-list.component.html',
  styleUrls: ['./agent-list.component.css']
})
export class AgentListComponent implements OnInit {
  agentList:any ;
  deleteData: any;
    constructor(private managerService : ManagerService) { }
  
    ngOnInit(): void {
      this._getAgent_records();
      
    }
  
    _getAgent_records() {
      this.managerService._get_All_agent().subscribe((data:any) =>{
        this.agentList = data.data;
        console.log(this.agentList)
       })
    }
  
  
    setId(data :any){
      this.deleteData =  data;
    }
    _delete_manager(){
     
      this.managerService._delete_agent( this.deleteData).subscribe(deleteData =>{
         console.log(deleteData)
         this._getAgent_records();
      })
  
  
    }
    
  
}
