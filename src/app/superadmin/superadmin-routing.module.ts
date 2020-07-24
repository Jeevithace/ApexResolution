//modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// components
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagerListComponent } from './manager-list/manager-list.component';
import { ManagerListEditComponent } from './manager-list-edit/manager-list-edit.component';
import { ManageProfileComponent } from './manage-profile/manage-profile.component';
import { BrokersListComponent } from './brokers-list/brokers-list.component';
import { BrokersListEditComponent } from './brokers-list-edit/brokers-list-edit.component';
import { AgentsDetailComponent } from './agents-detail/agents-detail.component';
import { AgentsDetailEditComponent } from './agents-detail-edit/agents-detail-edit.component';
import { HouseownerDetailComponent } from './houseowner-detail/houseowner-detail.component';
import { HouseownerDetailEditComponent } from './houseowner-detail-edit/houseowner-detail-edit.component';
import { NegotiatorsListComponent } from './negotiators-list/negotiators-list.component';
import { NegotiatorsEditComponent } from './negotiators-edit/negotiators-edit.component';
import { AssitnegotiatorsListComponent } from './assitnegotiators-list/assitnegotiators-list.component';
import { AssitnegotiatorsEditComponent } from './assitnegotiators-edit/assitnegotiators-edit.component';
import { CloserListComponent } from './closer-list/closer-list.component';
import { CloserEditComponent } from './closer-edit/closer-edit.component';
import { LeadListComponent } from './lead-list/lead-list.component';
import { LeadListEditComponent } from './lead-list-edit/lead-list-edit.component';
import { LeadRejectedListComponent } from './lead-rejected-list/lead-rejected-list.component';
import { LeadRejectedEditComponent } from './lead-rejected-edit/lead-rejected-edit.component';
import { AgentListComponent } from './agent-list/agent-list.component';
import { AgentListEditComponent } from './agent-list-edit/agent-list-edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'manager-profile', component: ManageProfileComponent },
  { path: 'manager-list', component: ManagerListComponent },
  { path: 'manager-list-edit', component: ManagerListEditComponent },
  { path: 'brokers-list', component: BrokersListComponent },
  { path: 'brokers-list-edit', component: BrokersListEditComponent },
  { path: 'agent-list', component: AgentListComponent },
  { path: 'agent-list-edit', component: AgentListEditComponent },
  { path: 'agents-details', component: AgentsDetailComponent },
  { path: 'agents-details-edit', component: AgentsDetailEditComponent },
  { path: 'houseowner-detail-list', component: HouseownerDetailComponent },
  { path: 'houseowner-detail-edit', component: HouseownerDetailEditComponent },
  { path: 'negotiators-list', component: NegotiatorsListComponent },
  { path: 'negotiators-edit', component: NegotiatorsEditComponent },
  { path: 'assitnegotiators-list', component: AssitnegotiatorsListComponent },
  { path: 'assitnegotiators-edit', component: AssitnegotiatorsEditComponent },
  { path: 'closer-list', component: CloserListComponent },
  { path: 'closer-edit', component: CloserEditComponent },
  { path: 'lead-list', component: LeadListComponent },
  { path: 'lead-list-edit', component: LeadListEditComponent },
  { path: 'lead-rejected-list', component: LeadRejectedListComponent },
  { path: 'lead-rejected-list-edit', component: LeadRejectedEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperadminRoutingModule { }
