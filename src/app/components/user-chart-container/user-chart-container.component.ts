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
  @Input() fetchData!: boolean | null;
  usersAgeCount$!: Observable<number[]>

  constructor(private userService: RandomUserService) { }


  ngOnChanges(changes: SimpleChanges): void {
    if (this.fetchUsersOprions && this.fetchData) this.usersAgeCount$ = this.userService.fetchUsers(this.fetchUsersOprions)
      .pipe(map(data => {
        if (!data.results) throw new Error('No results from Users API')
        return data.results
      }))
      .pipe(
        map(this.groupUsersAge)
      )
  }

  groupUsersAge(usersList: User[]): number[] {
    let count20 = [];
    let count2130 = [];
    let count3140 = [];
    let count4150 = [];
    let count5160 = [];
    let count61plus = [];
    usersList.forEach(user => {
      if (!user.dob?.age) return;
      if (user.dob?.age <= 20) count20.push(user);
      if (user.dob?.age > 21 && user.dob?.age < 30) count2130.push(user);
      if (user.dob?.age > 31 && user.dob?.age < 40) count3140.push(user);
      if (user.dob?.age > 41 && user.dob?.age < 50) count4150.push(user);
      if (user.dob?.age > 51 && user.dob?.age < 60) count5160.push(user);
      if (user.dob?.age < 61) count61plus.push(user);
    })

    return [count20.length, count2130.length, count3140.length, count4150.length, count5160.length, count61plus.length]
  }


}
