import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineListComponent } from './machine-list.component';
import {RouterTestingModule} from '@angular/router/testing';
import {SharedModule} from '../shared/shared.module';
import {MachineService} from './machine.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
describe('MachineListComponent', () => {
  let component: MachineListComponent;
  let fixture: ComponentFixture<MachineListComponent>;
  let machineService: MachineService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [MachineService,
        HttpClient,
        HttpHandler
      ],
      imports: [
        RouterTestingModule,
        SharedModule
      ],
      declarations: [
        MachineListComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    machineService = TestBed.get(MachineService);
  });

  it('Machine List component should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should create an machineService instance', () => {
    expect(machineService).toBeDefined();
  });
});
