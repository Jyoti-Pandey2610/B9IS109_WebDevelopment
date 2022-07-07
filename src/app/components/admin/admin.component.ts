import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { Patient } from 'src/app/model/patient.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public patients: Patient[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.retriveData()
  }

  addPatient() {
    console.log("Calling !!");
    let patient = new Patient('', '', '', 0, true);
    this.patients.push(patient);
  }

  editPatient(patient: any) {
    patient.isEditable = true;
  }

  async savePatient(patient: any) {
    if(patient.id == '') {
      console.log("Hello");
      this.userService.createUser(patient).subscribe(
        response => {
          patient.isEditable = false;
          location.reload();
        },
        error => {
          console.log(error);
        }
      );
    } else {
      console.log("Hello");
      this.userService.saveUser(patient).subscribe(
        response => {
          patient.isEditable = false;
          location.reload();
        },
        error => {
          console.log(error);
        }
      );
    }
    
  }

  deletePatient(patient: any) {
    
    this.userService.deleteUser(patient).subscribe(
      response => {
        location.reload()
      },
      error => {
        console.log(error)
      }
    )
  }

  retriveData() {
    this.userService.getAllPatients().subscribe(
      response => {
        let res = JSON.parse(JSON.stringify(response))
        console.log(res)
        for (let item of res) {
          let patient = new Patient(item.id, item.name, item.city, item.number, false);
          this.patients.push(patient)
        }
      },
      error => {
        console.log(error)
      }
    );
  }

}
