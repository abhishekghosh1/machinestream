import { Component, OnInit } from '@angular/core';

import {IMachine, IMachineEvent} from './machine';
import { MachineService } from './machine.service';
import {Socket} from 'phoenix-socket';

@Component({
  templateUrl: './machine-list.component.template.html'
})
export class MachineListComponent implements OnInit {
  private _websocketLink = 'ws://machinestream.herokuapp.com/api/v1/events';
  pageTitle: string = 'Machine List';
  errorMessage: string;

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredMachines = this.listFilter ? this.performFilter(this.listFilter) : this.machines;
  }

  filteredMachines: IMachine[];
  machines: IMachine[] = [];

  constructor(private _productService: MachineService) {

  }

  performFilter(filterBy: string): IMachine[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.machines.filter((machine: IMachine) =>
      machine.machine_type.toLocaleLowerCase().indexOf(filterBy) !== -1 || machine.id.toLocaleLowerCase().indexOf(filterBy) !== -1
      || machine.status.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }

  ngOnInit(): void {
    this._productService.getMachine()
      .subscribe(products => {
          this.machines = products;
          this.filteredMachines = this.machines;
        },
        error => this.errorMessage = <any>error);
    this.subscribeChannel();
  }

  private subscribeChannel() {
    // Open Socket connection
    const socket = new Socket(this._websocketLink);
    socket.connect();
    // Join correct channel and log events
    const channel = socket.channel('events', {});
    channel.join();
    channel.on('new', event => {
      try {
        const machineEvent: IMachineEvent = JSON.parse(event.data);
        const machedMachine: IMachine = this.machines.find(machine => {
          return machine.id.toLocaleLowerCase().indexOf(machineEvent.id) !== -1;
        });
        if (machedMachine !== null) {
          machedMachine.status = machineEvent.status;
          this.machines = this.machines.filter((machine: IMachine) => machine.id !== machineEvent.id);
          this.machines.push(machedMachine);
        }
      } catch (e) {
        console.log('error: ', e);
      }
      console.log(event);
    });
  }

}
