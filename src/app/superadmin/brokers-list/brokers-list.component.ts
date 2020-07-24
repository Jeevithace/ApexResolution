import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/app/service/manager.service';
@Component({
  selector: 'app-brokers-list',
  templateUrl: './brokers-list.component.html',
  styleUrls: ['./brokers-list.component.css']
})
export class BrokersListComponent implements OnInit {
 brokerList:any ;
deleteData: any;
  constructor(private managerService : ManagerService) { }

  ngOnInit(): void {
    this._getBroker_records();
    
  }

  _getBroker_records() {
    this.managerService._get_All_Broker().subscribe((data:any) =>{
      this.brokerList = data.data;
      console.log(this.brokerList)
     })
  }


  setId(data :any){
    this.deleteData =  data;
  }
  _delete_manager(){
   
    this.managerService._delete_broker( this.deleteData).subscribe(deleteData =>{
       console.log(deleteData)
       this._getBroker_records()
    })


  }
  




}
