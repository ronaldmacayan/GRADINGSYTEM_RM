import { Component } from '@angular/core';
import { TeachersCardData } from 'src/app/data/shared-data';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent {

  teachersCardData = TeachersCardData

}
