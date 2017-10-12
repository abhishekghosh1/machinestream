import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IMachineDetail } from './machine';
import { MachineService } from './machine.service';

@Component({
  templateUrl: './machine-detail.component.template.html'
})
export class MachineDetailComponent implements OnInit {
  pageTitle: string = 'Machine Detail';
  errorMessage: string;
  machineDetail: IMachineDetail;

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _machineService: MachineService) {
  }

  ngOnInit() {
    const id = this._route.snapshot.paramMap.get('id');
    this.getMachineDetail(id);
  }

  getMachineDetail(id: string) {
    this._machineService.getMachineDetail(id).subscribe(
      machineDetail => this.machineDetail = machineDetail,
      error => this.errorMessage = <any>error);
  }

  onBack(): void {
    this._router.navigate(['/machines']);
  }

}
