import { TestBed, inject } from '@angular/core/testing';

import { MachineGuardService } from './machine-guard.service';
import {Router} from '@angular/router';

const mockRouter = {
  navigate: jasmine.createSpy('navigate')
};

describe('MachineGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MachineGuardService,
        {
          provide : Router, useValue : mockRouter
        }
      ]
    });
  });

  it('MachineGuardService should be created', inject([MachineGuardService], (service: MachineGuardService) => {
    expect(service).toBeTruthy();
  }));
});
