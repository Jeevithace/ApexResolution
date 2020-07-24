import { Component, OnInit } from '@angular/core';
import {ManagerService} from '../../service/manager.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-brokers-list-edit',
  templateUrl: './brokers-list-edit.component.html',
  styleUrls: ['./brokers-list-edit.component.css']
})
export class BrokersListEditComponent implements OnInit {
  addBroker:any = {};
  getBrokerlist:any ={};
  id: any = {};
  updateBroker : Boolean = false;
   constructor(private _manager_service: ManagerService , private route:Router, private activated_route:ActivatedRoute) { }
 
   ngOnInit(): void {
      this.id = this.activated_route.snapshot.queryParamMap.get('id');
     // let id = this._manager_service.getId();
     if(this.id !== null || undefined){
       this.updateBroker=true;
       this._getBroker_byId(this.id)
     }
 
   }
 
 
   _create_broker(){
  if(this.updateBroker){
   console.log(this.addBroker)
   this.addBroker.createdBy ="SuperAdmin";
 
   this._manager_service._update_broker(this.addBroker).subscribe((data:any)=>{
     console.log("update", data)
 
     alert(data.message)
     this.route.navigate(['/superadmin/brokers-list'])
   })
 }
 else{
   let boolValue = (/true/i).test(this.addBroker.active);
   this.addBroker['active'] = boolValue;
    this.addBroker.createdBy ="SuperAdmin";
     this._manager_service._add_broker(this.addBroker).subscribe((data:any)=>{
       console.log("add", data)   
       alert(data.message) 
       this.route.navigate(['/superadmin/brokers-list'])
   })
 }
   }
 
   _getBroker_byId(id : number){
    this._manager_service._get_brokerByid(id).subscribe((data: any) =>{
        console.log(data)
     this.addBroker= data.data;
    })
 
 
   }
 
   
   
 
      
   
}
