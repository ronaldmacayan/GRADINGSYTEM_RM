import { Component } from '@angular/core';
import { UsersCardData } from 'src/app/data/shared-data';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  usersCardData = UsersCardData

}
