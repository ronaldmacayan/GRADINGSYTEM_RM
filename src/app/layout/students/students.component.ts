import { Component } from '@angular/core';
import { StudentsCardData } from 'src/app/data/shared-data';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {

  studentCardData = StudentsCardData

}
