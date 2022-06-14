import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Genders } from 'src/app/enums/genders.enum';
import { Nationalities } from 'src/app/enums/nationalities.enum';
import { FetchUserOprions } from 'src/app/models/fetchUsersOprions.model';
import { RandomUserService } from 'src/app/services/random-user.service';

@Component({
  selector: 'app-users-data-placeholder',
  templateUrl: './users-data-placeholder.component.html',
  styleUrls: ['./users-data-placeholder.component.scss']
})
export class UsersDataPlaceholderComponent implements OnInit {
  // powinien być zasilany danymi z API https://randomuser.me/ (należy pobrać 1000
  // rekordów zawierających informacje o mężczyznach narodowości francuskiej)
  fetchUsersOprionsChart: FetchUserOprions = { numberOfUsers: "30", natoinality: Nationalities.FR, gender: Genders.MALE }

  // zawierająca podstawowe informacje o 10-ciu najstarszych mężczyznach
  // --> nie było nic o narodowości wiec dwa osobne calle
  fetchUsersOprionsTable: FetchUserOprions = { numberOfUsers: "50", gender: Genders.MALE }

  fetchUsersBtnClicked$!: Observable<boolean>

  constructor(private userService: RandomUserService) { }

  ngOnInit(): void {
    this.fetchUsersBtnClicked$ = this.userService.fetchDataBtnEvent$
  }

}
