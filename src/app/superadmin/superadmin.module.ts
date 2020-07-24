//modules
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperadminRoutingModule } from './superadmin-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ValidateEqualModule } from 'ng-validate-equal';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
import { ToastrModule } from 'ngx-toastr';
import { DpDatePickerModule } from "ng2-date-picker";

//components
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ManagerListComponent } from './manager-list/manager-list.component';
import { ManagerListEditComponent } from './manager-list-edit/manager-list-edit.component';
import { ManageProfileComponent } from './manage-profile/manage-profile.component';
import { BrokersListComponent } from './brokers-list/brokers-list.component';
import { BrokersListEditComponent } from './brokers-list-edit/brokers-list-edit.component';
import { HttpErrorInterceptor } from '../_middleware/http-error.interceptor';
import { AgentsDetailEditComponent } from './agents-detail-edit/agents-detail-edit.component';
import { HouseownerDetailEditComponent } from './houseowner-detail-edit/houseowner-detail-edit.component';
import { NegotiatorsEditComponent } from './negotiators-edit/negotiators-edit.component';
import { AssitnegotiatorsEditComponent } from './assitnegotiators-edit/assitnegotiators-edit.component';
import { CloserEditComponent } from './closer-edit/closer-edit.component';
import { AgentsDetailComponent } from './agents-detail/agents-detail.component';
import { AgentListComponent } from './agent-list/agent-list.component';
import { AgentListEditComponent } from './agent-list-edit/agent-list-edit.component';
import { HouseownerDetailComponent } from './houseowner-detail/houseowner-detail.component';
import { NegotiatorsListComponent } from './negotiators-list/negotiators-list.component';
import { AssitnegotiatorsListComponent } from './assitnegotiators-list/assitnegotiators-list.component';
import { CloserListComponent } from './closer-list/closer-list.component';
import { LeadListComponent } from './lead-list/lead-list.component';
import { LeadListEditComponent } from './lead-list-edit/lead-list-edit.component';
import { LeadRejectedListComponent } from './lead-rejected-list/lead-rejected-list.component';
import { LeadRejectedEditComponent } from './lead-rejected-edit/lead-rejected-edit.component';
//module

@NgModule({

  imports: [
    CommonModule,
    SuperadminRoutingModule,
    FormsModule,
    HttpClientModule,
    ValidateEqualModule,
    NgxPaginationModule,
    OrderModule,
    DpDatePickerModule

  ],
  exports: [
    FormsModule,
    NgxPaginationModule,
    OrderModule

  ],
  schemas: [NO_ERRORS_SCHEMA],
  declarations: [LoginComponent, DashboardComponent, HeaderComponent, SidebarComponent, ForgotPasswordComponent, ResetPasswordComponent, ManagerListComponent, ManagerListEditComponent, ManageProfileComponent, BrokersListComponent, BrokersListEditComponent, AgentsDetailEditComponent, HouseownerDetailEditComponent, NegotiatorsEditComponent, AssitnegotiatorsEditComponent, CloserEditComponent, AgentsDetailComponent, HouseownerDetailComponent, NegotiatorsListComponent, AssitnegotiatorsListComponent, CloserListComponent, AgentListComponent, AgentListEditComponent, LeadListComponent, LeadListEditComponent, LeadRejectedListComponent, LeadRejectedEditComponent],
})
export class SuperadminModule { }
