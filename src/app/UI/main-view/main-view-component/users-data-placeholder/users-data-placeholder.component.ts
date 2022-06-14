import { Component, OnInit } from '@angular/core';
import { Genders } from 'src/app/enums/genders.enum';
import { Nationalities } from 'src/app/enums/nationalities.enum';
import { FetchUserOprions } from 'src/app/models/fetchUsersOprions.model';

@Component({
  selector: 'app-users-data-placeholder',
  templateUrl: './users-data-placeholder.component.html',
  styleUrls: ['./users-data-placeholder.component.scss']
})
export class UsersDataPlaceholderComponent implements OnInit {
  fetchUsersOprions: FetchUserOprions = { numberOfUsers: "30", natoinality: Nationalities.FR, gender: Genders.MALE }
  constructor() { }

  ngOnInit(): void {
  }

}
