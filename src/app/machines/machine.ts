import { EventData } from './event/event-data.model';

export interface IMachineData {
  data: IMachine;
}

export interface IMachine {
  status: string;
  machine_type: string;
  longitude: string;
  latitude: string;
  last_maintenance: string;
  install_date: string;
  id: string;
  floor: number;
}

export interface IMachineDetailData {
  data: IMachineDetailData;
}

export interface IMachineDetail {
  status: string;
  machine_type: string;
  longitude: number;
  latitude: number;
  last_maintenance: string;
  install_date: string;
  id: string;
  floor: number;
  events: EventData[];
}

export interface IMachineEvent {
  machine_id: string;
  id: string;
  timestamp: string;
  status: string;
}

