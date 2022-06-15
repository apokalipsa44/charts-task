import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-chart',
  templateUrl: './user-chart.component.html',
  styleUrls: ['./user-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserChartComponent implements OnChanges {
  @Input() usersAgeCount!: number[] | null;

  salesData: ChartData<'line'> = {
    labels: ['<20', '21-30', '31-40', '41-50', '51-60', '61+'],
    datasets: [
      { label: 'Users age', data: [], tension: 0.5 },

    ],
  };
  chartOptions: ChartOptions = {
    responsive: false,
    maintainAspectRatio: true,
  };

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.usersAgeCount) {
      console.log(this.usersAgeCount)
      this.salesData = {
        labels: ['<20', '21-30', '31-40', '41-50', '51-60', '61+'],
        datasets: [
          { label: 'Users age', data: [...this.usersAgeCount], tension: 0.5 },

        ],
      };
    }
  }

  ngOnInit(): void {
  }

}
