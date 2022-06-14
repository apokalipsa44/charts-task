import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { orderBy } from 'lodash';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { FetchUserOprions } from 'src/app/models/fetchUsersOprions.model';
import { User } from 'src/app/models/user.model';
import { RandomUserService } from 'src/app/services/random-user.service';

@Component({
  selector: 'app-users-table-container',
  templateUrl: './users-table-container.component.html',
  styleUrls: ['./users-table-container.component.scss']
})
export class UsersTableContainerComponent implements OnChanges {
  @Input() fetchUsersOprions!: FetchUserOprions | null;
  users$!: Observable<User[]>

  constructor(private userService: RandomUserService) { }


  ngOnChanges(changes: SimpleChanges): void {
    console.log('this.fetchUsersOprions: ', this.fetchUsersOprions);
    if (this.fetchUsersOprions) this.users$ = this.userService.fetchUsers(this.fetchUsersOprions)
      .pipe(map(data => {
        if (!data.results) throw new Error('No results from Users API')
        return data.results
      }))
      .pipe(map(users=>orderBy(users, ['dob.age'], ['desc']).slice(0,10)))
  }
}
