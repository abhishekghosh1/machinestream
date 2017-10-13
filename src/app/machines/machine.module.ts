import { NgModule } from '@angular/core';
import { MachineListComponent } from './machine-list.component';
import { MachineDetailComponent } from './machine-detail.component';
import { RouterModule } from '@angular/router';
import { MachineGuardService } from './machine-guard.service';
import { MachineService } from './machine.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
        { path: 'machines', component: MachineListComponent },
        { path: 'machines/:id',
          canActivate: [ MachineGuardService ],
          component: MachineDetailComponent }
    ]),
    SharedModule
  ],
  declarations: [
    MachineListComponent,
    MachineDetailComponent
  ],
  providers: [
    MachineService,
    MachineGuardService
  ]
})
export class MachineModule { }
