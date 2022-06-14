import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FetchUserOprions } from 'src/app/models/fetchUsersOprions.model';
import { User } from 'src/app/models/user.model';
import { RandomUserService } from 'src/app/services/random-user.service';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-user-chart-container',
  templateUrl: './user-chart-container.component.html',
  styleUrls: ['./user-chart-container.component.scss']
})
export class UserChartContainerComponent implements OnChanges {
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
  }


}
