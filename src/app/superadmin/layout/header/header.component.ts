import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public noficationshow: boolean = false;
  public notificationLead: any;
  @Input() headerMainTitle: string | undefined;

  constructor() {

  }

  ngOnInit(): void {
    this.notificationLead = [
      {
        notificationIcon: 'fa fa-bell bg-active-color', notificationListTitle: 'Steve Smith', notificationListsubTitle: 'Today at 04:48 PM', notificationListDescription: 'Has accepted the lead request and updated the status as offer accepted'
      },
      {
        notificationIcon: 'fa fa-bell bg-inactive-color', notificationListTitle: 'Robert De Niro', notificationListsubTitle: 'Today at 04:48 PM', notificationListDescription: 'Has accepted the lead request and updated the status as offer accepted'
      },
      {
        notificationIcon: 'fa fa-bell bg-inactive-color', notificationListTitle: 'Johnny Depp', notificationListsubTitle: 'Today at 04:48 PM', notificationListDescription: 'Has accepted the lead request and updated the status as offer accepted'
      },
      {
        notificationIcon: 'fa fa-bell bg-inactive-color', notificationListTitle: 'Russell Crowe', notificationListsubTitle: 'Today at 04:48 PM', notificationListDescription: 'Has accepted the lead request and updated the status as offer accepted'
      },
      {
        notificationIcon: 'fa fa-bell bg-active-color', notificationListTitle: 'Steve Smith', notificationListsubTitle: 'Today at 04:48 PM', notificationListDescription: 'Has accepted the lead request and updated the status as offer accepted'
      },
      {
        notificationIcon: 'fa fa-bell bg-inactive-color', notificationListTitle: 'Robert De Niro', notificationListsubTitle: 'Today at 04:48 PM', notificationListDescription: 'Has accepted the lead request and updated the status as offer accepted'
      },
      {
        notificationIcon: 'fa fa-bell bg-inactive-color', notificationListTitle: 'Johnny Depp', notificationListsubTitle: 'Today at 04:48 PM', notificationListDescription: 'Has accepted the lead request and updated the status as offer accepted'
      },
      {
        notificationIcon: 'fa fa-bell bg-inactive-color', notificationListTitle: 'Russell Crowe', notificationListsubTitle: 'Today at 04:48 PM', notificationListDescription: 'Has accepted the lead request and updated the status as offer accepted'
      }

    ]
  }

  bellButton() {
    this.noficationshow = !this.noficationshow
  }
  closeButton() {
    this.noficationshow = false;
  }


}
