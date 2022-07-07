import { Injectable } from '@angular/core';
import { WebService } from './web.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private webService: WebService) { }

  saveUser(patient: any) {
    return this.webService.put('/api/patients', patient);
  }

  createUser(patient: any) {
    return this.webService.post('/api/patients', patient);
  }

  deleteUser(patient: any) {
    return this.webService.delete(`/api/patient/${patient.id}`);
  }

  getAllPatients() {
    return this.webService.get('/api/patients')
  }
}