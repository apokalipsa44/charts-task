import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-chart',
  templateUrl: './user-chart.component.html',
  styleUrls: ['./user-chart.component.scss']
})
export class UserChartComponent implements OnChanges {
  @Input() usersList!: User[] | null;
  constructor() { }


  ngOnChanges(changes: SimpleChanges): void {
    if (this.usersList) console.log(this.usersList)
  }

  ngOnInit(): void {
  }

}
