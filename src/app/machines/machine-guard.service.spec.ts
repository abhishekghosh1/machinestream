import { TestBed, inject } from '@angular/core/testing';

import { MachineGuardService } from './machine-guard.service';

xdescribe('MachineGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MachineGuardService]
    });
  });

  xit('should be created', inject([MachineGuardService], (service: MachineGuardService) => {
    expect(service).toBeTruthy();
  }));
});
