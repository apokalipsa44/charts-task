import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnChanges {
  @Input() usersList!: User[] | null;
  dataSource!: User[];
  displayedColumns: string[] = ['firstName', 'lastName', 'age', 'nationality', 'gender', 'emali'];
  constructor() { }


  ngOnChanges(changes: SimpleChanges): void {
    if (this.usersList) this.dataSource = this.usersList
  }

  ngOnInit(): void {
  }

}
